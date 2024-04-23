const e=JSON.parse('{"key":"v-5192393d","path":"/assembly/zookeeper.html","title":"组件ZooKeeper","lang":"zh-CN","frontmatter":{"title":"组件ZooKeeper","icon":"laptop-code","category":["设计组件"],"tag":["组件"],"description":"一、Zookeeper简介 Zookeeper 是一个开源的分布式协调服务，目前由 Apache 进行维护。Zookeeper 可以用于实现分布式系统中常见的发布/订阅、负载均衡、命令服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。它具有以下特性： 顺序一致性：从一个客户端发起的事务请求，最终都会严格按照其发起顺序被应用到 Zookeeper 中； 原子性：所有事务请求的处理结果在整个集群中所有机器上都是一致的；不存在部分机器应用了该事务，而另一部分没有应用的情况； 单一视图：所有客户端看到的服务端数据模型都是一致的； 可靠性：一旦服务端成功应用了一个事务，则其引起的改变会一直保留，直到被另外一个事务所更改； 实时性：一旦一个事务被成功应用后，Zookeeper 可以保证客户端立即可以读取到这个事务变更后的最新状态的数据。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/assembly/zookeeper.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"组件ZooKeeper"}],["meta",{"property":"og:description","content":"一、Zookeeper简介 Zookeeper 是一个开源的分布式协调服务，目前由 Apache 进行维护。Zookeeper 可以用于实现分布式系统中常见的发布/订阅、负载均衡、命令服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。它具有以下特性： 顺序一致性：从一个客户端发起的事务请求，最终都会严格按照其发起顺序被应用到 Zookeeper 中； 原子性：所有事务请求的处理结果在整个集群中所有机器上都是一致的；不存在部分机器应用了该事务，而另一部分没有应用的情况； 单一视图：所有客户端看到的服务端数据模型都是一致的； 可靠性：一旦服务端成功应用了一个事务，则其引起的改变会一直保留，直到被另外一个事务所更改； 实时性：一旦一个事务被成功应用后，Zookeeper 可以保证客户端立即可以读取到这个事务变更后的最新状态的数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T00:41:57.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"组件"}],["meta",{"property":"article:modified_time","content":"2024-04-23T00:41:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件ZooKeeper\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-23T00:41:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":3,"title":"一、Zookeeper简介","slug":"一、zookeeper简介","link":"#一、zookeeper简介","children":[]},{"level":3,"title":"二、Zookeeper设计目标","slug":"二、zookeeper设计目标","link":"#二、zookeeper设计目标","children":[]},{"level":3,"title":"2.1 目标一：简单的数据模型","slug":"_2-1-目标一-简单的数据模型","link":"#_2-1-目标一-简单的数据模型","children":[]},{"level":3,"title":"2.2 目标二：构建集群","slug":"_2-2-目标二-构建集群","link":"#_2-2-目标二-构建集群","children":[]},{"level":3,"title":"2.3 目标三：顺序访问","slug":"_2-3-目标三-顺序访问","link":"#_2-3-目标三-顺序访问","children":[]},{"level":3,"title":"2.4 目标四：高性能高可用","slug":"_2-4-目标四-高性能高可用","link":"#_2-4-目标四-高性能高可用","children":[]},{"level":3,"title":"三、核心概念","slug":"三、核心概念","link":"#三、核心概念","children":[]},{"level":3,"title":"3.1 集群角色","slug":"_3-1-集群角色","link":"#_3-1-集群角色","children":[]},{"level":3,"title":"3.2 会话","slug":"_3-2-会话","link":"#_3-2-会话","children":[]},{"level":3,"title":"3.3 数据节点","slug":"_3-3-数据节点","link":"#_3-3-数据节点","children":[]},{"level":3,"title":"3.4 节点信息","slug":"_3-4-节点信息","link":"#_3-4-节点信息","children":[]},{"level":3,"title":"3.5 Watcher","slug":"_3-5-watcher","link":"#_3-5-watcher","children":[]},{"level":3,"title":"3.6 ACL","slug":"_3-6-acl","link":"#_3-6-acl","children":[]},{"level":3,"title":"四、ZAB协议","slug":"四、zab协议","link":"#四、zab协议","children":[]},{"level":3,"title":"4.1 ZAB协议与数据一致性","slug":"_4-1-zab协议与数据一致性","link":"#_4-1-zab协议与数据一致性","children":[]},{"level":3,"title":"4.2 ZAB协议的内容","slug":"_4-2-zab协议的内容","link":"#_4-2-zab协议的内容","children":[]},{"level":3,"title":"1. 崩溃恢复","slug":"_1-崩溃恢复","link":"#_1-崩溃恢复","children":[]},{"level":3,"title":"2. 消息广播","slug":"_2-消息广播","link":"#_2-消息广播","children":[]},{"level":3,"title":"五、Zookeeper的典型应用场景","slug":"五、zookeeper的典型应用场景","link":"#五、zookeeper的典型应用场景","children":[]}],"git":{"createdTime":1713232406000,"updatedTime":1713832917000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":9.89,"words":2967},"filePathRelative":"assembly/zookeeper.md","localizedDate":"2024年4月16日","excerpt":"<h3> 一、Zookeeper简介</h3>\\n<p>Zookeeper 是一个开源的分布式协调服务，目前由 Apache 进行维护。Zookeeper 可以用于实现分布式系统中常见的发布/订阅、负载均衡、命令服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。它具有以下特性：</p>\\n<ul>\\n<li>\\n<p><strong>顺序一致性</strong>：从一个客户端发起的事务请求，最终都会严格按照其发起顺序被应用到 Zookeeper 中；</p>\\n</li>\\n<li>\\n<p><strong>原子性</strong>：所有事务请求的处理结果在整个集群中所有机器上都是一致的；不存在部分机器应用了该事务，而另一部分没有应用的情况；</p>\\n</li>\\n<li>\\n<p><strong>单一视图</strong>：所有客户端看到的服务端数据模型都是一致的；</p>\\n</li>\\n<li>\\n<p><strong>可靠性</strong>：一旦服务端成功应用了一个事务，则其引起的改变会一直保留，直到被另外一个事务所更改；</p>\\n</li>\\n<li>\\n<p><strong>实时性</strong>：一旦一个事务被成功应用后，Zookeeper 可以保证客户端立即可以读取到这个事务变更后的最新状态的数据。</p>\\n</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
