<div align="center">
<p align="center">
	<a href="https://ujava.cn/"><img src="https://ujava.cn/logo/logo.svg" style="width:300px; height:210px"></a>

</p>
<p align="center">
	<strong>🍬Architecture design tools.</strong>
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
		<img src="https://travis-ci.com/yangchunjian/ujava.svg?branch=v7-main" />
	</a>
	<a href="https://www.codacy.com/gh/yangchunjian/ujava/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yangchunjian/ujava&amp;utm_campaign=Badge_Grade">
		<img src="https://app.codacy.com/project/badge/Grade/8a6897d9de7440dd9de8804c28d2871d"/>
	</a>
	<a href="https://codecov.io/gh/yangchunjian/ujava">
		<img src="https://codecov.io/gh/yangchunjian/ujava/branch/v7-main/graph/badge.svg" />
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
</div>
<br/>

-------------------------------------------------------------------------------

[**🌎Chinese Documentation**](https://ujava.cn/home.html)

-------------------------------------------------------------------------------

## 📚 Brief Introduction
`UJava` is a feature rich and easy to use the best Java architecture design tool **, designed to help developers quickly and easily use various types of design to complete development tasks to meet various business needs.
### 🎁 The Origin of UJava Names
UJava=U+Java, is an open-source library based on design experience, where "U" represents You and Java represents the language. UJava sounds like "your language", simple and easy to understand.
### 🍺 UJava philosophy
`UJava` is not only a toolset but also a knowledge base. We never claim to be original code, and most tool classes are **ported**. Therefore:
- You can introduce and use it, as well as **copy** and modify it, without **marking any information**, just hoping to provide timely feedback on bugs.
- We strive to improve **Chinese** annotations and provide a good learning environment for source code learners, striving to make it understandable to everyone.
-------------------------------------------------------------------------------
## 🛠️ Including components
Provide the following components:
|Module | Introduction|
|---------------|------------------------------------------------|
|UJava common | General components|
|UJava design | Design pattern|
|UJava script | Script|
|UJava web    | Web components|
Each module can be introduced separately according to requirements, or all modules can be introduced through the 'uJava all' method.
-------------------------------------------------------------------------------
## 📝 Document
[ 📘 Chinese document](https://www.ujava.cn/)
[ 📙 Reference API](https://apidoc.gitee.com/yangchunjian/ujava)

-------------------------------------------------------------------------------

## 📦 Install
### 🍊 Maven
Add the following content to the dependencies of pom.xml in the project:
```XML
<dependency>
    <groupId>cn.ujava</groupId>
    <artifactId>ujava-all</artifactId>
    <version>7.0.0</version>
</dependency>
```
### 🍐 Gradle
```
implementation 'cn.ujava:ujava-all:7.0.0'
```
### 📥 Download jar
Click on the following link to download 'ujava-all-X.X.X.jar':
-[Maven Central Library](https://repo1.maven.org/maven2/cn/ujava/ujava-all/7.0.0/)
> 🔔 Attention
>UJava 3. x supports JDK8+.
### 🚽 Compile and install
Visit UJava's Gitee homepage:[ https://gitee.com/yangchunjian/ujava ](https://gitee.com/yangchunjian/ujava)Download the entire project source code (either v7-main or v7-dev branch) and then enter the UJava project directory to execute:
```Sh
./ujava. sh -- install
```
Then you can use Maven to introduce it.

-------------------------------------------------------------------------------

## 🏗 Add bricks and tiles
### 🎋 Branch Description
The source code of UJava is divided into two branches, with the following functions:
|Branch | Function|
|-----------|---------------------------------------------------------------|
|Main | Main branch, the branch used in the release version, consistent with the jar submitted by the central repository, does not accept any PR or modifications|
|Dev | Development branch, defaults to the next version of SNAPSHOT, accepts modifications or pr|
### 🐞 Provide bug feedback or suggestions
Please provide feedback on the JDK version, UJava version, and related dependency library versions being used.
-[Gitee issue](https://gitee.com/yangchunjian/ujava/issues)
-[Github issue](https://github.com/yangchunjian/ujava/issues)
### 🧬Steps to contribute code
1. Fork the project to your own repo on Gitee or Github
2. Clone forked past projects, which are also your projects, to your local location
3. Modify the code (remember to modify the v7-dev branch)
4. After commit, push to your own library (v7-dev branch)
5. Log in to Gitee or Github and you will see a pull request button on your homepage. Click on it, fill in some explanatory information, and then submit it.
6. Waiting for maintainers to merge

### 📐 Principles followed by PR
UJava welcomes anyone to contribute code and contribute to it, but the maintainer is an OCD patient. In order to take care of the patient, the PR (pull request) that needs to be submitted meets some standards, as follows:
1. The comments should be complete, especially for each newly added method, which should be marked with method description, parameter description, return value description, and other information according to Java documentation specifications. If necessary, please add unit tests, and if desired, you can also add your name.
2. Do not use methods from third-party libraries for newly added methods. UJava follows the principle of no dependencies (unless method tools are added in the extra module).
3. Please pull the request to the 'v7-dev' branch. UJava has used a new branch after version 7. x: 'v7-main' is the main branch, indicating that a version of the central repository has already been released. This branch does not allow PR or modification.
4. If we close your issue or PR, please don't be surprised. This is one way for us to keep the problem handling clean. You can still continue the discussion, and we will reopen it when there are discussion results.
-------------------------------------------------------------------------------

## ⭐ Star UJava

[![Stargazers over time](https://starchart.cc/yangchunjian/ujava.svg)](https://starchart.cc/yangchunjian/ujava)

