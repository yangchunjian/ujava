// @ts-ignore
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://ujava.cn",

  author: {
    name: "ujava",
    url: "https://ujava.cn",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "yangchunjian/ujava",

  docsDir: "docs",

  // navbar
  navbar,

  // sidebar
  sidebar,
  footer: "",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  blog: {
    intro: "/author/",
    sidebarDisplay: "mobile",
    medias: {
      Github: "https://github.com/yangchunjian",
      Gitee: "https://gitee.com/yangchunjian",
      Wechat: "https://www.yjava.cn/imgs/dearlocation.jpeg",
    },
  },
  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },


    blog: true,
    copyright: {
      author: "UJava(ujava.cn)",
      license: "MIT",
      triggerLength: 100,
      maxLength: 700,
      canonical: "https://ujava.cn/",
      global: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
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
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
