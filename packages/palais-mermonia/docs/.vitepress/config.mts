import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import px2rem from "postcss-plugin-px2rem";
import postcssPresetEnv from "postcss-preset-env";
import AutoImport from "unplugin-auto-import/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import path from "path";
import legacy from "@vitejs/plugin-legacy";
import UnoCSS from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from "unocss";

const pathSrc = path.resolve(__dirname);
const rootPath = path.resolve(pathSrc, "..");
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": rootPath,
        "@image": path.resolve(__dirname, "public/image"),
        "@components": path.resolve(__dirname, "components"),
      },
    },
    ssr: { noExternal: ["@arco-design/web-vue"] },
    plugins: [
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        dirs: ["components"],
        include: [/\.vue$/, /\.md$/],
        resolvers: [ArcoResolver({ sideEffect: true })],
      }),
      legacy({
        targets: [
          "Android >= 39",
          "Chrome >= 50",
          "Safari >= 10.1",
          "iOS >= 10.3",
          "> 1%",
        ],
      }),
      UnoCSS({
        presets: [
          // @ts-ignore
          presetUno(),
          // @ts-ignore
          presetIcons({
            extraProperties: {
              display: "inline-block",
              "vertical-align": "middle",
            },
          }),
          // @ts-ignore
          presetAttributify(),
        ],
        // @ts-ignore
        transformers: [transformerDirectives()],
      }),
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
        ],
      },
    },
  },
  title: "FURINA",
  base: "/FURINA/",
  description: "Solo infini de solitude",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/FURINA/image/icon/FURINA_logo_rounded.svg",
      },
    ],
    [
      "link",
      {
        rel: "prefetch",
        href: "https://fonts.blue-archive.io/misans-webfont/misans-400-regular.min.css",
        as: "style",
        onload: "this.rel='stylesheet';this.onload=null;",
      },
    ],
    [
      "link",
      {
        rel: "prefetch",
        href: "https://fonts.blue-archive.io/misans-webfont/misans-600-semibold.min.css",
        as: "style",
        onload: "this.rel='stylesheet';this.onload=null;",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "使用", link: "/get-started/install" },
      { text: "文档", link: "/dev/structure" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/PalaisMermonia/FURINA" },
    ],

    sidebar: generateSidebar({
      documentRootPath: "/docs",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      // useFolderLinkFromIndexFile: false,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      capitalizeFirst: true,
      capitalizeEachWords: true,
      collapsed: true,
      collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // removePrefixAfterOrdering: false,
      // prefixSeparator: '.',
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFilesByFrontmatter: false,
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: true,
    }),
  },
});
