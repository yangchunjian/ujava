import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "uJava",
  description: "uJava工具",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
