---
title: 页面对象模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

Page 对象封装 UI，隐藏应用程序（通常是 Web 应用程序）的基础 UI 小组件，并提供特定于应用程序的 API，以允许操作测试所需的 UI
组件。这样一来，它允许测试类本身专注于测试逻辑。