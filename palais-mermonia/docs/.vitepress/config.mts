import { HeadConfig, defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        prefix: ".",
        collapsed: false,
        titleFromFile: true,
      }),
    ],
  },
  title: "FURINA",
  base: "/FURINA/",
  description: "Solo infini de solitude",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [{ text: "Home", link: "/" }],

    socialLinks: [
      { icon: "github", link: "https://github.com/ba-archive/blue-archive" },
    ],
  },

  transformHead: () => {
    const head: HeadConfig[] = [];
    head.push([
      "link",
      {
        rel: "prefetch",
        href: "https://fonts.blue-archive.io/misans-webfont/misans-400-regular.min.css",
        as: "style",
        onload: "this.rel='stylesheet';this.onload=null;",
      },
    ]);
    head.push([
      "link",
      {
        rel: "prefetch",
        href: "https://fonts.blue-archive.io/misans-webfont/misans-600-semibold.min.css",
        as: "style",
        onload: "this.rel='stylesheet';this.onload=null;",
      },
    ]);

    return head;
  },
});
