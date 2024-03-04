import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as r,e as s}from"./app-NKnW0xq8.js";const o={},t=s('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>应用服务器：tomcat</p><p>常用应用服务器：WebLogic、WebSphere、Apache、JBoss、GlassFish</p><p>Jboss作为Java EE应用服务器，它不但是Servlet容器，而且是EJB容器，从而受到企业级开发人员的欢迎，从而弥补了Tomcat只是一个Servlet容器的缺憾。</p><p>在商用应用服务器里主要有：Weblogic、Websphere，其中Weblogic我也使用过很长一段时间，当时也只用其当Servlet容器，然而就在同等条件下，在性能及易用性等方面，要比Tomcat优秀很多。</p><p>glassfish是Sun公司推出的Java EE服务器，一个比较活跃的开源社区，不断的通过社区的反馈来提高其的可用性，经过glassfish<br> v1、glassfish v2 到今天的glassfish v3，它已经走向成熟。Glassfish是一个免费、开放源代码的应用服务，它实现了Java EE 5，Java EE 5<br> 平台包括了以下最新技术：EJB 3.0、JSF 1.2、Servlet 2.5、JSP 2.1、JAX-WS 2.0、JAXB 2.0、 Java Persistence 1.0、Common Annonations<br> 1.0、StAX<br> 1.0等。支持集群，通过内存中会话状态复制，增强了部署体系结构的可用性与可伸缩性，它对集群有着很好的支持，可以简单到通过添加机器，就可轻松的提高网站的带负载能力。在解析能力方面，它对html的吞吐能力与apache服务器不分上下，就是tomcat所不能比的，支持目录部署，热部署，解决了tomcat对热部署能力的缺陷。在版本方面做的更加人性化，有开发时用的简化版，专门用于部署web项目的版本，还要完全符合j2ee标准的版本。</p><h2 id="websphere" tabindex="-1"><a class="header-anchor" href="#websphere" aria-hidden="true">#</a> webSphere</h2><p>WebSphere是 IBM 的集成软件平台。它包含了编写、运行和监视全天候的工业强度的随需应变 Web<br> 应用程序和跨平台、跨产品解决方案所需要的整个中间件基础设施，如服务器、服务和工具。WebSphere 提供了可靠、灵活和健壮的集成软件。</p><h2 id="jboss" tabindex="-1"><a class="header-anchor" href="#jboss" aria-hidden="true">#</a> JBoss</h2><p>JBoss是一个管理EJB的容器和服务器，支持EJB1.1、EJB2.0和EJB3.0的规范。但JBoss核心服务不包括支持servlet/JSP的WEB容器，一般与Tomcat或Jetty绑定使用。2006年,Jboss公司被Redhat公司收购。</p><h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h2><p>Tomcat是Apache 软件基金会的Jakarta 项目中的一个核心项目，由Apache、Sun 和其他一些公司及个人共同开发而成。由于有了Sun<br> 的参与和支持，最新的Servlet 和JSP 规范总是能在Tomcat 中得到体现，Tomcat 5 支持最新的Servlet 2.4 和JSP 2.0 规范。因为Tomcat<br> 技术先进、性能稳定，而且免费，因而深受Java 爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的Web 应用服务器。</p><p>JBoss与Tomcat的是完全开源的</p><p>WebLogic与WebSphere都是对业内多种标准的全面支持，包括EJB、JSB、JMS、JDBC、XML和WML，使Web应用系统的实施更为简单，并且保护了投资，同时也使基于标准的解决方案的开发更加简便。</p><h4 id="扩展性的不同" tabindex="-1"><a class="header-anchor" href="#扩展性的不同" aria-hidden="true">#</a> 扩展性的不同：</h4><p>WebLogic和WebSphere都是以其高扩展的架构体系闻名于业内，包括客户机连接的共享、资源 pooling以及动态网页和EJB组件群集。</p><h4 id="应用范围的区别" tabindex="-1"><a class="header-anchor" href="#应用范围的区别" aria-hidden="true">#</a> 应用范围的区别：</h4><p>Tomcat 是一个小型的轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。</p><p>WebLogic和WebSphere是商业软件，功能齐全强大，主要应用于大型企业的大型项目。</p><p>JBOSS 主要应用于EJB服务的中小型公司。</p><h4 id="jboss还具有如下六大优点" tabindex="-1"><a class="header-anchor" href="#jboss还具有如下六大优点" aria-hidden="true">#</a> JBoss还具有如下六大优点：</h4><p>1、JBoss是免费的，开放源代码J2EE的实现，它通过LGPL许可证进行发布。</p><p>2、JBoss需要的内存和硬盘空间比较小。</p><p>3、安装非常简单。先解压缩JBoss打包文件再配置一些环境变量就可以了。</p><p>4、JBoss能够&quot;热部署&quot;，部署BEAN只是简单拷贝BEAN的JAR文件到部署路径下就可以了。如果没有加载就加载它；如果已经加载了就卸载掉，然后LOAD这个新的。</p><p>5、JBoss与Web服务器在同一个Java虚拟机中运行，Servlet调用EJB不经过网络，从而大大提高运行效率，提升安全性能。</p><p>6、用户可以直接实施J2EE-EAR，而不是以前分别实施EJB-JAR和Web-WAR，非常方便。</p><p>JBoss的安装和配置可以直接拷贝使用，但是要改动 %JBoss-HOME%\\bin\\run.bat里JAVA-HOME的设置，改成本机JDK的目录。运行run.bat来启动JBoss</p><h2 id="weblogic" tabindex="-1"><a class="header-anchor" href="#weblogic" aria-hidden="true">#</a> Weblogic</h2><p>WebLogic是美国bea公司出品的一个application<br> server确切的说是一个基于j2ee架构的中间件，webserver是用来构建网站的必要软件用来解析发布网页等功能，它是用纯java开发的。weblogic本来不是由bea发明的，是它从别人手中买过来，然后再加工扩展。目前weblogic在世界application<br> server市场上占有最大的份额，其他还有象IBM的websphere，免费的tomcat、resin等中间件。</p><p>BEA WebLogic是用于开发、集成、部署和管理大型分布式Web应用、网络应用和数据库应用的Java应用服务器。将Java的动态功能和Java<br> Enterprise标准的安全性引入大型网络应用的开发、集成、部署和管理之中。</p><p>BEA WebLogic Server拥有处理关键Web应用系统问题所需的性能 、可扩展性和高可用性。</p><p>与BEA WebLogic Commerce ServerTM配合使用， BEA WebLogic Server可为部署适应性个性化电子商务应用系统提供完善的解决方案。</p><p>BEA WebLogic Server具有开发和部署关键任务电子商务Web应用系统 所需的多种特色和优势</p><p>WebLogic: WebLogic<br> 是一套基于JAVA功能强大的电子商务套件，提供了许多功能强大的中间件以方便编程人员编写的JSP、SERVLET等电子商务应用，可以为企业提供一个完整的商务应用解决方案。不适合开发阶段，太慢了，适合于运行环境（收费）。</p>',35),p=[t];function c(i,h){return a(),r("div",null,p)}const n=e(o,[["render",c],["__file","container.html.vue"]]);export{n as default};