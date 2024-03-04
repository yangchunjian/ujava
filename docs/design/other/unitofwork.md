---
title: 工作单元(Unit Of Work)模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

当业务事务完成时，所有更新都作为一个大的工作单元发送
一次性持久化，以最大限度地减少数据库往返。