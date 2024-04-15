const e=JSON.parse('{"key":"v-1e44f26c","path":"/assembly/elasticsearch.html","title":"组件ElasticSearch","lang":"zh-CN","frontmatter":{"title":"组件ElasticSearch","icon":"laptop-code","category":["设计组件"],"tag":["组件"],"description":"一、 简介 Elasticsearch 是一个分布式可扩展的实时搜索和分析引擎,一个建立在全文搜索引擎 Apache Lucene™ 基础上的搜索引擎.当然 Elasticsearch 并不仅仅是 Lucene 那么简单，它不仅包括了全文搜索功能，还可以进行以下工作: 一个分布式的实时文档存储，每个字段可以被索引与搜索 一个分布式实时分析搜索引擎 能胜任上百个服务节点的扩展，并支持 PB 级别的结构化或者非结构化数据 1.ES优点 1.支持全文搜索，并基于倒排索引，检索速度特别快 2.高可用性，支持集群部署，任何节点失效系统自动调整。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/assembly/elasticsearch.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"组件ElasticSearch"}],["meta",{"property":"og:description","content":"一、 简介 Elasticsearch 是一个分布式可扩展的实时搜索和分析引擎,一个建立在全文搜索引擎 Apache Lucene™ 基础上的搜索引擎.当然 Elasticsearch 并不仅仅是 Lucene 那么简单，它不仅包括了全文搜索功能，还可以进行以下工作: 一个分布式的实时文档存储，每个字段可以被索引与搜索 一个分布式实时分析搜索引擎 能胜任上百个服务节点的扩展，并支持 PB 级别的结构化或者非结构化数据 1.ES优点 1.支持全文搜索，并基于倒排索引，检索速度特别快 2.高可用性，支持集群部署，任何节点失效系统自动调整。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:25:51.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"组件"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:25:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件ElasticSearch\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:25:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"一、 简介","slug":"一、-简介","link":"#一、-简介","children":[{"level":3,"title":"1.ES优点","slug":"_1-es优点","link":"#_1-es优点","children":[]},{"level":3,"title":"2.ES缺点","slug":"_2-es缺点","link":"#_2-es缺点","children":[]},{"level":3,"title":"3.ES使用场景","slug":"_3-es使用场景","link":"#_3-es使用场景","children":[]},{"level":3,"title":"4.DSL语言高级查询","slug":"_4-dsl语言高级查询","link":"#_4-dsl语言高级查询","children":[]},{"level":3,"title":"5.文档映射","slug":"_5-文档映射","link":"#_5-文档映射","children":[]},{"level":3,"title":"6.suggest search","slug":"_6-suggest-search","link":"#_6-suggest-search","children":[]}]},{"level":2,"title":"二、ES核心原理","slug":"二、es核心原理","link":"#二、es核心原理","children":[{"level":3,"title":"1.索引（Index）","slug":"_1-索引-index","link":"#_1-索引-index","children":[]},{"level":3,"title":"2.文档类型（Type）","slug":"_2-文档类型-type","link":"#_2-文档类型-type","children":[]},{"level":3,"title":"3.文档（Document）","slug":"_3-文档-document","link":"#_3-文档-document","children":[]},{"level":3,"title":"4.字段（Field）","slug":"_4-字段-field","link":"#_4-字段-field","children":[]},{"level":3,"title":"5.倒排索引","slug":"_5-倒排索引","link":"#_5-倒排索引","children":[]},{"level":3,"title":"6.分词器","slug":"_6-分词器","link":"#_6-分词器","children":[]},{"level":3,"title":"7.es评分机制","slug":"_7-es评分机制","link":"#_7-es评分机制","children":[]}]},{"level":2,"title":"三、ElasticSearch架构设计","slug":"三、elasticsearch架构设计","link":"#三、elasticsearch架构设计","children":[{"level":3,"title":"1.Master节点","slug":"_1-master节点","link":"#_1-master节点","children":[]},{"level":3,"title":"2.DataNode节点","slug":"_2-datanode节点","link":"#_2-datanode节点","children":[]},{"level":3,"title":"3.分片","slug":"_3-分片","link":"#_3-分片","children":[]},{"level":3,"title":"4.副本","slug":"_4-副本","link":"#_4-副本","children":[]},{"level":3,"title":"5.es集群读写流程","slug":"_5-es集群读写流程","link":"#_5-es集群读写流程","children":[]}]},{"level":2,"title":"四、ElasticSearch应用","slug":"四、elasticsearch应用","link":"#四、elasticsearch应用","children":[{"level":3,"title":"1.Elasticsearch SQL","slug":"_1-elasticsearch-sql","link":"#_1-elasticsearch-sql","children":[]},{"level":3,"title":"2.Java客户端","slug":"_2-java客户端","link":"#_2-java客户端","children":[]},{"level":3,"title":"3.es和mysql的双写","slug":"_3-es和mysql的双写","link":"#_3-es和mysql的双写","children":[]}]},{"level":2,"title":"五、ElasticSearch安装配置","slug":"五、elasticsearch安装配置","link":"#五、elasticsearch安装配置","children":[{"level":3,"title":"1.安装ElasticSearch","slug":"_1-安装elasticsearch","link":"#_1-安装elasticsearch","children":[]},{"level":3,"title":"2.安装Kibana","slug":"_2-安装kibana","link":"#_2-安装kibana","children":[]}]}],"git":{"createdTime":1713151551000,"updatedTime":1713151551000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":28.01,"words":8402},"filePathRelative":"assembly/elasticsearch.md","localizedDate":"2024年4月15日","excerpt":"<h2> 一、 简介</h2>\\n<p>Elasticsearch 是一个分布式可扩展的实时搜索和分析引擎,一个建立在全文搜索引擎 Apache Lucene™ 基础上的搜索引擎.当然 Elasticsearch 并不仅仅是 Lucene 那么简单，它不仅包括了全文搜索功能，还可以进行以下工作:</p>\\n<ul>\\n<li>一个分布式的实时文档存储，每个字段可以被索引与搜索</li>\\n<li>一个分布式实时分析搜索引擎</li>\\n<li>能胜任上百个服务节点的扩展，并支持 PB 级别的结构化或者非结构化数据</li>\\n</ul>\\n<h3> 1.ES优点</h3>\\n<ul>\\n<li>1.支持全文搜索，并基于倒排索引，检索速度特别快</li>\\n<li>2.高可用性，支持集群部署，任何节点失效系统自动调整。</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
