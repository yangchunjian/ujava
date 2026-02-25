---
title: Python数据类型
icon: laptop-code
category:
- 设计模型
tag:
- 模型
---
## 基础知识与数据类型

### 一、数字类型

#### 1.整型(int)

| 进制种类 | 引导符号  | 描述                       |
| ---- | ----- | ------------------------ |
| 十进制  | 无     | 默认情况，例如1010，-500         |
| 二进制  | 0b或0B | 由字符0和1组成，例如0b1010,0B1010 |
| 八进制  | 0o或0O | 有字符0到7组成，例如，0o76，0O76    |
| 十六进制 | 0x或0X | 由字符0到9，a到f，A到F组成，例如0xABC |

#### 2.[浮点型](float)

- [浮点数]类型与数学中实数的概念一致，表示带有小数的数值

- Python语言要求所有浮点数必须带有小数部分，小数部分可以是0，目的是区分浮点数和整数类型

- 浮点数有两种表示方法：十进制表示和科学计数法表示

  例：0.0，77.，-3.14，96e4，4.3e-3，9.6E5


#### 3.复数(complex)

- Python语言中，复数的虚数部分通过后缀“J”和“j”来表示，例如: 12.3+4j

- 复数类型中实数部分和虚数部分的数值都是浮点类型

- 对于复数z，可以用z.real和z.imag分别获得它的实数部分和虚数部分


#### 内置数字类型转换函数

|函数|描述|
|---|---|
|int(x)|将数字或字符串转换为整数，如果没有提供参数，则返回0。对于浮点数，它会截短到零|
|float(x)|将x转换为浮点数，x可以是整数或字符串|
|complex(re, im)|生成一个复数，实部为re，虚部为im，re可以是整数，浮点数或字符串，当re为字符串的时候不能携带im部分；im可以是整数或浮点数但不能为字符串，im没有时，默认为0|

#### math库

math：科学计算函数库

|函数|描述|
|---|---|
|abs(x)|返回数字的绝对值，如abs(-10) 返回 10|
|ceil(x)|返回数字的上入整数，如math.ceil(4.1) 返回 5|
|exp(x)|返回e的x次幂(ex),如math.exp(1) 返回2.718281828459045|
|fabs(x)|返回数字的绝对值，如math.fabs(-10) 返回10.0|
|floor(x)|返回数字的下舍整数，如math.floor(4.9)返回 4|
|log(x)|如math.log(math.e)返回1.0,math.log(100,10)返回2.0|
|log10(x)|返回以10为基数的x的对数，如math.log10(100)返回 2.0|
|max(x1, x2,…)|返回给定参数的最大值，参数可以为序列。|
|min(x1, x2,…)|返回给定参数的最小值，参数可以为序列。|
|modf(x)|返回x的整数部分与小数部分，两部分的数值符号与x相同，整数部分以浮点型表示。|
|pow(x, y)|x**y 运算后的值。|
|round(x [,n])|返回浮点数x的四舍五入值，如给出n值，则代表舍入到小数点后的位数。|
|sqrt(x)|返回数字x的平方根|
|acos(x)|返回x的反余弦弧度值。|
|asin(x)|返回x的反正弦弧度值。|
|atan(x)|返回x的反正切弧度值。|
|atan2(y, x)|返回给定的 X 及 Y 坐标值的反正切值。|
|cos(x)|返回x的弧度的余弦值。|
|hypot(x, y)|返回欧几里德范数 sqrt(x_x + y_y)|
|sin(x)|返回的x弧度的正弦值。|
|tan(x)|返回x弧度的正切值。|
|degrees(x)|将弧度转换为角度,如degrees(math.pi/2) ， 返回90.0|
|radians(x)|将角度转换为弧度|

### 二、布尔值(bool)

#### 1.简介

布尔值：只有两个值，True和False

#### 2.布尔值为False的数：

a)、None，False （注意，这两个不要加引号，加上引号为字符串，会输出为True）

b)、所有值为0的数，包括：0（整数），0.0（浮点数），0.0+0.0j（复数）

c)、""(空字符串)

d)、[]（空列表）

e)、{}（空字典）

f)、()（空元组）

#### 3.True=1，False=0

### 三、字符串(str)

#### 1.简介

- 字符串是不可变的序列数据类型，不能直接修改字符串本身
- 字符串是字符的序列表示，可以由一对单引号(’)，双引号(“)或三引号(’’’)构成
- 单引号和双引号都可以表示单行字符串，两者作用相同
- 使用单引号时，双引号可以作为字符串的一部分，反之亦然
- 三引号可以表示单行或多行字符串

#### 2.字符串运算

|作|描述|
|---|---|
|+|字符串连接(运算速度慢，慎用)|
|*|重复输出字符串，相当于乘法|
|[]|通过索引获取字符串中的字符|
|[ : ]|截取字符串中的一部分，切片，[起始：结束（不包括）：步长(为负倒序)]|
|in|成员运算符 - 如果字符串中包含给定的字符返回 True|
|not in|成员运算符 - 如果字符串中不包含给定的字符返回 True|

#### 3.常用功能

|函数|描述|
|---|---|
|capitalize()|首字母变大写|
|casefold()|首字母变小写|
|center(width, fillchar)|内容居中，width：总长度；fillchar：空白处填充内容，默认是空格|
|count(sub[, start[, end]])|子序列个数，sub：子序列；start：开始索引；end：结束索引；不写默认为全部|
|x.endswith(suffix[,start[,end]])|字符串中start-end索引是否以"suffix"结束|
|expandtabs(tabsize=8)|将tab转换成空格，默认一个tab转换成8个空格|
|find(sub[, start[, end]])|寻找子序列位置(第一个)，如果没找到，返回 -1|
|format(*args, **kwargs)|字符串格式化|
|index(sub[, start[, end]])|寻找子序列位置（第一个），如果没找到，报错，参考find|
|isalnum()|是否是字母和数字（包含其一也可）|
|isalpha()|是否全是字母|
|isdigit()|是否全是数字|
|islower()|字母是否全为小写|
|isspace()|是否全为空格|
|istitle()|是否标题|
|isupper()|字母是否全为大写|
|join()|列表拼接为字符串|
|ljust()|内容左对齐，右侧填充，参考center|
|lower()|字母全变小写|
|upper()|字母全变大写|
|title()|标题格式|
|lstrip([chars])|移除左侧空白(如果给定字符，则删除字符串中的字符)|
|rstrip([chars])|移除右侧空白（同上）|
|strip([chars])|移除两侧空白（同上）|
|partition(sep)|将字符串分割为前，中（sep），后三部分|
|replace(old, new[, count])|替换(count为替换个数，默认为全部替换)|
|split(sep=None, maxsplit=-1)|分割， maxsplit最多分割几次，默认全部分割|
|len()|元素数量|

### 四、列表(list)

#### 1.简介

- 列表是有序的可变的元素集合
- 像字符串值用引号来标记字符串的起止一样，列表用左方括号开始，右方括号结束，即[]
- 列表中的值也称为“表项”

#### 2.常用功能

索引、切片、长度、添加、删除、循环、包含

|函数|描述|
|---|---|
|list()|转换成列表|
|len()|元素数量|
|append(object)|在列表末尾添加新的对象|
|clear()|清除列表所有元素|
|copy()|拷贝|
|count(value)|统计子元素个数|
|extend(iterable)|在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）|
|index(value, [start, [stop]])|寻找子序列位置（第一个），如果没找到，报错，参考find|
|insert(index, object)|插入|
|pop([index])|移除列表最后一个元素，并可将该元素赋值给新的变量|
|del(list[x])|删除索引处的值|
|remove(value)|移除左边开始第一个指定元素|
|reverse()|倒置|
|sort(key=None, reverse=False)|排序|

### 五、元组(tuple)

#### 1.简介

- 元组是有序的不可变的元素集合

- 元组只保证它的一级子元素不可变，对于嵌套的元素内部，不保证不可变

- 定义只有一个值的元组,值后要加个逗号 例如：tuple = (“a” ,)

- 元组与列表几乎一样，元组使用小括号，列表使用方括号

- 列表可以修改（追加，移除，删除），元组不能修改


#### 2.常用功能

索引、切片、长度、循环、包含

|函数|描述|
|---|---|
|tuple()|转换成元组|
|len()|元素数量|
|count(value)|统计子元素个数|
|index(value, [start, [stop]])|寻找子序列位置（第一个），如果没找到，报错，参考find|

### 六、字典(dict)

#### 1.简介

- 从Python3.6开始，字典是有序的，它将保持元素插入时的先后顺序

- 字典可精确描述为不定长、可变、散列的集合类型

- 字典是由键值对构成（key、value）的有序集合

- 键（key）的数据类型一般为数字或字符串，且必须是唯一的，不能重复

- 值（value）可以是任意数据类型

- 字典使用大括号{}，字典是可变对象，但是字典的键(key)必须是不可变对象

- 访问：字典名[键]

- 修改、添加：字典名[键]=值


#### 2.常用功能

键、值、键值对、长度、获取值、新增、删除、循环

|函数|描述|
|---|---|
|clear()|清除内容|
|copy()|拷贝|
|fromkeys(list[,str])|创建字典的一种方法|
|pop(k[,d])|获取并在字典中移除指定key值项|
|popitem()|获取并在字典中移除最后一项|
|get(k[,d])|根据k获取值，d是默认值，k不存在返回默认|
|items()|所有项的列表形式（非真正意义上的list）|
|keys()|所有的key列表形式|
|values()|所有的值|
|setdefault(k[,d])|如果key不存在，则创建，如果存在，则返回已存在的值且不修改，类似get（）|
|update([E, ]**F)|把字典E的键/值对更新(添加）到dict里（key值相同更新，不同则添加）|

#### 3.遍历字典

```python
dic = {'name': 'zzh', 'age': 18}
```

# 1 直接遍历字典获取键，根据键取值
for key in dic:  
print(key, dic[key])

# 2 利用items方法获取键值，速度很慢
for key,value in dic.items():  
print(key,value)

#3 利用keys方法获取键  
for key in dic.keys():  
print(key, dic[key])

#4 利用values方法获取值，但无法获取对应的键  
for value in dic.values():  
print(value)

### 七、集合(set)

#### 1.简介

- 一个包含唯一元素的可变和无序的集合数据类型
- 集合的主要用途是快速删除列表中的重复项
- 集合使用大括号{}，同数学上的集合类似，也有交集、并集、子集的数学运算
- 创建一个空集合，必须用 set()
- 集合中的元素是无序的，所以没有存在索引，集合是可变对象

#### 2.常用功能

添加、删除、交集、并集、补集、去重

|函数|描述|
|---|---|
|set()|去重|
|add()|增加|
|clear()|清空成为空集合|
|copy()|复制|
|discard()|在集合中移除指定元素，不存在不报错|
|remove()|在集合中移除指定元素，不存在会报错|
|pop()|随机删除集合中元素|

#### 3.运算符

|**数学符号**|**python运算符**|**含义**|**定义**|
|---|---|---|---|
|∩|&|交集|一般地,由所有属于A且属于B的元素所组成的集合叫做AB的交集|
|∪|\||并集|一般地,由所有属于集合A或属于集合B的元素所组成的集合,叫做AB的并集|
|-或\|-|相对补集/差集|A-B，取在A集合但不在B集合的项|
||^|对称差集/反交集|A^B，取只在A集合和只在B集合的项，去掉两者交集项|

### 八、查看数据类型、内存地址的方法

|方法名|含义|案例|
|---|---|---|
|type()|查看数据类型|type(x)|
|help(type())|查看类下全部方法|help(type(x))|
|dir()|查看类下全部方法名|dir(x)|
|Ctrl+鼠标左键|查看类下某特定方法||

### 九、基础语法

#### 1.标识符

- 标识符是指对变量、常量、函数、类等对象起的名字
- Python语言在任何场景都严格区分大小写
- 变量的命名不要用关键字和内置函数的名字
- 第一个字符必须是字母表中的字母或下划线‘_’
- 标识符的其他的部分由字母、数字和下划线组成
- 变量名全部小写，常量名全部大写
- 函数和方法名用小写加下划线
- 类名用大写驼峰
- 模块和包的名字用小写

#### 2.python关键字

Python关键字，也叫保留字，是Python语言官方确定的用作语法功能的专用标识符，不能把它们用作任何自定义标识符名称，关键字只包含小写字母

Python的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字

```python
import keyword
# keyword.kwlist 是一个列表，里面放着所有的关键字。
# keyword.iskeyword() 接收一个字符串参数，返回其是不是关键字(True/False)
print(keyword.kwlist)
print(keyword.iskeyword("and"))
**********************************************************************
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
True
```

#### 3.注释

- 单行注释

    ```python
    # 我是单行注释
    ```

- 注释文档

  这类注释必须紧跟在定义体下面，不能在任意位置

    ```python
    def func():
        """
        这个是函数的说明文档。
        """
        print("hello world")
    ```


#### 4.缩进

Python使用缩进来表示代码块，同一个代码块的语句必须包含相同的缩进空格数

- 所有的普通语句，顶左开始编写，不需要缩进

- 所有的语句块，首行不用缩进，从冒号结束后开始下一行，都要缩进

- 语句块结束，就退回缩进，表示当前块已结束

- 语句块可以嵌套，所以缩进也可以嵌套

- 字符串过长，利用\连接，在()，[]，{}中可直接换行写

    ```python
    str = "asdasdadddddddddddddadsadasdasda" \
    	+ "adsaksbdjhagsjhgdwjahgdhwjgajhdgw"\
    	+"ajdalkjsdlkahsjldhlakwhdhklaks"
    print(str)
    ```


#### 5.PEP8空白标准

pycharm中，Ctrl+Alt+L：代码格式化

- 变量赋值的时候等号左右各给一个空白
- 逗号后面跟一个空白
- 函数之间或类的方法之间用空行分隔，表示一段新的代码的开始
- 类和函数入口之间也用一行空行分隔，以突出函数入口的开始

#### 6.输入与输出

##### (1).输入：input

获取用户输入，保存成一个字符串

```python
age = input("please input your age: ")	# 输入18
print(type(age))	# <class 'str'>
age = int(input("please input your age: ")) # 输入18
print(type(age))	# <class 'int'>
```

input函数可用于阻塞或暂停程序

```python
print("程序前面部分执行完毕......")
input("请按回车继续......")       # 在这里程序会暂停，等待你的回车动作
print("继续执行程序的后面部分......")
```

##### (2).输出：print

print函数用于将内容格式化显示在标准输出上，主要指的是屏幕显示器

- sep参数: 分隔的符号，默认是一个空格

- end参数: 打印后的结束方式，默认为换行符`\n`

    ```python
    a = "i am"
    b = "student"
    print(a, "a", b, sep="_", end="!!!")  # i am_a_student!!!
    # 注意：此时print不会换行
    ```


### 十、运算符

1.算术运算符：+，-，*，/，%，**，// （//是整除去余）

2.比较运算符：==，!=，>，<，>=，<=

3.赋值运算符：=，+=，-=，*=，/=，%=， **=，//=

4.逻辑运算符：and，or，not

5.成员运算符：in，not in

### 十一、字符串的转义

#### 1.字符串的转义

字符前面加上 \ ，字符就不在表示字符本身的意思，表示ASCII码中不能显示字符

|字符串|转义|
|---|---|
|\n|换行|
|\t|水平制表符|
|\b|退格|
|\r|回车，当前位置移到本行开头|
|\|代表反斜杠 \|
|’|代表一个单引号，同样的 “ ? 等符号也可以这么输出|
|\0|代表一个空字符|
|\a|系统提示音|

#### 2.去除字符串的转义

在字符串前面加上 r，例如：r’abc\tabc’

### 十二、字符串格式化

#### 1.%

|**格式**|**描述**|**格式**|**描述**|
|---|---|---|---|
|%%|百分号标记|%e|浮点数字(科学计数法)|
|%c|字符及其ASCII码|%E|浮点数字(科学计数法，用E代替e)|
|%s|字符串|%f|浮点数字(用小数点符号)|
|%d|有符号整数(十进制)|%g|浮点数字(根据值的大小采用%e或%f)|
|%u|无符号整数(十进制)|%G|浮点数字(类似于%g)|
|%o|无符号整数(八进制)|%p|指针(用十六进制打印值的内存地址)|
|%x|无符号整数(十六进制)|%n|存储输出字符的数量放进参数列表的下一个变量中|
|%X|无符号整数(十六进制大写字符)|||

```python
year = 2019
month = 3
day = 6
# 格式化日期
print('%04d-%02d-%02d' % (year, month, day))
******************************************************************
2019-03-06
```

```python
print("%s" % "hello")
print("%d" % 10)
print("%o" % 10)
print("%02x" % 10)
print("%.2e" % 3.14159)
******************************************************************
hello
10
12
0a
3.14e+00
```

必须一一对应，否则会报错

#### 2.format

```python
a = "name {}, age {}, {}".format("zzh", 18, "man")
print(a)
b = "name {0}, age {1}, {0}".format("zzh", 18, "man")
print(b)
L = ["zzh", 18]
c = "name {0}, age {1}, {0}".format(*L)
print(c)
d = "name {name}, age {age}, {sex}".format(name="zzh", age=18, sex="man")
print(d)
D = {"name":"zzh", "age":18}
e = "name {name}, age {age}".format(**D)
print(e)
******************************************************************
name zzh, age 18, man
name zzh, age 18, zzh
name zzh, age 18, zzh
name zzh, age 18, man
name zzh, age 18
```

```python
num1 = "num: {:b}, {:o}, {:d}, {:x}, {:X}, {:f}, {:%}".format(10, 10, 10, 10, 10, 3.14159, 3.14159)
print(num1)
num2 = "num: {0:b}, {0:o}, {0:d}, {0:x}, {0:X}, {1:f}, {1:%}".format(10, 3.14159)
print(num2)
num3 = "num: {number:b}, {number:o}, {number:d}, {number:x}, {number:X}, {float:f}, {float:%}".format(number=10, float=3.14159)
print(num3)
******************************************************************
num: 1010, 12, 10, a, A, 3.141590, 314.159000%
num: 1010, 12, 10, a, A, 3.141590, 314.159000%
num: 1010, 12, 10, a, A, 3.141590, 314.159000%
```

### 十三、字符串编码

#### 1.发展史

0/1= 1位 = 1bit (最小识别单位)  
1byte = 1字节 = 8bit (最小存储单位)

- 第一阶段：

  ASCII码：英文：一个字节代表一个字符（0-255）

- 第二阶段

  各个国家纷纷定制了自己的字符编码  
  GBK：中国：两个字节（2bytes）代表一个字符（0-65535）

- 第三阶段：  
  unicode：兼容万国语言：两个字节（2bytes）代表一个字符（0-65535）

- 第四阶段：  
  utf-8：(避免空间浪费，对unicode加工)：英文字符：1byte，中文：3bytes，欧洲：2bytes


#### 2.python3下字符编码使用情况

- 内存中：unicode，(用空间换时间)，所有字符都是2bytes，优点数字的转换速度快，缺点占用空间大
- 硬盘中或网络传输时：utf-8，(空间小)，对不同的字符用不同的长度表示，优点节省空间，缺点字符数字的转换速度慢

#### 3.编码(encode)和解码(decode)

- 编码（encode）：将unicode转换为其他指定的编码
- 解码（decode）：将原编码转换为unicode编码
- 编码之间的转换，必须先转换成unicode，然后再转

```python
s = "潭州"    # 代码运行时，内存运行，unicode
utf8 = s.encode("utf-8")
print(utf8)  # b'\xe6\xbd\xad\xe5\xb7\x9e'
# utf-8 ==> GBK
gbk = utf8.decode("utf-8").encode("GBK")
print(gbk)  # b'\xcc\xb6\xd6\xdd'
```

#### 4.字节(bytes)与字符(str)的相互转化

- 字符转换为字节

    ```python
    name = "志昊"
    # 字符转换为字节
    b1 = bytes(name, encoding="utf-8")
    b2 = bytes(name, encoding="GBK")
    print(b1)   # b'\xe5\xbf\x97\xe6\x98\x8a'
    print(b2)   # b'\xd6\xbe\xea\xbb'
    print(type(b1)) # <class 'bytes'>
    print(type(b2)) # <class 'bytes'>
    ```

- 字节转换为字符

    ```python
    name = "志昊"
    # 字符转换为字节
    b1 = bytes(name, encoding="utf-8")
    b2 = bytes(name, encoding="GBK")
    ```


# 字节转换为字符
```python
s1 = str(b1,encoding="utf-8")  
s2 = str(b2,encoding="GBK")  
print(s1) # 志昊  
print(s2) # 志昊
```

### 十四、深浅复制

#### 1.概念

- 字符串、数字：在内存中是一次性创建的，不能直接修改，如需修改，需要重新创建
- 字符串、数字：赋值、深浅拷贝都没有意义，因为其永远指向同一个内存地址
- 列表、元组、字典等可修改的数据类型：在内存中创建时是以链表的形式创建

#### 2.赋值

赋值：只是创建一个变量，该变量指向原来的内存地址，即原值改变时，复制的值也随原值改变，内容保持一致

```python
# 赋值
n = {"k1" : "zzh", "k2" : 18, "k3" : ["dx", 17]}
n1 = n
n["k1"] = "me"
print(n)    # {'k1': 'me', 'k2': 18, 'k3': ['dx', 17]}
print(n1)   # {'k1': 'me', 'k2': 18, 'k3': ['dx', 17]}
n["k3"][0] = "you"
print(n)    # {'k1': 'me', 'k2': 18, 'k3': ['you', 17]}
print(n1)   # {'k1': 'me', 'k2': 18, 'k3': ['you', 17]}
```

#### 3.浅复制

浅复制：在内存中只额外的创建第一层数据，即原值的第一层数据改变时，复制的值不变，与起始的原值相同；原值的其余层发生改变时，复制的值随原值改变，内容保持一致

```python
# 浅复制
import copy
n = {"k1" : "zzh", "k2" : 18, "k3" : ["dx", 17]}
n2 = copy.copy(n)
n["k1"] = "me"
print(n)    # {'k1': 'me', 'k2': 18, 'k3': ['dx', 17]}
print(n2)   # {'k1': 'zzh', 'k2': 18, 'k3': ['dx', 17]}
n["k3"][0] = "you"
print(n)    # {'k1': 'me', 'k2': 18, 'k3': ['you', 17]}
print(n2)   # {'k1': 'zzh', 'k2': 18, 'k3': ['you', 17]}
```

#### 4.深复制

深拷贝：在内存中额外创建一个数据，即原值改变时，复制的值不变，与起始的原值相同

```python
# 深拷贝
import copy
n = {"k1" : "zzh", "k2" : 18, "k3" : ["dx", 17]}
n3 = copy.deepcopy(n)
n["k1"] = "me"
print(n)    # {'k1': 'me', 'k2': 18, 'k3': ['dx', 17]}
print(n3)   # {'k1': 'zzh', 'k2': 18, 'k3': ['dx', 17]}
n["k3"][0] = "you"
print(n)    # {'k1': 'me', 'k2': 18, 'k3': ['you', 17]}
print(n3)   # {'k1': 'zzh', 'k2': 18, 'k3': ['dx', 17]}
```

### 十五、bytes和bytearray(字符串，列表）

#### 1.bytes：字节

```python
print(type("ffff")) # <class 'str'>
print(type(b"ffff"))    # <class 'bytes'>
# 字符串是字符的序列，bytes是byte的序列
# str ---> bytes
s = "志昊"
b1 = s.encode('utf-8')
b2 = bytes(s, encoding='utf-8')
print(b1)   # b'\xe5\xbf\x97\xe6\x98\x8a'
print(b2)   # b'\xe5\xbf\x97\xe6\x98\x8a'
# bytes ---> str
s1 = b1.decode("utf-8")
print(s1)   # 志昊
```

#### 2.bytearray：字节列表

```python
# bytearray
s1 = "潭州你好"
b1 = bytearray(s1.encode('utf-8'))
print(b1)   # bytearray(b'\xe6\xbd\xad\xe5\xb7\x9e\xe4\xbd\xa0\xe5\xa5\xbd')
print(type(b1)) # <class 'bytearray'>
print(b1.decode('utf-8'))   # 潭州你好

b1[:6] = bytearray("世界", encoding="utf-8")  
print(b1) # bytearray(b'\xe4\xb8\x96\xe7\x95\x8c\xe4\xbd\xa0\xe5\xa5\xbd')  
print(b1.decode('utf-8')) # 世界你好
```
