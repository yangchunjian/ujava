import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "快速上手", icon: "star", link: "/required/" },
  { text: "设计模式", icon: "star", link: "/design/" },
  {
    text: "网站相关",
    icon: "star",
    children: [
      { text: "关于作者", icon: "star", link: "/author/" },
      {
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
]);
