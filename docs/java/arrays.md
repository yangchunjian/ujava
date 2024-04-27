---
title: Java Arrays类
category: Java
icon: laptop-code
tag:
  - 设计Java
---
在 Java 中，`java.util.Arrays`类提供的多种数组操作功能，可以有效地执行各种数组相关的操作，使得数组处理变得简单和高效。

## 打印数组

```java
String[] arr = new String[] {"a", "b", "c", "d"};
System.out.println(Arrays.toString(arr)); // 输出 [a, b, c, d]
```

`Arrays.toString(arr)`，不过是简单的一个调用，却让你的数组输出从一串地址，变成了清晰可辨的字符。

## 复制数组

要复制一个新的数组么？`copyOf` 和 `copyOfRange` 给你全方位的选择：

```java
String[] arr = new String[] {"a", "b", "c", "d"};
String[] copyOf2 = Arrays.copyOf(arr, 2); // [a, b]
System.out.println(Arrays.toString(copyOf2));

String[] copyOfRange = Arrays.copyOfRange(arr, 1, 3); // [b, c]
System.out.println(Arrays.toString(copyOfRange));

String[] copyOf10 = Arrays.copyOf(arr, 10); // [a, b, c, d, null, null, null, null, null, null]
System.out.println(Arrays.toString(copyOf10));
```

这 `copyOf`，`copyOfRange`，无异于为数组之尺，想要复制前 N 个元素，使用 `copyOf`，想要取其中一段，使用 `copyOfRange`。

> 注意：若范围大于原数组，多出位置以 null 填充。

## 填充数组

```java
String[] arr = new String[5];
Arrays.fill(arr, "java");
System.out.println(Arrays.toString(arr)); // [java, java, java, java, java]
```

如若数组空空如也，可用 `Arrays.fill(arr, "str")` 将它填满。每一个元素，都被赋予相同的值。

也可以使用 `Arrays.setAll` 填充，它允许传入一个函数，生成填充值。

```java
// 生成 100以内的 随机数
IntFunction<Integer> intFunction = i -> new Random().nextInt(100);
Integer[] intArr = new Integer[5];
Arrays.setAll(intArr, intFunction);
System.out.println(Arrays.toString(intArr));
// output:[29, 17, 18, 11, 85]
```

## 数组比较

数据比较有两种方式，一是使用 `Arrays.equals`，二是使用 `Arrays.hashCode`。

### Arrays.equals

```java
String[] arr = new String[] {"a", "b", "c", "d"};
Object[] arr1 = new Object[] {arr, new String[] {"a", "b", "c", "d"}};
Object[] arr2 = new Object[] {arr, arr};

System.out.println(Arrays.equals(arr1, arr2));     // false
System.out.println(Arrays.deepEquals(arr1, arr2)); // tue
```

如果是一维数组比较，直接 `Arrays.equals` 比较没有问题。如果是多维数组，`Arrays.equals` 并不会比较子数组中的元素值，此时需要使用`deepEquals` 比较。

### Arrays.hashCode

```java
String[] arr = new String[] {"a", "b", "c", "d"};
Object[] arr2 = new Object[] {arr, arr};
System.out.println(Arrays.hashCode(arr2));
System.out.println(Arrays.deepHashCode(arr2));

arr[0] = null;
System.out.println(Arrays.hashCode(arr2));
System.out.println(Arrays.deepHashCode(arr2));
```

元素可能会变，如何捕捉这一瞬间的改变？`hashCode()`，`deepHashCode()`，便是这捕风捉影的法宝。`hashCode` 方法会根据数组元素值计算出一个数字，如果元素值发生改变，则数字改变。但是同样对于多维数字，在计算数字时不会计算子数组中的元素，这种情况应该使用 `deepHashCode`判断。

输出：

```shell
-2117384671
125140001

-2117384671
32668737
```

## 数组排序

```java
// 生成 100以内的 随机数
IntFunction<Integer> intFunction = i -> new Random().nextInt(100);
Integer[] intArr = new Integer[5];
Arrays.setAll(intArr, intFunction);
System.out.println(Arrays.toString(intArr));
// output: [18, 31, 86, 59, 43]

Arrays.sort(intArr);
System.out.println(Arrays.toString(intArr));
// output: [18, 31, 43, 59, 86]
```

`Arrays.sort` 方法可以将元素排序。而 `parallelSort()`可以并发排序，但是在数据量比较小的情况下，`Arrays.sort` 可能效率更高。

## 二分查找

二分搜索可以快速找到数组中的指定元素的利器。

```java
Integer[] intArr = new Integer[] {2, 3, 4, 5, 6, 7, 8, 9};
int index = Arrays.binarySearch(intArr, 3);
System.out.println("index:"+index);
System.out.println(intArr[index]);
```

> 注意事项：使用 `binarySearch()` 前确保数组是排序过的，否则结果将不可预知。

## 数组转 Stream

Java 8 引入的 Stream API 让数组操作更加现代化，可以链式操作。使用 `Arrays.stream` 可以让数组共享这一便利。

```java
Integer[] intArr = new Integer[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
System.out.println(Arrays.stream(intArr).count()); // 10
ToIntFunction toIntFunction = i -> (int)i;
System.out.println(Arrays.stream(intArr).mapToInt(toIntFunction).sum());// 45
```

## 数组转换

如果你想把数组转成 List 怎么办？`Arrays.asList()` 就是你需要的。

```java
String[] arr = new String[] {"a", "b", "c", "d"};
List<String> list = Arrays.asList(arr);
System.out.println(list); // 输出 [a, b, c, d]
// list.add("e"); 报错
```

注意事项：`asList()` 返回的列表**不支持增删操作**，它和原始数组是共享数据的。

## 并行前缀计算

使用 `parallelPrefix` 函数并行地累积给定数组中的每个元素。对于大型数组，并行前缀计算通常比顺序循环更有效。

示例：每一个元素转换成当前以及之前所有元素的和。

```java
Integer[] intArr = new Integer[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
Arrays.parallelPrefix(intArr, (left, right) -> left + right);
System.out.println(Arrays.toString(intArr));
```

输出：`[0, 1, 3, 6, 10, 15, 21, 28, 36, 45]`