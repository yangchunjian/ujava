---
title: 组件Mock
icon: laptop-code
category:
  - 设计组件
tag:
  - 组件
---

## 简介

通过Mock方式，测试编写的程序

通用类定义

```java

@SpringBootTest(classes = Application.class)
@RunWith(SpringJUnit4ClassRunner.class)
@Slf4j
public class BaseTest {

    @BeforeClass
    public static void before() {

    }
}
```

```java

@RunWith(SpringJUnit4ClassRunner.class)
@Slf4j
public class NewBaseTest {

}
```

```java

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private String name;

    private Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}

```

```java

public interface UserMapper {

    public int insert(User user);
}

```

```java

public interface UserService {

    int insert(User u);
}

```

```java

import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public int insert(User u) {
        return userMapper.insert(u);
    }
}

```

```java
import lombok.extern.slf4j.Slf4j;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@Slf4j
public class NewBaseTest {
    @BeforeClass
    public static void before() {
    }


}

```

```java

import lombok.extern.slf4j.Slf4j;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@SpringBootTest(classes = YJavaWebApplication.class)
@RunWith(SpringJUnit4ClassRunner.class)
@Slf4j
public class BaseTest {
    @BeforeClass
    public static void before() {
    }


}

```

```sql
<dependency>

    <groupId>org.springframework.boot</groupId>

    <artifactId>spring-boot-test</artifactId>

    <version>2.3.4.RELEASE</version>

</dependency>


```

```sql
<dependency>

    <groupId>org.mockito</groupId>

    <artifactId>mockito-core</artifactId>

    <version>3.3.3</version>

</dependency>
```

## 方式一（直接操作库表）

```java

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;
import org.junit.Test;

@Slf4j
public class UserDBTest extends BaseTest {

    @Resource
    private UserService userService;
    @Resource
    private UserMapper userMapper;

    @Test
    public void testInsert() throws Exception {
        User u = User.builder().name("zhongguo").build();
        int i = userService.insert(u);
        Assert.assertEquals(1, i);
    }

}
```

## 方式二（启动容器）

```java

import jakarta.annotation.Resource;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;

/**
 * 启动容器单测
 */
public class UserTest extends BaseTest {

    @Resource
    private UserService userService;

    @MockBean
    private UserMapper userMapper;

    @Test
    public void testInsert() throws Exception {

        User u = User.builder().name("共产").build();

        Mockito.when(userMapper.insert(u)).thenReturn(2);

        int i = userService.insert(u);

        Assert.assertEquals(2, i);

    }

}


```

## 方式三（不启动容器）

```java
import org.junit.Assert;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

/**
 * 不启动容器单测
 */
public class NewUserTest extends NewBaseTest {

    @Mock
    UserMapper userMapper;


    @InjectMocks
    UserServiceImpl userService;


    @Test
    public void testInsert() {

        User u = User.builder().name("中国").age(11).build();

        Mockito.when(userMapper.insert(Mockito.any())).thenReturn(2).thenThrow(new RuntimeException("111"));

        int i = userService.insert(u);

        Assert.assertEquals(2, i);

    }

}

```

## Mock静态数据

在实际工作当中，我们经常会遇到需要对静态方法进行 mock 的情况。在 mockito 2.x 的时代，我们需要借助 powmock 才能实现。当
mockito 进化到了 3.4.0 版本以后，也开始对静态方法 mock 进行了支持（主要是通过 mockito-inline 包）。

简单的介绍就到这里，下面让我们进入主题吧。

首先确保 pom 文件中 mockito 相关 jar 包的版本（这里我用的版本是 3.7.7），如下：

```xml
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-core</artifactId>
  <version>3.7.7</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-inline</artifactId>
  <version>3.7.7</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-junit-jupiter</artifactId>
  <version>3.7.7</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.13</version>
  <scope>test</scope>
</dependency>


```

使用方式

Mockito.mockStatic(Class mockClass)，如下：

```sql
// 这里 DateUtil 内提供了静态方法
MockedStatic<DateUtil> dateUtil = mockStatic(DateUtil.class);

```

示例：

```java
import static org.mockito.Mockito.mockStatic;

@RunWith(MockitoJUnitRunner.class)
public class AlphaServiceTest {

    @Test
    public void testHttp() {
        //...

        MockedStatic<HTTPClient> httpClient = mockStatic(HTTPClient.class);
        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...

        // 关闭
        httpClient.close();
    }

```

这样基本上就 OK 了。唯一需要注意下的就是 httpClient.close()。

如果项目中未引入 mockito-inline，会出现如下错误信息：

```sql
org
.
mockito
.
exceptions
.
base
.
MockitoException
:
The used MockMaker SubclassByteBuddyMockMaker does not support the creation of static mocks

Mockito's inline mock maker supports static mocks based on the Instrumentation API.
You can simply enable this mock mode, by placing the 'mockito-inline' artifact where you are currently using 'mockito-core'.
Note that Mockito's inline mock maker is not supported on Android.

	at com.annoroad.order.service.PreOrderServiceTestCase.testSaveClinicalFreeSuccess1(PreOrderServiceTestCase.java:86)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:50)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:47)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at org.springframework.test.context.junit4.statements.RunBeforeTestExecutionCallbacks.evaluate(RunBeforeTestExecutionCallbacks.java:74)
	at org.springframework.test.context.junit4.statements.RunAfterTestExecutionCallbacks.evaluate(RunAfterTestExecutionCallbacks.java:84)
	at org.springframework.test.context.junit4.statements.RunBeforeTestMethodCallbacks.evaluate(RunBeforeTestMethodCallbacks.java:75)
	at org.springframework.test.context.junit4.statements.RunAfterTestMethodCallbacks.evaluate(RunAfterTestMethodCallbacks.java:86)
	at org.springframework.test.context.junit4.statements.SpringRepeat.evaluate(SpringRepeat.java:84)
	at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:325)
	at org.springframework.test.context.junit4.SpringJUnit4ClassRunner.runChild(SpringJUnit4ClassRunner.java:251)
	at org.springframework.test.context.junit4.SpringJUnit4ClassRunner.runChild(SpringJUnit4ClassRunner.java:97)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.springframework.test.context.junit4.statements.RunBeforeTestClassCallbacks.evaluate(RunBeforeTestClassCallbacks.java:61)
	at org.springframework.test.context.junit4.statements.RunAfterTestClassCallbacks.evaluate(RunAfterTestClassCallbacks.java:70)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.springframework.test.context.junit4.SpringJUnit4ClassRunner.run(SpringJUnit4ClassRunner.java:190)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)
	at com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)
	at com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)
	at com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)


```

错误提示 static mocking is already registered in the current thread To create a new mock, the existing static mock
registration must be deregistered

当多个单元测试都使用了同一个 static mock 对象，且使用完成后都没有进行 close。此时，若这几个单元测试用一起执行，第一个单元测试占用了
static mock 对象，第二个单元测试就没有办法再占用了。

如果出现了这种情况，解决办法也很简单，就是关闭 static mock 对象，如下：

```java
import static org.mockito.Mockito.mockStatic;

@RunWith(MockitoJUnitRunner.class)
public class AlphaServiceTest {

    @Test
    public void testHttp1() {
        //...

        MockedStatic<HTTPClient> httpClient = mockStatic(HTTPClient.class);
        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...

        httpClient.close();
    }

    @Test
    public void testHttp2() {
        //...

        MockedStatic<HTTPClient> httpClient = mockStatic(HTTPClient.class);
        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...

        httpClient.close();
    }

    @Test
    public void testHttp3() {
        //...

        MockedStatic<HTTPClient> httpClient = mockStatic(HTTPClient.class);
        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...

        httpClient.close();
    }
}
```

如果你的很多单元测试中都用到了 mockStatic(HTTPClient.class)，且觉得在每个单元测试当中都写一遍 mockStatic()…close()
很低效，可以采用下边的方式：

```java
import static org.mockito.Mockito.mockStatic;

@RunWith(MockitoJUnitRunner.class)
public class AlphaServiceTest {
    private MockedStatic<HttpClietn> httpClient;

    // 每个单元测试启动前，先执行该方法（高版本中 @Before 被替换成 @BeforeEach）
    @Before
    public void setUp() {
        this.httpClient = mockStatic(HTTPClient.class);
    }

    // 每个单元测试执行完成后，执行该方法（高版本中 @After 被替换成 @AfterEach）
    @After
    public void teardown() {
        this.httpClient.close();
    }

    @Test
    public void testHttp1() {
        //...

        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...
    }

    @Test
    public void testHttp2() {
        //...

        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...
    }

    @Test
    public void testHttp3() {
        //...

        httpClient.when(() -> HTTPClient.sendPost("xxx/zzz/ccc", "hello")).thenReturn("success");

        //...
    }
}

```

## Mock缓存数据

在Mockito中，你可以使用Mockito.when配合相应的调用记录方法来模拟缓存场景。以下是一个简单的例子，展示了如何使用Mockito来模拟一个缓存方法的行为：

```java
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class CacheMockTest {

    // 模拟的缓存实现
    private Map<String, String> cache = new ConcurrentHashMap<>();

    // 待测试的缓存访问方法
    public String getFromCache(String key) {
        return cache.get(key);
    }

    @Test
    public void testCacheHit() {
        // 缓存数据
        cache.put("key", "value");

        // 创建模拟测试
        CacheMockTest testInstance = Mockito.spy(this); // 创建实例的模拟

        // 配置mock行为：当调用getFromCache并传递"key"时，返回"value"
        Mockito.doReturn("value").when(testInstance).getFromCache("key");

        // 执行测试方法
        String result = testInstance.getFromCache("key");

        // 验证结果
        Assert.assertEquals("value", result);

        // 验证缓存被正确访问
        Mockito.verify(testInstance).getFromCache("key");
    }
}
```

在这个例子中，我们首先通过ConcurrentHashMap模拟了一个简单的缓存。然后我们使用Mockito.spy创建了一个被测试方法所在类的模拟实例。通过Mockito.doReturn我们配置了当调用getFromCache方法并传递特定的key时，模拟方法返回预先定义的值。最后，我们使用Mockito.verify来验证缓存访问方法是否被调用了。这个例子展示了如何使用Mockito来模拟和验证缓存相关的行为。
