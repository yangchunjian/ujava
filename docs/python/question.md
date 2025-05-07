---
title: 默认值
icon: laptop-code
category:
- 设计模型
tag:
- 模型
---


#  python 没有key时不报异常怎么设置

在Python中，当你尝试从一个字典中获取一个不存在的键时，默认情况下会抛出一个`KeyError`异常。如果你希望在键不存在时不抛出异常，你有几种不同的方法可以实现这一点：

### 1. 使用`get()`方法

这是最简单也是最常用的方法。`get()`方法允许你指定一个默认值，如果键不存在，将返回这个默认值，而不是抛出异常。

```python
my_dict = {'a': 1, 'b': 2}
value = my_dict.get('c', '默认值')  # 如果'c'不存在，返回'默认值'
print(value)  # 输出：默认值

```

### 2. 使用字典的`setdefault()`方法

`setdefault()`方法也可以用于在字典中添加一个新的键值对，如果键不存在的话。它同样可以接受一个默认值。

```python
my_dict = {'a': 1, 'b': 2}
value = my_dict.setdefault('c', '默认值')  # 如果'c'不存在，则添加'c': '默认值'
print(value)  # 输出：默认值
```

### 3. 使用异常处理

虽然这不是推荐的方法（因为它会降低代码的性能），但你可以使用`try-except`语句来捕获`KeyError`异常。

```python
my_dict = {'a': 1, 'b': 2}
try:
    value = my_dict['c']
except KeyError:
    value = '默认值'
print(value)  # 输出：默认值
```

### 4. 使用字典推导式和条件表达式（Python 3.8+）

从Python 3.8开始，你可以使用`|`运算符和字典推导式结合条件表达式来提供一个默认值。

```python
my_dict = {'a': 1, 'b': 2}
value = (my_dict | {'c': '默认值'})['c']  # 使用字典合并和条件访问
print(value)  # 输出：默认值
```

### 5. 使用`collections.defaultdict`

如果你经常需要从字典中获取不存在的键，并且想要避免每次都进行错误处理，可以考虑使用`collections.defaultdict`。这个类在初始化时接受一个默认的工厂函数，当尝试访问一个不存在的键时，会自动创建一个新的键，并使用工厂函数返回的默认值。

```python
from collections import defaultdict
 
my_dict = defaultdict(lambda: '默认值')  # 指定一个lambda函数作为默认工厂
my_dict['a'] = 1
my_dict['b'] = 2
print(my_dict['c'])  # 输出：默认值

```

以上方法都可以帮助你在Python中优雅地处理字典键不存在的情况。选择哪种方法取决于你的具体需求和偏好。通常，使用`get()`方法是最简单和最直接的。
