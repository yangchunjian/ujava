import { sidebar } from "vuepress-theme-hope";

import { aboutTheAuthor } from "./about-the-author.js";

export default sidebar({
  // 应该把更精确的路径放置在前边

  "/auth/": aboutTheAuthor,
  // 必须放在最后面
  "/": [
    {
      text: "必读",
      icon: "star",
      collapsible: true,
      prefix: "required/",
      children: ["faq","history"],
    },
    {
      text: "设计模式",
      icon: "star",
      collapsible: true,
      prefix: "design/",
      children: [
        "adapter",
        "bridge",
        "visitor",
      ],
    },
    {
      text: "Java",
      icon: "star",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "star",
          children: [
            "01",
            "02",
            "03",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "why-there-only-value-passing-in-java",
              ],
            },
          ],
        },
      ],
    }
  ],
});