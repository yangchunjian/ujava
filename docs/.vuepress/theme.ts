// @ts-ignore
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";
// @ts-ignore
import { componentsPlugin } from "vuepress-plugin-components";
// @ts-ignore
import { getDirname, path } from "vuepress/utils";
// @ts-ignore
const __dirname = getDirname(import.meta.url);


export default hopeTheme({
  hostname: "https://ujava.cn",

  author: {
    name: "UJava",
    url: "https://ujava.cn/article/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo/logo.svg",
  favicon: "/favicon.ico",
  // repo: "yangchunjian/ujava",
  lastUpdated: false,
  contributors: false,
  docsDir: "docs",
  // 纯净模式：https://theme-hope.vuejs.press/zh/guide/interface/pure.html
  pure: true,
  breadcrumb: false,

  // navbar
  navbar,

  // sidebar
  sidebar,
  footer: "",
  fullscreen: true,
  displayFooter: true,
  encrypt: {
    config: {
      "/encrypt/": ["654321"],
      "/author/author1.html": ["654321"],
    },
  },

  // page meta
  // metaLocales: {
  //   editLink: "编辑此页",
  // },
  pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],

  blog: {
    intro: "/author/",
    sidebarDisplay: "mobile",
    medias: {
      Github: "https://github.com/yangchunjian",
      Gitee: "https://gitee.com/yangchunjian",
      Wechat: "https://www.yjava.cn/imgs/dearlocation.jpeg",
      Rss: "https://ujava.cn/rss.xml",
    },
  },
  plugins: {
    components: {

      rootComponents: {
        // https://plugin-components.vuejs.press/zh/guide/utilities/notice.html#%E7%94%A8%E6%B3%95
        // notice: [
        //   {
        //     path: "/",
        //     title: "公众号",
        //     showOnce: false,
        //     content:
        //         "<img style='width: 100%' src=\"https://ujava.cn/logo/gzh.png\"/>",
        //     actions: [
        //       // {
        //       //   text: "开始阅读",
        //       //   link: "/home.html",
        //       //   type: "primary",
        //       // },
        //     ],
        //   },
        // ],
      },
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "PDF",
        "Share",
        "VPBanner",
        "VPCard",
      ],

      componentOptions: {
        // share: {
        //   services: componentsPlugin,
        // },
      },

    },
    blog: true,
    copyright: {
      author: "UJava",
      // license: "MIT",
      // triggerLength: 100,
      // maxLength: 700,
      canonical: "https://ujava.cn/",
      global: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    markdownTab: {
      codeTabs: true,
      tabs: true
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,
      vuePlayground: true,
      include: {
        resolvePath: (file, cwd) => {
          if (file.startsWith("@"))
            return path.resolve(
                __dirname,
                "../snippets",
                file.replace("@", "./"),
            );

          return path.resolve(cwd, file);
        },
      },
      tasklist: true,
    },
    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
    },
  },
},{custom: true});
