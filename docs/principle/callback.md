---
title: 设计原理:回调
index: false
icon: laptop-code
category:
  - 设计原理
---

## 简介

回调是强大的编程模式之一。 它可以实现调用反转，在子函数中调用高层的函数（通常是由高层函数来调用底层的子函数），
获得更灵活的调用关系。通常用于框架、代码复用等场合。 在这里， 函数可以作为参数传入子函数，可以由子函数进行调用和返回。回调函数可以用
Java 的接口， 或者 C/C++ 的函数指针来实现， 而在 Javascript / LISP 中， 函数是一种通用对象，具有很大的灵活性。

## 动机

调用者 A 想要调用函数 B， 但并不知道具体的 B 应该是哪一个，由 A 的调用者将 函数B 作为参数传入给调用者 A。 函数B 称为回调函数，
B 函数的调用称为回调。

框架设计者将那些固定不可变的流程和逻辑写好，而对于那些需要根据业务来定制的逻辑，则以回调接口的形式提供给开发者使用。Js
框架中提供了大量回调接口； struts2 的拦截器，WEB 中的过滤器， Spring AOP 等都可以看成是回调的一种形式。它类似于模板方法中的钩子。

回调的威力在于， 能够在任何时间、任何地点、以指定形式调用任何抽象层级的逻辑。

回调最著名的例子是灵活的对象排序。 排序函数对指定的同类型的多个对象进行排序， 但它并不知道如何去比较对象的大小，因此，
必须传入一个比较对象的函数给它。

```sql
sort((*comp)(obj1, obj2)) {
    // codes (*comp)(obj1, obj2)
}

```

代码
在 Javascript 中：

```javascript
function A(callback) {
// other code
    var params = obtain();
    callback(params);
}

var callback = function (params) {
// codes to process
}

客户端调用:
    A(callback); 
```

在 Java 中：与命令模式有点像。

```java
public interface Command {
    void process();
}

public interface Menu {
    void menuClick();
}

public class MenuItem implements Menu {

    private Command command;

    public MenuItem(Command command) {
        this.command = command;
    }

    void menuClick() {
        command.process();
    }
}

public class OpenFileCommand implements Command {
    public void process() {
        // some codes
    }
}

```

客户端调用：

```java
obtainMenu(){return new MenuItem(new OpenFileCommand());}
        Menu menu=obtainMenu();   // 只有 obtainMenu 知道会返回哪个具体的 menu
        menu.menuClick();
```

## 缘起

首先， 一段普通的函数调用 :

```java
main(){
        A();
        }

        function A(){B();}

```

上述代码意图很明确， main 调用了 A， A 又调用了B 。关系很确定。 然而， A 函数可能是一段模板化的代码块， 其中只有一个地方不确定：

假设单击按钮A 的代码如下：

```java
function btnAclick(){
        // some codes
        var result=callApi();
        if(result=='success'){
        succA();   //  只有这里不一样
        }
        else{
        // other codes
        }
        }

```

单击按钮B 的代码如下：

```javascript
function btnAclick() {
    // some codes
    var result = callApi();
    if (result == 'success') {
        succB();   //  只有这里不一样
    } else {
        // other codes
    }
}


```

当按钮很多时， 重复这一段代码是非常无趣的事情。 这时， 可以写一个回调， 来复用代码：

```javascript
function tplbtnclick(callback) {

    // some codes

    var result = callApi();

    if (result == 'success') {
        callback(params);   //  回调
    } else {
        // other codes
    }
}

```

原来的函数就可以简化为:

```javascript
function btnAclick() {
    tplbtnclick(function (params) {
        succA();
    })
}

function btnBclick() {
    tplbtnclick(function (params) {
        succB();
    })
}

```

看， 这样是不是更加简洁呢？

## 禁忌

和任何一种强大的编程技术一样， 回调也不宜过度使用， 过多层的回调容易把人弄晕。 遵循“事不过三” 的原则， 可以将回调层数尽量限制在三层及以下。
