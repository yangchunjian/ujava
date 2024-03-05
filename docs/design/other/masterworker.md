---
title: 主从模式
icon: laptop-code
category:
  - 设计模式
tag:
  - 设计模式
---

## 概述

当手头的问题可以通过划分为多个部分来解决时，可以使用Master Worker模式，这些部分需要经过相同的计算，并且可能需要聚合才能得到最终结果。并行处理是使用一个由一个主机和一些工人组成的系统来执行的，其中主机在工人之间分配工作，从他们那里得到结果，并同化所有结果以给出最终结果。唯一的通信是在主机和工作程序之间——没有工作程序在彼此之间通信，用户只与主机通信以完成所需的工作。