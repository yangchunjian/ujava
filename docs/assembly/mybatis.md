---
title: 组件MyBatis
icon: laptop-code
category:
  - 设计组件
tag:
  - 组件

---

MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程、高级映射和事务等功能，是 Java Web 开发中最受欢迎的 ORM 框架之一。MyBatis 的特点是简单易用，具有良好的灵活性和易扩展性，在企业开发中广泛应用。

本文将从 MyBatis 的概述、核心组件、基础使用方法、高级用法以及整合 Spring 等方面进行详细讲解，希望能够对读者了解和掌握 MyBatis 框架有所帮助。

## 一、概述

### 1.1 MyBatis 的历史

MyBatis 最初是由 Clinton Begin 在 2002 年开发的 iBATIS，在经过多年的发展和改进后，于 2010 年正式更名为 MyBatis，并成为一个独立的开源项目。

### 1.2 MyBatis 的特点

MyBatis 前身是 iBATIS，原意是“internet BATIS”，后来因为它更多地被用于 Java Web 开发中，因此变成了“Java BATIS”。MyBatis 的主要特点包括：

- 简单易用：MyBatis 的 API 非常简单，易于学习和上手。
- 灵活性强：MyBatis 允许开发人员自定义 SQL 语句，满足各种复杂的查询和数据操作需求。
- 映射关系自由：MyBatis 不强制要求实体类和数据库表之间的映射关系，开发人员可以灵活选择使用注解或 XML 配置文件来管理映射关系。
- 与 Spring 等框架整合方便：MyBatis 提供了与 Spring、Spring Boot 等框架整合的支持，可以轻松地将 MyBatis 与这些框架无缝集成。
- 易于扩展：MyBatis 插件机制可以让开发者增加自定义的功能，扩展性非常强。

### 1.3 MyBatis 框架结构

MyBatis 的框架结构主要包含以下四个部分：

- SQL Mapper：负责定义 SQL 语句，并将 SQL 语句映射成为 Java 对象或 Map 集合的结果。
- MyBatis 核心：提供执行 SQL 语句的底层逻辑，包括管理 SQL 会话、连接池和事务等资源。
- 数据源：为 SQL 执行器提供数据库连接。
- MyBatis 插件：允许用户在运行过程中对 MyBatis 核心进行扩展。

### 1.4 MyBatis 常用工具

MyBatis 在开发过程中常用的工具有：

- MyBatis Generator：可以根据数据库表自动生成对应的 Java 实体类和 XML 映射文件。
- MyBatis Plugin：可以通过插件机制扩展 MyBatis 的功能。
- PageHelper：可以很方便地对查询结果进行分页处理。
- MyBatis Plus：是一个开源的 MyBatis 增强工具，提供了很多实用的功能。

## 二、核心组件

MyBatis 的核心组件包括：

- SqlSessionFactoryBuilder：用于创建 SqlSessionFactory 对象。
- SqlSessionFactory：用于创建 SqlSession 对象。
- SqlSession：用于执行 SQL 语句。
- Mapper Interface：定义 SQL 语句调用的接口。
- Mapper XML 文件：定义了 SQL 语句的具体实现。

### 2.1 SqlSessionFactoryBuilder

SqlSessionFactoryBuilder 是用于创建 SqlSessionFactory 实例的工厂类，它的主要作用是读取 MyBatis 配置文件，并创建 SqlSessionFactory。SqlSessionFactoryBuilder 提供了多个构造方法，可以使用 InputStream、Reader、Properties 等多种方式来读取配置文件：

```java
InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
SqlSessionFactory sessionFactory = builder.build(inputStream);
```

其中，mybatis-config.xml 是 MyBatis 的配置文件，它包含了一些全局配置和 MyBatis 插件的配置信息。

### 2.2 SqlSessionFactory

SqlSessionFactory 是用于创建 SqlSession 实例的工厂类，它维护着连接池和缓存等重要资源。SqlSessionFactory 的创建是一个重量级的操作，因此通常将它的创建过程放在应用程序的启动阶段完成，然后使用单例模式来管理 SqlSessionFactory 对象。

SqlSessionFactory 的创建通常是通过 SqlSessionFactoryBuilder 完成的：

```java
InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
SqlSessionFactory sessionFactory = builder.build(inputStream);
```

### 2.3 SqlSession

SqlSession 是 MyBatis 中最核心的组件之一，它类似于 JDBC 的 Connection 对象，提供了操作数据库的所有方法。SqlSession 的创建通常是通过 SqlSessionFactory 的 openSession 方法完成的：

```java
SqlSession session = sessionFactory.openSession();
```

SqlSession 接口中定义了许多执行 SQL 语句和获取 Mapper Interface 的方法，比如 selectOne、selectList、insert、update、delete 等。

### 2.4 Mapper Interface

Mapper Interface 是使用 MyBatis 进行数据库操作的核心部分，它是一个接口，通过在接口中定义抽象方法来代表 SQL 语句的执行。Mapper Interface 接口的名称通常与 Mapper XML 文件的名称相同，只是后缀不同，比如 UserMapper 和 UserMapper.xml。

Mapper Interface 接口的定义方式如下：

```java
public interface UserMapper {

    User getUserById(String id);

    void insertUser(User user);

    void updateUser(User user);

    void deleteUserById(String id);
}
```

其中的方法名与 Mapper XML 文件中定义的 SQL 语句的 id 相同，而方法的参数和返回值则根据实际情况而定。

### 2.5 Mapper XML 文件

Mapper XML 文件是 MyBatis 中定义 SQL 语句的地方，它通常包含了一些具体的 SQL 语句和映射关系的配置信息。Mapper XML 文件通常与 Mapper Interface 接口相对应，可以在其中定义与接口中方法名相同的 SQL 语句，用于完成数据操作。

Mapper XML 文件的定义方式如下：

```xml
<!-- UserMapper.xml -->
<mapper namespace="com.example.dao.UserMapper">
    <select id="getUserById" parameterType="String" resultType="User">
        SELECT * FROM user WHERE id = #{id}
    </select>

    <insert id="insertUser" parameterType="User">
        INSERT INTO USER (name, age, gender) VALUES (#{name}, #{age}, #{gender})
    </insert>

    <update id="updateUser" parameterType="User" >
        UPDATE USER SET name=#{name}, age=#{age}, gender=#{gender} WHERE id = #{id}
    </update>

    <delete id="deleteUserById" parameterType="String">
        DELETE FROM USER WHERE id = #{id}
    </delete>
</mapper>
```

其中，namespace 属性指定了对应的 Mapper Interface，id 属性指定了 SQL 语句的名称，parameterType 属性指定了方法参数的类型，resultType 属性指定了返回结果的类型。

## 三、基础使用

### 3.1 快速开始

使用 MyBatis 完成一次简单的数据库操作只需要以下几个步骤：

- 定义实体类。
- 编写 Mapper Interface 接口。
- 编写 Mapper XML 文件。
- 配置 MyBatis。
- 获取 SqlSession 对象。
- 调用 Mapper 的方法来执行 SQL 语句。

下面以一个查找用户信息的例子来演示这些步骤的具体实现。

### 3.2 定义实体类

定义一个 User 实体类，用于存储数据库中用户的信息：

```java
public class User {
    private int id;
    private String name;
    private int age;
    private String gender;
    // 省略 getter 和 setter 方法
}
```

### 3.3 编写 Mapper Interface 接口

定义一个 UserMapper 接口，用于定义操作数据库的方法：

```java
public interface UserMapper {
    User getUserById(int id);
}
```

### 3.4 编写 Mapper XML 文件

定义一个 user.xml 文件，用于配置 SQL 语句和映射关系：

```xml
<mapper namespace="com.example.dao.UserMapper">
    <select id="getUserById" parameterType="int" resultType="User">
        SELECT * FROM user WHERE id = #{id}
    </select>
</mapper>
```

其中，id 属性指定了对应的方法名称，parameterType 属性指定了传入参数的类型，resultType 属性指定了返回结果的类型。

### 3.5 配置 MyBatis

在 src/main/resources 目录中创建 mybatis-config.xml 文件，并添加以下内容：

```xml
<configuration>
    <typeAliases>
        <typeAlias type="com.example.entity.User" alias="User"/>
    </typeAliases>
    <mappers>
        <mapper resource="com/example/dao/user.xml"/>
    </mappers>
</configuration>
```

该文件中主要包含了 MyBatis 的全局配置信息，其中 typeAliases 标签用于定义类型别名，mappers 标签用于定义 Mapper XML 文件所在的路径。

### 3.6 获取 SqlSession 对象

在代码中获取 SqlSession 对象，可以使用 SqlSessionFactoryBuilder 和 SqlSessionFactory 来创建：

```java
InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
SqlSession sqlSession = sessionFactory.openSession();
```

### 3.7 调用 Mapper 的方法执行 SQL 语句

通过 SqlSession.getMapper() 方法获取 Mapper Interface 的代理对象，然后就可以调用其中的方法来执行 SQL 语句：

```java
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
User user = userMapper.getUserById(1);
System.out.print(user.getName());
```

上述代码中，getUserById() 方法接收一个整数参数，返回一个 User 对象。执行该方法后，就可以得到 id 为 1 的用户的信息，并将其封装为一个 User 对象返回。

### 3.8 测试

运行上面的代码即可查询到数据库中 id 为 1 的用户的信息。至此，一个简单的 MyBatis 应用程序就完成了。

## 四、高级用法

### 4.1 动态 SQL

MyBatis 支持动态 SQL，在 Mapper XML 文件中可以使用 if、choose、when、otherwise、foreach 等标签来实现动态 SQL。

下面是一个根据多个条件查询用户信息的例子：

```xml
<!-- UserMapper.xml -->
<mapper namespace="com.example.dao.UserMapper">
    <select id="getUser" parameterType="User" resultType="User">
        SELECT * FROM user WHERE 1=1
        <if test="id != null">
            AND id = #{id}
        </if>
        <if test="name != null and name != ''">
            AND name LIKE CONCAT('%',#{name},'%')
        </if>
        <if test="age != null">
            AND age=#{age}
        </if>
    </select>
</mapper>
```

上面代码中，如果输入的 User 对象中有 id 属性，则在 SQL 语句中添加查询 id 的条件，同理，如果有 name 属性，则添加模糊查询 name 的条件，如果有 age 属性，则添加查询 age 的条件。

### 4.2 Mapper 动态代理

在调用 Mapper Interface 中的方法时，MyBatis 会自动为其创建代理对象，并将该代理对象作为实际执行对象。这个代理对象可以拦截接口中所有方法的调用，并在执行前后进行一些操作，例如记录日志、开启事务、添加缓存等。

下面是一个使用注解和 XML 绑定的例子：

```java
public interface UserMapper {
    @Select("SELECT * FROM user WHERE id = #{id}")
    User getUserById(int id);

    @Insert("INSERT INTO user(name, age, gender) VALUES(#{name},#{age},#{gender})")
    void insertUser(User user);

    @Update("UPDATE user SET name=#{name}, age=#{age}, gender=#{gender} WHERE id = #{id}")
    void updateUser(User user);

    @Delete("DELETE FROM user WHERE id=#{id}")
    void deleteUserById(int id);
}
```

```xml
<!-- UserMapper.xml -->
<mapper namespace="com.example.dao.UserMapper">
    <resultMap id="userResult" type="com.example.entity.User">
        <id column="id" property="id"/>
        <result column="name" property="name"/>
        <result column="age" property="age"/>
        <result column="gender" property="gender"/>
    </resultMap>

    <select id="getUserById" resultType="User">
        SELECT * FROM user WHERE id=#{id}
    </select>

    <insert id="insertUser" parameterType="User">
        INSERT INTO USER (name, age, gender) VALUES (#{name}, #{age}, #{gender})
    </insert>

    <update id="updateUser" parameterType="User" >
        UPDATE USER SET name=#{name}, age=#{age}, gender=#{gender} WHERE id = #{id}
    </update>

    <delete id="deleteUserById" parameterType="int">
        DELETE FROM USER WHERE id = #{id}
    </delete>
</mapper>
```

### 4.3 MyBatis 插件机制

MyBatis 插件机制可以让开发者在执行 SQL 语句前后添加一些自定义的逻辑，例如记录 SQL 执行时间、加密解密数据等。在插件机制中，可以通过动态代理拦截接口方法的调用，然后在方法执行前后实现自定义的逻辑。

下面是一个计算 SQL 执行时间的插件示例：

```java
@Intercepts({
    @Signature(type = StatementHandler.class, method = "query", args = {Statement.class, ResultHandler.class}),
    @Signature(type = StatementHandler.class, method = "update", args = {Statement.class})
})
public class SqlCostTimeInterceptor implements Interceptor {

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = invocation.proceed();
        long end = System.currentTimeMillis();
        long costTime = end - start;
        System.out.println("SQL执行时间为：" + costTime + " ms");
        return result;
    }
    
    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }
    
    @Override
    public void setProperties(Properties properties) {
        // 设置插件属性
    }
}
```

上述代码中，SqlCostTimeInterceptor 实现了 Interceptor 接口，并重写了其中的三个方法。在 intercept() 方法中计算 SQL 执行时间，并将其输出到控制台。在 plugin() 方法中通过调用 Plugin.wrap() 方法来创建代理对象并返回。在 setProperties() 方法中设置插件属性。

最后，在 mybatis-config.xml 文件中添加插件配置即可：

```xml
<plugins>
    <plugin interceptor="com.example.plugin.SqlCostTimeInterceptor">
    </plugin>
</plugins>
```

## 五、整合 Spring

MyBatis 可以与 Spring 框架集成，实现更加高效的数据库操作。整合后，可以使用 Spring 的 IoC 和 AOP 功能来管理和增强 MyBatis 的核心组件，使得应用程序的开发效率和运行效率都得到了极大的提升。

下面是一个使用 Spring 和 MyBatis 整合的例子：

### 5.1 添加依赖

在 pom.xml 文件中添加以下几个依赖：

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>${mybatis.version}</version>
</dependency>

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>${spring.version}</version>
</dependency>
```

### 5.2 创建数据源和事务管理器

```xml
<bean id="dataSource" class="org.apache.tomcat.jdbc.pool.DataSource">
    <property name="driverClassName" value="${jdbc.driverClassName}"/>
    <property name="url" value="${jdbc.url}"/>
    <property name="username" value="${jdbc.username}"/>
    <property name="password" value="${jdbc.password}"/>
</bean>
```

上述代码中，使用了 Tomcat 数据库连接池的 DataSource 实现，并设置了数据库连接相关的属性。这里的 ![{jdbc.driverClassName}、](https://math.jianshu.com/math?formula=%7Bjdbc.driverClassName%7D%E3%80%81){jdbc.url}、![{jdbc.username}、](https://math.jianshu.com/math?formula=%7Bjdbc.username%7D%E3%80%81){jdbc.password} 是从配置文件中读取的参数。

接着，需要定义一个事务管理器，用于控制事务的开启、提交和回滚：

```xml
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

上述代码中，使用了 Spring 提供的 DataSourceTransactionManager 实现，并将其关联到之前定义的数据源 bean 中。

### 5.3 创建 SqlSessionFactoryBean

在与 Spring 整合时，不能使用 MyBatis 提供的 SqlSessionFactory 来创建 SqlSessionFactoryBean，在整合后需要使用 Spring 提供的 SqlSessionFactoryBean。

```xml
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <property name="configLocation" value="classpath:mybatis-config.xml"/>
</bean>
```

上述代码中，使用 Spring 提供的 SqlSessionFactoryBean 实现，并将其关联到之前定义的数据源 bean 中，另外还可以设置 configLocation 属性来指定 MyBatis 的配置文件路径。

### 5.4 创建 MapperScannerConfigurer

MapperScannerConfigurer 可以扫描指定的包路径，找到 Mapper Interface 并为其创建代理对象。在 Spring 和 MyBatis 整合后，需要使用 MapperScannerConfigurer 来代替之前的 Mapper 接口配置。

```xml
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <property name="basePackage" value="com.example.dao"/>
    <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
</bean>
```

上述代码中，使用 MapperScannerConfigurer 扫描 com.example.dao 包下的 Mapper Interface 并为其创建代理对象，将 sqlSessionFactoryBeanName 属性设置为之前定义的 SqlSessionFactoryBean 的 bean id 即可。

### 5.5 使用 Spring 声明式事务

在整合 Spring 和 MyBatis 后，可以使用 Spring 提供的声明式事务管理方式来管理数据库事务。声明式事务是通过 AOP 实现的，在方法执行前后对事务进行开启、提交和回滚等操作。

首先，需要在 Spring 配置文件中添加以下事务管理器配置：

```xml
<tx:annotation-driven transaction-manager="transactionManager"/>
```

上述配置中，使用了 Spring 事务管理器并开启了基于注解的事务。

接着，在具体的 Service 类中，可以使用 @Transactional 注解来声明事务的范围和属性：

```java
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    
    // ...
}
```

上述代码中，使用了 Spring 的 @Service 和 @Transactional 注解来声明 UserServiceImpl 为服务类并开启事务。在实现类中，调用 Mapper Interface 中的方法来操作数据库，并在方法执行前后自动开启、提交和回滚事务。

## 六、总结

本文简单介绍了 MyBatis 的基本使用和高级用法，并讲解了如何将其整合到 Spring 框架中。MyBatis 是一款优秀的 ORM 框架，具有灵活性强、易于学习和使用等优点，适合各种规模的应用程序的开发。
