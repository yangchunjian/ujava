import { sidebar } from "vuepress-theme-hope";

import { author } from "./author.js";

export default sidebar({
  // 应该把更精确的路径放置在前边

  "/author/": author,
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
      text: "设计思想",
      icon: "star",
      collapsible: true,
      prefix: "mind/",
      children: [
          "first",
          "second",
          "third",
      ],
    },
    {
      text: "设计原理",
      icon: "star",
      collapsible: true,
      prefix: "principle/",
      children: [
          "first",
          "second",
          "third",
          "four",
          "five",
      ],
    },
    {
      text: "设计模式",
      icon: "star",
      collapsible: true,
      prefix: "design/",
      children: [
        {
          text: "创建型",
          prefix: "create/",
          icon: "star",
          children: [
            "singleton",
            "prototype",
            "factory",
            "abstractfactory",
            "builder",
            "proxy",
          ],
        },
        {
          text: "结构型",
          prefix: "structure/",
          icon: "star",
          children: [
            "adapter",
            "bridge",
            "composite",
            "decorator",
            "facade",
            "flyweight",
          ],
        },
        {
          text: "行为型",
          prefix: "action/",
          icon: "star",
          children: [
            "command",
            "interpreter",
            "iterator",
            "mediator",
            "memento",
            "observer",
            "responsibility",
            "state",
            "strategy",
            "template",
            "visitor",
          ],
        },
        {
          text: "其他型",
          prefix: "other/",
          icon: "star",
          children: [
            "filter",
            "nullobject",
          ],
        }
      ],
    },
    {
      text: "设计规范",
      icon: "star",
      collapsible: true,
      prefix: "standard/",
      children: [
        "code",
        "exception",
        "unit",
        "security",
        "database",
        "project",
        "design",
        "noun",
        "errorcode",
      ],
    },
    {
      text: "设计实践",
      icon: "star",
      collapsible: true,
      prefix: "practice/",
      children: [
        "mvc",
        "mvvm",
        "ddd",
        "responsive",
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
