---
title: 算法分类
icon: laptop-code
category:
  - 设计算法
tag:
  - 算法
---

## 1、递归与分治

1.1 递归算法：直接或者间接不断反复调用自身来达到解决问题的方法。这就要求原始问题可以分解成相同问题的子问题。

示例：阶乘、斐波纳契数列、汉诺塔问题

斐波纳契数列：又称黄金分割数列，指的是这样一个数列：1、1、2、3、5、8、13、21、……在数学上，斐波纳契数列以如下被以递归的方法定义：F1=1,F2=1,Fn=F（n-1）+F（n-2）（n>
2,n∈N*））。

1.2 分治算法：待解决复杂的问题能够简化为几个若干个小规模相同的问题，然后逐步划分，达到易于解决的程度。

* 1、将原问题分解为n个规模较小的子问题，各子问题间独立存在，并且与原问题形式相同
* 2、递归的解决各个子问题
* 3、将各个子问题的解合并得到原问题的解

示例：棋盘覆盖、找出伪币、求最值

棋盘覆盖：在一个(2^k)*(2^k)个方格组成的棋盘上，有一个特殊方格与其他方格不同，称为特殊方格，称这样的棋盘为一个特殊棋盘。要求对棋盘的其余部分用L型方块填满

## 2、动态规划

动态规划与分治法相似，都是组合子问题的解来解决原问题的解，与分治法的不同在于：分治法的子问题是相互独立存在的，而动态规划应用于子问题重叠的情况。

动态规划方法通常用来求解最优化问题，这类问题可以有很多可行解，每个解都有一个值，找到具有最优值的解称为问题的一个最优解，而不是最优解，可能有多个解都达到最优值。

设计动态规划算法的步骤：

* 1、刻画一个最优解的结构特征
* 2、递归地定义最优解的值
* 3、计算最优解的值，通常采用自底向上的方法
* 4、利用算出的信息构造一个最优解

示例：0-1背包问题，钢条切割问题等。

## 3、贪心算法

贪心算法是就问题而言，选择当下最好的选择，而不从整体最优考虑，通过局部最优希望导致全局最优。

贪心算法的要素

* 1）贪心选择性质：可以通过局部最优选择来构造全局最优解。换言之，直接做出在当前问题中看来最优的选择，而不必考虑子问题的解。
* 2）最优子结构：一个问题的最优解包含其子问题的最优解。

贪心算法的设计步骤：

* 1）将最优化问题转换为这样的形式：对其做出一次选择后，只剩下一个子问题需要求解
* 2）证明做出贪心选择后，原问题总是存在最优解，即贪心选择总是安全的
* 3）证明做出贪心选择后，剩余的子问题满足性质：其最优解与贪心选择组合即可得到原问题的最优解，这样就得到了最优子结构。

示例：0-1背包问题，均分纸牌，最大整数

## 4、回溯法

回溯法是一种搜索算法，从根节点出发，按照深度优先（DFS）搜索的策略进行搜索，到达某一节点后
，探索该节点是否包含该问题的解，如果包含则进入下一个节点进行搜索，若是不包含则回溯到父节点选择其他支路进行搜索。

回溯法的设计步骤：

* 1）针对所给的原问题，定义问题的解空间
* 2）确定易于搜索的解空间结构
* 3）以深度优先方式搜索解空间，并在搜索过程中用剪枝函数除去无效搜索。

示例：0-1背包问题、旅行商问题、八皇后问题

## 5、分支限界法

和回溯法相似，也是一种搜索算法（广度遍历再深度遍历），但回溯法是找出问题的许多解，而分支限界法是找出原问题的一个解。或是在满足约束条件的解中找出使某一目标函数值达到极大或极小的解，即在某种意义下的最优解

在当前节点（扩展节点）处，先生成其所有的儿子节点（分支），然后再从当前的活节点（当前节点的子节点）表中选择下一个扩展节点。为了有效地选择下一个扩展节点，加速搜索的进程，在每一个活节点处，计算一个函数值（限界），并根据函数值，从当前活节点表中选择一个最有利的节点作为扩展节点，使搜索朝着解空间上有最优解的分支推进，以便尽快地找出一个最优解。

分支限界法：

* 1）FIFO分支限界法
* 2）优先队列分支限界法：按照优先队列中规定的优先级选取优先级最高的节点成为当前扩展节点。

示例：装载问题，旅行售货员问题
