---
title: 异步方法调用模式
index: false
icon: laptop-code
category:
  - 设计模式
---

## 概述

异步方法调用(asynchronous method invocation)是一种模式，在等待任务结果时，调用线程不会被阻塞。该模式提供多个独立任务的并行处理，并通过回调或等待所有工作完成来检索结果。