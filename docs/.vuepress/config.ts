import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ujava",
  description: "ujava工具",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
