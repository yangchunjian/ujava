---
title: Python中对象和JSON转化
icon: laptop-code
category:
  - 设计Python
tag:
  - Python
---
在日常的软件测试过程中，测试数据的构造是一个占比非常大的活动。对于测试数据的构造，分为结构化的数据构造方式和非结构化的数据构造方式，反映python代码里分别是:

* 定义数据的class：修改数据中的某一个字段，操作json或者直接针对class的成员变量进行修改。
* 不定义数据的class： 直接操作json(dict)，来构造或者修改数据。
两种方式各有优缺点, 对于业务上有明确业务含义的数据，比如请求数据，建议使用第一种方式，对数据进行建模和定义； 而临时的数据构造，可以使用第二种方式，不需要额外定义一些结构，成本会低一些。在使用于第一种方法时，就会涉及到python中json数据与类对象的相互转化的。

此篇文章，会通过4种方式来展示json数据与python的类对象相互转化：

* python的原生方法
* jsonpickle
* cattrs和attrs库
* pydantic库
以下的例子，都使用同一个class，并且使用了嵌套的json，算是一个稍微复杂的场景。

```python
class Address():
    def __init__(self, street, number):
        self.street = street
        self.number = number
 
 
class User():
    def __init__(self, name, address):
        self.name = name
        self.address = Address()

```

一、python的原生方法
json to python class的参考：https://stackoverflow.com/a/28352366

python class to json的参考: https://stackoverflow.com/a/10252138

以下为代码示例:
```python
import json
from json import JSONEncoder
 
class Address():
    def __init__(self, street, number):
        self.street = street
        self.number = number
 
class User():
    def __init__(self, name, address):
        self.name = name
        self.address = Address(**address)  
 
class MyEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__
 
if __name__ == '__main__':
    js = '''{"name":"Cristian", "address":{"street":"Sesame","number":122}}'''
    j = json.loads(js)
    print(j)
    u = User(**j)
    print(json.dumps(u, cls = MyEncoder))
    print(json.dumps(u.__dict__))
```


执行代码后，输出

```python
{'name': 'Cristian', 'address': {'street': 'Sesame', 'number': 122}}
{"name": "Cristian", "address": {"street": "Sesame", "number": 122}}
Traceback (most recent call last):
***********
    raise TypeError(f'Object of type {o.__class__.__name__} ‘  
TypeError: Object of type Address is not JSON serializable

```


json转class object时，使用u = User(**j); class object转成json时，对于一级的json，直接使用u.dict就可以转成json，而对于嵌套的json，必须使用自定义的JSONEncoder才能转成功。

在以上的转化中，使用了两个python的特性，简单解释一下:

双星号() : 在函数参数中使用时，用于函数参数的解包，使用双星号()来解包一个字典的键值对到一个函数的关键字参数中。
```python
def greet(name, age):
    print(f"Hello, my name is {name} and I am {age} years old.")
person = {'name': 'Alice', 'age': 30}
greet(**person) # 等价于 greet(name='Alice', age=30)
```

dict属性:  dict属性是一个内置属性，包含了对象的属性及其值，以字典的形式存储。上面的例子中，使用dict属性，无法将address的值打印出来，就是因为值为Address对象，而不是一个字符串。
优点：

不需要引入其他的三方库
缺点：

一级的json数据没有什么问题，多级的json数据，to_json转化时，支持的不好，需要自己定义一个JSONEncoder才能转json成功, 如果更复杂的json，可能会失败。
二、jsonpickle库
jsonpickle在github上的介绍如下:

"Python library for serializing any arbitrary object graph into JSON. It can take almost any Python object and turn the object into JSON. Additionally, it can reconstitute the object back into Python.”

这段话，就说明了这是一个专注于class object -> json的库，而json->object的功能则只支持调用jsonpickle得到的json，再转回class object.

以下为代码示例:
```python
import json
import jsonpickle
class Address():
    def __init__(self, street, number):
        self.street = street
        self.number = number
class User():
    def __init__(self, name, address):
        self.name = name
        self.address = Address(**address)
 
if __name__ == '__main__':
    js = '''{"name":"Cristian", "address":{"street":"Sesame","number":122}}'''
    j = json.loads(js)
    # jsonpickle中没有一个类似jsonpickle.decode(j, class = User)的方法，所以只能拿第一种方法初始化class
    u = User(**j)
    print(jsonpickle.encode(u, unpicklable=False))
    jp = jsonpickle.encode(u)
    print(jp)
    u2 = jsonpickle.decode(jp)
    print(u2.__class__)
```

执行后的输出为：
```python
{"name": "Cristian", "address": {"street": "Sesame", "number": 122}}
{"py/object": "__main__.User", "name": "Cristian", "address": {"py/object": "__main__.Address", "street": "Sesame", "number": 122}}
<class '__main__.User'>
```

一些说明：

1. jsonpickle中没有一个类似jsonpickle.decode(j, class = User)的方法，所以只能拿第一种方法初始化class

转成json时, 调用jsonpickle.encode方法，传入参数unpicklable=False时，返回值不包含把json数据转回python object的信息，得到一个通用的json字符串

3. 转成json时, 调用jsonpickle.encode方法，默认unpicklable=True时，返回值中包含python object的信息，比如对象的类，输出中的"py/object": "main.User"就是这些信息

json转成python object时， 必须使用unpicklable=True时的json数据，jsonpickle在json转object时的局限性就在于此。

优点:

object -> json很强大，可以直接使用
缺点:

json转object时， 比较鸡肋，基本不能直接使用
三、cattrs和attrs库
attrs库: https://github.com/python-attrs/attrs。 attrs可以简化类的定义的管理，使用后这些类将自动获得一些有用的特性，如初始化方法（init）、repr方法、eq和hash等。实际使用的话，最基础的只需要知道attr.s和attr.ib两个方法即可。

cattrs库: https://github.com/python-attrs/cattrs。cattrs（即“conversion attrs”）是一个与attrs紧密集成的库，它提供了对象到字典（或其他数据结构）的序列化和从字典（或其他数据结构）到对象的反序列化功能。

以下为代码:

```python
import json
import attr
import cattrs
 
@attr.s
class Address:
    street = attr.ib(type = str)
    number = attr.ib(type = int)
 
@attr.s
class User:
    name = attr.ib(type = str)
    address = attr.ib(type=Address) # adrress 为Addres类型
 
if __name__ == "__main__":
    js = '''{"name":"Cristian", "address":{"street":"Sesame","number":122}}'''
    j = json.loads(js)
    u = cattrs.structure(j, User)
    print(u, u.__class__)
    print(cattrs.unstructure(u))
```

执行后，输出:
```python
User(name='Cristian', address=Address(street='Sesame', number=122), <class '__main__.User'>)
{'name': 'Cristian', 'address': {'street': 'Sesame', 'number': 122}}
```

一些说明:

attr.s是一个装饰器，用来标记类为attrs类。
attr.ib是一个用于声明属性的工厂函数, 比如attr.ib(type=str)表示一个类型为str的属性。在类定义中，使用attr.s和attr.ib基本就够了，在attr.ib方法中，还有很多参数，比如默认值、validator等，可以用于检查成员是不是满足定义的属性。
cattrs.structure和cattrs.unstructure用来将attrs类和json dict之间的相互转化，含义非常的直观。
优点:

使用cattrs和attrs结合使用，在与json的转化中，非常简单和强大，而且结构化的数据定义非常直观。
四、pydantic库
Pydantic库: https://github.com/pydantic/pydantic。数据验证和解析的Python库，提供类型注解、数据验证和模型转换功能。使用Pydantic可以定义模型类，验证输入数据并转换为字典或JSON。

直接上代码:
```python
import json
from pydantic import BaseModel, Field
 
class Address(BaseModel):
    street: str   #pydantic使用类型注解, 来确保使用正确的类型提示来定义字段
    number: int
 
class User(BaseModel):
    name: str
    address: Address
 
if __name__ == "__main__":
    js = '''{"name":"Cristian", "address":{"street":"Sesame","number":122}}'''
    j = json.loads(js)
    u = User.parse_obj(j)
    print(u, u.__class__)
    print(u.json())
```

执行代码后，输出:
```python
name='Cristian' address=Address(street='Sesame', number=122) <class '__main__.User'>
{"name": "Cristian", "address": {"street": "Sesame", "number": 122}}
```

一些说明:

* 通过继承pydantic的BaseModel来定义类，类型注解来定义字段的类型，创建符合需求的数据模型(这里也能看出数据模型是pydantic的核心)。
* 继承BaseModel，直接使用parse_obj方法就可以将json数据转为class object, 直接使用json()方法就可以转为json数据。
优点:

* 在与json的转化中，非常简单和强大，直接调用结构体的方法就可，而且结构化的数据定义非常直观

总结：
* 针对python中类对象和json的相关转化问题， 本文介绍了4种方式，涉及了三个非常强大的python库jsonpickle、attrs和cattrs、pydantic，但是这些库的功能并未涉及太深。在工作中，遇到实际的问题时，可以根据这几种方法，灵活选取。

再回到结构化测试数据的构造，当需要对数据进行建模时，也就是赋予数据业务含义，pydantic应该是首选，目前来看，pydantic的生态非常活跃，各种基于pydantic的工具也非常多，建议尝试。