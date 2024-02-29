---
title: 非循环访问者模式
index: false
icon: laptop-code
category:
  - 设计模式
---

## 概述

非循环访问者模式(acyclic visitor)允许将新函数添加到现有类层次结构中，而不会影响这些层次结构，并且不会通过使 Visitor 基类退化来创建 GoF(Gang
of Four) Visitor(访问者) 模式固有的依赖关系循环