---
title: 内在价值模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

许多小对象在 OO 系统中有意义，但在数据库中没有意义。示例包括货币感知货币对象（金额、货币）和日期范围。尽管默认的想法是将对象保存为表格，但任何理智的人都不会想要货币值表。
嵌入值将对象的值映射到对象所有者记录中的字段。


