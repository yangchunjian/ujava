---
title: Python eval函数
icon: laptop-code
category:
  - 设计Python
tag:
  - Python
---
eval() 是 Python 内置的一个函数，它可以将字符串当作[有效的] Python 表达式进行求值并返回结果。它的作用是将字符串转换为相应的数据类型、执行计算和执行任意有效的 Python 代码。

然而，使用 eval() 函数需要谨慎，因为它可以执行任意的代码，可能导致安全风险和不受控制的行为。

## 1. eval() 函数的语法

eval() 函数的语法如下：

eval(expression, globals=None, locals=None)

参数：                

                        expression 是一个字符串，表示要求值的表达式或代码。

globals 是一个可选的全局命名空间字典。

locals 是一个可选的局部命名空间字典。

下面一些示例代码，展示了 eval() 函数的使用方法和功能。

### 1.1 默认参数使用

#### 1.1.1 求值表达式

```php
result = eval("2 + 3")
print(result)  # 输出：5
```

上述示例中，将字符串 "2 + 3" 作为表达式传递给 eval() 函数，它会求值这个表达式并返回结果。 

#### 1.1.2 [字符串转换]为数据类型

```cobol
num = eval("42")
print(type(num))  # 输出： <class 'int'>
 
string = eval("'Hello, World!'")
print(type(string))  # 输出： <class 'str'>
```

上述示例中，使用 eval() 将字符串转换为对应的数据类型，例如将字符串 "42" 转换为整数，将字符串 "'Hello, World!'" 转换为字符串。 

####  1.1.3 执行代码块

```python
code = '''
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")
'''

x = 8
eval(code)
```

上述示例中，将代码块作为字符串传递给 eval() 函数，然后在给定的上下文中执行这段代码。根据变量 x 的值，会打印不同的结果。 

### 1.2  默认参数globals 和 locals 的使用

eval() 函数中的 globals 和 locals 参数用于指定代码执行时的全局和局部命名空间。这些参数允许你在 eval() 中使用特定的变量和函数。

#### 1.2.1 使用全局命名空间

```python
x = 5
result = eval("x + 2", globals())
print(result)  # 输出：7
```

上述示例中，我们使用 globals() 函数将当前的全局命名空间传递给 eval()。这样，eval() 中的代码可以访问全局变量 x。

####  1.2.2 使用局部命名空间

```cobol
def add(a, b):
    return a + b
 
locals_dict = {'a': 2, 'b': 3}
result = eval("add(a, b)", globals(), locals_dict)
print(result)  # 输出：5

```

在这个例子中，我们使用 locals_dict 字典作为局部命名空间传递给 eval()。这样，eval() 中的代码可以访问局部变量 a 和 b，以及 add() 函数。

#### 1.2.3 修改局部命名空间

```cobol
x = 2
locals_dict = {'x': 5}
eval("x = x + 1", globals(), locals_dict)
print(locals_dict['x'])  # 输出：6

```

示例中，我们将 locals_dict 字典作为局部命名空间传递给 eval()。eval() 中的代码将修改局部变量 x 的值。通过在 eval() 之后检查 locals_dict['x']，我们可以看到变量 x 的值已经被修改为 6。

### 1.3 使用总结

需要注意的是，eval() 函数默认情况下使用调用 eval() 的上下文的命名空间。如果未提供 globals 和 locals 参数，eval() 将使用默认的命名空间。

使用 globals 和 locals 参数时，应该谨慎选择要传递的命名空间，并确保代码中可以访问所需的变量和函数。同时，需要注意在 eval() 中执行的代码对命名空间的修改是否会影响到后续代码的行为。

eval() 函数可以执行任意有效的 Python 代码，包括函数调用、循环和文件操作等。因此，在使用 eval() 函数时，应该确保字符串是可信的，并避免执行不安全的代码。

## 2. 异常处理

如果在 eval() 中的表达式或代码中存在语法错误或运行时错误，eval() 将引发相应的异常。因此，在使用 eval() 时，应该使用适当的异常处理机制来捕获和处理可能出现的异常。

## 3. eval() 的替代方法

在某些情况下，可以考虑使用更安全和受控制的替代方法来执行特定的任务。例如，如果需要执行简单的数学运算，可以使用 eval() 的更安全的替代方法 ast.literal_eval()。如果需要执行特定的函数调用，可以使用 getattr() 函数来获取对象的属性或方法，并进行调用。

## 4. 开发时注意事项      

在实际编程中，应该谨慎使用 eval() 函数，并评估是否有其他更安全和可控制的替代方法可用。如果必须使用 eval()，则应该遵循以下最佳实践：

a.验证和过滤输入：确保将不受信任的输入数据进行验证和过滤，以防止注入恶意代码。

b.限制执行环境：限制 eval() 的执行环境，仅允许访问必要的变量和函数。

c.使用异常处理：使用适当的异常处理机制来捕获和处理可能的异常情况。

d.文档和注释：在代码中提供清晰的文档和注释，以说明为什么需要使用 eval()，并确保其他开发人员了解代码的含义和潜在的风险。

5. 总结

eval() 函数可以将字符串作为 Python [表达式求值]，将字符串转换为数据类型，执行代码块等。它在某些情况下可以方便地处理动态代码和计算，但需要谨慎使用以避免安全风险。