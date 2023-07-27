export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  triggerEvents: [
    { name: 'change', label: { en: 'On change' }, event: { dataURI: '' }, default: true }
  ],
  properties: {
    borderColor: {
      label: {
        en: "Border color",
      },
      type: "Color",
      defaultValue: "#FF0000",
    },
    penColor: {
      label: {
        en: "Pen color",
      },
      type: "Color",
      defaultValue: "#000000",
    },
    backgroundColor: {
      label: {
        en: "Background color",
      },
      type: "Color",
      defaultValue: "#FFFFFF",
    },
    labelComponent: {
      label: {
        en: "Label",
      },
      hidden: true,
      defaultValue: { isWwObject: true, type: 'ww-text' }
    }
  },
};
