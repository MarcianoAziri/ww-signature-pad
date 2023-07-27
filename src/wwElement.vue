<template>
  <div class="my-element">
    <wwElement v-bind="content.labelComponent" :ww-props="{text: 'Label'}" />
    <div id="signature-wrapper" class="wrapper" :style="borderColor">
      <canvas id="signature-pad" width="400" height="200"></canvas>
      <div class="clear-btn">
        <button type="button" id="clear" :style="clearButton"><span> Clear </span></button>
      </div>
    </div>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad';
  export default {
    props: {
      content: { type: Object, required: true },
      uid: { type: String, required: true },
    },
    emits: ['trigger-event'],
    methods: {
      onChangeValue(dataURI) {
        console.log(dataURI);
      }
    },
    mounted() {
      let canvas = wwLib.getFrontDocument().querySelector('#signature-pad');
      let clearButton = wwLib.getFrontDocument().querySelector('#clear');
      let inputValue = wwLib.getFrontDocument().querySelector('#dataURI');
      let signaturePad = new SignaturePad(canvas, {
        backgroundColor: this.content.backgroundColor,
        penColor: this.content.penColor
      });
       clearButton.addEventListener('click', function() {
        signaturePad.clear();
      });
      signaturePad.addEventListener("endStroke", () => {
        let dataURI = signaturePad.toDataURL();
        this.$emit('trigger-event', { name: 'change', event: { dataURI }});
      });
    },
    computed: { 
      borderColor() {
        return {
          border: '1px solid ' + this.content.borderColor,
          background: this.content.backgroundColor
        }
      },
      clearButton() {
        return {
          background: this.content.borderColor
        }
      },
      backgroundColor() {
        return {
          background: this.content.backgroundColor
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
.my-element {
  box-sizing: border-box;
}
  .wrapper {
    border-radius: 8px;
    position: relative;
    width: 402px;
    overflow: hidden;
  }
  .clear-btn {
  	position: absolute;
    right: 5px;
    bottom: 5px;
  }
  canvas#signature-pad {
    cursor: crosshair;
    width: 400px;
  }
  button#clear {
    height: 100%;
    border: 1px solid transparent;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    padding: 4px 8px;
  }
  button#clear span {
    display: block;
  }
</style>
