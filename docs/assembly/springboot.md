---
title: 组件SpringBoot
icon: laptop-code
category:
  - 设计组件
tag:
  - 组件
---
## 1、SpringBoot简介

Spring Boot(英文中是“引导”的意思)，是用来简化Spring应用的搭建到开发的过程。应用开箱即用，只要通过 “just run”（可能是 java -jar 或 tomcat 或 maven插件run 或 shell脚本），就可以启动项目。

- 简化了j2ee开发

- 整合了spring技术栈(springmvc springweb)

- 整合了 mybatis等

  Spring Boot将各个第三方框架 设置成一个个场景 Starter，会将场景所依赖的所有依赖自动加载注入。例如：选择Web，会把tomcat\json\web-mvc\web 自动注入


父项目中导入SpringBoot-starter，其中包括2.5版本对应的所有相关依赖包及版本号

### 1.1 依赖管理

```xml
<parent>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-parent</artifactId>
      <version>2.5.0</version>
      <relativePath/> 
 </parent>
```

1、引入依赖默认都可以不写版本  
2、引入非版本仲裁的jar，要写版本号  
可以通过porm.xml中增加配置自定义版本号  
1、查看spring-boot-dependencies里面规定当前依赖的版本 用的 key。  
2、在当前项目里面重写配置

```xml
<properties>
    <mybatis-plus.version>3.4.1</mybatis-plus.version>
</properties>
```

### 1.2 自动配置

- 自动配置好SpringMVC
    - 自动引入SpringMC所有组件
    - 自动配置好SpringMVC常用组件
- 自动配置好Web常用组件
    - 配置好了常用组件(例如：字符集等)
- 默认的包结构
    - 主程序所在包及其结构下方所有自包都会默认扫描加载
    - 想要改变扫描包可以通过以下两种注解方式变更

```java
1) @SpringBootApplication(scanBasePackages = "com.capinfo")
2) @ComponentScan(basePackages = "com.capinfo")
```

- 各种默认配置值
    - 默认配置最终都映射到对应的配置类中，例如：ServerProperties,MutiPartProperties
    - 配置文件的值最终会绑定到配置类上，这个类在容器中创建对象
- 按需加载所有配置项
    - 所有的配置都在**spring-boot-autoconfigure中**##**
    - 引入了哪个场景才会加载相关配置项(Prom中引入Starter例如Starter-WEB)
    - 按照条件装配规则，符合的才会装备，@ConditionalOnClass(Advice.class)

### 1.3 自动配置原理

Springboot主配置类,实际会加载一套配置，三个配置项:

- **1）@SpringBootConfiguration：**  
  包含@Configuration:加了此注解的类为配置配置类，会自动纳入Spring容器(注解@Component、@Service等)

- **2）@EnableAutoConfiguration**：**  
  实现自动配置，主要为其中的以下两个注解

    - **@AutoConfigurationPackage**

    ```java
        @Import(AutoConfigurationPackages.Registrar.class)//给容器中导入Registrar组件
       
        //Registrar中给容器中导入一系列组件
        //将Main中配置的包中所有组件导入
        @Override
    	public void registerBeanDefinitions(AnnotationMetadata metadata, BeanDefinitionRegistry registry) {
    		register(registry, new PackageImports(metadata).getPackageNames().toArray(new String[0]));
    	}
    ```

    - **@Import(AutoConfigurationImportSelector.class)**

    ```java
    @Override
    public String[] selectImports(AnnotationMetadata annotationMetadata) {
    	if (!isEnabled(annotationMetadata)) {
    		return NO_IMPORTS;
    	}
    	AutoConfigurationEntry autoConfigurationEntry = getAutoConfigurationEntry(annotationMetadata);//加载所有组件入口
    	return StringUtils.toStringArray(autoConfigurationEntry.getConfigurations());
    }
    ```

  具体内部实现顺序  

  1、getAutoConfigurationEntry(annotationMetadata);给容器中加载组件  
  2、List configurations = getCandidateConfigurations(annotationMetadata, attributes);获取所有需要导入的包  
  3、Map<String, List> loadSpringFactories(ClassLoader classLoader) {  
  getBeanClassLoader());//工厂加载  
  4、可以查询到最终是从中META-INF/spring.factories中加载
    - 默认扫描当前系统中所有依赖包中META-INF/spring.factories文件
    - org.springframework.boot.autoconfigure:2.5.0中EnableAutoConfiguration为spring所有配置包

- **3）@ComponentScan:** 指定要扫描哪些包


## SpringBoot实践

### 1、引入依赖

引入场景依赖org.springframework.boot  
[官方文档]([https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using).

### 2、查看自动配置

自己分析，引入场景对应的自动配置一般都生效了  
配置文件debug=true,可看到开启配置报告Negative（未生效）、Positive（生效）  
xxxxProperties绑定了配置文件的哪些。  
自定义加入或者替换组件  
@Bean、@Component…  
自定义器 XXXXXCustomizer；

### 3、是否需要修改

参照官方文档配置 [配置官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#common-application-properties)build-systems.starters)  
自定义加入或者替换组件

### 4、自定义组件

#### 1）Lombok

Lombok用标签方式代替构造器、getter/setter、toString()等鸡肋代码。简化javabean开发，会在编译时生成相关代码，保持代码整洁。  
1)引入依赖

```xml
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
	</dependency>
```

2)安装lombok插件  
* IDEA中File->Settings->Plugins，搜索安装Lombok插件。

3)注解  
* @AllArgsConstructor //生成有参构造函数  
* @NoArgsConstructor //生成无参构造函数  
* @Data //生成get，set方法  
* @ToString //生成ToString方法  
* @Slf4j //注入日志 log.info直接使用

#### 2) dev-tools 自动加载功能

1)引入依赖

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-devtools</artifactId>
	<optional>true</optional>
</dependency>
```

2)代码变更后只需要Build就可以看到结果，相当于重新启动项目，静态页面开发时不重启就能看到效果了

#### 3) 配置提示

自定义的类和配置文件绑定一般没有提示。添加此依赖增加提示

```xml
//依赖关系配置
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>

```

#### 4) 打包配置

```xml
 <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.springframework.boot</groupId>
                            <artifactId>spring-boot-configuration-processor</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
```