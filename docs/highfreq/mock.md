---
title: Mock单测方式
icon: laptop-code
category:
  - 设计高频
tag:
  - 高频

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

    int insert(User u );
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