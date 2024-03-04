---
title: 分区(Sharding)模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

Sharding模式意味着将数据存储划分为水平分区或碎片。每个shard都有相同的模式，但拥有自己不同的数据子集。
shard本身就是一个数据存储（它可以包含许多不同类型实体的数据），在充当存储节点的服务器上运行。