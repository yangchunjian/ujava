---
title: 序列化实体模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

序列化实体模式。
序列化实体模式使我们能够轻松地将Java对象持久化到数据库中。它使用Serializable接口和DAO模式。序列化实体模式将首先使用Serializable将Java对象转换为一组字节，然后使用DAO模式将这组字节作为BLOB存储到数据库中。