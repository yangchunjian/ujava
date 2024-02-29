---
title: 活动对象模式
index: false
icon: laptop-code
category:
- 设计模式
---

## 概述

活动对象模式(active object)有助于在不使用“同步”方法的情况下解决同步困难。活动对象将包含线程安全的数据结构（如 BlockingQueue），用于通过将方法的逻辑移动到调用器（通常是 Runnable）并将其存储在 DSA 中来同步方法调用。
