---
title: 字节码模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

字节码模式(bytecode pattern)
的目的是通过将数据编码为虚拟机的指令来为行为提供数据的灵活性。指令集定义了可以执行的低级操作。一系列指令被编码为字节序列。虚拟机一次执行一个指令，使用堆栈作为中间值。通过组合指令，可以定义复杂的高级行为。
当需要定义大量行为并且实现引擎不是一个好的选择时，应该使用此模式，因为它太低级别了，由于编译时间慢或其他工具问题，迭代它需要很长时间。它有太多的信任。如果要确保所定义的行为不会破坏游戏，则需要将其从代码库的其余部分沙盒化。
