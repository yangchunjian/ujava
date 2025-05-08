---
title: Python基础知识
icon: laptop-code
category:
  - 设计Python
tag:
  - Python
---
##### **python中的内置函数：**

- ###### **获得最大值：max()**

    ```
    max(list)
    ```

- ###### **获得最小值：min()**

    ```
    min(list)
    ```

- ###### **删除：del()**

    ```
    例：定义一个list型数据，data = [1,2,3,4,5,6]
    ```


1.del(data):删除整个list。

2.del(data[i]):删除data中索引为i个数据

3.del(data[i:j]):删除data中第i个数据到第j个数据之前（不含j）的数据



- ###### **获得长度：len()**

    ```
    len(list)
    ```

- ###### **获得总和：sum()**

    ```
    sum(list)
    ```


##### **用于任何数据类型**

- ###### **原样输出：print **

- ###### **单行注释：**

    - **#注释内容 快捷键： ctrl+/**
- ###### **多行注释：**

    - **""“注释内容”"" 也可以用单引号 ‘’‘注释内容’’'**
- ###### **print(type(a))输出a的类型**

- ###### **输入函数**

    - **a=input(“提示内容”) 赋给a值 是字符串 **
    - **用强制转换将a变成其他类型 如：int(a) 变成整型**
- ###### **倒序：**

    ```
    a=[3,1,2,5,4]
    a.sort(reverse=True)
    print(a)  倒序
    ```


##### **数据类型介绍**

- ###### **字符串：str**

    ```
    %s 字符串型
    ```

- ###### **数字类型：整型 int 浮点型 float**

    ```
    %d 整型
    %f  浮点型
    ```

- ###### **布尔类型：1=true 0=false**

- ###### **列表：list =[1,2,3]**

- ###### **元祖：tuple= (1,2)**

- ###### **字典：dict = {“name”:“123”,“age”:18}**

- ###### **集合：set = {1,2,3,4}**


##### **if语句**

```
if 条件一:
   print()
elif 条件二：
  print()
else :
  print()
```

##### **字符串操作：my="hello world hello python"**

- ###### **切片**

    ```
    name="abcdef"
    输出下标为0  print(name[0])
    ```


切片： 范围是左闭右开！！！  
* print(name[0:3])   结果：abc  
* print(name[0:5:2] 结果：ace  
* print(name[0:-1:2] 结果：ace  
* print(name[5:0:-2] 结果：fdb  
* print(name[5:0:-1] 结果:fedcb  
* print(name[:3] 结果：abc



- ###### **find():检测字符串里是否包含你要查询的字符串**

    ```
    print(my.find("python"))
    如果存在返回开始的索引值（也就是下标）
    不存在返回值为-1
    ```

- ###### **index():检测你设定的字符串长度里是否存在你要查询的字符串**

    ```
    print(my.index("py",0,25))
    如果存在返回开始的索引值，否则报错，index里的第一个数字参数是起始，后一个是终止的索引值-1
    ```

- ###### **count:查询出现的次数**

    ```
    print(my.count("l"))
    结果为5
    ```

- ###### **replace() 替换**

    ```
    my_str.replace("l","r",2)  将l替换为r 两次
    ```

- ###### **split() 切片**

    ```
    以str为分隔符切片mystr,如果maxsplit有指定值，则仅分割maxsplit个字符串
    格式：my_str.split(str=" ",2)
    my_str.split(" ")  以空格为切片条件
    结果为：['hello','world','hello','python']为列表结构
    str="qaqwrwrwee"
    print(str.split("w",2))
    结果为：['qaq','r','rwee'] 2表示切两次  以w为切点  结果没有切点
    ```

- ###### **startswith()**

    ```
    检查字符串是否以( )开头 是返回True 不是返回False
    my_str.startswith("hello") 结果为：True 
    ```

- ###### **endswith() 查询是否以什么什么结尾**

    ```
    print(my.endswith("hello"))
    ```

- ###### **upper()：转换my中的小写字母为大写(要有个变量接收，原字符串不改变)**

    ```
    res=my.upper()
    print(res)     
    ```

- ###### **lower():转换my中的大写字符为小写(要有个变量接收，原字符串不改变)**

    ```
    res=my.lower()
    print(res)  
    ```

- ###### **title():把字符串的每个单词首字母大写(要有个变量接收，原字符串不改变)**

    ```
    res=my.title()
    print(res) 
    ```

- ###### **capitalize():把字符串的第一个字符大写(要有个变量接收，原字符串不改变)**

    ```
    res=my.capitalize()
    print(res) 
    ```

- ###### **splitlines():按照行分隔，返回一个包含各行作为元素的列表**

    ```
    my_name="hello\nworld"
    print(my_name) 
     结果为：
    hello
    world
    print(my_name.spiltlines())
    结果为：
    ["hello","world"]
    ```

- ###### **isalpha():如果my所有字符都是字母 则返回True,否则返回False**

    ```
    print(my.isalpha())
    结果为：True
    ```

- ###### **isdigit()：如果my只包含数字则返回True 否则返回False**

    ```
    print(my.isdigit())
    结果为：False
    ```

- ###### **isalnum():如果my所有字符都是字母或数字则返回True,否则返回False**

    ```
    print(my.isalnum())
    结果为True
    ```

- ###### **isspace():如果my中只包含空格，则返回True,否则返回False**

    ```
    print(my.isspace())
    结果为：False
    ```

- ###### **rfind():从右往左找你要查找的字符串 找到后返回下标值**

    ```
    a=rfind('.')  用来取文件的后缀名
    ```

- ###### **join:用来将列表里的元素连接变为字符串**

    ```
    a=[1,2,3,4,'3']
    b=','.join([str(x) for x in a])
    print(b)
    ```


结果为：1,2,3,4,3

列表里的元素每个必须都为str


##### **列表：**

- ###### **增加（append,extend,insert）**

    - **append:**

        ```
        A=[1,2,3]
        A.append("4")
        结果为：A=[1,2,3,"4"]
        ```

    - **extend:**

        ```
        a=[1,2]  b=[3,4]
        a.extend(b)
        结果为 a=[1,2,3,4]
        a.append(b)
        结果为 a=[1,2,[3,4]]
        ```

    - **insert:**

        ```
        a=[0,1,2]
        a.insert(1,3)
        结果为 a=[0,3,1,2]
        ```

- ###### **修改元素：**

    ```
    a=[1,2,3]
    a[0]=3
    结果为：a=[3,2,3]
    ```

- ###### **查找元素：**

    - **in判断存在**

        ```
        name="123456789"
        find="123"
        if find in name:
           print("存在")
        else:
          print("不存在")
        ```

    - **not in判断不存在**
    - **index和count和在字符串里的应用一样**

##### **删除元素：list=[1,2,3]**

- ###### **del list[1]**

- ###### **list.pop()删除最后一个元素**

- ###### **list.remove(1)**


##### **排序**

- ###### **list.sort() 从小到大排序**

- ###### **list.sort(reverse=Ture)从大到小排序**

- ###### **list.reverse()反转**


##### **列表的嵌套**

```
list=[1,[2,3],4]
list[1].insert(1,5)结果为list[1,[2,5,3],4]
```

##### **字典：**

- ###### **字典的每个元素由2部分组成，键:值。例如 ‘name’:‘班长’ ,'name’为键，'班长’为值**

    ```
    info={"name":'师玲珑',"age":18}
    print(info["name"])  结果为：师玲珑
    ```

- ###### **修改数据：**

    ```
    info["age"]=20
    ```

- ###### **删除数据：**

    ```
    del info["age"]
    ```


info.clear()删除所有数据



- ###### **查找数据：**

    ```
    ###如果info中不存在'age'这个键，我就让他返回默认值18
    age=info.get('age',18)
    print(age)
    ```

- ###### **更改键名**

    ```
    思路：先删除原键值对，保存值，然后以新键插入字典
    ```


格式：dict[newkey] = dict.pop(key)

    d = {'a':1, 'aa':11}  
    d['b'] = d.pop('a')  
    d['bb'] = d.pop('aa')  
    print(d)  
    [#输出：] {'b': 1, 'bb': 11}



- ###### **len()测量字典中，键值对的个数**

- ###### **print(info.keys()) 返回一个包含字典所有的key列表 **

    ```
    结果为：info_keys(['name','age','sex'])
    ```

- ###### **print(info.values()) 返回一个包含字典所有的value列表**

    ```
    结果为：info_values([18,20,'女'])
    ```

- ###### **print(info.items()) 返回一个包含字典所有的键值对列表 **

    ```
    结果为：info_values([('name','age','sex'),(18,20,'女')])
    ```

- ###### **例子：**

    ```
    遍历字典的key   210 480  690
    for key in info.keys():
          print(key)
    ```


    遍历字典的values  
    for value in info.values():  
        print(value)                    
    
    遍历字典的items  
    for item in info.items():  
      print(item)  
    或者  
    for key,value in info.items()  
        print(key,value)
    
    如何实现带下标的遍历  
    chars=[1,2,3,4]  
    for i,chr in enumerate(chars):  
        print(i,chr)  
    结果为：  
    0 1  
    1 2  
    2 3  
    3 4

---

##### **集合：**

- ###### **集合是无序的，集合中的元素是唯一的，集合一般用于元组或者列表中的元素去重。**

- ###### **添加元素**

    ```
    add:
    set1={1,2,3}
    set1.add(8) 
    print(set1)
    结果为 1,2,3,8
    ```

- ###### **修改元素：**

    ```
    update:
    set1={1,2,3}
    set1.update("abcd")
    print(set1)
    结果为：1,2,3,a,b,c,d
    ```

- ###### **删除元素:**

    ```
    set1.remove(1)如果没有报错
    ```


set1.discard(1) 如果没有不执行

set1.pop()是随机删除集合中的元素


- ###### **交集：**

    ```
    set1={1,2,3}
    set2={3,4}
    new_set=set1&set2
    print(new_set) 结果为{3}
    ```

- ###### **并集：**

    ```
    new_set=set1|set2 
    print(new_set) 结果为{1,2,3,4}
    ```


##### **公共方法：**

| **运算符**    | **python表达式**       | **结果**        | **描述**      | **支持的数据类型**   |
| ---------- | ------------------- | ------------- | ----------- | ------------- |
| **+**      | **[1,2]+[3,4]**     | **[1,2,3,4]** | **合并**      | **字符串.列表.元祖** |
| *          | *_[1]_4__           | **[1,1,1,1]** | **复制**      | **字符串.列表.元祖** |
| **in**     | **3 in (1,2,3)**    | **True**      | **元素是否存在**  | **同上+字典**     |
| **not in** | **4 not in(1,2,3)** | **True**      | **元素是否不存在** | **同上**        |