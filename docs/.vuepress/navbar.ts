import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "快速上手", icon: "star", link: "/required/" },
  { text: "设计思想", icon: "star", link: "/mind/" },
  { text: "设计模式", icon: "star", link: "/design/" },
  {
    text: "项目相关",
    icon: "star",
    children: [
      { text: "项目介绍", icon: "star", link: "/home.html" },
      {
        text: "更新记录",
        icon: "star",
        link: "/project/changelog.html",
      },
      {
        text: "管理经验",
        icon: "star",
        link: "/manage/",
      },
    ],
  },
  {
    text: "网站相关",
    icon: "star",
    children: [
      { text: "关于作者", icon: "star", link: "/author/" },
      { text: "关于公告", icon: "star", link: "/notice/notice" },
      {
        text: "更新历史",
        // icon: "history",
        icon: "star",
        link: "/timeline/",
      },
    ],
  },
  {
    text: "应用相关",
    icon: "star",
    children: [
      { text: "公众号", icon: "star", link: "/app/wechat" },
      { text: "小程序", icon: "star", link: "/app/applet" },
      {
        text: "安装包",
        icon: "star",
        link: "/app/pack",
      }
    ],
  },
  {
    text: "游戏相关",
    icon: "star",
    children: [
      { text: "2048", icon: "star", link: "https://ujava.cn/2048" },
      {
        text: "吃豆人",
        icon: "star",
        link: "https://ujava.cn/pacman",
      },
      {
        text: "跳一跳",
        icon: "star",
        link: "https://ujava.cn/jump",
      },
    ],
  }
]);
