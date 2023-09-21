import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchProPlugin } from 'vuepress-plugin-search-pro';

export default defineUserConfig({

  dest: "./dist",

  title: "UJava【Java学习 + Java面试】",
  description:
      " 【Java学习 + Java面试】首选UJava！  ",
  lang: "zh-CN",

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "ujava" }],
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

  theme,

  plugins: [

    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter: (page) => page.frontmatter.category,
    //       formatter: "分类：$content",
    //     },
    //     {
    //       getter: (page) => page.frontmatter.tag,
    //       formatter: "标签：$content",
    //     },
    //   ],
    // }),
    // searchProPlugin({
    //   indexContent: true,
    //   indexOptions: {
    //     tokenize: (text, fieldName) =>
    //       fieldName === "id" ? [text] : cut(text, true),
    //   },
    //   customFields: [
    //     {
    //       getter: ({ frontmatter }) =>
    //         <string | undefined>frontmatter.category ?? null,
    //       formatter: "分类: $content",
    //     },
    //   ],
    //   suggestDelay: 60,
    // }),
  ],

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,
});
