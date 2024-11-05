// @ts-ignore
import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";
import { watermarkPlugin } from '@vuepress/plugin-watermark'
// @ts-ignore
const __dirname = getDirname(import.meta.url);
// import { searchProPlugin } from 'vuepress-plugin-search-pro';
import { socialSharePlugin } from 'vuepress-plugin-social-share'

export default defineUserConfig({
  base: "/",

  title: "UJava",
  // title: "UJava【Java学习 + Java面试】",
  description:
      " 【Java学习 + Java面试】首选UJava！  ",
  lang: "zh-CN",

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "ujava" }],
    ["meta", { name: "baidu-site-verification", content: "codeva-wnNGUni4cx" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
            "Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d44ac18afe199d84cbb99448b4b9baec";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
    ],
  ],
  bundler: viteBundler(),
  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    "@theme-hope/components/NormalPage": path.resolve(
        __dirname,
        "./components/NormalPage.vue",
    ),
    // 你可以在这里将别名定向到自己的组件
    // "@theme-hope/components/CommonWrapper": path.resolve(
    //     __dirname,
    //     "./components/CommonWrapper.vue",
    // ),
  },

  plugins: [
    socialSharePlugin({
      networks: ['qrcode', 'wechat', 'qq', 'weibo'],
    }),
    watermarkPlugin({
      // options
      enabled: true,
      watermarkOptions: {
        content: 'UJava.cn',
      },

    }),


  ],

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,
});
