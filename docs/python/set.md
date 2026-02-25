---
title: Python基础—集合
icon: laptop-code
category:
  - 设计Python
tag:
  - Python
---

Python中的集合是一种无序、可变、元素唯一的数据结构。它常用于去重、成员检测以及数学运算（如并集、交集、差集等）。集合与列表和元组的主要区别是它不允许重复元素，且没有顺序。

### 一. 集合的[基本操作]

#### 1. 创建集合

**使用大括号 `{}`** 来定义集合：

```python
my_set = {1, 2, 3, 4, 5}
print(my_set)  # 输出: {1, 2, 3, 4, 5}
```

**使用 `set()` 函数** 来创建集合，尤其当需要从其他数据类型（如列表或元组）转换时：

```python
my_list = [1, 2, 2, 3]
my_set = set(my_list)
print(my_set)  # 输出: {1, 2, 3}（去掉重复元素）

```

#### 2. 添加[集合元素]

**使用 `add()`** 向集合添加单个元素：

```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # 输出: {1, 2, 3, 4}
```

#### 3. 删除集合元素

**使用 `remove()`** 删除指定元素。如果元素不存在，会引发 `KeyError` 错误：

```python
my_set = {1, 2, 3, 4}
my_set.remove(3)
print(my_set)  # 输出: {1, 2, 4}
```

**使用 `discard()`** 删除指定元素。如果元素不存在，不会引发错误：

```python
my_set = {1, 2, 3, 4}
my_set.discard(5)  # 即使 5 不在集合中，也不会报错
print(my_set)  # 输出: {1, 2, 3, 4}
```

**使用 `pop()`** 从集合中随机删除并返回一个元素（集合是无序的，所以删除的元素是随机的）：

```python
my_set = {1, 2, 3, 4}
element = my_set.pop()
print(element)  # 输出删除的随机元素
print(my_set)  # 输出剩余的集合
```

#### 4. [清空集合]

**使用 `clear()`** 清空集合：

```python
my_set = {1, 2, 3, 4}
my_set.clear()
print(my_set)  # 输出: set()
```

### 二. 集合的数学运算

集合支持多种数学运算，像是并集、交集、差集和对称差集。

#### **1. 并集**

两个集合的并集包含所有元素（不重复）。 

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1 | set2  # 使用 | 运算符
print(union_set)  # 输出: {1, 2, 3, 4, 5}
```

#### **2. 交集**

两个集合的交集包含共同的元素。

```python
intersection_set = set1 & set2  # 使用 & 运算符
print(intersection_set)  # 输出: {3}
```

#### **3. 差集**

集合 A 的差集是 A 中有而 B 中没有的元素。

```python
difference_set = set1 - set2  # 使用 - 运算符
print(difference_set)  # 输出: {1, 2}
```

#### **4. 对称差集**

两个集合的对称差集是两个集合中不重复的元素。

```python
symmetric_difference_set = set1 ^ set2  # 使用 ^ 运算符
print(symmetric_difference_set)  # 输出: {1, 2, 4, 5}
```

### 三. 集合的常用方法

**`len()`**：返回集合中元素的数量。

```python
print(len(my_set))  # 输出: 4
```

**`in`**：检查元素是否在集合中。

```python
print(3 in my_set)  # 输出: Trueprint(5 in my_set)  # 输出: False
```

**`copy()`**：返回集合的一个副本。

```python
my_set_copy = my_set.copy()
print(my_set_copy)  # 输出: {1, 2, 3, 4}
```

### 四. 集合的使用场景

#### **1. 去重**

利用集合自动去除重复元素。

```python
my_list = [1, 2, 2, 3, 3, 4]
unique_elements = set(my_list)
print(unique_elements)  # 输出: {1, 2, 3, 4}
```

#### 2. **集合运算**

集合的并集、交集、差集等运算非常适合处理数学问题或者数据集合的合并与筛选。

#### **3. 成员检测**

通过集合进行快速的成员检测，因其采用哈希表结构，查找速度非常快。

```python
my_set = {1, 2, 3, 4}
if 3 in my_set:
    print("3 is in the set.")
```

**总结：**Python 中的集合是一个非常强大且灵活的数据结构，适用于很多场景，尤其是在需要处理独特元素、进行集合运算（如交集、并集、差集等）时非常有用。其无序、唯一、支持数学运算的特性，使得集合成为高效的数据处理工具。