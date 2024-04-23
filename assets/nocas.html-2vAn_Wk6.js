import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-2mEl8SCT.js";const e="/assets/img_115-oochGbnS.png",o="/assets/img_116-fwNIVNWw.png",r="/assets/img_117-XIEZUXGj.png",d="/assets/img_118-OtGvd1b0.png",i="/assets/img_119-ZP7kQPnz.png",l="/assets/img_120-Hf9k1YfN.png",c="/assets/img_121-VwACE-ft.png",p="/assets/img_122-TRPaMVib.png",g="/assets/img_123-rlpJJPeD.png",u="/assets/img_124-jqhJwMmt.png",m="/assets/img_125-FyAxEozP.png",v="/assets/img_126-ufCIuQY-.png",b="/assets/img_127-wVc27-uF.png",_={},h=t('<h2 id="_1、nacos概述" tabindex="-1"><a class="header-anchor" href="#_1、nacos概述" aria-hidden="true">#</a> <strong>1、Nacos概述</strong></h2><h3 id="_1-1、什么是nacos" tabindex="-1"><a class="header-anchor" href="#_1-1、什么是nacos" aria-hidden="true">#</a> <strong>1.1、什么是Nacos</strong></h3><p>Nacos 是阿里巴巴推出来的一个新开源项目，这是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。（英文全称Dynamic Naming and Configuration Service，Na为naming/nameServer即注册中心，co为configuration即配置中心，service是指该注册/配置中心都是以服务为核心。服务在nacos是一等公民）</p><p>Nacos 致力于帮助您<strong>发现、配置和管理微服务</strong>。Nacos 提供了一组简单易用的特性集，帮助您快速实现<strong>动态服务发现、服务配置、服务元数据及流量管理</strong>。</p><p>Nacos 帮助您更敏捷和容易地构建、交付和管理微服务平台。 Nacos 是构建<strong>以“服务”为中心</strong>的现代应用架构 (例如微服务范式、云原生范式) 的服务基础设施。</p><p><strong>Nacos 支持如下核心特性：</strong></p><p>**1）服务发现：**支持 <strong>DNS 与 RPC 服务发现</strong>，也提供原生 SDK 、OpenAPI 等多种服务注册方式和 DNS、HTTP 与 API 等多种服务发现方式。</p><p>**2）服务健康监测：**Nacos <strong>提供对服务的实时的健康检查</strong>，<strong>阻止向不健康的主机或服务实例发送请求。</strong></p><p><strong>3）动态配置服务：<strong>Nacos 提供</strong>配置统一管理功能</strong>，能够帮助我们<strong>将配置以中心化、外部化和动态化的方式管理所有环境的应用配置和服务配置</strong>。</p><p><strong>4）动态 DNS 服务：<strong>Nacos <strong>支持动态 DNS 服务权重路由</strong>，能够让我们</strong>很容易地实现中间层负载均衡、更灵活的路由策略</strong>、流量控制以及数据中心内网的简单 DNS 解析服务。</p><p>**5）服务及其元数据管理：**Nacos <strong>支持从微服务平台建设的视角管理数据中心的所有服务及元数据</strong>，包括管理服务的描述、生命周期、服务的静态依赖分析、服务的健康状态、服务的流量管理、路由及安全策略、服务的 SLA 以及最首要的 metrics 统计数据。</p><h3 id="_1-2、常见的注册中心" tabindex="-1"><a class="header-anchor" href="#_1-2、常见的注册中心" aria-hidden="true">#</a> <strong>1.2、常见的注册中心</strong></h3><p>Eureka（原生，2.0遇到瓶颈，停止维护）</p><p>Zookeeper（支持，专业的独立产品。例如：dubbo）</p><p>Consul（原生，GO语言开发）</p><p>Nacos</p><p>相对于 <strong>Spring Cloud Eureka 来说，Nacos 更强大</strong>。</p><p>Nacos = Spring Cloud Eureka + Spring Cloud Config</p><p>Nacos 可以<strong>与 Spring，Spring Boot，Spring Cloud 集成，并能代替 Spring Cloud Eureka， Spring Cloud Config。</strong></p><ul><li>通过 Nacos Server 和 spring-cloud-starter-alibaba-nacos-config <strong>实现配置的动态变更</strong>。</li><li>通过 Nacos Server 和 spring-cloud-starter-alibaba-nacos-discovery <strong>实现服务的注册与发现</strong>。</li></ul><p><strong>注</strong>：nacos与eureka的区别（简单介绍）</p><p>1）nacos和eureka的范围不同，Nacos的阈值是针对某个具体Service的，而<strong>不是针对所有服务</strong>的；但Eureka的自我保护阈值是针对所有服务的。<strong>nacos支持CP和AP两种；eureka只支持AP</strong>。nacos使用netty，<strong>是长连接</strong>；eureka是<strong>短连接，定时发送</strong>。</p><p>2）Eureka保护方式：当在短时间内，统计续约失败的比例，<strong>如果达到一定阈值，则会触发自我保护的机制</strong>，在该机制下，Eureka Server不会剔除任何的微服务，等到正常后，再退出自我保护机制。自我保护开关(eureka.server. enab1e-self-preservation:false)</p><p>Nacos保护方式：<strong>当域名健康实例(Instance)占总服务实例(Instance)的比例小于阈值时</strong>，<strong>无论实例(Instance)是否健康，都会将这个实例(Instance)返回给客户端</strong>。这样做虽然损失了一部分流量，但是保证了集群的剩余健康实例(Instance)能正常工作。</p><h3 id="_1-3、nacos结构图" tabindex="-1"><a class="header-anchor" href="#_1-3、nacos结构图" aria-hidden="true">#</a> <strong>1.3、Nacos结构图</strong></h3><figure><img src="'+e+'" alt="img_115.png" tabindex="0" loading="lazy"><figcaption>img_115.png</figcaption></figure><h3 id="_1-4、nacos下载和安装" tabindex="-1"><a class="header-anchor" href="#_1-4、nacos下载和安装" aria-hidden="true">#</a> 1.4、Nacos下载和安装</h3><p><strong>1）软件环境</strong></p><p>Nacos 版本：2.0.4</p><p>mysql版本：5.7</p><p><strong>2）安转步骤</strong></p><p>此处使用docker安转nacos（单节点）</p><p>**注：**注意启动时需要配置这个环境配置 <strong>-e MODE=standalone 否则默认启动为占用内存为1G</strong>。</p><blockquote><p>1、先拉取镜像<br> 命令：docker pull nacos/nacos-server:v2.0.4<br> 2、运行容器<br> 命令： docker run --name nacos(容器名称) -d -p 8848(外部访问端口):8848(容器内端口) -p 9848:9848<br> -p 9849:9849 --privileged=true --restart=always -e JVM_XMS=256m -e JVM_XMX=256m -e MODE=standalone -e PREFER_HOST_MODE=hostname -v /home/nacos/logs(数据卷主机地址):/home/nacos/logs（数据卷容器内部地址） -v /home/nacos/conf:/home/nacos/conf ea54f31c46e4（容器id）</p></blockquote><p><strong>3）查看容器是否启动</strong></p><p>命令：docker ps<br><img src="'+o+'" alt="img_116.png" loading="lazy"></p><p><strong>4)查看容器相关日志</strong></p><p>命令：docker logs --since 10m nacos的容器id #查看指定容器的输出日志<br><img src="'+r+'" alt="img_117.png" loading="lazy"></p><p><strong>注意</strong>：如果查看日志发现报错如下截图<br><img src="'+d+`" alt="img_118.png" loading="lazy"></p><p>证明缺少日志文件，我们可以在宿主机配置文件目录下添加如下内容</p><p>1）新建文件nacos-logback.xml，在我们宿主机挂载的对应的保存配置文件的目录下，并在下方添加如下配置；</p><p>2）<strong>注意</strong>log.path 中的value配置要和日志数据卷挂载的目录一致</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration debug=&quot;false&quot; scan=&quot;true&quot; scanPeriod=&quot;1 seconds&quot;&gt;
    &lt;contextName&gt;logback&lt;/contextName&gt;
    &lt;property name=&quot;log.path&quot; value=&quot;/home/nacos/logs/logback.log&quot; /&gt;
    &lt;appender name=&quot;console&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;!-- &lt;filter class=&quot;com.example.logback.filter.MyFilter&quot; /&gt; --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;
            &lt;level&gt;ERROR&lt;/level&gt;
        &lt;/filter&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{HH:mm:ss.SSS} %contextName [%thread] %-5level %logger{36} - %msg%n
            &lt;/pattern&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;file&quot;
              class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;file&gt;\${log.path}&lt;/file&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;\${log.path}.%d{yyyy-MM-dd}.zip&lt;/fileNamePattern&gt;
        &lt;/rollingPolicy&gt;

        &lt;encoder&gt;
            &lt;pattern&gt;%date %level [%thread] %logger{36} [%file : %line] %msg%n
            &lt;/pattern&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;root level=&quot;debug&quot;&gt;
        &lt;appender-ref ref=&quot;console&quot; /&gt;
        &lt;appender-ref ref=&quot;file&quot; /&gt;
    &lt;/root&gt;

    &lt;logger name=&quot;com.example.logback&quot; level=&quot;warn&quot; /&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5）进行访问</p><p>本机IP地址：8848/nacos<br><img src="`+i+'" alt="img_119.png" loading="lazy"></p><p><strong>注</strong>：记得开放对应端口</p><p>登录账号 登录密码</p><p>nacos nacos<br><img src="'+l+`" alt="img_120.png" loading="lazy"></p><h2 id="_2、注册服务" tabindex="-1"><a class="header-anchor" href="#_2、注册服务" aria-hidden="true">#</a> 2、注册服务</h2><h3 id="_1-1、整合nacos" tabindex="-1"><a class="header-anchor" href="#_1-1、整合nacos" aria-hidden="true">#</a> 1.1、整合nacos</h3><p>引入依赖</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对应模块的配置文件中添加nacos配置</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#服务名（该服务名，会在nacos上显示）</span>
spring<span class="token punctuation">.</span>application<span class="token punctuation">.</span>name<span class="token operator">=</span>服务名称
<span class="token preprocessor property"># nacos服务地址</span>
spring<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>nacos<span class="token punctuation">.</span>discovery<span class="token punctuation">.</span>server<span class="token operator">-</span>addr<span class="token operator">=</span>ip<span class="token punctuation">:</span>端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在启动类上添加注解<br><img src="`+c+'" alt="img_121.png" loading="lazy"></p><h3 id="_2-2、重启服务-查看" tabindex="-1"><a class="header-anchor" href="#_2-2、重启服务-查看" aria-hidden="true">#</a> 2.2、重启服务，查看</h3><p>重新启动服务，登录nacos页面查看(下图发现服务成功注册上nacos中)<br><img src="'+p+'" alt="img_122.png" loading="lazy"></p><h2 id="_3、整合外部的mysql-单节点" tabindex="-1"><a class="header-anchor" href="#_3、整合外部的mysql-单节点" aria-hidden="true">#</a> 3、整合外部的mysql（单节点）</h2><h3 id="_3-1、建库建表" tabindex="-1"><a class="header-anchor" href="#_3-1、建库建表" aria-hidden="true">#</a> 3.1、建库建表</h3><p>可以直接根据里面的内容创建建表链接</p><p><strong>注</strong>：对应nacos版本建表可能出现的问题</p><figure><img src="https://img-blog.csdnimg.cn/31ab9e081b1d40fbb2ac9a2846933f03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-2、修改数据卷挂载出来的nacos配置" tabindex="-1"><a class="header-anchor" href="#_3-2、修改数据卷挂载出来的nacos配置" aria-hidden="true">#</a> 3.2、修改数据卷挂载出来的nacos配置</h3><p>进入数据卷保存路面<br><img src="'+g+'" alt="img_123.png" loading="lazy"><br> 此处我们nacos配置保存在宿主机的/home/nacos/conf中<br><img src="'+u+'" alt="img_124.png" loading="lazy"></p><p>修改下面内容即可<br><img src="'+m+`" alt="img_125.png" loading="lazy"></p><p>重启 Nacos 即可，验证。</p><p>再次创建相关信息、重启服务之后依然存在。</p><h2 id="_4、nacos集群化部署" tabindex="-1"><a class="header-anchor" href="#_4、nacos集群化部署" aria-hidden="true">#</a> 4、Nacos集群化部署</h2><p>之前我们搭建的nacos是standalone（单节点模式），nacos是支持集群化部署的，<strong>最好使用单数节点进行集群化部署（因为此处会有投票机制）</strong>，此处因为只有两台机器，所以只演示两台机器如何部署</p><h3 id="_4-1、使用docker-分别在不同的服务器上运行两台nacos容器" tabindex="-1"><a class="header-anchor" href="#_4-1、使用docker-分别在不同的服务器上运行两台nacos容器" aria-hidden="true">#</a> 4.1、使用docker，分别在不同的服务器上运行两台nacos容器</h3><p><strong>注意</strong>：2.x版本的nacos需要开放9848 和 9849 端口的映射端口</p><p>下面为示例命令：</p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code>docker <span class="token keyword">run</span> -d \\
#  hostname
-e PREFER_HOST_MODE<span class="token operator">=</span>nacos \\
# 单例<span class="token operator">/</span>集群模式
-e <span class="token keyword">MODE</span><span class="token operator">=</span>cluster \\
# nacos cluster地址<span class="token punctuation">,</span>节点地址
-e NACOS_SERVERS<span class="token operator">=</span><span class="token string">&quot;124.223.xx.xx:8848 106.52.xx.xx:8848&quot;</span> \\
# 开启mysql
-e SPRING_DATASOURCE_PLATFORM<span class="token operator">=</span>mysql \\
# mysql主节点host
-e MYSQL_SERVICE_HOST<span class="token operator">=</span><span class="token number">106.52</span><span class="token punctuation">.</span>xx<span class="token punctuation">.</span>xx \\
# mysql主节点端口
-e MYSQL_SERVICE_PORT<span class="token operator">=</span><span class="token number">3306</span> \\
# 数据库用户名
-e MYSQL_SERVICE_USER<span class="token operator">=</span>root \\
# 数据库密码
-e MYSQL_SERVICE_PASSWORD<span class="token operator">=</span><span class="token number">123456</span> \\
#数据库名称
-e MYSQL_SERVICE_DB_NAME<span class="token operator">=</span>nacos_config_cluster \\
# 自定义nacos服务器IP（当前）
-e NACOS_SERVER_IP<span class="token operator">=</span><span class="token number">106.52</span><span class="token punctuation">.</span>xx<span class="token punctuation">.</span>xx \\
# 指定映射端口 <span class="token number">8848</span>容器多映射<span class="token number">9848</span> <span class="token number">9849</span> 端口
-p <span class="token number">8848</span><span class="token punctuation">:</span><span class="token number">8848</span> \\
-p <span class="token number">9848</span><span class="token punctuation">:</span><span class="token number">9848</span> \\
-p <span class="token number">9849</span><span class="token punctuation">:</span><span class="token number">9849</span> \\
# 容器名
--name nacos-8848 \\
--restart<span class="token operator">=</span>always 
# 挂载
-v <span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>logs<span class="token punctuation">:</span><span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>logs -v <span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>conf<span class="token punctuation">:</span><span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>conf  \\
容器<span class="token keyword">id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、查看nacos控制台-通过每个节点都可以看到对应信息" tabindex="-1"><a class="header-anchor" href="#_4-2、查看nacos控制台-通过每个节点都可以看到对应信息" aria-hidden="true">#</a> 4.2、查看nacos控制台（通过每个节点都可以看到对应信息）</h3><figure><img src="`+v+'" alt="img_126.png" tabindex="0" loading="lazy"><figcaption>img_126.png</figcaption></figure><h3 id="_4-3、集群简介" tabindex="-1"><a class="header-anchor" href="#_4-3、集群简介" aria-hidden="true">#</a> 4.3、集群简介</h3><p><strong>leader节点</strong>：负责事务型请求（事务型：创建配置、修改配置、删除配置）</p><p><strong>follow节点</strong>：负责读（查询请求）</p><p><strong>宕机情况</strong>：当leader节点宕机时，follow节点进行投票选举出新的leader节点（与传统的redis等不同的是，follow会自动进行重新选举，不需要借助类似于哨兵机制这种机制进行选举）<br><img src="'+b+`" alt="img_127.png" loading="lazy"></p><h2 id="_5、可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_5、可能遇到的问题" aria-hidden="true">#</a> 5、可能遇到的问题</h2><p>1、conf无法挂载出来</p><blockquote><p>在使用docker运行时，将容器内的conf挂载出来时，发现并没有对应的配置文件</p></blockquote><p>1）先运行一个测试nacos容器</p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code> docker <span class="token keyword">run</span> -p <span class="token number">8848</span><span class="token punctuation">:</span><span class="token number">8848</span> --name nacostest -d 容器<span class="token keyword">id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）将容器内的文件复制出来</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment">#配置文件复制 </span>
<span class="token comment">#第一个目录为容器内目录  第二个为宿主机目录</span>
docker cp nacostest（容器名）<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>logs<span class="token operator">/</span> <span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>logs
docker cp nacostest（容器名）<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>conf<span class="token operator">/</span> <span class="token operator">/</span>home<span class="token operator">/</span>nacos<span class="token operator">/</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）强制关闭容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4）然后在重新运行，包含数据卷挂载命令的启动命令</p><p><strong>docker运行命令介绍</strong></p><table><thead><tr><th>名称</th><th>描述</th><th>值</th></tr></thead><tbody><tr><td>MODE</td><td>系统启动方式: 集群/单机 cluster/standalone</td><td>默认 cluster</td></tr><tr><td>NACOS_SERVERS</td><td>集群地址</td><td>p1:port1空格ip2:port2 空格ip3:port3</td></tr><tr><td>PREFER_HOST_MODE</td><td>支持IP还是域名模式</td><td>hostname/ip 默认 ip</td></tr><tr><td>NACOS_SERVER_PORT</td><td>Nacos 运行端口</td><td>默认 8848</td></tr><tr><td>NACOS_SERVER_IP</td><td>多网卡模式下可以指定IP</td><td></td></tr><tr><td>SPRING_DATASOURCE_PLATFORM</td><td>单机模式下支持MYSQL数据库</td><td>mysql / 空 默认:空</td></tr><tr><td>MYSQL_SERVICE_HOST</td><td>数据库 连接地址</td><td></td></tr><tr><td>MYSQL_SERVICE_PORT</td><td>数据库端口</td><td>默认 : 3306</td></tr><tr><td>MYSQL_SERVICE_DB_NAME</td><td>数据库库名</td><td></td></tr><tr><td>MYSQL_SERVICE_USER</td><td>数据库用户名</td><td></td></tr><tr><td>MYSQL_SERVICE_PASSWORD</td><td>数据库用户密码</td><td></td></tr><tr><td>MYSQL_SERVICE_DB_PARAM</td><td>数据库连接参数</td><td>default :</td></tr><tr><td>MYSQL_DATABASE_NUM</td><td>数据库编号</td><td>默认 :1</td></tr><tr><td>JVM_XMS</td><td>-Xms</td><td>默认 :1g</td></tr><tr><td>JVM_XMX</td><td>-Xmx</td><td>默认 :1g</td></tr><tr><td>JVM_XMN</td><td>-Xmn</td><td>默认 :512m</td></tr><tr><td>JVM_MS</td><td>-XX:MetaspaceSize</td><td>默认 :128m</td></tr><tr><td>JVM_MMS</td><td>-XX:MaxMetaspaceSize</td><td>默认 :320m</td></tr><tr><td>NACOS_DEBUG</td><td>是否开启远程DEBUG y/n</td><td>默认 :n</td></tr><tr><td>TOMCAT_ACCESSLOG_ENABLED</td><td>server.tomcat.accesslog.enabled</td><td>默认 :false</td></tr><tr><td>NACOS_AUTH_SYSTEM_TYPE</td><td>权限系统类型选择,目前只支持nacos类型</td><td>默认 :nacos</td></tr><tr><td>NACOS_AUTH_ENABLE</td><td>是否开启权限系统</td><td>默认 :false</td></tr><tr><td>NACOS_AUTH_TOKEN_EXPIRE_SECONDS</td><td>token 失效时间</td><td>默认 :18000</td></tr><tr><td>NACOS_AUTH_TOKEN</td><td>token</td><td>默认 :SecretKey012345678901234567890123456789012345678901234567890123456789</td></tr><tr><td>NACOS_AUTH_CACHE_ENABLE</td><td>权限缓存开关 ,开启后权限缓存的更新默认有15秒的延迟</td><td>默认 : false</td></tr><tr><td>MEMBER_LIST</td><td>通过环境变量的方式设置集群地址</td><td>例子:192.168.16.101:8847?raft_port=8807,192.168.16.101?raft_port=8808,192.168.16.101:8849?raft_port=8809</td></tr><tr><td>EMBEDDED_STORAGE</td><td>是否开启集群嵌入式存储模式 embedded</td><td>默认 : none</td></tr><tr><td>NACOS_AUTH_CACHE_ENABLE</td><td>nacos.core.auth.caching.enabled</td><td>default : false</td></tr><tr><td>NACOS_AUTH_USER_AGENT_<br><br>AUTH_WHITE_ENABLE</td><td>nacos.core.auth.enable.userAgentAuthWhite</td><td>default : false</td></tr><tr><td>NACOS_AUTH_IDENTITY_KEY</td><td>nacos.core.auth.server.identity.key</td><td>default : serverIdentity</td></tr><tr><td>NACOS_AUTH_IDENTITY_VALUE</td><td>nacos.core.auth.server.identity.value</td><td>default : security</td></tr><tr><td>NACOS_SECURITY_IGNORE_URLS</td><td>nacos.security.ignore.urls</td><td>default : /,/error,/<strong>/*.css,/</strong>/<em>.js,/**/</em>.html,/<strong>/*.map,/</strong>/<em>.svg,/**/</em>.png,/<strong>/*.ico,/console-fe/public/</strong>,/v1/auth/<strong>,/v1/console/health/</strong>,/actuator/<strong>,/v1/console/server/</strong></td></tr></tbody></table>`,91),k=[h];function S(f,E){return s(),a("div",null,k)}const y=n(_,[["render",S],["__file","nocas.html.vue"]]);export{y as default};
