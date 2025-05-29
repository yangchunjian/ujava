---
title: Python基础知识2
icon: laptop-code
category:
  - 设计Python
tag:
  - Python
---
![img_16.png](img_16.png)
* ✅基本数据类型全家福：
* int → 整数（42）
* bool → 布尔值（True/False）
* float → 浮点数（3.14）
* str → 字符串（"Hello"）
* list → 可变序列（[1,2]）
* tuple → 不可变序列（(1,2)）
* set → 无序不重复集合
* dict → 键值对字典
* complex → 复数（1+2j）
* 👉特殊成员：函数/模块/类型本身也是对象！
* 🔢不可不知的常量
* ✔️数学三杰：
* math.pi → 圆周率π
* math.e → 自然对数e
* math.inf → 无穷大∞
* ✔️布尔判官：
* True → 真值开关
* False → 假值开关
* ✔️空值代表：
* None → 表示空（类似null）
* 💡Tips：记得先import math才能调用哦！
* ⚙️运算符冷知识
* 🔀赋值技巧：
* a += 1 等价于 a = a + 1
* （右边算完赋值给左边！）
* 🧮算术运算符：
* // → 地板除（5//2=2）
* @ → 矩阵乘法（numpy常用）
* ** → 幂运算（2**3=8）
* % → 取余（-2%3=1）
* 💥隐藏知识点：fmod vs %
* math.fmod(-2,3) → -2
* -2%3 → 1
* 👉区别：负数取余时方向不同！
* ➖fmod向零取整，%向下取整
* 📝学习贴士：
* 1️⃣ type()函数可查变量类型
* 2️⃣ 浮点数比较用math.isclose()
* 3️⃣ 变量命名避开关键字
* 4️⃣ 逻辑运算符优先级：not>and>or
* 🎯新手常见误区：
* × 用is比较数值（应用==）
* × 把1.0当作整数判断
* × 忘记导入math直接调pi
* 