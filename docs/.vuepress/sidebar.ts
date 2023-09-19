import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "设计模式",
      icon: "laptop-code",
      prefix: "design/",
      link: "design/",
      children: "structure",
    },
    {
      text: "思想",
      icon: "book",
      prefix: "mind/",
      children: "structure",
    },
    // "slides",
  ],
});
