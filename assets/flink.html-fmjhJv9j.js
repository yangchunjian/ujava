import{_ as a,o as i,c as e,a as s}from"./app-CKUFhcnm.js";const l="/assets/img_90-CyXXRbST.png",t="/assets/img_91-Cig0TNa9.png",d="/assets/img_92-CbpBfGMf.png",r="/assets/img_93-D5vdy2DS.png",p="/assets/img_94-qo3F6i_g.png",c="/assets/img_95-BbqEf9pd.png",o="/assets/img_96-DRBZMyxa.png",u="/assets/img_97-C_N6yYnI.png",m={};function g(k,n){return i(),e("div",null,n[0]||(n[0]=[s(`<h4 id="flink前言" tabindex="-1"><a class="header-anchor" href="#flink前言"><span>Flink前言</span></a></h4><blockquote><p>Flink和spark的功能很相似，spark能做的flink也能做，flink能做的spark也能做；</p></blockquote><h5 id="_1、flink和spark本质的区别" tabindex="-1"><a class="header-anchor" href="#_1、flink和spark本质的区别"><span>1、flink和spark本质的区别</span></a></h5><div class="language-undefined line-numbers-mode" data-ext="undefined" data-title="undefined"><pre class="language-undefined"><code>flink：侧重于做实时计算
spark：侧重于做离线计算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实时计算和离线计算的特点<br><img src="`+l+`" alt="img_90.png" loading="lazy"></li></ul><h5 id="_2、流处理和批处理" tabindex="-1"><a class="header-anchor" href="#_2、流处理和批处理"><span>2、流处理和批处理</span></a></h5><blockquote><p>流处理和批处理：也可以叫做实时计算和离线计算</p></blockquote><div class="language-undefined line-numbers-mode" data-ext="undefined" data-title="undefined"><pre class="language-undefined"><code>特点
流处理：数据大小未知、做一些相对简单的操作、及时响应结果
批处理：数据大小固定、可以做复杂的操作、需要一段时间出结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>流处理<br><img src="`+t+'" alt="img_91.png" loading="lazy"></p></li><li><p>批处理<br><img src="'+d+`" alt="img_92.png" loading="lazy"></p></li></ul><h5 id="_3、无界流和有界流" tabindex="-1"><a class="header-anchor" href="#_3、无界流和有界流"><span>3、无界流和有界流</span></a></h5><blockquote><p>从一开始不断地有数据过来-----无界流</p><p>有界流可以称为无界流的特例</p></blockquote><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="language-lua"><code>无界流的处理称为流处理<span class="token comment">-----实时计算</span>
有界流的处理称为批处理<span class="token comment">-----离线计算</span>

注意：
有界流和批处理有一定的差距，有界流属于流，输出结果是一条一条的输出，
而批处理的输出结果是一个总的结果，并不是一条一条的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="img_93.png" tabindex="0" loading="lazy"><figcaption>img_93.png</figcaption></figure><h5 id="_4、实时计算需要考虑的问题" tabindex="-1"><a class="header-anchor" href="#_4、实时计算需要考虑的问题"><span>4、实时计算需要考虑的问题</span></a></h5><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token punctuation">(</span>1<span class="token punctuation">)</span>数据处理唯一性（如何保证数据只处理一次、至少一次、最多一次）
<span class="token punctuation">(</span>2<span class="token punctuation">)</span>数据处理的及时性（采集的实时数据量太大的话可能会导致短时间内处理不过来，如何保证数据能够及时的处理，不出现数据堆积？）
<span class="token punctuation">(</span>3<span class="token punctuation">)</span>数据处理层和存储层的可扩展性（如何根据采集的实时数据量的大小提供动态扩缩容？）
<span class="token punctuation">(</span>4<span class="token punctuation">)</span>数据处理层和存储层的容错性（如何保证数据处理层和存储层高可用，出现故障时数据处理层和存储层服务依旧可用？）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="flink简介" tabindex="-1"><a class="header-anchor" href="#flink简介"><span>Flink简介</span></a></h4><h5 id="_1、什么是flink" tabindex="-1"><a class="header-anchor" href="#_1、什么是flink"><span>1、什么是Flink</span></a></h5><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>Apache Flink是一个框架和分布式处理引擎，用于对无界和有界数据流进行有状态计算。
Flink设计为在所有常见的集群环境中运行<span class="token punctuation">(</span>Yarn中运行<span class="token punctuation">)</span>，以内存速度和任何规模执行计算。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、flink的特征" tabindex="-1"><a class="header-anchor" href="#_2、flink的特征"><span>2、Flink的特征</span></a></h5><blockquote><p>1、可以做批处理（处理历史数据集）<br> 2、可以做流处理（处理实时数据流）<br> 3、事件驱动应用（监控事件的服务），spark是时间驱动</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>1、支持高吞吐、低延迟、高性能的流处理
2、支持带有事件时间的窗口（Window）操作
3、支持有状态计算的Exactly-once语义
4、支持高度灵活的窗口（Window）操作，支持基于time、count、<span class="token function">session</span><span class="token punctuation">(</span>绘画<span class="token punctuation">)</span>，
   以及data-driven的窗口操作
5、支持具有反压功能的持续流模型
6、支持基于轻量级分布式快照（Snapshot）实现的容错
7、一个运行时同时支持Batch on Streaming处理和Streaming处理
8、Flink在JVM内部实现了自己的内存管理，避免了出现<span class="token function">oom</span><span class="token punctuation">(</span>内存溢出<span class="token punctuation">)</span>
9、支持迭代计算
10、支持程序自动优化：避免特定情况下Shuffle、排序等昂贵操作，中间结果有必要进行缓存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、blink-基于flink开发的一个分支" tabindex="-1"><a class="header-anchor" href="#_3、blink-基于flink开发的一个分支"><span>3、Blink--基于Flink开发的一个分支</span></a></h5><div class="language-mipsasm line-numbers-mode" data-ext="mipsasm" data-title="mipsasm"><pre class="language-mipsasm"><code>Blink 是阿里云基于Flink开发的一个分支.

在Flink1.9中已经将大部分Blink功能合并到Flink.

Blink 在 TPC-DS 上和 Spark 相比有着非常明显的性能优势，而且这种性能优势随着数据量的增加而变得越来越大。在实际的场景这种优势已经超过 Spark 三倍，在流计算性能上我们也取得了类似的提升。我们线上的很多典型作业，性能是原来的 3 到 5 倍。在有数据倾斜的场景，以及若干比较有挑战的 TPC-H query，流计算性能甚至得到了数十倍的提升。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、flink技术栈" tabindex="-1"><a class="header-anchor" href="#_4、flink技术栈"><span>4、Flink技术栈</span></a></h5><figure><img src="`+p+'" alt="img_94.png" tabindex="0" loading="lazy"><figcaption>img_94.png</figcaption></figure><p><strong>部署方式：Deploy</strong></p><ul><li><p>Local本地模式<br> Flink部署在单个JVM进程上，主要用于调试</p></li><li><p>Cluster集群模式<br> StandAlone模式：不依赖第三方资源管理框架，JobManager负责任务调度和资源管理，通过ZK保障高可用性；</p></li></ul><p>​ YARN模式：YARN负责资源管理，JobManager负责任务调度；</p><ul><li>Cloud模式<br> Flink上云，发挥云的优势：弹性（快速的硬件升级以及扩容和缩容等），比如Amazon的EC2、Alibaba的ECS等；</li></ul><p><strong>Runtime</strong><br>   Flink引擎，负责计算逻辑（流计算和批处理）的执行；</p><p><strong>API &amp; Libraries</strong><br>   Flink的目标是批流一体，很可惜API层并没有做到统一。</p><p>​ DataStremAPI为流处理的API，DataSetAPI为批处理的API，以及基于API的各种Libraries，用户在使用时需要 感知流计算和批处理。</p><h5 id="_5、flink-apis" tabindex="-1"><a class="header-anchor" href="#_5、flink-apis"><span>5、Flink APIs</span></a></h5><figure><img src="'+c+'" alt="img_95.png" tabindex="0" loading="lazy"><figcaption>img_95.png</figcaption></figure><h5 id="_6、数据流编程模型" tabindex="-1"><a class="header-anchor" href="#_6、数据流编程模型"><span>6、数据流编程模型</span></a></h5><figure><img src="'+o+'" alt="img_96.png" tabindex="0" loading="lazy"><figcaption>img_96.png</figcaption></figure><h5 id="_7、flink的代码结构" tabindex="-1"><a class="header-anchor" href="#_7、flink的代码结构"><span>7、Flink的代码结构</span></a></h5><figure><img src="'+u+'" alt="img_97.png" tabindex="0" loading="lazy"><figcaption>img_97.png</figcaption></figure>',38)]))}const b=a(m,[["render",g],["__file","flink.html.vue"]]),f=JSON.parse('{"path":"/assembly/flink.html","title":"组件Flink","lang":"zh-CN","frontmatter":{"title":"组件Flink","icon":"laptop-code","category":["设计组件"],"tag":["组件"],"description":"Flink前言 Flink和spark的功能很相似，spark能做的flink也能做，flink能做的spark也能做； 1、flink和spark本质的区别 实时计算和离线计算的特点 img_90.png 2、流处理和批处理 流处理和批处理：也可以叫做实时计算和离线计算 流处理 img_91.png 批处理 img_92.png 3、无界流和有界流 ...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/assembly/flink.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"组件Flink"}],["meta",{"property":"og:description","content":"Flink前言 Flink和spark的功能很相似，spark能做的flink也能做，flink能做的spark也能做； 1、flink和spark本质的区别 实时计算和离线计算的特点 img_90.png 2、流处理和批处理 流处理和批处理：也可以叫做实时计算和离线计算 流处理 img_91.png 批处理 img_92.png 3、无界流和有界流 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-22T01:07:39.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"组件"}],["meta",{"property":"article:modified_time","content":"2024-04-22T01:07:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件Flink\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-22T01:07:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1713599609000,"updatedTime":1713748059000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":4.1,"words":1231},"filePathRelative":"assembly/flink.md","localizedDate":"2024年4月20日","excerpt":"<h4>Flink前言</h4>\\n<blockquote>\\n<p>Flink和spark的功能很相似，spark能做的flink也能做，flink能做的spark也能做；</p>\\n</blockquote>\\n<h5>1、flink和spark本质的区别</h5>\\n<div class=\\"language-undefined\\" data-ext=\\"undefined\\" data-title=\\"undefined\\"><pre class=\\"language-undefined\\"><code>flink：侧重于做实时计算\\nspark：侧重于做离线计算\\n</code></pre></div><ul>\\n<li>实时计算和离线计算的特点<br>\\n</li>\\n</ul>","autoDesc":true}');export{b as comp,f as data};