---
title: 读者容错(Tolerant Reader)模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

Tolerant Reader是一种集成模式，有助于创建健壮的通信系统。这个想法
是在从另一个服务读取数据时尽可能宽容。这样，当
交流模式发生变化，读者一定不能断。
