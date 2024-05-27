import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

// @unocss-include

export default defineConfig({
  shortcuts: [],
  rules: [
    [
      /^view-transition-([\w-]+)$/,
      ([, name]: string[]) => ({ "view-transition-name": name }),
    ],
  ],
  theme: {
    colors: {
      primary: "#40c1ad",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
