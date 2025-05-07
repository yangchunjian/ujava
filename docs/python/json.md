---
title: Python JSON库
icon: laptop-code
category:
- 设计模型
tag:
- 模型
---

### 一、json库概述

JSON(JavaScript Object Notation)是一种轻量级的[数据交换格式]，Python的`json`模块提供了[JSON数据]的编码和解码功能。该模块可以将Python对象转换为JSON字符串（序列化），也可以将JSON字符串转换为Python对象（反序列化）。

#### 核心功能

- `json.dumps()`: 将Python对象编码为JSON字符串
- `json.loads()`: 将JSON字符串解码为Python对象
- `json.dump()`: 将Python对象编码并写入文件
- `json.load()`: 从文件读取并解码JSON数据

### 二、基本使用方法

#### 1. 序列化（Python对象 → JSON字符串）

```python
import json
data = {  
"name": "张三",  
"age": 30,  
"married": True,  
"children": ["小明", "小红"],  
"pets": None  
}

json_str = json.dumps(data, ensure_ascii=False, indent=4)  
print(json_str)
```



输出：

```json
{
    "name": "张三",
    "age": 30,
    "married": true,
    "children": ["小明", "小红"],
    "pets": null
}
```

**参数说明**：

- `ensure_ascii=False`: 允许非ASCII字符（如中文）直接输出
- `indent=4`: 美化输出，使用4个空格缩进

#### 2. 反序列化（JSON字符串 → Python对象）

```python
json_data = '{"name": "李四", "age": 25, "city": "北京"}'
python_obj = json.loads(json_data)

print(python_obj["name"]) # 输出: 李四  
print(type(python_obj)) # 输出: <class 'dict'>
```



#### 3. 文件读写操作

**写入JSON文件**：

```python
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
```

**读取JSON文件**：

```python
with open('data.json', 'r', encoding='utf-8') as f:
    loaded_data = json.load(f)
```

### 三、高级用法

#### 1. 处理复杂对象

默认情况下，json模块只能处理基本数据类型。要序列化复杂对象，需要自定义编码器：

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age
	        
	def user_encoder(obj):  
	if isinstance(obj, User):  
	return {'name': obj.name, 'age': obj.age}  
	raise TypeError(f'Object of type {obj.**class**.**name**} is not JSON serializable')
	
	user = User("王五", 28)  
	user_json = json.dumps(user, default=user_encoder)
```



#### 2. 自定义解码器

```python
def user_decoder(dct):
    if 'name' in dct and 'age' in dct:
        return User(dct['name'], dct['age'])
    return dct
    
user_obj = json.loads(user_json, object_hook=user_decoder)  
print(type(user_obj)) # 输出: <class '**main**.User'>
```



#### 3. 性能优化

对于大型JSON数据处理：

- 使用`json.JSONEncoder`和`json.JSONDecoder`类提高性能
- 考虑使用`ujson`或`orjson`等第三方库（非标准库）

### 四、实际应用场景

#### 1. Web API开发

```python
# Flask示例
from flask import Flask, jsonify, request
import json

app = Flask(**name**)

@app.route('/api/data', methods=['POST'])  
def receive_data():  
data = request.get_json() # 自动使用json模块解析请求体
```

# 处理数据

```python
return jsonify({"status": "success"})
```



#### 2. 配置文件管理

```python
# 读取配置
with open('config.json') as f:
    config = json.load(f)
```

# 修改并保存配置
```python
config['timeout'] = 30  
with open('config.json', 'w') as f:  
json.dump(config, f, indent=2)
```


#### 3. 数据交换与存储

```python
# 将Pandas DataFrame转为JSON
import pandas as pd
df = pd.DataFrame({'A': [1, 2], 'B': ['x', 'y']})
json_str = df.to_json(orient='records')
```

# 从JSON恢复DataFrame
```python
new_df = pd.read_json(json_str)
```



### 五、常见问题与解决方案

1. **中文乱码问题**

   - 确保使用`ensure_ascii=False`
   - 文件操作时指定编码为`utf-8`
2. **日期时间对象的处理**

    ```python
    from datetime import datetime
	def datetime_encoder(obj):  
		if isinstance(obj, datetime):  
			return obj.isoformat()  
		raise TypeError("Type not serializable")
	
	data = {'time': datetime.now()}  
	json.dumps(data, default=datetime_encoder)
    ```




AI写代码- **循环引用检测**

    - 默认情况下json不处理循环引用
    - 需要自行解决循环引用问题或使用第三方库

### 六、最佳实践

1. 始终处理异常：

    ```python
    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"Invalid JSON: {e}")
    ```

2. 对于敏感数据，考虑使用`json.dumps()`的`separators`参数压缩JSON大小：

    ```python
    json.dumps(data, separators=(',', ':'))
    ```

3. 大型文件处理时，考虑使用`ijson`库进行流式解析


### 七、总结

Python的json模块是处理JSON数据的利器，掌握它可以：

- 轻松实现前后端数据交互
- 高效管理配置文件
- 处理各种数据交换场景