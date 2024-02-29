// @ts-ignore
import {sidebar} from "vuepress-theme-hope";

import {author} from "./author.js";

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
            children: ["faq", "history"],
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
                "four",
            ],
        },
        {
            text: "设计原理",
            icon: "star",
            collapsible: true,
            prefix: "principle/",
            children: "structure",
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
                    children: "structure",
                },
                {
                    text: "结构型",
                    prefix: "structure/",
                    icon: "star",
                    children: "structure",
                },
                {
                    text: "行为型",
                    prefix: "action/",
                    icon: "star",
                    children: "structure",
                },
                {
                    text: "其他型",
                    prefix: "other/",
                    icon: "star",
                    children: "structure",
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
            text: "设计框架",
            icon: "star",
            collapsible: true,
            prefix: "framework/",
            children: "structure",
        },
        {
            text: "设计高频",
            icon: "star",
            collapsible: true,
            prefix: "highfreq/",
            children: "structure",
        },
        {
            text: "设计算法",
            icon: "star",
            collapsible: true,
            prefix: "algorithm/",
            children: "structure",
        },
        {
            text: "设计Java",
            icon: "star",
            collapsible: true,
            prefix: "java/",
            children: "structure",
        }
    ],
});
