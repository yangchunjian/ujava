---
title: 版本号模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

版本号模式有助于解决应用程序中的并发冲突。通常，当多个客户端试图同时更新同一记录时，这些冲突会出现在数据库操作中。解决此类冲突需要确定对象是否已更改。因此，我们需要一个版本号，该版本号随着底层数据（例如数据库）的每次更改而递增。存储库可以使用版本号来检查外部更改并向用户报告并发问题。