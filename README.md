<p align="center">
	<a href="https://ujava.cn/"><img src="https://cdn.jsdelivr.net/gh/looly/ujava-site/images/logo.jpg" width="45%"></a>
</p>
<p align="center">
	<strong>🍬A set of tools that keep Java sweet.</strong>
</p>
<p align="center">
	👉 <a href="https://ujava.cn">https://ujava.cn/</a> 👈
</p>

<p align="center">
	<a target="_blank" href="https://search.maven.org/artifact/cn.ujava/ujava-all">
		<img src="https://img.shields.io/maven-central/v/cn.ujava/ujava-all.svg?label=Maven%20Central" />
	</a>
	<a target="_blank" href="https://license.coscl.org.cn/MulanPSL2">
		<img src="https://img.shields.io/:license-MulanPSL2-blue.svg" />
	</a>
	<a target="_blank" href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html">
		<img src="https://img.shields.io/badge/JDK-8+-green.svg" />
	</a>
	<a target="_blank" href="https://travis-ci.com/yangchunjian/ujava">
		<img src="https://travis-ci.com/yangchunjian/ujava.svg?branch=v5-master" />
	</a>
	<a href="https://www.codacy.com/gh/yangchunjian/ujava/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yangchunjian/ujava&amp;utm_campaign=Badge_Grade">
		<img src="https://app.codacy.com/project/badge/Grade/8a6897d9de7440dd9de8804c28d2871d"/>
	</a>
	<a href="https://codecov.io/gh/yangchunjian/ujava">
		<img src="https://codecov.io/gh/yangchunjian/ujava/branch/v5-master/graph/badge.svg" />
	</a>
	<a target="_blank" href="https://gitter.im/ujava/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
		<img src="https://badges.gitter.im/ujava/Lobby.svg" />
	</a>
	<a target="_blank" href='https://gitee.com/yangchunjian/ujava/stargazers'>
		<img src='https://gitee.com/yangchunjian/ujava/badge/star.svg?theme=gvp' alt='star'/>
	</a>
	<a target="_blank" href='https://github.com/yangchunjian/ujava'>
		<img src="https://img.shields.io/github/stars/yangchunjian/ujava.svg?style=social" alt="github star"/>
	</a>
</p>

<br/>
<p align="center">
	<a href="https://qm.qq.com/cgi-bin/qm/qr?k=QtsqXLkHpLjE99tkre19j6pjPMhSay1a&jump_from=webapi">
	<img src="https://img.shields.io/badge/QQ%E7%BE%A4%E2%91%A6-715292493-orange"/></a>
</p>

-------------------------------------------------------------------------------

[**🌎English Documentation**](README-EN.md)

-------------------------------------------------------------------------------

## 📚简介

`UJava`是一个功能丰富且易用的**Java工具库**，通过诸多实用工具类的使用，旨在帮助开发者快速、便捷地完成各类开发任务。
这些封装的工具涵盖了字符串、数字、集合、编码、日期、文件、IO、加密、数据库JDBC、JSON、HTTP客户端等一系列操作，
可以满足各种不同的开发需求。

### 🎁UJava名称的由来

UJava = Hu + tool，是原公司项目底层代码剥离后的开源库，“Hu”是公司名称的表示，tool表示工具。UJava谐音“糊涂”，一方面简洁易懂，一方面寓意“难得糊涂”。

### 🍺UJava理念

`UJava`既是一个工具集，也是一个知识库，我们从不自诩代码原创，大多数工具类都是**搬运**而来，因此：

- 你可以引入使用，也可以**拷贝**和修改使用，而**不必标注任何信息**，只是希望能把bug及时反馈回来。
- 我们努力健全**中文**注释，为源码学习者提供良好地学习环境，争取做到人人都能看得懂。

-------------------------------------------------------------------------------

## 🛠️包含组件
一个Java基础工具类，对文件、流、加密解密、转码、正则、线程、XML等JDK方法进行封装，组成各种Util工具类，同时提供以下组件：

| 模块            | 介绍                                             |
|---------------|------------------------------------------------|
| ujava-design  | 设计模式                                           |
| ujava-script  | 脚本                                             |
| ujava-common  | 通用组件                                           |


可以根据需求对每个模块单独引入，也可以通过引入`ujava-all`方式引入所有模块。

-------------------------------------------------------------------------------

## 📝文档

[📘中文文档](https://www.ujava.cn/docs/)

[📘中文备用文档](https://plus.ujava.cn/)

[📙参考API](https://apidoc.gitee.com/yangchunjian/ujava/)

-------------------------------------------------------------------------------

## 🪙支持UJava

### 💳捐赠

如果你觉得UJava不错，可以捐赠请维护者吃包辣条~，在此表示感谢^_^。

[Gitee上捐赠](https://gitee.com/yangchunjian/ujava)

### 👕周边商店

你也可以通过购买UJava的周边商品来支持UJava维护哦！

我们提供了印有UJava Logo的周边商品，欢迎点击购买支持：

👉 [UJava 周边商店](https://market.m.taobao.com/apps/market/content/index.html?wh_weex=true&contentId=331724720170) 👈

-------------------------------------------------------------------------------

## 📦安装

### 🍊Maven
在项目的pom.xml的dependencies中加入以下内容:

```xml
<dependency>
    <groupId>cn.ujava</groupId>
    <artifactId>ujava-all</artifactId>
    <version>3.0.0</version>
</dependency>
```

### 🍐Gradle
```
implementation 'cn.ujava:ujava-all:3.0.0'
```

### 📥下载jar

点击以下链接，下载`ujava-all-X.X.X.jar`即可：

- [Maven中央库](https://repo1.maven.org/maven2/cn/ujava/ujava-all/3.0.0/)

> 🔔️注意
> UJava 5.x支持JDK8+，对Android平台没有测试，不能保证所有工具类或工具方法可用。
> 如果你的项目使用JDK7，请使用UJava 4.x版本（不再更新）

### 🚽编译安装

访问UJava的Gitee主页：[https://gitee.com/yangchunjian/ujava](https://gitee.com/yangchunjian/ujava) 下载整个项目源码（v5-master或v5-dev分支都可）然后进入UJava项目目录执行：

```sh
./ujava.sh install
```

然后就可以使用Maven引入了。

-------------------------------------------------------------------------------

## 🏗️添砖加瓦

### 🎋分支说明

UJava的源码分为两个分支，功能如下：

| 分支       | 作用                                                          |
|-----------|---------------------------------------------------------------|
| v5-master | 主分支，release版本使用的分支，与中央库提交的jar一致，不接收任何pr或修改 |
| v5-dev    | 开发分支，默认为下个版本的SNAPSHOT版本，接受修改或pr                 |

### 🐞提供bug反馈或建议

提交问题反馈请说明正在使用的JDK版本呢、UJava版本和相关依赖库版本。

- [Gitee issue](https://gitee.com/yangchunjian/ujava/issues)
- [Github issue](https://github.com/yangchunjian/ujava/issues)


### 🧬贡献代码的步骤

1. 在Gitee或者Github上fork项目到自己的repo
2. 把fork过去的项目也就是你的项目clone到你的本地
3. 修改代码（记得一定要修改v5-dev分支）
4. commit后push到自己的库（v5-dev分支）
5. 登录Gitee或Github在你首页可以看到一个 pull request 按钮，点击它，填写一些说明信息，然后提交即可。
6. 等待维护者合并

### 📐PR遵照的原则

UJava欢迎任何人为UJava添砖加瓦，贡献代码，不过维护者是一个强迫症患者，为了照顾病人，需要提交的pr（pull request）符合一些规范，规范如下：

1. 注释完备，尤其每个新增的方法应按照Java文档规范标明方法说明、参数说明、返回值说明等信息，必要时请添加单元测试，如果愿意，也可以加上你的大名。
2. UJava的缩进按照Eclipse（~~不要跟我说IDEA多好用，维护者非常懒，学不会~~，IDEA真香，改了Eclipse快捷键后舒服多了）默认（tab）缩进，所以请遵守（不要和我争执空格与tab的问题，这是一个病人的习惯）。
3. 新加的方法不要使用第三方库的方法，UJava遵循无依赖原则（除非在extra模块中加方法工具）。
4. 请pull request到`v5-dev`分支。UJava在5.x版本后使用了新的分支：`v5-master`是主分支，表示已经发布中央库的版本，这个分支不允许pr，也不允许修改。
5. 我们如果关闭了你的issue或pr，请不要诧异，这是我们保持问题处理整洁的一种方式，你依旧可以继续讨论，当有讨论结果时我们会重新打开。

-------------------------------------------------------------------------------

## ⭐Star UJava

[![Stargazers over time](https://starchart.cc/yangchunjian/ujava.svg)](https://starchart.cc/yangchunjian/ujava)

## 📌 知识星球

<div align="center">
	<img src="https://ujava.cn/images/yangchunjian/zsxq.jpg" height="150">
</div>
