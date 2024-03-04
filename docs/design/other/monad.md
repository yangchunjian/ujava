---
title: 单体(monad)模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述


基于线性代数的单子模式代表了将运算逐步链接在一起的方式。绑定函数可以描述为基于“相同类型”合约将一个人的输出传递给另一个人的输入。

从形式上讲，monad 由一个类型构造函数 M 和两个操作组成：
* bind - 将 monadic 对象和一个函数从普通对象转换为 monadic 值并返回 monadic value 
* return - 它接受普通类型对象并返回包装在 monadic 值中的此对象。