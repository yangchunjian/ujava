---
title: flux模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

Flux避开MVC，转而支持单向数据流。当
用户与视图交互，视图通过中心传播动作
调度器，到保存应用程序数据和业务的各种存储
逻辑，更新所有受影响的视图。