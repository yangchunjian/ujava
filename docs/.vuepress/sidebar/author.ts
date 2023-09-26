import { arraySidebar } from "vuepress-theme-hope";

export const author = arraySidebar([
  {
    text: "简介",
    icon: "experience",
    collapsible: false,
    children: [
      "author0",
    ],
  },
  {
    text: "经历",
    icon: "chat",
    collapsible: false,
    children: [
      "author1",
    ],
  },
]);
