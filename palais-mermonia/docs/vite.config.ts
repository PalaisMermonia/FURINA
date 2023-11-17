// https://vitejs.dev/config/
import path from "path";
import px2rem from "postcss-plugin-px2rem";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vitepress";
import tailwindConfig from "../tailwind.config.js";
import AutoImport from "unplugin-auto-import/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import legacy from "@vitejs/plugin-legacy";

const pathSrc = path.resolve(__dirname);
console.log(pathSrc);

export default defineConfig({
  ssr: { noExternal: ["@arco-design/web-vue"] },
  resolve: {
    alias: {
      "@": pathSrc,
      "@image": path.resolve(__dirname, "public/image"),
      "@components": path.resolve(__dirname, "components"),
    },
  },
  plugins: [
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      dirs: ["components"],
      include: [/\.vue$/, /\.md$/],
      resolvers: [ArcoResolver({ sideEffect: true })],
    }),
    // legacy({
    //   targets: [
    //     "Android >= 39",
    //     "Chrome >= 50",
    //     "Safari >= 10.1",
    //     "iOS >= 10.3",
    //     "> 1%",
    //   ],
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        px2rem({
          rootValue: 16,
          propBlackList: ["font-size", "border", "border-width"],
          exclude: /(node_module)/,
        }),
        tailwindcss(tailwindConfig),
      ],
    },
  },
});
