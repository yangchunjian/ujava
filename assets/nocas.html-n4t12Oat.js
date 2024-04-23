const e=JSON.parse('{"key":"v-22a87315","path":"/assembly/nocas.html","title":"组件Nocas","lang":"zh-CN","frontmatter":{"title":"组件Nocas","icon":"laptop-code","category":["设计组件"],"tag":["组件"],"description":"1、Nacos概述 1.1、什么是Nacos Nacos 是阿里巴巴推出来的一个新开源项目，这是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。（英文全称Dynamic Naming and Configuration Service，Na为naming/nameServer即注册中心，co为configuration即配置中心，service是指该注册/配置中心都是以服务为核心。服务在nacos是一等公民） Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/assembly/nocas.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"组件Nocas"}],["meta",{"property":"og:description","content":"1、Nacos概述 1.1、什么是Nacos Nacos 是阿里巴巴推出来的一个新开源项目，这是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。（英文全称Dynamic Naming and Configuration Service，Na为naming/nameServer即注册中心，co为configuration即配置中心，service是指该注册/配置中心都是以服务为核心。服务在nacos是一等公民） Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T01:24:22.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"组件"}],["meta",{"property":"article:modified_time","content":"2024-04-23T01:24:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件Nocas\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-23T01:24:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1、Nacos概述","slug":"_1、nacos概述","link":"#_1、nacos概述","children":[{"level":3,"title":"1.1、什么是Nacos","slug":"_1-1、什么是nacos","link":"#_1-1、什么是nacos","children":[]},{"level":3,"title":"1.2、常见的注册中心","slug":"_1-2、常见的注册中心","link":"#_1-2、常见的注册中心","children":[]},{"level":3,"title":"1.3、Nacos结构图","slug":"_1-3、nacos结构图","link":"#_1-3、nacos结构图","children":[]},{"level":3,"title":"1.4、Nacos下载和安装","slug":"_1-4、nacos下载和安装","link":"#_1-4、nacos下载和安装","children":[]}]},{"level":2,"title":"2、注册服务","slug":"_2、注册服务","link":"#_2、注册服务","children":[{"level":3,"title":"1.1、整合nacos","slug":"_1-1、整合nacos","link":"#_1-1、整合nacos","children":[]},{"level":3,"title":"2.2、重启服务，查看","slug":"_2-2、重启服务-查看","link":"#_2-2、重启服务-查看","children":[]}]},{"level":2,"title":"3、整合外部的mysql（单节点）","slug":"_3、整合外部的mysql-单节点","link":"#_3、整合外部的mysql-单节点","children":[{"level":3,"title":"3.1、建库建表","slug":"_3-1、建库建表","link":"#_3-1、建库建表","children":[]},{"level":3,"title":"3.2、修改数据卷挂载出来的nacos配置","slug":"_3-2、修改数据卷挂载出来的nacos配置","link":"#_3-2、修改数据卷挂载出来的nacos配置","children":[]}]},{"level":2,"title":"4、Nacos集群化部署","slug":"_4、nacos集群化部署","link":"#_4、nacos集群化部署","children":[{"level":3,"title":"4.1、使用docker，分别在不同的服务器上运行两台nacos容器","slug":"_4-1、使用docker-分别在不同的服务器上运行两台nacos容器","link":"#_4-1、使用docker-分别在不同的服务器上运行两台nacos容器","children":[]},{"level":3,"title":"4.2、查看nacos控制台（通过每个节点都可以看到对应信息）","slug":"_4-2、查看nacos控制台-通过每个节点都可以看到对应信息","link":"#_4-2、查看nacos控制台-通过每个节点都可以看到对应信息","children":[]},{"level":3,"title":"4.3、集群简介","slug":"_4-3、集群简介","link":"#_4-3、集群简介","children":[]}]},{"level":2,"title":"5、可能遇到的问题","slug":"_5、可能遇到的问题","link":"#_5、可能遇到的问题","children":[]}],"git":{"createdTime":1713834716000,"updatedTime":1713835462000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":8.56,"words":2569},"filePathRelative":"assembly/nocas.md","localizedDate":"2024年4月23日","excerpt":"<h2> <strong>1、Nacos概述</strong></h2>\\n<h3> <strong>1.1、什么是Nacos</strong></h3>\\n<p>Nacos 是阿里巴巴推出来的一个新开源项目，这是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。（英文全称Dynamic Naming and Configuration Service，Na为naming/nameServer即注册中心，co为configuration即配置中心，service是指该注册/配置中心都是以服务为核心。服务在nacos是一等公民）</p>\\n<p>Nacos 致力于帮助您<strong>发现、配置和管理微服务</strong>。Nacos 提供了一组简单易用的特性集，帮助您快速实现<strong>动态服务发现、服务配置、服务元数据及流量管理</strong>。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
