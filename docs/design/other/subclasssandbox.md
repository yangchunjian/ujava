---
title: 子类沙盒模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

子类沙盒模式描述了一个基本思想，但没有很多详细的机制。当您有几个类似的子类时，您将需要该模式。如果你必须做一个微小的改变，那么就改变基类，而所有的子类都不应该被触及。因此基类必须能够提供派生类需要执行的所有操作。