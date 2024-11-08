---
title: 组件Spring
icon: laptop-code
category:
  - 设计组件
tag:
  - 组件
---

# 1、Spring 概述

## 1.1、Spring 的概念和特点

**Spring 是一个轻量级的控制反转（IoC）和面向切面（AOP）的开源容器框架，它是由 Rod Johnson（音乐学博士）所创建，其核心就是为了解决企业应用开发的复杂性。**

Spring 是一款目前主流的 Java EE 轻量级开源框架，是 Java 世界最为成功的框架之一，自 2004 年 4 月，Spring 1.0 版本正式发布以来，Spring 已经步入到了第 5 个大版本，也就是我们常说的 Spring 5。本教程使用版本为 Spring 5.3.22。

Spring 自诞生以来备受青睐，一直被广大开发人员作为 Java 企业级应用程序开发的首选。时至今日，Spring 俨然成为了 Java EE 代名词，成为了构建 Java EE 应用的事实标准。

Spring 框架不局限于服务器端的开发。从简单性、可测试性和松耦合的角度而言，任何 Java 应用都可以从 Spring 中受益。Spring 框架还是一个超级粘合平台，除了自己提供功能外，还提供粘合其他技术和框架的能力。

Spring 致力于提供一个以统一的、高效的方式构造整个应用，并且可以将单层框架以最佳的组合揉和在一起建立一个连贯的体系。例如，通过 Spring 框架，整合 MyBatis 、SpringMVC等，也就是传说中的大杂烩。其主要具有以下特点：

- 方便解耦，简化开发：管理所有对象的创建和依赖的关系维护。

- AOP编程的支持：方便的实现对程序进行权限拦截、运行监控等功能。

- 声明式事务的支持：通过配置完成对事务的管理，而无需手动编程。

- 方便程序的测试：Spring对Junit4支持，可以通过注解方便的测试Spring程序。

- 方便集成各种优秀框架：内部提供了对各种优秀框架的直接支持。

- 降低JavaEE API的使用难度：封装JavaEE开发中非常难用的一些API（JDBC、JavaMail、远程调用等）。




## 1.2、Spring 的狭义和广义

在不同的语境中，Spring 所代表的含义是不同的。下面我们就分别从“广义”和“狭义”两个角度，对 Spring 进行介绍。

**广义上的 Spring 泛指以 Spring Framework 为核心的 Spring 技术栈。**

经过十多年的发展，Spring 已经不再是一个单纯的应用框架，而是逐渐发展成为一个由多个不同子项目（模块）组成的成熟技术，例如 Spring Framework、Spring MVC、SpringBoot、Spring Cloud、Spring Data、Spring Security 等，其中 Spring Framework 是其他子项目的基础。

这些子项目涵盖了从企业级应用开发到云计算等各方面的内容，能够帮助开发人员解决软件发展过程中不断产生的各种实际问题，给开发人员带来了更好的开发体验，子项目主要有以下几种：

- Spring Data：Spring 提供的数据访问模块，对 JDBC 和 ORM 提供了很好的支持。通过它，开发人员可以使用一种相对统一的方式，来访问位于不同类型数据库中的数据。

- Spring Batch：款专门针对企业级系统中的日常批处理任务的轻量级框架，能够帮助开发人员方便的开发出健壮、高效的批处理应用程序。

- Spring Security：前身为 Acegi，是 Spring 中较成熟的子模块之一。它是一款可以定制化的身份验证和访问控制框架。

- Spring Mobile：是对 Spring MVC 的扩展，用来简化移动端 Web 应用的开发。

- Spring Boot：是 Spring 团队提供的全新框架，它为 Spring 以及第三方库一些开箱即用的配置，可以简化 Spring 应用的搭建及开发过程。

- Spring Cloud：一款基于 Spring Boot 实现的微服务框架。它并不是某一门技术，而是一系列微服务解决方案或框架的有序集合。它将市面上成熟的、经过验证的微服务框架整合起来，并通过 Spring Boot 的思想进行再封装，屏蔽调其中复杂的配置和实现原理，最终为开发人员提供了一套简单易懂、易部署和易维护的分布式系统开发工具包。


**狭义的 Spring 特指 Spring Framework，通常我们将它称为 Spring 框架。**

Spring 框架是一个分层的、面向切面的 Java 应用程序的一站式轻量级解决方案，它是 Spring 技术栈的核心和基础，是为了解决企业级应用开发的复杂性而创建的。

- IOC：Inverse of Control 的简写，译为“控制反转”，指把创建对象过程交给 Spring 进行管理。

- AOP：Aspect Oriented Programming 的简写，译为“面向切面编程”。


AOP 用来封装多个类的公共行为，将那些与业务无关，却为业务模块所共同调用的逻辑封装起来，减少系统的重复代码，降低模块间的耦合度。另外，AOP 还解决一些系统层面上的问题，比如日志、事务、权限等。

Spring 是一种基于 Bean 的编程技术，它深刻地改变着 Java 开发世界。Spring 使用简单、基本的 Java Bean 来完成以前只有 EJB 才能完成的工作，使得很多复杂的代码变得优雅和简洁，避免了 EJB 臃肿、低效的开发模式，极大的方便项目的后期维护、升级和扩展。

在实际开发中，服务器端应用程序通常采用三层体系架构，分别为表现层（web）、业务逻辑层（service）、持久层（dao）。

Spring 致力于 Java EE 应用各层的解决方案，对每一层都提供了技术支持，例如表现成提供了对 Spring MVC、Struts2 等框架的整合；在业务逻辑层提供了管理事务和记录日志的功能；在持久层还可以整合 MyBatis、Hibernate 和 JdbcTemplate 等技术，对数据库进行访问。

这充分地体现了 Spring 是一个全面的解决方案，对于那些已经有较好解决方案的领域，Spring 绝不做重复的事情，这一理念即为“轮子理论”。

“轮子理论”，也即“不要重复发明轮子”，这是西方国家的一句谚语，意思是别人已经做过，我们需要用的时候，直接拿来用即可，而不要重新制造。将已出现的各种IT技术比作一个个“轮子”，当我们进行项目开发的时候，若已有的技术能满足我们的开发需求，我们不需要在去创造新的技术，只需要把现有的技术拿过来用就可以了。若已有的技术不能满足我们的开发需求，这时，我们就要去创造新的“轮子”。



## 1.3、Spring 的体系结构

Spring 框架基本涵盖了企业级应用开发的各个方面，它包含了 20 多个不同的模块。下图中包含了 Spring 框架的所有模块，这些模块可以满足一切企业级应用开发的需求，在开发过程中可以根据需求有选择性地使用所需要的模块。下面分别对这些模块的作用进行简单介绍。
![img_172.png](img_172.png)


### 1.3.1、Core Container（Spring 的核心容器）

Spring 的核心容器是其他模块建立的基础，由 Beans 模块、Core 核心模块、Context 上下文模块和 SpEL 表达式语言模块组成，没有这些核心容器，也不可能有 AOP、Web 等上层的功能。具体介绍如下。

- spring-core模块：封装了 Spring 框架的底层部分，包括资源访问、类型转换及一些常用工具类。。

- spring-beans模块：提供了BeanFactory与Bean的装配，使Spring成为一个容器，也就是提供了框架的基本组成部分，包括控制反转（IOC）和依赖注入（DI）功能

- spring-context模块：应用上下文，建立在 Core 和 Beans 模块的基础之上，集成 Beans 模块功能并添加资源绑定、数据验证、国际化、Java EE 支持、容器生命周期、事件传播等，提供一个框架式的对象访问方式，是访问定义和配置任何对象的媒介，使Spring成为一个框架。ApplicationContext 接口是上下文模块的焦点。

- spring-context-support模块：支持整合第三方库到Spring应用程序上下文，特别是用于高速缓存（EhCache、JCache）和任务调度（CommonJ、Quartz）的支持。

- spring-expression（SpELl）模块：Spring 表达式语言全称为“Spring Expression Language”，缩写为“SpEL”，提供了强大的表达式语言支持，支持访问和修改属性值，方法调用，支持访问及修改数组、容器和索引器，命名变量，支持算数和逻辑运算，支持从 Spring 容器获取 Bean，它也支持列表投影、选择和一般的列表聚合等。


### 1.3.2、AOP、Aspects、Instrumentation 和 Messaging（中间层）

在 Core Container 之上是 AOP、Aspects 等模块，具体介绍如下：

- spring-aop模块：提供了一个符合 AOP 要求的面向切面的编程实现，允许定义方法拦截器和切入点，将代码按照功能进行分离，以便干净地解耦。提供了面向切面编程实现，提供比如日志记录、权限控制、性能统计等通用功能和业务逻辑分离的技术，并且能动态的把这些功能添加到需要的代码中，这样各司其职，降低业务逻辑和通用功能的耦合。

- spring-aspects模块：提供了与 AspectJ 的集成功能，AspectJ是 一个功能强大且成熟的面向切面编程（AOP） 框架。

- spring-instrument模块：提供了类工具支持和类加载器的实现，可以在特定的应用服务器中使用。

- spring-messaging模块：Spring 4.0 以后新增了消息模块，该模块提供了对消息传递体系结构和协议的支持。


### 1.3.3、Data Access/Integration（数据访问／集成）

数据访问／集成层包括 JDBC、ORM、OXM、JMS 和 Transactions 模块，具体介绍如下。

- spring-jdbc模块：提供了一个 JBDC 的样例模板，，使用这些模板能消除传统冗长的 JDBC 编码还有必须的事务控制，消除了烦琐的JDBC编码和数据库厂商特有的错误代码解析，而且能享受到 Spring 管理事务的好处。

- spring-orm模块：提供一个对象关系映射（Object-Relational Mapping）API 框架，包括 JPA、JDO、Hibernate 和 MyBatis 等。而且还可以使用 Spring 事务管理，无需额外控制事务。

- spring-oxm模块：提供了一个支持 Object /XML 映射的抽象层实现，如 JAXB、Castor、XMLBeans、JiBX 和 XStream。将 Java 对象映射成 XML 数据，或者将XML 数据映射成 Java 对象。

- spring-jms模块：指 Java 消息服务，提供一套 “消息生产者、消息消费者”模板用于更加简单的使用 JMS，JMS 用于用于在两个应用程序之间，或分布式系统中发送消息，进行异步通信。

- spring-tx模块：事务模块，支持用于实现特殊接口和所有POJO类的编程和声明式事务管理。


### 1.3.4、Web 模块

Spring 的 Web 层包括 Web、Servlet、WebSocket 和 Portlet 组件，具体介绍如下。

- spring-web模块：提供了基本的 Web 开发集成特性，例如多文件上传功能、使用的 Servlet 监听器的 IOC 容器初始化以及 Web 应用上下文。

- spring-webmvc模块：提供了一个 Spring MVC Web 框架实现。Spring MVC 框架提供了基于注解的请求资源注入、更简单的数据绑定、数据验证等及一套非常易用的 JSP 标签，完全无缝与 Spring 其他技术协作。

- spring-websocket模块：提供了简单的接口，用户只要实现响应的接口就可以快速的搭建 WebSocket Server，从而实现双向通讯。

- spring-portlet模块：提供了在 Portlet 环境中使用 MVC 实现，类似 Web-Servlet 模块的功能。




## 1.4 Spring Hello World

首先我们需要创建一个 Maven 项目，创建成功后，我们需要导入 Spring 的相关依赖，这里推荐直接导入 spring-webmvc，这个 jar 包默认会为我们导入其他的依赖包，导入如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>JavaEE</artifactId>
        <groupId>com.loner</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <artifactId>Spring</artifactId>

    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.22</version>
        </dependency>
    </dependencies>
</project>
```

依赖导入成功后，等待 Maven 拉取即可，接下来我们需要创建一个 HelloWorld 实体类，此类只有一个字符串了类型的字段，生成其 getter 和 setter 以及 toString()方法即可，实体类实现如下：

```java
public class HelloWorld {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorld{" + "message='" + message + '\'' + '}';
    }
}
```

实体类创建成功后，我们就需要使用 Spring 的特有方式来装配 Bean，这也是 Spring 的核心思想，将对象的创建和销毁完全交付给 Spring 进行管理，我们只需要进行简单的配置即可使用。首先我们需要在 resource 目录下创建一个 Spring 的 xml 配置文件，名称随意，推荐使用 applicationContext.xml。创建成功后，需要引入 Spring 各个模块的约束，然后通过 `<bean></bean>`进行 Bean 的装配，具体实现如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 装配Bean，相当于new一个HelloWorld对象，id等同于变量名，class就是类路径 -->
    <bean id="helloWorld" class="com.loner.mj.pojo.HelloWorld">
        <!-- 设置属性及其对应的值，name为实体的属性名，value为属性的值 -->
        <property name="message" value="第一个Spring程序" />
    </bean>
</beans>
```

注意，这里的 Bean 装配是通过 xml 配置文件的方式实现的，还有注解的实现方式以及 Java 配置类的实现方式等。

Bean 装配后，我们需要通过 Spring 的入口进行应用的启动，此时我们需要实例化 ClassPathXmlApplicationContext 对象，此对象需要传入一个或多个 xml 配置文件，他是 ApplicationContext 接口的一个实现类，此接口的实现类有很多，这里我们只使用 ClassPathXmlApplicationContext 对象，实现方式如下：

```java
public class HelloTest {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        // getBean的属性值就是Bean标签的id值
        HelloWorld bean = (HelloWorld) applicationContext.getBean("helloWorld");
        System.out.println(bean.getMessage());
    }
}
```

到此为止，整个 Spring 应用即编写完成，启动程序后，控制台输出“第一个Spring程序”。从以上程序可以看出，我们从未手动的实例化过对象，我们只是在 Spring 的配置文件中，进行了 Bean 的装配，然后就可以在程序中使用此 Bean，这也印证了，Spring 框架无需我们考虑和关心 Bean 在何时实例化，我们只需要关心自己的核心业务即可，所有的 Bean 的创建和销毁都是 Spring 框架帮我们完成，因此接下来我们需要对这个框架的使用以及相关的原理进行探讨。



# 2、Spring IoC

## 2.1、IoC 和 DI 概述

### 2.1.1、IoC（控制反转） 的概念

IoC 是 Inversion of Control 的简写，译为“控制反转”，于1996年，Michael Mattson在一篇有关探讨面向对象框架的文章中提出。它不是一门技术，而是一种设计思想，是一个重要的面向对象编程法则，能够指导我们如何设计出松耦合、更优良的程序。

Spring 通过 IoC 容器来管理所有 Java 对象的实例化和初始化，控制对象与对象之间的依赖关系。我们将由 IoC 容器管理的 Java 对象称为 Spring Bean，它与使用关键字 new 创建的 Java 对象没有任何区别。IoC 容器是 Spring 框架中最重要的核心组件之一，它贯穿了 Spring 从诞生到成长的整个过程。因此，**IoC 的作用就是完成对象的创建和依赖的管理注入。**

在传统的 Java 应用中，一个类想要调用另一个类中的属性或方法，通常会先在其代码中通过 new Object() 的方式将后者的对象创建出来，然后才能实现属性或方法的调用。为了方便理解和描述，我们可以将前者称为“调用者”，将后者称为“被调用者”，也就是说，调用者掌握着被调用者对象创建的控制权。

但在 Spring 应用中，Java 对象创建的控制权是掌握在 IoC 容器手里的，其大致步骤如下。

1. 开发人员通过 XML 配置文件、注解、Java 配置类等方式，对 Java 对象进行定义，例如在 XML 配置文件中使用 `<bean>` 标签、在 Java 类上使用 @Component 注解等。

2. Spring 启动时，IoC 容器会自动根据对象定义，将这些对象创建并管理起来。这些被 IoC 容器创建并管理的对象被称为 Spring Bean。

3. 当我们想要使用某个 Bean 时，可以直接从 IoC 容器中获取（例如通过 ApplicationContext 的 getBean() 方法），而不需要手动通过代码（例如 new Obejct() 的方式）创建。


**IoC 带来的最大改变不是代码层面的，而是从思想层面上发生了“主从换位”的改变。原本调用者是主动的一方，它想要使用什么资源就会主动出击，自己创建；但在 Spring 应用中，IoC 容器掌握着主动权，调用者则变成了被动的一方，被动的等待 IoC 容器创建它所需要的对象（Bean）。**

**这个过程在职责层面发生了控制权的反转，把原本调用者通过代码实现的对象的创建，反转给 IoC 容器来帮忙实现，因此我们将这个过程称为 Spring 的“控制反转”。简单的理解就是原调用这相当于程序员，而 IoC 相当于用户，用户根据市场的变化随时修改程序，程序提供给用户以配置的方式来实现，而不需要大量的修改源代码来实现**

### 2.1.2、DI（依赖注入） 的概念

依赖注入（Denpendency Injection，简写为 DI）是 Martin Fowler 在 2004 年在对“控制反转”进行解释时提出的。Martin Fowler 认为“控制反转”一词很晦涩，无法让人很直接的理解“到底是哪里反转了”，因此他建议**使用“依赖注入”来代替“控制反转”**。

在面向对象中，对象和对象之间是存在一种叫做“依赖”的关系。简单来说，依赖关系就是在一个对象中需要用到另外一个对象，即对象中存在一个属性，该属性是另外一个类的对象，这种依赖一般都组合关系，还有一种就是继承关系。

**总结来说，依赖注入就是在 IoC 容器运行期间，动态地将某种依赖关系注入到对象之中，也就是说获得依赖对象的过程被反转了。依赖注入（DI）和控制反转（IoC）是从不同的角度的描述的同一件事情，就是指通过引入 IoC 容器，利用依赖关系注入的方式，实现对象之间的解耦。**

例如，有一个名为 A 的 Java 类，它的代码如下：

```java
public class A {
    String bid;
    B b;
}
```

从代码可以看出，A 中存在一个 B 类型的对象属性 b，此时我们就可以说 A 的对象依赖于对象 b（A 和 B 是组合关系），而依赖注入就是基于这种“依赖关系”而产生的。

我们知道，控制反转核心思想就是由 Spring 负责对象的创建。在对象创建过程中，Spring 会自动根据依赖关系，将它依赖的对象注入到当前对象中，这就是所谓的“依赖注入”。

**依赖注入本质上是 Spring Bean 属性注入的一种，只不过这个属性是一个对象属性而已**。

### 2.1.3、IoC 的工作原理

在 Java 软件开发过程中，系统中的各个对象之间、各个模块之间、软件系统和硬件系统之间，或多或少都存在一定的耦合关系。

若一个系统的耦合度过高，那么就会造成难以维护的问题，但完全没有耦合的代码几乎无法完成任何工作，这是由于几乎所有的功能都需要代码之间相互协作、相互依赖才能完成。因此我们在程序设计时，所秉承的思想一般都是在不影响系统功能的前提下，最大限度的降低耦合度。

IoC 底层通过工厂模式、Java 的反射机制、XML 解析等技术，将代码的耦合度降低到最低限度，其主要步骤如下：

1. 首先在配置文件（例如 Bean.xml）中，对各个对象以及它们之间的依赖关系进行配置；

2. 我们可以把 IoC 容器当做一个工厂，这个工厂的产品就是 Spring Bean；

3. 容器启动时会加载并解析这些配置文件，得到对象的基本信息以及它们之间的依赖关系；

4. IoC 利用 Java 的反射机制，根据类名生成相应的对象（即 Spring Bean），并根据依赖关系将这个对象注入到依赖它的对象中。


**由于对象的基本信息、对象之间的依赖关系都是在配置文件中定义的，并没有在代码中紧密耦合，因此即使对象发生改变，我们也只需要在配置文件中进行修改即可，而无须对 Java 代码进行修改，这就是 Spring IoC 实现解耦的原理。**

Spring 通过“轮子理论”进行设计，将传统的多个对象之间的复杂依赖关系，通过 IOC 容器进行解耦，把对象的创建和依赖交给 Spring 处理，使得各个对象之间的依赖由主动变为被动，把复杂系统分解成相互合作的对象，这些对象类通过封装以后，内部实现对外部是透明的，从而降低了解决问题的复杂度，而且可以灵活地被重用和扩展。IoC 相当于“粘合剂”，其整个实现思想如下图所示：
![img_173.png](img_173.png)

### 2.1.4、IoC 容器的两种实现

IoC 思想基于 IoC 容器实现的，IoC 容器底层其实就是一个 Bean 工厂。**Spring 框架为我们提供了两种不同类型 IoC 容器，它们分别是 BeanFactory 和 ApplicationContext。**

BeanFactory 是 IoC 容器的基本实现，也是 Spring 提供的最简单的 IoC 容器，它提供了 IoC 容器最基本的功能，由 `org.springframework.beans.factory.BeanFactory` 接口定义。最典型的Bean工厂，定义了IoC容器的基本功能规范。

BeanFactory 采用懒加载（lazy-load）机制，容器在加载配置文件时并不会立刻创建 Java 对象，只有程序中获取（使用）这个对象时才会创建，具体实现如下：

```java
public static void main(String[] args) {
    BeanFactory context = new ClassPathXmlApplicationContext("Beans.xml");
    HelloWorld obj = context.getBean("helloWorld", HelloWorld.class);
    obj.getMessage();
}
```

注意：BeanFactory 是 Spring 内部使用接口，通常情况下不提供给开发人员使用，同时不建议使用此方式。

ApplicationContext 是 BeanFactory 接口的子接口，是对 BeanFactory 的扩展。ApplicationContext 在 BeanFactory 的基础上增加了许多企业级的功能，例如 AOP（面向切面编程）、国际化、事务支持等。ApplicationContext 接口有两个常用的实现类，具体如下：

- ClassPathXmlApplicationContext：加载类路径 ClassPath 下指定的 XML 配置文件，并完成 ApplicationContext 的实例化工作。

- FileSystemXmlApplicationContext：加载指定的文件系统路径中指定的 XML 配置文件，并完成 ApplicationContext 的实例化工作。


例如，修改上述第一个 Spring 程序中的实例化方法，使其能够加载指定文件系统路径中的配置文件，具体实现如下：

```java
public static void main(String[] args) {
    //使用 FileSystemXmlApplicationContext 加载指定路径下的配置文件 Bean.xml
    ApplicationContext context = new FileSystemXmlApplicationContext("D:\\eclipe workspace\\spring workspace\\HelloSpring\\src\\Beans.xml");
    HelloWorld obj = context.getBean("helloWorld", HelloWorld.class);
    obj.getMessage();
}
```



## 2.2、Spring Bean

### 2.2.1、Bean 的定义

由 Spring IoC 容器管理的对象称为 Bean，Bean 根据 Spring 配置文件中的信息创建。我们可以把 Spring IoC 容器看作是一个大工厂，Bean 相当于工厂的产品。如果希望这个大工厂生产和管理 Bean，就需要告诉容器需要哪些 Bean，以哪种方式装配。

Spring 配置文件支持两种格式，即 XML 文件格式和 Properties 文件格式。

- Properties 配置文件主要以 key-value 键值对的形式存在，只能赋值，不能进行其他操作，适用于简单的属性配置。

- XML 配置文件采用树形结构，结构清晰，相较于 Properties 文件更加灵活。但是 XML 配置比较繁琐，适用于大型的复杂的项目。


通常情况下，Spring 的配置文件都是使用 XML 格式的。XML 配置文件的根元素是 `<beans>`，该元素包含了多个子元素 `<bean>`。每一个 `<bean>` 元素都定义了一个 Bean，并描述了该 Bean 是如何被装配到 Spring 容器中的。例如在Spring Hello World中的配置一样。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="helloWorld" class="com.loner.mj.pojo.HelloWorld">
        <property name="message" value="第一个Spring程序" />
    </bean>
</beans>
```

在 XML 配置的 `<beans>` 元素中可以包含多个属性或子元素，常用的属性或子元素如下所示：

- id：Bean 的唯一标识符（变量名），Spring IoC 容器对 Bean 的配置和管理都通过该属性完成。id 的值必须以字母开始，可以使用字母、数字、下划线等符号。

- name：该属性表示 Bean 的名称（别名），我们可以通过 name 属性为同一个 Bean 同时指定多个名称，每个名称之间用逗号或分号隔开。Spring 容器可以通过 name 属性配置和管理容器中的 Bean。

- class：该属性指定了 Bean 的具体实现类，它必须是一个完整的类名，即类的全限定名。

- scope：表示 Bean 的作用域，属性值可以为 singleton（单例）、prototype（原型）、request、session 和 - global Session。默认值是 singleton。

- constructor-arg：`<bean>` 元素的子元素，我们可以通过该元素，将构造参数传入，以实现 Bean 的实例化。该元素的 index 属性指定构造参数的序号（从 0 开始），type 属性指定构造参数的类型。

- property：`<bean>`元素的子元素，用于调用 Bean 实例中的 setter 方法对属性进行赋值，从而完成属性的注入。该元素的 name 属性用于指定 Bean 实例中相应的属性名。

- ref：`<property> 和 <constructor-arg>` 等元素的子元索，用于指定对某个 Bean 实例的引用，即 `<bean>` 元素中的 id 或 name 属性。

- value：`<property> 和 <constractor-arg>` 等元素的子元素，用于直接指定一个常量值。

- list、set、map：用于封装 List 或数组类型、Set类型以及Map类型的属性注入。

- entry：`<map>` 元素的子元素，用于设置一个键值对。其 key 属性指定字符串类型的键值，ref 或 value 子元素指定其值。

- init-method：容器加载 Bean 时调用该方法，类似于 Servlet 中的 init() 方法

- destroy-method：容器删除 Bean 时调用该方法，类似于 Servlet 中的 destroy() 方法。该方法只在 scope=singleton 时有效。

- lazy-init：懒加载，值为 true，容器在首次请求时才会创建 Bean 实例；值为 false，容器在启动时创建 Bean 实例。该方法只在 scope=singleton 时有效




### 2.2.2、Bean 的依赖注入

Spring 主要有三种属性注入的方式，分贝是构造函数注入、setter注入（又称属性注入）以及拓展注入方式。在演示三种注入方式之前，我们首先创建一个用于测试的 Bean。

```java
public class Student {
    private String name; //基本类型
    private Classes classes; // 对象类型
    private String[] array; // 数组类型
    private List<String> list; // List集合类型
    private Map<String, String> map; // Map集合类型
    private Set<Integer> set; // Set集合类型
    private Properties properties; // 配置文件类型
	
    // 此处省略getter、setter、有参构造以及toString
}

```

**构造函数注入**  
通过 Bean 的带参构造函数注入时，首先要在 Bean 中添加一个有参构造函数，构造函数内的每一个参数代表一个需要注入的属性，其次需要在 `<bean>` 元素内使用 `<constructor-arg>` 元素，对构造函数内的属性进行赋值，Bean 的构造函数内有多少参数，就需要使用多少个 `<constructor-arg>` 元素，此标签的属性和`<property>`一样，其实现主要如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- 构造函数注入 -->
    <bean id="student" class="com.loner.mj.pojo.Student">
        <constructor-arg name="name" value="张三" />
    </bean>
</beans>
```

**setter 注入（属性注入）**  
在 Spring 实例化 Bean 的过程中，IoC 容器首先会调用默认的构造方法（无参构造方法）实例化 Bean（Java 对象），然后通过 Java 的反射机制调用这个 Bean 的 setXxx() 方法，将属性值注入到 Bean 中。

使用 setter 注入的方式进行属性注入，首先需要在 Bean 中提供一个默认的无参构造函数（在没有其他带参构造函数的情况下，可省略），并为所有需要注入的属性提供一个 setXxx() 方法，其次需要在 xml 配置文件使用 `<bean>` 元素内使用 `<property>` 元素对各个属性进行赋值，其实现主要如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- 依赖注入 -->
    <bean id="classes" class="com.loner.mj.pojo.Classes">
        <property name="name" value="一年级1班" />
    </bean>

    <!-- setter注入（属性注入） -->
    <bean id="student2" class="com.loner.mj.pojo.Student">
        <!-- 基本类型 -->
        <property name="name" value="张三" />
        <!-- 对象类型 -->
        <property name="classes" ref="classes" />
        <!-- 数组类型 -->
        <property name="array">
            <array>
                <value>元素1</value>
                <value>元素2</value>
            </array>
        </property>
        <!-- list集合类型 -->
        <property name="list">
            <list>
                <value>元素1</value>
                <value>元素1</value>
            </list>
        </property>
        <!-- set集合类型 -->
        <property name="set">
            <set>
                <value>1</value>
                <value>2</value>
            </set>
        </property>
        <!-- map集合类型 -->
        <property name="map">
            <map>
                <entry key="键" value="值" />
            </map>
        </property>
        <!-- 配置文件类型 -->
        <property name="properties">
            <props>
                <prop key="键">值</prop>
            </props>
        </property>
    </bean>
</beans>
```

程序运行之后，输出的结果为：`Student{name='张三', classes=Classes{name='一年级1班'}, array=[元素1, 元素2], list=[元素1, 元素1], map={键=值}, set=[1, 2], properties={键=值}}`

**拓展方式注入**  
我们在通过构造函数或 setter 方法进行属性注入时，通常是在 `<bean>` 元素中嵌套 `<property> 和 <constructor-arg>` 元素来实现的，这种方式虽然结构清晰，但书写较繁琐。

Spring 给我们提供了两种拓展方式来实现依赖注入，分别是`p 命名空间和c命名空间`，其中p命名空间是 setter 方式属性注入的一种快捷实现方式，c命名空间是构造函数注入的一种快捷实现方式。

通过它两，我们能够以 bean 属性的形式实现 setter 方式的属性注入和构造函数注入，而不再使用嵌套的 `<property> 和 <constructor-arg>` 元素，以实现简化 Spring 的 XML 配置的目的。

使用两种拓展方式之前，首先要确保 Bean 生成了 setter 方法，并且使用c命名空间时，需要确保具有无参和有参构造才可以，然后我们需要在 xml 配置文件引入两者的约束，其约束如下：

```xml
xmlns:p="http://www.springframework.org/schema/p"
xmlns:c="http://www.springframework.org/schema/c"
```

引入约束后，通过`c:参数名和p:属性名`的方式就可以给 Bean 注入依赖了，其实现如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- 拓展方式注入 -->
    <bean id="Bean 唯一标志符" class="包名+类名" p:普通属性="普通属性值" p:对象属性-ref="对象的引用">
    <bean id="student3" class="com.loner.mj.pojo.Student" c:name="刘备"></bean>
    <bean id="student4" class="com.loner.mj.pojo.Student" p:name="张三"></bean>
</beans>
```



### 2.2.3、Bean 的作用域

默认情况下，所有的 Spring Bean 都是单例的，也就是说在整个 Spring 应用中， Bean 的实例只有一个。

我们可以在 `<bean>` 元素中添加 scope 属性来配置 Spring Bean 的作用范围。例如，如果每次获取 Bean 时，都需要一个新的 Bean 实例，那么应该将 Bean 的 scope 属性定义为 prototype，如果 Spring 需要每次都返回一个相同的 Bean 实例，则应将 Bean 的 scope 属性定义为 singleton。

Spring 5 共提供了 6 种 scope 作用域，如下表。

|作用范围|描述|
|---|---|
|singleton|默认值，单例模式，表示在 Spring 容器中只有一个 Bean 实例|
|prototype|原型模式，表示每次通过 Spring 容器获取 Bean 时，容器都会创建一个新的 Bean 实例。|
|request|每次 HTTP 请求，容器都会创建一个 Bean 实例。该作用域只在当前 HTTP Request 内有效。|
|session|同一个 HTTP Session 共享一个 Bean 实例，不同的 Session 使用不同的 Bean 实例。该作用域仅在当前 HTTP Session 内有效。|
|application|同一个 Web 应用共享一个 Bean 实例，该作用域在当前 ServletContext 内有效。与 singleton 类似，但 singleton 表示每个 IoC 容器中仅有一个 Bean 实例，而一个 Web 应用中可能会存在多个 IoC 容器，但一个 Web 应用只会有一个 ServletContext，也可以说 application 才是 Web 应用中货真价实的单例模式。|
|websocket|websocket 的作用域是 WebSocket ，即在整个 WebSocket 中有效。|

注意：在以上 6 种 Bean 作用域中，除了 singleton 和 prototype 可以直接在常规的 Spring IoC 容器（例如 ClassPathXmlApplicationContext）中使用外，剩下的都只能在基于 Web 的 ApplicationContext 实现（例如 XmlWebApplicationContext）中才能使用，否则就会抛出一个 IllegalStateException 的异常。

**singleton（单例模式）**  
singleton 是 Spring 容器默认的作用域。当 Bean 的作用域为 singleton 时，Spring IoC 容器中只会存在一个共享的 Bean 实例。这个 Bean 实例将存储在高速缓存中，所有对于这个 Bean 的请求和引用，只要 id 与这个 Bean 定义相匹配，都会返回这个缓存中的对象实例。

如果一个 Bean 定义的作用域为 singleton ，那么这个 Bean 就被称为 singleton bean。在 Spring IoC 容器中，singleton bean 是 Bean 的默认创建方式，可以更好地重用对象，节省重复创建对象的开销。

**Singleton 是单例类型，就是在创建起容器时就同时自动创建了一个 Bean 的对象，不管你是否使用，他都存在了，每次获取到的对象都是同一个对象**。注意，singleton 作用域是 Spring 中的缺省作用域

在 Spring 配置文件中，可以使用 `<bean>` 元素的 scope 属性，将 Bean 的作用域定义成 singleton，其配置方式如下所示：`<bean id="..." class="..." scope="singleton"/>`，原理图如下所示：
![img_174.png](img_174.png)


**prototype（原型模式）**  
如果一个 Bean 定义的作用域为 prototype，那么这个 Bean 就被称为 prototype bean。对于 prototype bean 来说，Spring 容器会在每次请求该 Bean 时，都创建一个新的 Bean 实例。

从某种意义上说，Spring IoC 容器对于 prototype bean 的作用就相当于 Java 的 new 操作符。它只负责 Bean 的创建，至于后续的生命周期管理则都是由客户端代码完成的，详情请参看《Spring Bean 生命周期》。

**prototype 是原型类型，它在我们创建容器的时候并没有实例化，而是当我们获取 Bean 的时候才会去创建一个对象，而且我们每次获取到的对象都不是同一个对象**。根据经验，对有状态的 Bean 应该使用 prototype 作用域，而对无状态的 Bean 则应该使用 singleton 作用域。

在 Spring 配置文件中，可以使用 `<bean>` 元素的 scope 属性将 Bean 的作用域定义成 prototype，其配置方式如下所示：<`bean id="..." class="..." scope="prototype"/>`，原理图如下所示：

![img_175.png](img_175.png)



### 2.2.4、Bean 的生命周期

**Spring Bean 的生命周期指的是从一个普通的Java类变成Bean的过程**。当一个 Bean 被实例化时，它可能需要执行一些初始化使它转换成可用状态。同样，当 Bean 不再需要，并且从容器中移除时，可能需要做一些清除工作。

尽管还有一些在 Bean 实例化和销毁之间发生的活动，但是本章将只讨论两个重要的生命周期回调方法，它们在 Bean 的初始化和销毁的时候是必需的。

为了定义安装和拆卸一个 Bean，我们只要声明带有 init-method 和/或 destroy-method 参数的 Bean 即可。init-method 属性指定一个方法，在实例化 Bean 时，立即调用该方法。同样，destroy-method 指定一个方法，只有从容器中移除 Bean 之后，才能调用该方法。

**Bean的生命周期可以简单的表达为：实例化（Instantiation）->属性赋值（Populate）->初始化（Initialization）->销毁（Destruction）**

接下来对 Bean 的整个生命周期做一个详细的流程，其主要包括：实例化 Bean、依赖注入、注入 Aware 接口、BeanPostProcessor、InitializingBean 与 init-method 以及 DisposableBean 和 destroy-method。其实现实例化过程如下：
![img_176.png](img_176.png)


1. **实例化 Bean**：对于 BeanFactory 容器，当客户向容器请求一个尚未初始化的 Bean 时，或初始化 Bean 的时候需要注入另一个尚未初始化的依赖时，容器就会调用 createBean 进行实例化。而对于 ApplicationContext 容器，当容器启动结束后，便实例化所有的 Bean。容器通过获取 BeanDefinition 对象中的信息进行实例化，并且这一步仅仅是简单的实例化，并未进行依赖注入。实例化对象被包装在 BeanWrapper 对象中，BeanWrapper 提供了设置对象属性的接口，从而避免了使用反射机制设置属性。

2. **依赖注入**：实例化后的对象被封装在 BeanWrapper 对象中，并且此时对象仍然是一个原生的状态，并没有进行依赖注入。紧接着，Spring 根据 BeanDefinition 中的信息进行依赖注入，并且通过 BeanWrapper 提供的设置属性的接口完成依赖注入。

3. **注入 Aware 接口**：紧接着，Spring 会检测该对象是否实现了 xxxAware 接口，并将相关的 xxxAware 实例注入给Bean。

    - 如果 Bean 实现了 BeanNameAware 接口，Spring 将 Bean 的名称传给 setBeanName() 方法；

    - 如果 Bean 实现了 BeanFactoryAware 接口，Spring 将调用 setBeanFactory() 方法，将 BeanFactory 实例传进来；

    - 如果 Bean 实现了 ApplicationContextAware 接口，它的 setApplicationContext() 方法将被调用，将应用上下文的引用传入到 Bean 中；

4. **BeanPostProcessor**：当经过上述几个步骤后，Bean 对象已经被正确构造，但如果你想要对象被使用前再进行一些自定义的处理，就可以通过 BeanPostProcessor 接口实现。该接口提供了两个函数:

    - postProcessBeforeInitialzation( Object bean, String beanName )：当前正在初始化的 Bean 对象会被传递进来，我们就可以对这个 Bean 作任何处理，这个函数会先于 InitialzationBean 执行，因此称为前置处理。所有Aware接口的注入就是在这一步完成的。

    - postProcessAfterlnitialzation( Object bean, String beanName )：当前正在初始化的 Bean 对象会被传递进来，我们就可以对这个 Bean 作任何处理，这个函数会在 InitialzationBean 完成后执行，因此称为后置处理。

5. **InitializingBean 与 init-method**：当 BeanPostProcessor 的前置处理完成后就会进入本阶段。InitializingBean 接口只有一个函数：afterPropertiesSet()。

    - 这一阶段也可以在bean正式构造完成前增加我们自定义的逻辑，但它与前置处理不同，由于该函数并不会把当前 Bean 对象传进来，因此在这一步没办法处理对象本身，只能增加一些额外的逻辑。若要使用它，我们需要让 Bean 实现该接口，并把要增加的逻辑写在该函数中，然后 Spring 会在前置处理完成后检测当前 Bean 是否实现了该接口，并执行 afterPropertiesSet 函数。

    - 当然，Spring 为了降低对客户代码的侵入性，给 Bean 的配置提供了 init-method 属性，该属性指定了在这一阶段需要执行的函数名。Spring 便会在初始化阶段执行我们设置的函数。init-method 本质上仍然使用了 InitializingBean 接口。

6. DisposableBean 和 destroy-method：和 init-method 一样，通过给 destroy-method 指定函数，就可以在 Bean 销毁前执行指定的逻辑。若 Bean 实现了 DisposableBean 接口，Spring 将调用它的 distroy() 接口方法。同样的，如果 Bean 使用了 destroy-method 属性声明了销毁方法，则该方法被调用；


这里特别说明一下 Awar e接口，Spring 的依赖注入最大亮点就是所有的 Bean 对 Spring 容器的存在是没有意识的。但是在实际项目中，我们有时不可避免的要用到 Spring 容器本身提供的资源，这时候要让 Bean 主动意识到 Spring 容器的存在，才能调用 Spring 所提供的资源，这就是 Spring 的 Aware 接口。

Aware 接口是个标记接口，标记这一类接口是用来“感知”属性的，Aware 的众多子接口则是表征了具体要“感知”什么属性。例如 BeanNameAware 接口用于“感知”自己的名称，ApplicationContextAware 接口用于“感知”自己所处的上下文。

其实 Spring 的 Aware 接口是 Spring设 计为框架内部使用的，在大多数情况下，我们不需要使用任何 Awar e接口，除非我们真的需要它们，实现了这些接口会使应用层代码耦合到 Spring 框架代码中。

接下来我们通过一个例子来演示一下 Spring Bean 的生命周期。首先通过在实体类中定义两个方法，一个初始化方法和一个销毁方法，然后在 xml 配置文件中，对 Bean 进行装配，并且通过 `init-method="初始化方法" destroy-method="销毁方法"`两个属性指定我们自定义的初始化和销毁方法，实现代码如下：

```java
public class SpringBeanSmzq {
    private String massage;

    public void init() {
        System.out.println("初始化Bean");
    }

    public void destroy() {
        System.out.println("销毁Bean");
    }

    public String getMassage() {
        return massage;
    }

    public void setMassage(String massage) {
        this.massage = massage;
    }
}

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="smzq" class="com.loner.mj.pojo.SpringBeanSmzq"
          init-method="init" destroy-method="destroy">
        <property name="massage" value="测试Spring Bean的生命周期" />
    </bean>
</beans>
```

测试程序程序如下，最终输出结果为：初始化Bean -> 测试Spring Bean的生命周期 -> 销毁Bean

```java
public class SpringBeanSmzqTest {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("smzq.xml");
        SpringBeanSmzq smzq = (SpringBeanSmzq) applicationContext.getBean("smzq");
        System.out.println(smzq.getMassage());
        // 调用销毁方法
        applicationContext.registerShutdownHook();
    }
}

```



### 2.2.5、Bean 的自动装配

我们把 Spring 在 Bean 与 Bean 之间建立依赖关系的行为称为“装配”。

Spring 的 IOC 容器虽然功能强大，但它本身不过只是一个空壳而已，它自己并不能独自完成装配工作。需要我们主动将 Bean 放进去，并告诉它 Bean 和 Bean 之间的依赖关系，它才能按照我们的要求完成装配工作。

在前面的学习中，我们都是在 XML 配置中通过 `<constructor-arg>和 <property>` 中的 ref 属性，手动维护 Bean 与 Bean 之间的依赖关系的。

例如，一个部门（Dept）可以有多个员工（Employee），而一个员工只可能属于某一个部门，这种关联关系定义在 XML 配置的 Bean 定义中，形式如下。

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
    <!--部门 Dept 的 Bean 定义-->
    <bean id="dept" class="net.biancheng.c.Dept"></bean>
    <!--雇员 Employee 的 Bean 定义-->
    <bean id="employee" class="net.biancheng.c.Employee">
        <!--通过 <property> 元素维护 Employee 和 Dept 的依赖关系-->
        <property name="dept" ref="dept"></property>
    </bean>
</beans>
```

对于只包含少量 Bean 的应用来说，这种方式已经足够满足我们的需求了。但随着应用的不断发展，容器中包含的 Bean 会越来越多，Bean 和 Bean 之间的依赖关系也越来越复杂，这就使得我们所编写的 XML 配置也越来越复杂，越来越繁琐。

我们知道，过于复杂的 XML 配置不但可读性差，而且编写起来极易出错，严重的降低了开发人员的开发效率。为了解决这一问题，Spring 框架还为我们提供了“自动装配”功能。

**Spring 自动装配及装配规则，**

Spring 的自动装配功能可以让 Spring 容器依据某种规则（自动装配的规则，有五种），为指定的 Bean 从应用的上下文（AppplicationContext 容器）中查找它所依赖的 Bean，并自动建立 Bean 之间的依赖关系。而这一过程是在完全不使用任何 `<constructor-arg>和 <property>` 元素 ref 属性的情况下进行的。

Spring 的自动装配功能能够有效地简化 Spring 应用的 XML 配置，因此在配置数量相当多时采用自动装配降低工作量。Spring 框架式默认不支持自动装配的，要想使用自动装配，则需要对 Spring XML 配置文件中 `<bean>` 元素的 autowire 属性进行设置。

Spring 共提供了 5 中自动装配规则，它们分别与 autowire 属性的 5 个取值对应，具体说明如下表：

- byName：按名称自动装配。Spring 会根据的 Java 类中对象属性的名称，在整个应用的上下文 ApplicationContext（IoC 容器）中查找。若某个 Bean 的 id 或 name 属性值与这个对象属性的名称相同，则获取这个 Bean，并与当前的 Java 类 Bean 建立关联关系。

- byTyp：按类型自动装配。Spring 会根据 Java 类中的对象属性的类型，在整个应用的上下文 ApplicationContext（IoC 容器）中查找。若某个 Bean 的 class 属性值与这个对象属性的类型相匹配，则获取这个 Bean，并与当前的 Java 类的 Bean 建立关联关系。

- constructo：与 byType 模式相似，不同之处在与它应用于构造器参数（依赖项），如果在容器中没有找到与构造器参数类型一致的 Bean，那么将抛出异常。其实就是根据构造器参数的数据类型，进行 byType 模式的自动装配。

- default：表示默认采用上一级元素 `<beans>` 设置的自动装配规则（default-autowire）进行装配。

- no：默认值，表示不使用自动装配，Bean 的依赖关系必须通过`<constructor-arg>和 <property>`元素的 ref 属性来定义。


接下来我们主要针对按照名称装配和按照类型装配做一个详细的演示。首先准备一个部门实体类 Dept，然后再准备一个员工表 Employee，这里只给出对应的属性，省略 getter、setter、构造方法以及 toString 等，具体代码如下：

```java
public class Dept {
    private String name;

    // 省略剩余的代码
}


public class Employee {
    private String name;

    // 组合 Dept
    private Dept dept;

    // 省略剩余的代码
}
```

然后我们再准备一个测试类，测试类每次都只获取 Employee ，然后在 xml 配置中修改对应的装配方式进行测试，具体代码如下：

```java
public class SpringBeanZdzp {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("zdzp.xml");
        Employee employee = (Employee) applicationContext.getBean("employee");
        System.out.println(employee);
    }
}
```

**按照属性名称自动装配**

首先我们通过按照属性名称自动装配，也就是将 autowire 的值修改为 byName。 注意，XML 文件中 Bean 的 id 或 name 必须与类中的属性名称相同。当 id 或者 name 只有一个相同时，则装配所匹配到的，否则两者都不相同时，则为 null，以下代码最终运行的结果为：Employee{name='张三', dept=Dept{name='生产部门'}}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="dept" class="com.loner.mj.pojo.Dept">
        <property name="name" value="生产部门" />
    </bean>

    <bean id="dept1" class="com.loner.mj.pojo.Dept">
        <property name="name" value="销售部门" />
    </bean>

    <bean id="employee" class="com.loner.mj.pojo.Employee" autowire="byName">
        <property name="name" value="张三" />
    </bean>
</beans>
```

**按照对象类型自动装配**

按照对象类型进行自动装配时，需要将 autowire 的值修改为 byType，表示按类中对象属性数据类型进行自动装配。即使 XML 文件中 Bean 的 id 或 name 与类中的属性名不同，只要 Bean 的 class 属性值与类中的对象属性的类型相同，就可以完成自动装配。如果 Dept 类型的 Bean 有多个，则这边会报错，不知道具体要装配哪一个，因此按照对象类型进行自动装配时，只能具有一个该类型的 Bean。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="dept1" class="com.loner.mj.pojo.Dept">
        <property name="name" value="生产部门" />
    </bean>

    <!--<bean id="dept2" class="com.loner.mj.pojo.Dept">
        <property name="name" value="销售部门" />
    </bean>-->

    <!-- 如果 Dept 类型的 Bean 有多个，则这边会报错，因为同一个类型的 Bean 有多个时，不知道具体要装配哪一个，具体信息如下-->
    <!-- Could not autowire. There is more than one bean of 'Dept' type. Beans: dept1,dept2. Properties: 'dept' -->
    <bean id="employee" class="com.loner.mj.pojo.Employee" autowire="byType">
        <property name="name" value="张三" />
    </bean>
</beans>
```



## 2.3、Spring 注解开发和 JavaConfig 配置

### 2.3.1、注解开发

从 Java 5 开始，Java 增加了对注解（Annotation）的支持，它是代码中的一种特殊标记，可以在编译、类加载和运行时被读取，执行相应的处理。开发人员可以通过注解在不改变原有代码和逻辑的情况下，在源代码中嵌入补充信息。

Spring 从 2.5 版本开始提供了对注解技术的全面支持，我们可以使用注解来实现自动装配，简化 Spring 的 XML 配置。

Spring 通过注解实现自动装配的步骤如下：引入依赖 -> 开启组件扫描 -> 使用注解定义 Bean -> 依赖注入。

**1、引入依赖**

---

注意，除了 Spring 的四个基础 jar 包和 commons-logging-xxx.jar 外，想要使用注解实现 Spring 自动装配，还需要引入 Spring 提供的 spring-aop 的 Jar 包。这里我们默认引入 spring-webmvc，此包会自动下载我们需要的几个核心依赖，包括core、context、aop、beans等。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.22</version>
        </dependency>
    </dependencies>
</project>
```

**2、引入约束、开启组件扫描**

---

Spring 默认不使用注解装配 Bean，因此我们需要在 Spring 的 XML 配置中，通过 `<context:component-scan>` 元素开启 Spring Beans的自动扫描功能。开启此功能后，Spring 会自动从扫描指定的包（base-package 属性设置）及其子包下的所有类，如果类上使用了 @Component 注解及其衍生注解，就将该类装配到容器中。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 开始组件扫描 -->
    <context:component-scan base-package="com.loner.mj.pojo" />
</beans>
```

注意：在使用 `<context:component-scan`> 元素开启自动扫描功能前，首先需要在 XML 配置的一级标签 `<beans>` 中添加 context 相关的约束。

**3、使用注解定义 Bean**

---

Spring 提供了以下多个注解，这些注解可以直接标注在 Java 类上，将它们定义成 Spring Bean，注意，以下四个组件的作用都相同，其他三个注解都是 @Component 注解的衍生，只是为了适应 MVC 架构风格。

- @Component：该注解用于描述 Spring 中的 Bean，它是一个泛化的概念，仅仅表示容器中的一个组件（Bean），并且可以作用在应用的任何层次，例如 Service 层、Dao 层等。使用时只需将该注解标注在相应类上即可。

- @Repository：该注解用于将数据访问层（Dao 层）的类标识为 Spring 中的 Bean，其功能与 @Component 相同。

- @Service：该注解通常作用在业务层（Service 层），用于将业务层的类标识为 Spring 中的 Bean，其功能与 @Component 相同。

- @Controller：该注解通常作用在控制层（如 Struts2 的 Action、SpringMVC 的 Controller），用于将控制层的类标识为 Spring 中的 Bean，其功能与 @Component 相同。


**4、基于注解方式实现依赖注入**

---

我们可以通过以下注解将定义好 Bean 装配到其它的 Bean 中，注意：@Autowired 注解是 Spring 的，而 @Resource 是 Java 本身的注解，两者都默认替代对象属性的 setter 方法。

- @Autowired：可以应用到 Bean 的属性变量、setter 方法、非 setter 方法及构造函数等，默认按照 Bean 的类型进行装配。**@Autowired 注解默认按照 Bean 的类型进行装配**，默认情况下它要求依赖对象必须存在，如果允许 null 值，可以设置它的 required 属性为 false。如果我们想使用按照名称（byName）来装配，可以结合 @Qualifier 注解一起使用。

- @Resource：作用与 Autowired 相同，区别在于 @Autowired 默认按照 Bean 类型装配，而 **@Resource 默认按照 Bean 的名称进行装配**。@Resource 中有两个重要属性：name 和 type，Spring 将 name 属性解析为 Bean 的实例名称，type 属性解析为 Bean 的实例类型。

    - 如果指定 name 属性，则按实例名称进行装配；

    - 如果指定 type 属性，则按 Bean 类型进行装配；

    - 如果都不指定，则先按 Bean 实例名称装配，如果不能匹配，则再按照 Bean 类型进行装配；如果都无法匹配，则抛出 NoSuchBeanDefinitionException 异常。

- @Qualifier：与 @Autowired 注解配合使用，会将默认的按 Bean 类型装配修改为按 Bean 的实例名称装配，Bean 的实例名称由 @Qualifier 注解的参数指定。

- @Value：将与配置文件中的键对应的值分配给其带注解的属性，也就是可以用来将外部的值动态注入到 Bean 中，在 @Value 注解中，可以使${} 与 #{} ，它们的区别如下：

    - @Value("${}")：可以获取对应属性文件中定义的属性值。

    - @Value("#{}")：表示 SpEl 表达式通常用来获取 bean 的属性，或者调用 bean 的某个方法。


我们通过创建两个 Java 实体类，然后分别使用 @Component 注解和 @Controller 注解（这里只是验证他们功能一致，不建议在这使用），然后在 AnnotationDevelopment 中注入 User，使用 @Autowired 注解，此注解默认采用的是对象类型自动装配，如果想要按照名称自动装配，使用 @Qualifier("users") 并指定名称即可。

```java
@Component
public class AnnotationDevelopment {
    @Value("普通属性")
    private String name;

    @Autowired
    private User user;

    // 省略 toString
}
```

```java
@Controller
public class User {

    @Value("张三")
    private String username;

    @Value("123456")
    private String password;

    // 省略 getter、setter、toString
}
```

使用注解定义 Bean 、通过注解实现依赖注入后，创建一个测试类，最终的输入结果为：  
AnnotationDevelopment{name='普通属性', user=User{username='张三', password='123456'}}

```java
public class ZhuJieTest {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("zhujie.xml");
        AnnotationDevelopment annotationDevelopment = applicationContext.getBean("annotationDevelopment", AnnotationDevelopment.class);
        System.out.println(annotationDevelopment);
    }
}
```



### 2.3.2、JavaConfig 配置

截止目前，我们都是使用的 XML 配置文件的方式来配置 Spring bean，这个方式是 Spring Bean 配置功能最强大的方式。但是，XML 配置文件的方式，弊端也是很明显的，随着项目的不断维护，XML 配置文件会变得越来越臃肿，使得维护困难程度越来越大，因此我们需要使用 JavaConfig 的方式来替代 XML 配置文件。

JavaConfig 是 Spring 的一个子项目，在 Spring4 之后变成了核心功能，这是一种完全使用 Java 的方式配置 Spring（本质上也是注解开发）。JavaConfig 配置，通过使用多个注解的方式，使得开发更加的方便，这也是SpringBoot脚手架的思想。

**@Configuration 和 @Bean 注解**

---

带有 @Configuration 的注解类表示这个类可以使用 Spring IoC 容器作为 Bean 定义的来源，**表示这个类代表的是一个配置文件**。  
@Bean 注解告诉 Spring，一个带有 @Bean 的注解方法将返回一个对象，该对象应该被注册为在 Spring 应用程序上下文中的 bean，如果不使用 @Bean 注解的 name 属性,则这个 bean 的 id 为方法名，相当于`<bean>`标签，同时 @Bean 注解具有和 `<bean>`标签相同的属性，例如生命周期回调的 initMethod 属性和 destroyMethod 属性。

最简单可行的 @Configuration 类如下所示（相当于一个 XML 配置文件）：

```java
@Configuration
// 配置组件扫描路径
@ComponentScan("com.loner.mj.pojo")
public class HelloWorldJavaConfig {

    @Bean
    public HelloWorld getHelloWorld() {
        return new HelloWorld();
    }
}
```

上面的代码将等同于下面的 XML 配置：

```xml
<beans>
   <bean id="helloWorld" class="com.loner.mj.pojo.HelloWorld" />
</beans>
```

在这里，带有 @Bean 注解的方法名称作为 bean 的 ID，它创建并返回实际的 bean。你的配置类可以声明多个 @Bean。一旦定义了配置类，你就可以使用 AnnotationConfigApplicationContext 来加载并把他们提供给 Spring 容器，如下所示：

```java
public class JavaConfigTest {
    public static void main(String[] args) {
        // 这里需要使用 AnnotationConfigApplicationContext 来加载配置并把它们提供给 Spring 容器
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(HelloWorldJavaConfig.class);
        HelloWorld helloWorld = applicationContext.getBean("getHelloWorld", HelloWorld.class);
        System.out.println(helloWorld);
    }
}
```

同时，你也可以加载各种配置类，代码如下所示：

```java
public static void main(String[] args) {
   AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
   ctx.register(AppConfig.class, OtherConfig.class);
   ctx.register(AdditionalConfig.class);
   ctx.refresh();
   MyService myService = ctx.getBean(MyService.class);
   myService.doStuff();
}
```

**注入 Bean 的依赖性和生命周期回调**

---

当 @Beans 依赖对方时，表达这种依赖性非常简单，只要有一个 bean 方法调用另一个，如下所示：

```java
@Configuration
public class HelloWorldJavaConfig {

    // name属性用来起别名，剩余的两个属性为Bean声明周期的初始和销毁方法
    @Bean(name = "helloWorld", initMethod = "init" , destroyMethod = "destroy")
    public HelloWorld getHelloWorld() {
        return new HelloWorld();
    }

    // 这里Bean之间的依赖注入只需要简单的调用即完成
    @Bean
    public Employee employee() {
        return new Employee("张三", dept());
    }

    @Bean
    public Dept dept() {
        return new Dept("生产部门");
    }
}
```

**配置合并**

---

使用 XML 配置文件进行 Spring 配置时，我们可以创建多个 XML 配置文件，最后在主 XMl 配置文件中，通过 `<import resource="配置文件"/>`标签就可以引入其他的配置文件，实现多人开发这种效果。因此，使用 JavaConfig 配置事，我们可以使用 @Import 注解来完成相同的操作，@import 注解的作用就是允许从另一个配置类中加载 @Bean 定义，模拟实现如下：

```java
@Configuration
@Import(ConfigB.class, ConfigC.class)
public class ConfigA {
   @Bean
   public A a() {
      return new A();
   }
}

@Configuration
public class ConfigB {
   @Bean
   public B b() {
      return new B();
   }
}

@Configuration
public class ConfigC {
   @Bean
   public C c() {
      return new C();
   }
}
```

同时，还可以使用 @ImportResoure 注解，其作用导入其他的 XML 配置文件（一般用于产品升级），等于在 XML 文件中的 import 标签，它的属性值是一个数组，具体示例如下：

```java
@ImportResource(value = { "classpath:applicationContext.xml","classpath:applicationContext1.xml"})
public class springconfig {

}
```

@PropertyResoure 该注解读取 property 属性配置文件，使用属性配置文件可以实现外部化配置，在程序之外提供数据，读取数据时，通过 @Value(value = “$(key)”) 来进行属性值的读取。具体实现如下：

```java
@component( "tiger")
public class Tiger {
    @value("${tiger.name}")
    private string name;
	
    @value("s{tiger.age}")
    private Integer age;
}

// 读取 resource 下的配置文件
@Configuration
@PropertySource("classpath:test.properties")
public class PropertyResourceTest {

}

```



# 3、Spring AOP

## 3.1、AOP 概述及相关概念

### 3.1.1、AOP 简介

Spring AOP 模块提供拦截器来拦截一个应用程序，例如，当执行一个方法时，你可以在方法执行之前或之后添加额外的功能。

AOP（Aspect Oriented Programming），面向切面编程，通过预编译方式和运行期间动态代理实现程序功能的统一维护的一种技术。AOP 是一种编程思想，是面向对象编程（OOP）的一种补充，面向对象编程将程序抽象成各个层次的对象，而面向切面编程是将程序抽象成各个切面，也就是 OOP 的关键单元模块度是类，而在 AOP 中单元模块度是切面。

依赖注入帮助你对应用程序对象相互解耦合，AOP 可以帮助你从它们所影响的对象中对横切关注点解耦，即：**AOP 的作用就是采取横向抽取机制，将日志记录，性能统计，安全控制，事务处理，异常处理等代码从业务逻辑代码中提取出来，解决了传统的纵向继承体系的代码重复问题，降低业务逻辑各个部分之间的耦合性，提高程序的可重用性，同时提高了开发的效率。**

**为什么需要 AOP**

---

想象下面的场景，开发中在多个模块间有某段重复的代码，我们通常是怎么处理的？显然，没有人会靠“复制粘贴”吧。在传统的面向过程编程中，我们也会将这段代码，抽象成一个方法，然后在需要的地方分别调用这个方法，这样当这段代码需要修改时，我们只需要改变这个方法就可以了。

然而需求总是变化的，有一天，新增了一个需求，需要再多出做修改，我们需要再抽象出一个方法，然后再在需要的地方分别调用这个方法，又或者我们不需要这个方法了，我们还是得删除掉每一处调用该方法的地方。

因此，实际开发中，我们仅仅只是需要关注核心的业务，而不需要对业务依赖的各个公共模块再进行修改，这时我们就需要使用 AOP，实际上涉及到多个地方具有相同的修改的问题我们都可以通过 AOP 来解决。

如下图所示，在实际的开发过程中，我们一般会将多个业务逻辑中，公共的部分抽取成一个个的横切关注点， 然后只需要关心核心业务的实现。当核心业务实现后，只需要将业务逻辑所需的这些横切关注点一一绑定即可。
![img_177.png](img_177.png)



**AOP 实现分类**

---

AOP 要达到的效果是，保证开发者不修改源代码的前提下，去为系统中的业务组件添加某种通用功能。AOP 的本质是由 AOP 框架修改业务组件的多个方法的源代码，也就是代理模式的典型应用。

按照 AOP 框架修改源代码的时机，可以将其分为两类：

- 静态 AOP 实现（静态代理）： AOP 框架在编译阶段对程序源代码进行修改，生成了静态的 AOP 代理类（生成的 *.class 文件已经被改掉了，需要使用特定的编译器），比如 AspectJ。

- 动态 AOP 实现（动态代理）：AOP 框架在运行阶段对动态生成代理对象（在内存中以 JDK 动态代理，或 CGlib 动态地生成 AOP 代理类），如 Spring AOP。


Spring AOP 的代理机制  
Spring 在运行期会为目标对象生成一个动态代理对象，并在代理对象中实现对目标对象的增强。Spring AOP 的底层是通过以下 2 种动态代理机制，为目标对象（Target Bean）执行横向织入的。

- JDK 动态代理：Spring AOP 默认的动态代理方式，若目标对象实现了若干接口，Spring 使用 JDK 的 java.lang.reflect.Proxy 类进行代理。

- CGLIB 动态代理：若目标对象没有实现任何接口，Spring 则使用 CGLIB 库生成目标对象的子类，以实现对目标对象的代理。


注意：由于被标记为 final 的方法是无法进行覆盖的，因此这类方法不管是通过 JDK 动态代理机制还是 CGLIB 动态代理机制都是无法完成代理的。

**Spring AOP 连接点**

---

Spring AOP 并没有像其他 AOP 框架（例如 AspectJ）一样提供了完成的 AOP 功能，它是 Spring 提供的一种简化版的 AOP 组件。其中最明显的简化就是，Spring AOP 只支持一种连接点类型：方法调用。您可能会认为这是一个严重的限制，但实际上 Spring AOP 这样设计的原因是为了让 Spring 更易于访问。

方法调用连接点是迄今为止最有用的连接点，通过它可以实现日常编程中绝大多数与 AOP 相关的有用的功能。如果需要使用其他类型的连接点（例如成员变量连接点），我们可以将 Spring AOP 与其他的 AOP 实现一起使用，最常见的组合就是 Spring AOP + ApectJ。



### 3.1.2、AOP 专业术语和通知类型

AOP 专业术语主要有一下几个，分别是：

---

- **横切关注点**：**影响应用多处的功能（安全、事务、日志），部分关注点横切程序代码中的数个模块，即在多个模块中都有出现**。例如：日志功能就是横切关注点的一个典型案例，日志功能往往横跨系统中的每个业务模块，即“横切”所有需要日志功能的类和方法体。所以我们说日志成为了横切整个系统对象结构的关注点 —— 也就叫做横切关注点啦，总结来说就是对那些方法进行拦截，拦截之后又如何处理。

- **Aspect（切面）**：**横切关注点被模块化为特殊的类，这些类称为切面**。Aspect 声明类似于 Java 中的类声明，在 Aspect 中会包含着一些 Pointcut 以及相应的 Advice，**即封装横切到系统功能的类**。切面的优势就是每个关注点现在都集中于一处，而不是分散到多处代码中，服务模块更简洁，服务模块只需关注核心代码。

- **Joinpoint（连接点）**：连接点是一个应用执行过程中能够插入一个切面的点，这个连接点可以是调用方法时、抛出异常时、甚至修改字段时，切面代码可以利用这些点插入到应用的正规流程中，程序执行过程中能够应用通知的所有点。**连接点就是需要被增强的方法。**

- **Pointcut（切点）**：**定义通知被应用的位置（在哪些连接点）**。切点会匹配通知所要织入的一个或者多个连接点，通常使用明确的类或者方法来指定这些切点。**即切点的作用就是需要处理的连接点的集合。**

- **Advice（增强）：拦截到连接点后的某个时机执行什么操作。** Advice 定义了在 Pointcut 里面定义的程序点具体要做的操作，它通过5种增强类型（前置、后置、异常、最终和环绕增强）来区别是在每个连接点的那个位置执行相应的操作。。

- **Target（目标对象）：所有被增强的代理对象**。被一个或者多个方面所通知的对象，这个对象永远是一个被代理对象，也称为被通知对象。

- **Weaving（织入）**：**将切面代码插入到目标对象后生成代理对象的过程**。把切面连接到其它的应用程序类型或者对象上，并创建一个被通知的对象，这些可以在编译时，类加载时和运行时完成。

- **Proxy（代理）**：增强应用到目标对象之后被动态创建的对象。

- **Introduction（引入）**：允许你添加新方法或属性到现有的类中。


Advice 增强（通知）类型主要有6种，分别如下：

---

- **前置增强（@Before）**：在连接点之前执行增强（通知），通常应用在权限监测、日志记录等。

- **后置增强（@AfterReturning）**：在连接点之后执行增强（通知），通常应用在提价事务、统计分析数据结果等。

- **异常增强（@AfterThrowing）**：在连接点抛出异常会后执行增强（通知），通常应用在回滚事务、日志记录的异常信息等。

- **最终增强（@After）**：无论怎样都要执行增强（通知），即不考虑连接点执行的结果，都会执行增强（通知），通常应用在释放资源等。

- **环绕增强（@Around）**：自定义方法执行增强（通知）的时机，通常应用在权限监测、日志记录、提价事务、统计分析数据结果、回滚事务、日志记录的异常信息以及释放资源等。环绕增强可以实现以上4种增强。

- **引入通知（@IntroductionInterceptor）**：在目标类中添加一些新的方法和属性。


了解了 AOP 的专业术语和 Advice 类型后，多少对这些概念有点模糊，因为在不同的文献资料上，这些概念都存在一定的差异，因此我们需要在实际的项目中，慢慢的理解这些概念。这里，我们通过一个完整的 AOP 的测试类来初步的理解一下这些概念，下图即为我对这些概念的初步了解。
![img_178.png](img_178.png)

## 3.2、

## 3.3 AOP 开发

### 3.1.1、AOP 的XML标签及对应的注解

**1、AOP 的 XML 标签**

---

基于 XML 配置是指通过 XML 配置文件定义切面、切入点及增强，所有的定义必须在`<aop:config>`元素内完成，因此我们对这个标签及其子标签进行一个详细的了解，主要如下：

- **aop:config**：开发 AspectJ 的顶层配置元素，在配置文件的`<beans>`可以包含多个该元素。

- **aop:aspect**：配置一个切面，是`<aop:config>`的子元素，属性 ref 指定定义切面的 Bean。

- **aop:pointcut**：配置切入点，`<aop:aspect>`的子元素，属性 expression 指定通知增强的哪些方法。

- **aop:before**：配置前置增强，`<aop:aspect>`的子元素 ，实现 method 指定前置增强方法，属性 pointcut-ref 指定关联的切入点。

- **aop:after-returning**：配置后置返回增强，`<aop:aspect>`的子元素 ，实现 method 指定后置返回增强方法，属性 pointcut-ref 指定关联的切入点，目标方法成功执行后执行。

- **aop:around**：配置环绕增强，`<aop:aspect>`的子元素 ，实现 method 指定环绕增强方法，属性 pointcut-ref 指定关联的切入点。

- **aop:after-throwing**：配置异常增强，`<aop:aspect>`的子元素 ，实现 method 指定异常通知方法，属性 pointcut-ref 指定关联的切入点 ，没有异常时不会执行。

- **aop:after**：配置最终增强，`<aop:aspect>`的子元素 ，实现 method 指定最终通知方法，属性 pointcut-ref 指定关联的切入点，不管是否发生异常都要执行。


**2、AOP 注解详解**

---

- **切面（@Aspect）**：配置切面，默认类名作为 id，可以自定义配置。

- **切入点（@Pointcut）**：就是带有通知的连接点，在程序中主要体现为书写切入点表达式。

- **前置增强（@Before("切入点")）**：在连接点之前执行增强（通知），通常应用在权限监测、日志记录等。

- **后置增强（@AfterReturning("切入点")）**：在连接点之后执行增强（通知），通常应用在提价事务、统计分析数据结果等。

- **异常增强（@AfterThrowing(value = "切入点", throwing = "异常类型")）**：在连接点抛出异常会后执行增强（通知），通常应用在回滚事务、日志记录的异常信息等。

- **最终增强（@After("切入点")）**：无论怎样都要执行增强（通知），即不考虑连接点执行的结果，都会执行增强（通知），通常应用在释放资源等。

- **环绕增强（@Around("切入点")）**：自定义方法执行增强（通知）的时机，通常应用在权限监测、日志记录、提价事务、统计分析数据结果、回滚事务、日志记录的异常信息以及释放资源等。环绕增强可以实现以上4种增强。


**3、JointPoint 对象详解**

---

JointPoint有很多方法，下面将介绍其常用的一些方法。

- getTarget：获取目标对象，即被代理的对象。

- getArgs：获取切入点的参数。

- getSignature：返回包含目标对象信息的Signature对象，你可以通过Signature对象获得目标对象的Class对象，以及名字，修饰符等等，实例代码如下

- getKind：返回连接点的类型。


代码示例如下：

```java
@Aspect
@Component
public class JoinPointTest {

    @Before("pointCut()")
    public void before(JoinPoint joinPoint) {

        // 通过 getTarget() 方法获取目标对象
        System.out.println("目标对象：" + joinPoint.getTarget());

        // 通过 getArgs() 方法获取目标对象参数
        Object[] args = joinPoint.getArgs();
        for (Object arg : args) {
            System.out.println(arg);
        }

        // 通过 getSignature() 方法获取目标对象的签名
        Signature signature = joinPoint.getSignature();
        System.out.println(signature.getName());
        System.out.println(signature.getClass().getName());
        System.out.println(signature.getDeclaringType());
        System.out.println(signature.getModifiers());
        System.out.println(signature.getDeclaringTypeName());

        // 通过 getKind() 方法获取连接点类型
        System.out.println(joinPoint.getKind());
    }
}
```

### 3.3.2、基于XML的AspectJ AOP开发

我们可以在 Spring 项目中通过 XML 配置，对切面（Aspect 或 Advisor）、切点（PointCut）以及通知（Advice）进行定义和管理，以实现基于 AspectJ 的 AOP 开发。

**1、导入 AOP 相关依赖并引入约束**

---

项目开始之前，我们首先需要导入 AOP 相关的依赖。`spring-aop` 包是 Spring AOP 的核心功能，提供AOP（面向切面编程）的实现，例如代理工厂等，但是此包不包含切入点表达式等，因此需要引入第三方 AOP 包。这里我们使用 AspectJ 为我们提供的 `aspectjweaver` 包，此包支持切入点表达式、支持 AOP 相关注解等。

`spring-aspects`包是 Spring 提供的对 AspectJ 框架的整合，因此我们使用整合包将 AspectJ 整合到项目中，下面就是具体的依赖信息：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <dependencies>
        <!-- 此包会将Spring核心包都导入进来，包括aop包 -->
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.22</version>
        </dependency>

        <!-- 导入 AspectJ 相关依赖 -->
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-aspects -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aspects</artifactId>
            <version>5.3.22</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.aspectj/aspectjweaver -->
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.9.9.1</version>
        </dependency>
    </dependencies>
</project>
```

Spring 提供了基于 XML 的 AOP 支持，并提供了一个名为“aop”的命名空间，该命名空间提供了一个`<aop:config>`元素。在 Spring 配置中，所有的切面信息（切面、切点、通知）都必须定义在 `<aop:config>` 元素中，多个切面可以使用多个 `<aop:config>`。导入 AOP 相关依赖后，我们需要在 XML 配置文件中，引入 AOP 的约束，具体信息如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!-- AOP 配置标签 -->
    <aop:config></aop:config>
</beans>
```

**2、创建目标对象（可以是接口的实现类，也可以直接类）**

---

第二步我们需要创建一个模拟的业务层接口以及它的实现类，这也是我们 AOP 作用的目标对象。此接口总共包含四个方法，分别是添加、修改、删除和查询，具体代码如下：

```java
public interface StudentService {
    void add();
    void delete();
    void update();
    void find();
}
```

接口的实现类重写这四个方法，分别用输出语句表示要完成的功能，具体实现类如下：

```java
public class StudentServiceImpl implements StudentService {
    @Override
    public void add() {
        System.out.println("新增操作...");
    }

    @Override
    public void delete() {
        System.out.println("删除操作...");
    }

    @Override
    public void update() {
        System.out.println("更新操作...");
    }

    @Override
    public void find() {
        System.out.println("查询操作...");
    }
}
```

**3、创建切面类，模拟各种类型的增强**

---

第三步就是创建一个切面类，然后在这个切面类中，创建多个方法来模拟各种类型的增强，比如前置增强、后置增强等。这些增强最终会在 XML 配置文件中的 AOP 配置，把它们配置给目标对象，具体的切面类代码如下：

```java
public class AspectToXml {

    /**
     * 前置增强
     */
    public void before(JoinPoint joinPoint) {
        System.out.println("前置增强，模拟权限控制和日志打印等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 后置增强
     */
    public void afterReturning(JoinPoint joinPoint) {
        System.out.println("后置增强，模拟事务提交和统计数据分析结果信息等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 异常增强
     */
    public void afterThrowing(JoinPoint joinPoint) {
        System.out.println("异常增强，模拟事务回滚和日志记录异常信息等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 最终增强
     */
    public void after(JoinPoint joinPoint) {
        System.out.println("最终增强，模拟资源释放等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 环绕增强：返回值必须是Object，必须有一个参数是ProceedingJoinPoint，用来执行目标对象的方法
     */
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        Object obj = null;
        System.out.println("模拟日志记录和权限监测");
        try {
            System.out.println("模拟开启事务");
            // 执行目标对象方法
            obj = pjp.proceed();
            System.out.println("模拟提交事务");
        } catch (Exception e) {
            System.out.println("模拟事务回滚及异常记录" + e.getMessage());
        } finally {
            System.out.println("模拟释放资源");
        }
        return obj;
    }
}
```

**4、配置 AOP，即目标对象、切面类、切点和增强**

---

XML 配置文件中，我们首先要配置的是目标对象（一个或多个），然后再配置各个切面类（一个或多个），配置完目标对象和切面类后，就需要在 AOP 配置中，将各个切面的配置进行完善。

AOP 配置主要是配置切面里的切点和增强，将增强和切入点进行关联。注意，这里的切点的切点表达式（execution()）可以用于明确指定方法返回类型，类名，方法名和参数名等与方法相关的部件，并且在 Sprin g中，大部分需要使用 AOP 的业务场景也只需要达到方法级别即可，因而 execution 表达式的使用是最为广泛的。这里使用的是最基础的，后续我们会对切点表达式进行详细的学习。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!-- 1. 配置目标对象 -->
    <bean id="studentService" class="com.loner.mj.service.impl.StudentServiceImpl"></bean>

    <!-- 2. 配置切面类 -->
    <bean id="aspectToXml" class="com.loner.mj.aop.AspectToXml"></bean>

    <!-- 3. AOP配置 -->
    <aop:config>
        <!-- 3.1 配置切面-->
        <aop:aspect ref="aspectToXml">
            <!-- 3.2 配置切入点，通知那些方法被增强-->
            <aop:pointcut id="pointcut" expression="execution(* com.loner.mj.service.*.*(..))"/>
            <!-- 3.3 配置增强，关联切入点-->
            <aop:before method="before" pointcut-ref="pointcut"/>
            <aop:after method="after" pointcut-ref="pointcut"/>
            <aop:after-returning method="afterReturning" pointcut-ref="pointcut"/>
            <aop:after-throwing method="afterThrowing" pointcut-ref="pointcut" throwing="e"/>
            <aop:around method="around" pointcut-ref="pointcut"/>
        </aop:aspect>
    </aop:config>
</beans>
```

**5、最终测试**

---

测试代码如下，这里我们只需要调用目标类的相关方法即可。

```java
public class AopTest {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("Aop.xml");
        StudentService studentService = applicationContext.getBean("studentService", StudentService.class);
        studentService.add();
        // studentService.delete();
        // studentService.update();
        // studentService.find();
    }
}
```

测试代码的输出结果如下。从测试结果可以看出，我们调用目标对象的相关方法时，它执行了我们 AOP 配置的所有的相关增强，比如前置增强、后置增强等。从整个实现过程可以看出，我们仅仅只是在配置切入点时，配置了需要被增强的方法，我们并没有对目标对象进行任何的修改，也没有添加任何的代码，而目标对象的业务方法却都被增强了。因此，AOP 面向切面编程的本质就是在不修改业务方法的前提下，对业务扩充其需要的功能。

```txt
前置增强，模拟权限控制和日志打印等，目标类对象：com.loner.mj.service.impl.StudentServiceImpl@15b204a1，被增强的方法是：add
模拟日志记录和权限监测
模拟开启事务
新增操作...
模拟提交事务
模拟释放资源
后置增强，模拟事务提交和统计数据分析结果信息等，目标类对象：com.loner.mj.service.impl.StudentServiceImpl@15b204a1，被增强的方法是：add
最终增强，模拟资源释放等，目标类对象：com.loner.mj.service.impl.StudentServiceImpl@15b204a1，被增强的方法是：add
```



### 3.3.3、基于注解的AspectJ AOP开发

在上述实现的基础之上，我们将步骤1的引入依赖和对应的命名空间不再啰嗦，并且将步骤2的实现类用 @Service 注解进行标识即可，前两个步骤只需要小小修改即可。因此，在注解开发步骤行直接从创建创建切面类并配置开始。

**1、创建切面类，模拟各种类型的增强，并配置切点和增强**

---

第1步就是创建一个切面类，然后在这个切面类中，创建多个方法来模拟各种类型的增强，比如前置增强、后置增强等，同时通过切点注解、各种通知注解来实现对目标对象的方法的增强，具体的切面类代码如下：

首先我们使用 @Aspect 标识这是一个切面，使用 @Component 标识此类为一个组件。然后使用 @Pointcut 注解来绑定目标对象的那些方法需要被增强（这里默认是所有方法），最后利用各种增强注解对方法进行增强，并关联切入点。

```java
@Aspect
@Component
public class AspectToAnnotation {

    @Pointcut("execution(* com.loner.mj.service.*.*(..))")
    public void pointCut() {

    }

    /**
     * 前置增强
     */
    @Before("pointCut()")
    public void before(JoinPoint joinPoint) {
        System.out.println("前置增强，模拟权限控制和日志打印等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 后置增强
     */
    @AfterReturning("pointCut()")
    public void afterReturning(JoinPoint joinPoint) {
        System.out.println("后置增强，模拟事务提交和统计数据分析结果信息等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 异常增强
     */
    @AfterThrowing(value = "pointCut()", throwing = "e")
    public void afterThrowing(JoinPoint joinPoint) {
        System.out.println("异常增强，模拟事务回滚和日志记录异常信息等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 最终增强
     */
    @After("pointCut()")
    public void after(JoinPoint joinPoint) {
        System.out.println("最终增强，模拟资源释放等，目标类对象：" + joinPoint.getTarget() + "，被增强的方法是：" + joinPoint.getSignature().getName());
    }

    /**
     * 环绕增强：返回值必须是Object，必须有一个参数是ProceedingJoinPoint，用来执行目标对象的方法
     */
    @Around("pointCut()")
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        Object obj = null;
        System.out.println("模拟日志记录和权限监测");
        try {
            System.out.println("模拟开启事务");
            // 执行目标对象方法
            obj = pjp.proceed();
            System.out.println("模拟提交事务");
        } catch (Exception e) {
            System.out.println("模拟事务回滚及异常记录" + e.getMessage());
        } finally {
            System.out.println("模拟释放资源");
        }
        return obj;
    }
}

```

**2、配置组件扫描、DI注解解析器和AOP注解解析器**

---

XML 配置文件中，我们首先要配置的是目标对象（一个或多个），然后再配置各个切面类（一个或多个），配置完目标对象和切面类后，就需要在 AOP 配置中，将各个切面的配置进行完善。

AOP 配置主要是配置切面里的切点和增强，将增强和切入点进行关联。注意，这里的切点的切点表达式（execution()）可以用于明确指定方法返回类型，类名，方法名和参数名等与方法相关的部件，并且在 Sprin g中，大部分需要使用 AOP 的业务场景也只需要达到方法级别即可，因而 execution 表达式的使用是最为广泛的。这里使用的是最基础的，后续我们会对切点表达式进行详细的学习。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!-- 基于注解的AspectJ AOP开发 -->
    <!-- 1. 开启组件扫描 -->
    <context:component-scan base-package="com.loner.mj.service,com.loner.mj.aop"/>
    <!-- 2. 配置DI注解解析器 -->
    <context:annotation-config />
    <!-- 3. 配置AOP注解解析器：false表示使用JDK动态代理，true表示使用CGLIB动态代理-->
    <aop:aspectj-autoproxy proxy-target-class="false" />
</beans>
```

**3、最终测试**

---

测试代码如下，这里我们只需要按照目标对象类型进行装配，然后调用其方法即可，具体实现如下（测试结果同上一方法）：

```java
public class AopTest {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("Aop.xml");
        StudentService studentService = applicationContext.getBean(StudentService.class);
        studentService.add();
    }
}

```



# 4、Spring Transaction（事务）

## 4.1、Spring JDBC（JdbcTemplate）

### 4.1.1 Spring JDBC（JdbcTemplate）简介

我们知道，JDBC 是 Java 提供的一种用于执行 SQL 语句的 API，可以对多种关系型数据库（例如 MySQL、Oracle 等）进行访问。

但在实际的企业级应用开发中，却很少有人直接使用原生的 JDBC API 进行开发，这是因为使用 JDBC API 对数据库进行操作十分繁琐，需要我们对每一步都做到“步步把控，处处关心”，例如我们需要手动控制数据库连接的开启，异常处理、事务处理、最后还要手动关闭连接释放资源等等。

Spring 提供了一个 Spring JDBC 模块，它对 JDBC API 进行了封装，其的主要目的降低 JDBC API 的使用难度，以一种更直接、更简洁的方式使用 JDBC API。

使用 Spring JDBC，开发人员只需要定义必要的参数、指定需要执行的 SQL 语句，即可轻松的进行 JDBC 编程，对数据库进行访问。

至于驱动的加载、数据库连接的开启与关闭、SQL 语句的创建与执行、异常处理以及事务处理等繁杂乏味的工作，则都是由 Spring JDBC 完成的。这样就可以使开发人员从繁琐的 JDBC API 中解脱出来，有更多的精力专注于业务的开发。

Spring JDBC 提供了多个实用的数据库访问工具，以简化 JDBC 的开发，其中使用最多就是 JdbcTemplate。

**JdbcTemplate**

JdbcTemplate 是 Spring JDBC 核心包（core）中的核心类，它可以通过配置文件、注解、Java 配置类等形式获取数据库的相关信息，实现了对 JDBC 开发过程中的驱动加载、连接的开启和关闭、SQL 语句的创建与执行、异常处理、事务处理、数据类型转换等操作的封装。我们只要对其传入SQL 语句和必要的参数即可轻松进行 JDBC 编程。

JdbcTemplate 的全限定命名为 org.springframework.jdbc.core.JdbcTemplate，它提供了大量的查询和更新数据库的方法，如下所示。

- `int update(String sql) / update(String sql, Object... args)`：用户执行新增、修改、删除等语句，其中 sql 为需要执行的 SQL 语句，args 表示需要传入到 SQL 语句中的参数。

- `void execute(String sql) / T execute(String sql, PreparedStatementCallback action)`：可以执行任意 SQL，一般用于执行 DDL 语句。其中 sql 为需要执行的 SQL 语句，action 表示执行完 SQL 语句后，要调用的函数。

- `<T> List<T> query(String sql, RowMapper<T> rowMapper, @Nullable Object... args) / <T> T queryForObject(String sql, RowMapper<T> rowMapper, @Nullable Object... args)`：用于执行查询语句。其中 sql为需要执行的 SQL 语句，rowMapper 用于确定返回的集合（List）的类型，args 表示需要传入到 SQL 语句的参数。

- `public int[] batchUpdate(String sql, List<Object[]> batchArgs, final int[] argTypes)`：用于批量执行新增、更新、删除等语句。其中 argTypes为需要注入的 SQL 参数的 JDBC 类型，batchArgs 为需要传入到 SQL 语句的参数。




### 4.1.2、Spring JdbcTemplate 演示

下面我们就结合实例，对使用 JdbcTemplate 进行 JDBC 编程进行讲解，步骤如下。

**1、创建数据表及对应实体**

---

在 MySQL 数据库中创建一个 spring_jdbc_db 数据库实例，并执行以下 SQL 语句创建一个用户信息（user）表。

```sql
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户 ID',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `status` varchar(255) DEFAULT NULL COMMENT '用户状态',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
```

这里我们通过创建用户实体，来对应数据库中的用户表，其字段如下：

```java
public class User {
    private Integer userId;
    private String userName;
    private String status;

    // 省略 JavaBean 封装
}
```

**2、引入相关依赖**

---

创建项目之后，我们需要引入 Spring 的核心依赖（这里使用 spring-webmvc），然后引入 spring-jdbc、spring-tx 两个包，最后我们还需要引入 mysql-connector-java 包，具体引入如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  
    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.22</version>
        </dependency>

        <!-- 引入jdbc、tx和MySQL驱动包 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.3.22</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
            <version>5.3.22</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.20</version>
        </dependency>

    </dependencies>
</project>
```

**3、配置数据库连接**

---

首先我们需要在 resource 目录下创建一个 jdbc.properties，并在该配置文件中对数据库连接信息进行配置，配置内容如下：

```txt
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://127.0.0.1:3306/spring-learnning
jdbc.username=root
jdbc.password=123456
```

其次我们需要在 resource 目录下创建一个 XML 配置文件 applicationContext.xml，配置内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       https://www.springframework.org/schema/tx/spring-tx.xsd">

    <!-- 1. 开启组件扫描 -->
    <context:component-scan base-package="com.loner.mj.service,com.loner.mj.pojo"/>
    <!-- 2. 配置注解解析器 -->
    <context:annotation-config/>
    <!-- 3. 引入 jdbc.properties 中的配置 -->
    <context:property-placeholder location="classpath:jdbc.properties"/>

    <!-- 4. 配置数据源 -->
    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <!-- 4.1 配置数据库连接地址 -->
        <property name="url" value="${jdbc.url}"/>
        <!-- 4.2 配置数据库驱动 -->
        <property name="driverClassName" value="${jdbc.driver}"/>
        <!-- 4.3 配置数据库的用户名 -->
        <property name="username" value="${jdbc.username}"/>
        <!-- 4.4 配置数据库的密码 -->
        <property name="password" value="${jdbc.password}"/>
    </bean>

    <!-- 5. 定义 JdbcTemplate -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <!-- 6. 将数据源的 Bean 注入到 JdbcTemplate 中-->
        <property name="dataSource" ref="dataSource"></property>
    </bean>
    
</beans>
```

在以上配置中，我们共定义了两个 Bean，分别是 dataSource 和 jdbcTemplate。其中 dataSource 为数据库连接池对象的 Bean。jdbcTemplate 则为 JdbcTemplate 的 Bean，它由一个名为 datasSource 的属性。

Spring 默认使用 DriverManagerDataSource 对数据库连接池进行管理，我们可以在 Spring 的 XML 配置文件中定义 DriverManagerDataSource 的 Bean，并注入到 JdbcTempate 的 Bean 中。

**4、持久层和业务层实现**

---

首先创建持久层的接口（业务层相同），主要是增删改查以及批量添加用户，具体实现如下：

```java
public interface UserDao {
    /**
     * 新增一条用户
     */
    int addUer(User user);

    /**
     * 更新指定的用户信息
     */
    int update(User user);

    /**
     * 删除指定的用户信息
     */
    int delete(Integer userId);

    /**
     * 查询用户列表
     */
    List<User> getList();

    /**
     * 查询单个用户信息
     */
    User getUser(String username);

    /**
     * 批量增加用户
     */
    void batchAddUser(List<Object[]> batchArgs);
}
```

其次，我们需要实现数据持久层的接口（业务层单纯的调用持久层接口，这里不做演示），然后使用各个 SQL 语句来时间相应的操作，具体实现如下：

```java
@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int addUer(User user) {
        String sql = "INSERT INTO user (user_name, status) VALUES(?, ?)";
        return jdbcTemplate.update(sql, user.getUserName(), user.getStatus());
    }

    @Override
    public int update(User user) {
        String sql = "UPDATE user SET status = ? WHERE user_name = ?";
        return jdbcTemplate.update(sql, user.getStatus(), user.getUserName());
    }

    @Override
    public int delete(Integer userId) {
        String sql = "DELETE FROM user where user_id = ?";
        return jdbcTemplate.update(sql, userId);
    }

    @Override
    public List<User> getList() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
    }

    @Override
    public User getUser(String username) {
        String sql = "SELECT * FROM user WHERE user_name = ?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(User.class), username);
    }

    @Override
    public void batchAddUser(List<Object[]> batchArgs) {
        String sql = "INSERT INTO user (user_name, status) VALUES(?, ?)";
        jdbcTemplate.batchUpdate(sql, batchArgs);
    }
}

```

**5、测试**

---

```java
public class JdbcTemplateTest {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("JdbcTemplate.xml");
        UserService userService = applicationContext.getBean("userService", UserService.class);

        // 新增1名用户
        userService.addUer(new User("张三", "在线"));

        // 批量插入用户
        List<Object[]> batchArgs = new ArrayList<>();
        Object[] o1 = {"小明", "在线"};
        Object[] o2 = {"小龙", "离线"};
        Object[] o3 = {"小林", "在线"};
        Object[] o4 = {"小李", "在线"};
        batchArgs.add(o1);
        batchArgs.add(o2);
        batchArgs.add(o3);
        batchArgs.add(o4);
        userService.batchAddUser(batchArgs);

        // 获取用户列表信息
        List<User> list = userService.getList();
        for (User user : list) {
            if (user.getUserName().equals("小李")) {
                // 删除用户
                userService.delete(user.getUserId());
            }
        }

        // 更新用户信息
        userService.update(new User("张三", "离线"));
    }
}
```

上述五个步骤正确完成的话，最后的测试结果不会出现问题。我们就初步的学会了，如何使用 Spring JdbcTemplate 来完成 JDBC 操作。接下来，我们通过 Spring JdbcTemplate 来完成 Spring 对事务的管理。



## 4.2、Spring Transaction 相关概念

### 4.2.1、事务简介及 Spring 事务管理方式

事务（Transaction）是基于关系型数据库（RDBMS）的企业应用的重要组成部分。在软件开发领域，事务扮演者十分重要的角色，用来确保应用程序数据的完整性和一致性。

事务具有 4 个特性：原子性、一致性、隔离性和持久性，简称为 ACID 特性（原则）。

- 原子性（Atomicity）：一个事务是一个不可分割的工作单位，事务中包括的动作要么都做要么都不做。

- 一致性（Consistency）：事务必须保证数据库从一个一致性状态变到另一个一致性状态，一致性和原子性是密切相关的。

- 隔离性（Isolation）：一个事务的执行不能被其它事务干扰，即一个事务内部的操作及使用的数据对并发的其它事务是隔离的，并发执行的各个事务之间不能互相打扰。

- 持久性（Durability）：持久性也称为永久性，指一个事务一旦提交，它对数据库中数据的改变就是永久性的，后面的其它操作和故障都不应该对其有任何影响。


事务允许我们将几个或一组操作组合成一个要么全部成功、要么全部失败的工作单元。如果事务中的所有的操作都执行成功，那自然万事大吉。但如果事务中的任何一个操作失败，那么事务中所有的操作都会被回滚，已经执行成功操作也会被完全清除干净，就好像什么事都没有发生一样。

作为一款优秀的开源框架和应用平台，Spring 也对事务提供了很好的支持。Spring 借助 IoC 容器强大的配置能力，为事务提供了丰富的功能支持。

**事务管理方式**

---

Spring 支持以下 2 种事务管理方式，分别是：编程式事务管理和声明式事务管理，两者的作用和区别如下：

- 编程式事务管理：编程式事务管理是通过编写代码实现的事务管理。这种方式能够在代码中精确地定义事务的边界，我们可以根据需求规定事务从哪里开始，到哪里结束。

- 声明式事务管理：Spring 声明式事务管理在底层采用了 AOP 技术，其最大的优点在于无须通过编程的方式管理事务，只需要在配置文件中进行相关的规则声明，就可以将事务规则应用到业务逻辑中。


选择编程式事务还是声明式事务，很大程度上就是在控制权细粒度和易用性之间进行权衡。

- 编程式对事物控制的细粒度更高，我们能够精确的控制事务的边界，事务的开始和结束完全取决于我们的需求，但这种方式存在一个致命的缺点，那就是事务规则与业务代码耦合度高，难以维护，因此我们很少使用这种方式对事务进行管理。

- 声明式事务易用性更高，对业务代码没有侵入性，耦合度低，易于维护，因此这种方式也是我们最常用的事务管理方式。


因此，我们接下来主要是使用 XML 方式和注解方式实现 Spring 的声明式事务管理。

### 4.2.2、事务管理 API

**事务管理器**

---

Spring 并不会直接管理事务，而是通过事务管理器对事务进行管理的。在 Spring 中提供了一个 org.springframework.transaction.**PlatformTransactionManager** 接口，这个接口被称为 Spring 的事务管理器，**作用就是按照给定的事务规则来执行提交或者回滚操作**，其源码以及接口说明如下:

```java
public interface PlatformTransactionManager extends TransactionManager {
    // 用于获取事务的状态信息
    TransactionStatus getTransaction(@Nullable TransactionDefinition definition) throws TransactionException;

    // 用于提交事务
    void commit(TransactionStatus status) throws TransactionException;

    // 用于回滚事务
    void rollback(TransactionStatus status) throws TransactionException;
}
```

Spring 为不同的持久化框架或平台（例如 JDBC、Hibernate、JPA 以及 JTA 等）提供了不同的 PlatformTransactionManager 接口实现，这些实现类被称为事务管理器实现。

- org.springframework.jdbc.datasource.**DataSourceTransactionManager**：使用 Spring JDBC 或 iBatis 进行持久化数据时使用。

- org.springframework.orm.hibernate3.**HibernateTransactionManager**：使用 Hibernate 3.0 及以上版本进行持久化数据时使用。

- org.springframework.orm.jpa.**JpaTransactionManager**：使用 JPA 进行持久化时使用。

- org.springframework.jdo.**JdoTransactionManager**：当持久化机制是 Jdo 时使用。

- org.springframework.transaction.jta.**JtaTransactionManager**：使用 JTA 来实现事务管理，在一个事务跨越多个不同的资源（即分布式事务）使用该实现。


这些事务管理器的使用方式十分简单，我们只要根据持久化框架（或平台）选用相应的事务管理器实现，即可实现对事物的管理，而不必关心实际事务实现到底是什么。

**TransactionDefinition 接口**

---

Spring 将 XML 配置中的事务信息封装到对象 TransactionDefinition 中，然后通过事务管理器的 getTransaction() 方法获得事务的状态（TransactionStatus），并对事务进行下一步的操作。TransactionDefinition 接口**提供了获取事务相关信息的方法**，接口定义及方法说明如下：

```java
public interface TransactionDefinition {

    // 获取事务的传播行为
    int getPropagationBehavior();

    // 获取事务的隔离级别
    int getIsolationLevel();

    // 获取事务的名称
    String getName();

    // 获取事务的超时时间
    int getTimeout();

    // 获取事务是否只读
    boolean isReadOnly();
}
```

**TransactionStatus 接口**

---

TransactionStatus 接口提供了一些简单的方法，来控制事务的执行、查询事务的状态，接口定义如下。

```java
public interface TransactionStatus extends SavepointManager {

    // 获取是否是新事务
    boolean isNewTransaction();

    // 获取是否存在保存点
    boolean hasSavepoint();

    // 设置事务回滚
    void setRollbackOnly();

    // 获取事务是否回滚
    boolean isRollbackOnly();

    // 获取事务是否完成
    boolean isCompleted();
}
```

### 4.2.3、事务隔离级别和传播行为

**事务的隔离级别**

---

事务的隔离级别定义了一个事务可能受其他并发事务影响的程度。

在实际应用中，经常会出现多个事务同时对同一数据执行不同操作（事务并发），来实现各自的任务的情况。此时就有可能导致脏读、幻读以及不可重复读等问题的出现，具体情况如下：

- 第一类丢失更新（回滚丢失）：撤销一个事务时，把其他事务已提交的更新数据覆盖。

- 脏读：在一个事务处理过程里读取了另一个未提交的事务中的数据。

- 不可重复读：一个事务两次读取同一行的数据，结果得到不同状态的结果，中间正好另一个事务更新了该数据，两次结果相异，不可被信任。

- 幻读（虚读）：一个事务执行两次查询，第二次结果集包含第一次中没有或某些行已经被删除的数据，造成两次结果不一致。

- 第二类丢失更新（覆盖丢失）：如果两个事物都读取同一行，然后两个都进行写操作并提交，第一个事物所做的改变就会丢失。


在理想情况下，事务之间是完全隔离的，这自然不会出现上述问题。但完全的事务隔离会导致性能问题，而且并不是所有的应用都需要事务的完全隔离，因此有时应用程序在事务隔离上也有一定的灵活性。

Spring 中提供了以下隔离级别，我们可以根据自身的需求自行选择合适的隔离级别。

- ISOLATION_DEFAULT：使用后端数据库默认的隔离级别。

- ISOLATION_READ_UNCOMMITTED：允许读取尚未提交的更改，可能导致脏读、幻读和不可重复读。

- ISOLATION_READ_COMMITTED：Oracle 默认级别，允许读取已提交的并发事务，防止脏读，可能出现幻读和不可重复读。

- ISOLATION_REPEATABLE_READ：MySQL 默认级别，多次读取相同字段的结果是一致的，防止脏读和不可重复读，可能出现幻读。

- ISOLATION_SERIALIZABLE：完全服从 ACID 的隔离级别，防止脏读、不可重复读和幻读。


**事务的传播行为**

---

事务传播行为（propagation behavior）指的是，当一个事务方法被另一个事务方法调用时，这个事务方法应该如何运行。例如，事务方法 A 在调用事务方法 B 时，B 方法是继续在调用者 A 方法的事务中运行呢，还是为自己开启一个新事务运行，这就是由事务方法 B 的事务传播行为决定的。其中事务方法指的是能让数据库表数据发生改变的方法，例如新增数据、删除数据、修改数据的方法。

Spring 提供了以下 7 种不同的事务传播行为。

- PROPAGATION_MANDATORY：支持当前事务，如果不存在当前事务，则引发异常。

- PROPAGATION_NESTED：如果当前事务存在，则在嵌套事务中执行。

- PROPAGATION_NEVER：不支持当前事务，如果当前事务存在，则引发异常。

- PROPAGATION_NOT_SUPPORTED：不支持当前事务，始终以非事务方式执行。

- PROPAGATION_REQUIRED：默认传播行为，如果存在当前事务，则当前方法就在当前事务中运行，如果不存在，则创建一个新的事务，并在这个新建的事务中运行。

- PROPAGATION_REQUIRES_NEW：创建新事务，如果已经存在事务则暂停当前事务。

- PROPAGATION_SUPPORTS：支持当前事务，如果不存在事务，则以非事务方式执行。




## 4.3、Spring 基于 XML 实现声明式事务管理

Spring 声明式事务管理是通过 AOP 实现的，其本质是对方法前后进行拦截，然后在目标方法开始之前创建（或加入）一个事务，在执行完目标方法后，根据执行情况提交或者回滚事务。

声明式事务最大的优点就是对业务代码的侵入性低，可以将业务代码和事务管理代码很好地进行解耦。下面介绍如何通过 XML 的方式实现声明式事务管理，步骤如下：

**1、创建数据库表及对应实体**

---

通过以小 SQL 语句，我们共创建三张数据库表：order（订单表）、storage（商品库存表）、account（用户账户表）。

```sql
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `user_id` bigint DEFAULT NULL COMMENT '用户id',
  `total` decimal(10,0) DEFAULT NULL COMMENT '总额度',
  `used` decimal(10,0) DEFAULT NULL COMMENT '已用余额',
  `residue` decimal(10,0) DEFAULT '0' COMMENT '剩余可用额度',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `account` VALUES ('1', '1', '1000', '0', '1000');

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` varchar(200) NOT NULL,
  `user_id` varchar(200) NOT NULL COMMENT '用户id',
  `product_id` varchar(200) NOT NULL COMMENT '产品id',
  `count` int DEFAULT NULL COMMENT '数量',
  `money` decimal(11,0) DEFAULT NULL COMMENT '金额',
  `status` int DEFAULT NULL COMMENT '订单状态：0：创建中；1：已完结',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `storage`;
CREATE TABLE `storage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_id` bigint DEFAULT NULL COMMENT '产品id',
  `total` int DEFAULT NULL COMMENT '总库存',
  `used` int DEFAULT NULL COMMENT '已用库存',
  `residue` int DEFAULT NULL COMMENT '剩余库存',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `storage` VALUES ('1', '1', '100', '0', '100');
```

数据库表对应的实体如下，这里省略了相应的 getter、setter、构造函数及 toString 方法，三个实体类如下：

账户表：

```java
public class Account {
    /**
     * 自增 id
     */
    private Long id;
    
    /**
     * 用户 id
     */
    private String userId;
    
    /**
     * 账户总金额
     */
    private BigDecimal total;
    
    /**
     * 已用账户金额
     */
    private BigDecimal used;
    
    /**
     * 剩余账户金额
     */
    private BigDecimal residue;
```

订单表：

```java
public class Order {
    /**
     * 自增 id
     */
    private Long id;

    /**
     * 订单 id
     */
    private String orderId;

    /**
     * 用户 id
     */
    private String userId;

    /**
     * 商品 id
     */
    private String productId;

    /**
     * 订单商品数量
     */
    private Integer count;
    /**
     * 订单金额
     */
    private BigDecimal money;

    /**
     * 订单状态
     */
    private Integer state;
}
```

商品表：

```java
package com.loner.mj.transaction.pojo;

/**
 * 商品表
 * <p>
 * Created by LonerMJ on 2022/7/19 21:48
 */
public class Storage {
    /**
     * 自增 id
     */
    private Long id;
    
    /**
     * 商品 id
     */
    private String productId;

    /**
     * 商品库存总数
     */
    private Integer total;

    /**
     * 已用商品数量
     */
    private Integer used;

    /**
     * 剩余商品数量
     */
    private Integer residue;
}
```

**2、创建项目并引入事务相关依赖和约束**

---

Spring 声明式事务管理是通过 AOP 实现的，因此我们需要将 AOP 相关的依赖全部导入，AOP 相关依赖参考 AOP 章节。除此之外，我们这里的事务演示使用的是 spring-jdbc，因此我们需要将此包及 Spring 事务包 spring-tx引入。Spring 提供了一个 tx 命名空间，借助它可以极大地简化 Spring 中的声明式事务的配置，因此我们将事务相关依赖和其约束进行引入，具体实现如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.22</version>
        </dependency>

        <!-- 导入 AspectJ 相关依赖 -->
        <!-- https://mvnrepository.com/artifact/org.springframework/spring-aspects -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aspects</artifactId>
            <version>5.3.22</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.aspectj/aspectjweaver -->
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.9.9.1</version>
        </dependency>

        <!-- 引入jdbc、tx和MySQL驱动包 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.3.22</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
            <version>5.3.22</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.20</version>
        </dependency>

    </dependencies>
</project>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       https://www.springframework.org/schema/tx/spring-tx.xsd">

</beans>
```

**3、创建数据库连接文件及数据源配置**

---

首先我们需要在 resource 目录下创建一个 jdbc.properties，并在该配置文件中对数据库连接信息进行配置，配置内容如下（注意，这里的信息都要修改为自己的数据库信息）：

```properties
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://192.168.1.11:3306/db_learning?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8&autoReconnect=true&rewriteBatchedStatements=true
jdbc.username=root
jdbc.password=root
```

其次我们需要在 resource 目录下创建一个 XML 配置文件 applicationContext.xml，用来配置数据源及事务相关操作，数据源配置内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       https://www.springframework.org/schema/tx/spring-tx.xsd">

    <!-- 1. 开启组件扫描 -->
    <context:component-scan base-package="com.loner.mj.transaction"/>
    <!-- 2. 配置注解解析器 -->
    <context:annotation-config/>
    <!-- 3. 引入 jdbc.properties 中的配置 -->
    <context:property-placeholder location="classpath:jdbc.properties"/>
    <!-- 4. 配置数据源 -->
    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <!-- 4.1 配置数据库连接地址 -->
        <property name="url" value="${jdbc.url}"/>
        <!-- 4.2 配置数据库驱动 -->
        <property name="driverClassName" value="${jdbc.driver}"/>
        <!-- 4.3 配置数据库的用户名 -->
        <property name="username" value="${jdbc.username}"/>
        <!-- 4.4 配置数据库的密码 -->
        <property name="password" value="${jdbc.password}"/>
    </bean>
    <!-- 5. 定义 JdbcTemplate -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <!-- 6. 将数据源的 Bean 注入到 JdbcTemplate 中-->
        <property name="dataSource" ref="dataSource"/>
    </bean>
</beans>
```

**4、数据持久层接口及其实现类**

---

订单操作：这里主要是创建订单和修改订单的状态

```java
public interface OrderDao {

    /**
     * 创建订单
     *
     * @param order
     * @return
     */
    int createOrder(Order order);

    /**
     * 修改订单状态：将订单状态从未完成（0）修改为已完成（1）
     *
     * @param orderId
     * @param state
     */
    void updateOrderStatus(String orderId, Integer state);
}

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int createOrder(Order order) {
        String sql = "INSERT INTO `order`(order_id, user_id, product_id, count, money, state) VALUES(?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, order.getOrderId(), order.getUserId(), order.getProductId(), order.getCount(), order.getMoney(), order.getState());
    }

    @Override
    public void updateOrderStatus(String orderId, Integer state) {
        String sql = "UPDATE `order` SET state = 1 WHERE order_id = ? AND state = ?";
        jdbcTemplate.update(sql, orderId, state);
    }
}
```

账户操作：这里主要是查询用户的账户余额和减扣账户金额

```java
public interface AccountDao {

    /**
     * 根据用户查询账户金额
     *
     * @param userId
     * @return
     */
    Account selectByUserId(String userId);

    /**
     * 扣减账户金额
     *
     * @param userId
     * @param money
     * @return
     */
    int decrease(String userId, BigDecimal money);
}

@Repository
public class AccountDaoImpl implements AccountDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Account selectByUserId(String userId) {
        String sql = "SELECT * FROM `account` WHERE user_id = ?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Account.class), userId);
    }

    @Override
    public int decrease(String userId, BigDecimal money) {
        String sql = "UPDATE `account` SET residue = residue - ?, used = used + ? WHERE user_id = ?";
        return jdbcTemplate.update(sql, money, money, userId);
    }
}
```

商品操作：这里主要是查询商品的库存和扣减商品库存

```java
public interface StorageDao {

    /**
     * 查询商品的库存
     *
     * @param productId
     * @return
     */
    Storage selectByProductId(String productId);

    /**
     * 扣减商品库存
     *
     * @param storage
     * @return
     */
    int decrease(Storage storage);
}


@Repository
public class StorageDaoImpl implements StorageDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Storage selectByProductId(String productId) {
        String sql = "SELECT * FROM `storage` WHERE product_id = ?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Storage.class), productId);
    }

    @Override
    public int decrease(Storage storage) {
        String sql = "UPDATE `storage` SET used = ?, residue = ? WHERE product_id = ?";
        return jdbcTemplate.update(sql, storage.getUsed(), storage.getResidue(), storage.getProductId());
    }
}
```

**5、业务层接口及其实现类**

---

这里业务层主要是对订单生成后，对账户以及商品进行操作，对可能出现的情况做一些事务处理，比如商品数量不够时，亦或者账户没有余额时，具体实现如下：

```java
@Service("orderServiec")
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private AccountDao accountDao;

    @Autowired
    private StorageDao storageDao;

    @Override
    public void createOrder(Order order) {
        // 创建订单数据
        orderDao.createOrder(order);
        System.out.println("开始查询商品库存，商品 id 为：" + order.getProductId());
        Storage storage = storageDao.selectByProductId(order.getProductId());
        if (storage != null && storage.getResidue().intValue() >= order.getCount().intValue()) {
            System.out.println("商品库存充足，正在扣减商品库存");
            storage.setUsed(storage.getUsed() + order.getCount());
            storage.setResidue(storage.getTotal().intValue() - storage.getUsed());
            storageDao.decrease(storage);
            System.out.println("商品库存扣减完成");
        } else {
            System.out.println("警告：商品库存不足，正在执行回滚操作！");
            throw new RuntimeException("库存不足");
        }
        System.out.println("开始查询用户的账户金额");
        Account account = accountDao.selectByUserId(order.getUserId());
        if (account != null && account.getResidue().intValue() >= order.getMoney().intValue()) {
            System.out.println("账户金额充足，正在扣减账户金额");
            accountDao.decrease(order.getUserId(), order.getMoney());
            System.out.println("账户金额扣减完成");
        } else {
            System.out.println("警告：账户余额不足，正在执行回滚操作！");
            throw new RuntimeException("账户余额不足");
        }
        System.out.println("开始修改订单状态，未完成》》》》》已完成");
        orderDao.updateOrderStatus(order.getOrderId(), 0);
        System.out.println("修改订单状态完成！");
    }
}
```

**6、配置事务管理器及其增强**

---

接下来，我们就需要借助数据源配置，定义相应的事务管理器实现（PlatformTransactionManager 接口的实现类）的 Bean，这里我们使用 DataSourceTransactionManager，即为 JDBC 和 iBatis 提供的 PlatformTransactionManager 接口实现。

当我们使用`<tx:advice>`来声明事务时，需要通过 `transaction-manager` 参数来定义一个事务管理器，这个参数的取值默认为 transactionManager。

- 如果我们自己设置的事务管理器 id 恰好与默认值相同，则可以省略对改参数的配置。

- 如果我们自己设置的事务管理器 id 与默认值不同，则必须手动在 `<tx:advice>` 元素中通过 `transaction-manager` 参数指定。


对于`<tx:advice>` 来说，事务属性是被定义在`<tx:attributes>` 中的，该元素可以包含一个或多个 `<tx:method>` 元素。

`<tx:method>` 元素包含多个属性参数，可以为某个或某些指定的方法（name 属性定义的方法）定义事务属性，如下表所示。

- propagation：指定事务的传播行为。

- isolation：指定事务的隔离级别。

- read-only：指定是否为只读事务。

- timeout：表示超时时间，单位为“秒”；声明的事务在指定的超时时间后，自动回滚，避免事务长时间不提交会回滚导致的数据库资源的占用。

- rollback-for：指定事务对于那些类型的异常应当回滚，而不提交。

- no-rollback-for：指定事务对于那些异常应当继续运行，而不回滚。


这里我们一般情况下会将业务查询方法和业务修改方法做区分，因为查询情况不会触发事务，只有增删改才会触发，因此我们会根据不同的业务进行不同的操作，具体如下：

```xml
<! -- 业务层查询方法-->
<tx:method name="get*" read-only="true" />
<tx:method name="list*" read-only="true"/>
<tx:method name="query*" read-only="true"/>
<! --业务层其他方法-->
<tx:method name="*" propagation="REQUIRED" isolation="DEFAULT" timeout="10"/>

```

`<tx:advice>` 元素只是定义了一个 AOP 通知，它并不是一个完整的事务性切面。我们在`<tx:advice>`元素中并没有定义哪些 Bean 应该被通知，因此我们需要一个切点来做这件事。

在 Spring 的 XML 配置中，我们可以利用 Spring AOP 技术将事务通知（tx-advice）和切点配置到切面中，配置内容如下。

在以上配置中用到了 aop 命名空间，这就是我们为什么在给工程导入依赖时要引入 spring-aop 等 Jar 包的原因，因此完整的事务配置如下所示：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       https://www.springframework.org/schema/tx/spring-tx.xsd">

    <!-- 省略数据库连接和数据源的配置，第2步已给出 -->

    <!-- 7. 配置事务管理器 -->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!-- 8. 将数据源的 Bean 注入到 DataSourceTransactionManager 中 -->
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <!-- 9. 配置事务增强 -->
    <tx:advice id="transactionInterceptor">
        <!-- 10. 配置事务参数 -->
        <tx:attributes>
            <!-- 为某些方法指定事务 -->
            <tx:method name="create*" propagation="REQUIRED" isolation="DEFAULT" read-only="false" timeout="10"/>
        </tx:attributes>
    </tx:advice>

    <!-- 11. 配置切面和切点 -->
    <aop:config>
        <!-- 11.1 配置切点 -->
        <aop:pointcut id="pointcut" expression="execution(* com.loner.mj.transaction.service.*.*(..))"/>
        <!-- 11.2 配置切面 -->
        <aop:advisor advice-ref="transactionInterceptor" pointcut-ref="pointcut"/>
    </aop:config>
</beans>
```

**7、最终测试及测试结果**

---

```java
public class TransactionTest {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("transaction.xml");
        OrderService orderService = applicationContext.getBean("orderService", OrderService.class);
        orderService.createOrder(new Order("1", "1", "1", 30, new BigDecimal(600), 0));
    }
}
```

我们第一次生成订单时，因为账户余额和商品数量都充足，因此数据不会发生错乱，具体输出如下：

```txt
开始查询商品库存，商品 id 为：1
商品库存充足，正在扣减商品库存
商品库存扣减完成
开始查询用户的账户金额
账户金额充足，正在扣减账户金额
账户金额扣减完成
开始修改订单状态，未完成》》》》》已完成
修改订单状态完成！
```

当我们再次对数据库表进行查询，发现三张数据库表都没有任何改变，说明在扣减账户发生异常后，事务回滚了，具体的输出信息如下：

```txt
开始查询商品库存，商品 id 为：1
商品库存充足，正在扣减商品库存
商品库存扣减完成
开始查询用户的账户金额
警告：账户余额不足，正在执行回滚操作！
Exception in thread "main" java.lang.RuntimeException: 账户余额不足
	at com.loner.mj.transaction.service.impl.OrderServiceImpl.createOrder(OrderServiceImpl.java:55)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:344)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:198)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:388)
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
	at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:215)
	at com.sun.proxy.$Proxy14.createOrder(Unknown Source)
	at com.loner.mj.TransactionTest.main(TransactionTest.java:17)

Process finished with exit code 1
```



## 4.4、Spring 基于注解实现声明式事务管理

在《Spring基于XML实现事务管理》一节中，我们通过 `<tx:advice>` 元素极大的简化了 Spring 声明式事务所需的 XML 配置。但其实我们还可以通过另一种方式进行进一步的简化，那就是“使用注解实现事务管理”。

在 Spring 中，声明式事务除了可以使用 XML 实现外，还可以使用注解实现，以进一步降低代码之间的耦合度。下面我们就来介绍下，通过注解是如何实现声明式事务管理。

**1、开启注解事务**

---

tx 命名空间提供了一个 `<tx:annotation-driven>` 元素，用来开启注解事务，简化 Spring 声明式事务的 XML 配置。`<tx:annotation-driven>` 元素的使用方式也十分的简单，我们只要在 Spring 的 XML 配置中添加这样一行配置即可，即：`<tx:annotation-driven transaction-manager="transactionManager" />`

与 `<tx:advice>` 元素一样，`<tx:annotation-driven>` 也需要通过 transaction-manager 属性来定义一个事务管理器，这个参数的取值默认为 transactionManager。如果我们使用的事务管理器的 id 与默认值相同，则可以省略对该属性的配置，即：`<tx:annotation-driven/>`

通过 `<tx:annotation-driven>` 元素开启注解事务后，Spring 会自动对容器中的 Bean 进行检查，找到使用 @Transactional 注解的 Bean，并为其提供事务支持。

**2、使用 @Transactional 注解**

---

@Transactional 注解是 Spring 声明式事务编程的核心注解，该注解既可以在类上使用，也可以在方法上使用。

- 若 @Transactional 注解在类上使用，则表示类中的所有方法都支持事务；

- 若 @Transactional 注解在方法上使用，则表示当前方法支持事务。


Spring 在容器中查找所有使用了 @Transactional 注解的 Bean，并自动为它们添加事务通知，通知的事务属性则是通过 @Transactional 注解的属性来定义的。@Transactional 注解包含多个属性，其中常用属性如下表（参照 XML 中的使用即可）。

- propagation：指定事务的传播行为。

- isolation 指定事务的隔离级别。

- read-only 指定是否为只读事务。

- timeout 表示超时时间，单位为“秒”；声明的事务在指定的超时时间后，自动回滚，避免事务长时间不提交会回滚导致的数据库资源的占用。

- rollback-for 指定事务对于那些类型的异常应当回滚，而不提交。

- no-rollback-for 指定事务对于那些异常应当继续运行，而不回滚。


**3、具体示例**

---

这里我们基于 XML 配置实现事务的基础来完成注解对事务的操作，首先我们基于 XML 配置的前4个步骤进行，只需要修改第5个和第6个步骤即可，其余的步骤都可以不用修改。第5个和第6个步骤修改如下：  
首先在 XML 配置文件中开启事务注解即可，具体实现如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       https://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       https://www.springframework.org/schema/tx/spring-tx.xsd">

    <!-- 9. 开启事务注解 -->
    <tx:annotation-driven transaction-manager="transactionManager"/>

    <!-- 1. 开启组件扫描 -->
    <context:component-scan base-package="com.loner.mj.transaction"/>
    <!-- 2. 配置注解解析器 -->
    <context:annotation-config/>
    <!-- 3. 引入 jdbc.properties 中的配置 -->
    <context:property-placeholder location="classpath:jdbc.properties"/>
    <!-- 4. 配置数据源 -->
    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <!-- 4.1 配置数据库连接地址 -->
        <property name="url" value="${jdbc.url}"/>
        <!-- 4.2 配置数据库驱动 -->
        <property name="driverClassName" value="${jdbc.driver}"/>
        <!-- 4.3 配置数据库的用户名 -->
        <property name="username" value="${jdbc.username}"/>
        <!-- 4.4 配置数据库的密码 -->
        <property name="password" value="${jdbc.password}"/>
    </bean>
    <!-- 5. 定义 JdbcTemplate -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <!-- 6. 将数据源的 Bean 注入到 JdbcTemplate 中-->
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <!-- 7. 配置事务管理器 -->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!-- 8. 将数据源的 Bean 注入到 DataSourceTransactionManager 中 -->
        <property name="dataSource" ref="dataSource"/>
    </bean>
</beans>
```

其次，我们需要在业务层的实现类或方法上使用 @Transactional 注解即可，具体实现如下（这里我们作用在方法即可）：

```java
@Service("orderService")
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private AccountDao accountDao;

    @Autowired
    private StorageDao storageDao;

    @Override
    @Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, timeout = 10, readOnly = false)
    public void createOrder(Order order) {
        // 创建订单数据
        orderDao.createOrder(order);
        System.out.println("开始查询商品库存，商品 id 为：" + order.getProductId());
        Storage storage = storageDao.selectByProductId(order.getProductId());
        if (storage != null && storage.getResidue().intValue() >= order.getCount().intValue()) {
            System.out.println("商品库存充足，正在扣减商品库存");
            storage.setUsed(storage.getUsed() + order.getCount());
            storage.setResidue(storage.getTotal().intValue() - storage.getUsed());
            storageDao.decrease(storage);
            System.out.println("商品库存扣减完成");
        } else {
            System.out.println("警告：商品库存不足，正在执行回滚操作！");
            throw new RuntimeException("库存不足");
        }
        System.out.println("开始查询用户的账户金额");
        Account account = accountDao.selectByUserId(order.getUserId());
        if (account != null && account.getResidue().intValue() >= order.getMoney().intValue()) {
            System.out.println("账户金额充足，正在扣减账户金额");
            accountDao.decrease(order.getUserId(), order.getMoney());
            System.out.println("账户金额扣减完成");
        } else {
            System.out.println("警告：账户余额不足，正在执行回滚操作！");
            throw new RuntimeException("账户余额不足");
        }
        System.out.println("开始修改订单状态，未完成》》》》》已完成");
        orderDao.updateOrderStatus(order.getOrderId(), 0);
        System.out.println("修改订单状态完成！");
    }
}
```

最后我们进行测试，发现测试结果和基于 XML 配置文件的测试结果相同，这里就不做演示了。
