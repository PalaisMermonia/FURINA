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

export function tokenize(text: string): Array<string> {
  // Firefox doesn't support Intl.Segmenter currently
  if (!("Segmenter" in Intl)) {
    // https://github.com/lucaong/minisearch/blob/c3101a31e57d609ef8c55352655235ba25376011/src/MiniSearch.ts#L2018
    const SPACE_OR_PUNCTUATION =
      /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;
    return text.split(SPACE_OR_PUNCTUATION);
  }

  // @ts-ignore: seems like Intl.Segmenter is not supported by the lang server
  const segmenter = new Intl.Segmenter("cn", { granularity: "word" });
  // @ts-ignore
  const segs = Array.from(segmenter.segment(text)).map(item => item.segment);
  const uniqueSegs = Array.from(new Set(segs));
  return uniqueSegs.filter(w => !/^\s+$/.test(w));
}

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
      // legacy({
      //   targets: [
      //     "Android >= 39",
      //     "Chrome >= 50",
      //     "Safari >= 10.1",
      //     "iOS >= 10.3",
      //     "> 1%",
      //   ],
      // }),
      UnoCSS({
        presets: [
          presetUno(),
          presetIcons({
            extraProperties: {
              display: "inline-block",
              "vertical-align": "middle",
            },
          }),
          presetAttributify(),
        ],
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
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
    }
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
        href: "https://fonts.blue-archive.io/harmonyos-sans-webfont/harmonyos-sans-sc-400.css",
        as: "style",
        onload: "this.rel='stylesheet';this.onload=null;",
      },
    ],
    [
      "link",
      {
        rel: "prefetch",
        href: "https://fonts.blue-archive.io/harmonyos-sans-webfont/harmonyos-sans-sc-700.css",
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

      options: {
        miniSearch: {
          options: {
            tokenize,
          },
        },
      },
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
      // rootGroupText: 'FURINA',
      // rootGroupLink: '/FURINA/',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: true,
    }),
  },
});
