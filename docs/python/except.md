---
title: Python异常
icon: laptop-code
category:
  - 设计Python
tag:
  - Python
---
内置异常，指预定义的[异常类]，当程序运行时遇到错误情况，就会抛出相应的异常。这些异常类构成了一个层次结构，`BaseException` 是所有[异常的]基类。

#### 1. 顶级异常类

- **`BaseException`**：所有异常的基类。通常不直接捕获这个异常，因为它会捕获像 `SystemExit`、`KeyboardInterrupt` 等控制流异常。
- **`Exception`**：大多数内置异常的基类，除了一些系统退出和中断相关的异常。在编写异常处理代码时，通常捕获 `Exception` 及其子类。

#### 2. 常见的具体异常类

##### 2.1 语法错误相关

- **`SyntaxError`**：当 Python 解释器遇到不符合 Python 语法规则的代码时抛出。

```python
# 错误示例：缺少冒号
if True
    print("True")
```

- **`IndentationError`**：是 `SyntaxError` 的子类，当代码的缩进不符合 Python 规则时抛出，例如混合使用制表符和空格进行缩进。

```python
# 错误示例：缩进不一致
if True:
    print("True")
  print("This line has incorrect indentation")
```

##### 2.2 名称错误相关

- **`NameError`**：当使用一个未定义的变量名时抛出。

```python
# 错误示例：使用未定义的变量
print(undefined_variable)
```

##### 2.3 类型错误相关

- **`TypeError`**：当操作或函数应用于不兼容类型的对象时抛出，例如对整数和字符串进行加法操作。

```python
# 错误示例：整数和字符串相加
result = 1 + "2"
```

- **`ValueError`**：当函数接收到正确类型但值不合适的参数时抛出，例如将一个非数字字符串转换为整数。

```python
# 错误示例：将非数字字符串转换为整数
num = int("abc")
```

##### 2.4 索引和键错误相关

- **`IndexError`**：当尝试访问序列（如列表、元组）中不存在的索引时抛出。

```python
# 错误示例：访问超出列表长度的索引
my_list = [1, 2, 3]
print(my_list[3])
```

- **`KeyError`**：当尝试访问字典中不存在的键时抛出。

```python
# 错误示例：访问字典中不存在的键
my_dict = {'a': 1, 'b': 2}
print(my_dict['c'])
```

##### 2.5 文件操作错误相关

- **`FileNotFoundError`**：当尝试打开一个不存在的文件时抛出。

```python
# 错误示例：打开不存在的文件
with open('nonexistent_file.txt', 'r') as f:
    pass
```

- **`PermissionError`**：当尝试对文件或目录进行操作，但没有足够的权限时抛出。

##### 2.6 算术错误相关

- **`ZeroDivisionError`**：当尝试用零作为除数进行除法运算时抛出。

```python
# 错误示例：除以零
result = 1 / 0
```

- **`OverflowError`**：当算术运算结果太大而无法表示时抛出。

#### 3. 异常处理

`try-except` 语句用于捕获和处理异常，能让你在出现异常时采取相应的措施，而不是让程序直接终止。

##### 基本语法

```python
try:
    # 可能会抛出异常的代码块
    # ...
except ExceptionType:
    # 当指定类型的异常发生时执行的代码块
    # ...
```

- `try` 块：包含可能会抛出异常的代码。Python 会尝试执行这个代码块中的所有语句。
- `except` 块：当 `try` 块中的代码抛出指定类型的异常时，程序流程会跳转到对应的 `except` 块中执行。`ExceptionType` 是要捕获的异常类型，如果不指定，会捕获所有继承自 `Exception` 类的异常。

##### 示例

```python
try:
    num = 1 / 0  # 这里会抛出 ZeroDivisionError 异常
except ZeroDivisionError:
    print("不能除以零！")
```

在这个例子中，`try` 块里的 `1 / 0` 会抛出 `ZeroDivisionError` 异常，由于 `except` 块指定了要捕获 `ZeroDivisionError` 异常，所以程序会执行 `except` 块中的代码，输出“不能除以零！”。

##### 捕获多种异常

可以使用多个 `except` 块来捕获不同类型的异常。

```python
try:
    num = int("abc")  # 这里会抛出 ValueError 异常
    result = 1 / num
except ValueError:
    print("输入的不是有效的数字！")
except ZeroDivisionError:
    print("不能除以零！")
```

在这个例子中，`try` 块里的 `int("abc")` 会抛出 `ValueError` 异常，程序会执行对应的 `except ValueError` 块中的代码，输出“输入的不是有效的数字！”。

##### 捕获多个异常类型在一个 except 块中

可以在一个 `except` 块中捕获多种不同类型的异常。

```python
try:
    num = int("abc")  # 可能抛出 ValueError
    result = 1 / num  # 可能抛出 ZeroDivisionError
except (ValueError, ZeroDivisionError):
    print("发生了值错误或除零错误！")
```

##### 获取异常信息

可以通过 `except` 块中的异常对象来获取具体的异常信息。

```python
try:
    num = int("abc")
except ValueError as e:
    print(f"发生了值错误: {e}")
```

在这个例子中，`as e` 将捕获到的 `ValueError` 异常对象赋值给变量 `e`，通过 `e` 可以获取异常的详细信息并打印出来。

##### else 子句

`try-except` 语句可以有一个可选的 `else` 子句，当 `try` 块中没有抛出任何异常时，会执行 `else` 块中的代码。

```python
try:
    num = int("123")
except ValueError:
    print("输入的不是有效的数字！")
else:
    print(f"转换后的数字是: {num}")
```

##### finally 子句

`try-except` 语句还可以有一个可选的 `finally` 子句，无论 `try` 块中是否抛出异常，`finally` 块中的代码都会被执行。一般用于执行收尾工作比如关闭文件。

```python
try:
    num = int("123")
except ValueError:
    print("输入的不是有效的数字！")
else:
    print(f"转换后的数字是: {num}")
finally:
    print("无论是否发生异常，这里的代码都会执行。")
```

##### 嵌套 try-except

`try-except` 语句可以嵌套使用，即在 `try` 块或 `except` 块中可以再包含另一个 `try-except` 语句。

```python
try:
    try:
        num = int("abc")
    except ValueError:
        print("内部 try 块中发生了值错误！")
except:
    print("外部 try 块捕获到异常！")
```

##### raise from

是一种异常链机制，用于在抛出新异常时保留原始异常的信息，这有助于调试，让开发者可以更清晰地了解异常发生的完整过程。

1. 语法

    ```python
    try:
        # 可能引发异常的代码
        ...
    except SomeException as original_exception:
        # 处理原始异常，然后抛出新的异常，并关联原始异常
        raise NewException("新异常的描述信息") from original_exception
    ```

   在上述语法中，`SomeException` 是原始异常类型，`original_exception` 是捕获到的原始异常对象。`NewException` 是要抛出的新异常类型，通过 `raise ... from ...` 语句将新异常与原始异常关联起来。

2. 使用场景


- **封装异常**：当你在编写一个库或者模块时，可能不希望将底层的具体异常暴露给调用者，而是抛出一个更高级别的、更具业务含义的异常。使用 `raise from` 可以在抛出新异常的同时保留底层异常的信息，方便后续调试。
- **异常转换**：将一种类型的异常转换为另一种类型的异常，同时保留原始异常的上下文。

3. 举个例子  
   想象你在玩一个游戏关卡，每关结束都有个报告。在 Python 里，代码运行时也会遇到各种“状况”（异常）。

   正常情况下，一个异常抛出就完事儿了，你只知道这一个问题。但有时候，一个异常是由另一个异常引发的，就像第二关的失败是因为第一关遗留了个小失误。

   `raise from` 就是用来记录这种关联的。当你用 `raise from` 抛出新异常时，它会把之前那个异常（原始异常）的“小报告”也带上。这样，开发者查看错误信息时，就能清楚知道是哪个“小失误”引发了后面的问题，就像能看到游戏关卡间的连锁反应，更方便找出代码里的毛病。

   比如：

    ```python
    try:
        num = int('abc')  # 这里抛出 ValueError
    except ValueError as e:
        raise TypeError('新的类型错误') from e
    ```

   这里先有个 `ValueError`，然后用 `raise from` 抛出 `TypeError` 时带上了前面 `ValueError` 的信息，方便排查错误。


##### assert

`assert` 语句是一种调试辅助工具，用于在代码中检查某个条件是否为真。如果条件为真，程序会继续正常执行；如果条件为假，`assert` 语句会抛出一个 `AssertionError` 异常，从而帮助快速定位程序中的问题。

1. 语法  
   `assert` 语句的基本语法如下：

```python
assert condition, message
```

- `condition`：这是一个布尔表达式，也就是一个最终会计算出 `True` 或者 `False` 的表达式。`assert` 会对这个表达式进行求值。
- `message`：这是一个可选的参数，是一个字符串。当 `condition` 为 `False` 时，`message` 会作为 `AssertionError` 异常的错误信息被抛出。如果不提供 `message`，则抛出的 `AssertionError` 异常不会附带额外信息。

2. 示例  
   简单的 `assert` 语句

    ```python
    x = 5
    assert x > 10, "x 应该大于 10"
    ```

   在这个例子中，`x` 的值为 5，条件 `x > 10` 的计算结果为 `False`，因此 `assert` 语句会抛出一个 `AssertionError` 异常，并且异常信息为 `"x 应该大于 10"`。

   不提供错误信息的 `assert` 语句

    ```python
    y = -1
    assert y >= 0
    ```

   这里条件 `y >= 0` 为 `False`，`assert` 会抛出 `AssertionError` 异常，但由于没有提供额外的错误信息，所以异常中不会附带具体的提示内容。

3. 使用场景


- **调试代码**：开发过程中，可以使用 `assert` 语句来验证程序中的一些假设是否成立。例如在调用一个函数之前，你可能期望某个变量具有特定的值或范围，这时就可以使用 `assert` 进行检查。

    ```python
    def divide(a, b):
        assert b != 0, "除数不能为零"
        return a / b
    ```


result = divide(10, 0) # 会触发 AssertionError

- **验证数据的有效性**：当你从外部获取数据（如文件、用户输入等）时，可以使用 `assert` 来确保数据符合预期的格式或范围。

    ```python
    data = [1, 2, 3, 4, 5]
    assert all(isinstance(i, int) for i in data), "数据中应全为整数"
    ```


注意：

- **`assert` 可以被禁用**：在 Python 中，当你以优化模式（使用 `-O` 或 `-OO` 选项运行 Python 解释器）运行代码时，所有的 `assert` 语句都会被忽略，不会进行条件检查。因此，`assert` 不应该用于执行必要的程序逻辑或数据验证，而主要用于调试目的。
- **性能影响**：虽然 `assert` 语句在正常情况下执行速度很快，但在复杂的程序中，如果有大量的 `assert` 语句，可能会对性能产生一定的影响，因此在生产环境中应该谨慎使用。