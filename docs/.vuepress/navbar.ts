import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "面试指南", icon: "star", link: "/home.md" },
  { text: "设计模式", icon: "star", link: "/design/" },
  {
    text: "网站相关",
    icon: "about",
    children: [
      { text: "关于作者", icon: "zuozhe", link: "/author/" },
      {
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
]);
