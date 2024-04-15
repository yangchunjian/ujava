const e=JSON.parse('{"key":"v-774d48cd","path":"/assembly/serverless.html","title":"组件Serverless","lang":"zh-CN","frontmatter":{"title":"组件Serverless","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"1 什么是severless ? Serverless（无服务器架构）是指服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，其业务层面的状态则存储在数据库或其他介质中。 img_58.png 纵观云原生技术的发展过程， 体现出的一条脉络就是对底层实现、基础设施关心的越来越少，而把重心放在业务逻辑上。 那么serverless到底是什么呢？ 下引用serverless handbook给出通俗易懂和具体的定义。 简单版：Serverless（无服务器架构）指的是服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，而业务层面的状态则记录在数据库或存储资源中。 进阶定义: Serverless是由事件（event）驱动（例如 HTTP、pub/sub）的全托管计算服务。用户无需管理服务器等基础设施，只需编写代码和选择触发器（trigger)，比如 RPC 请求、定时器等并上传，其余的工作（如实例选择、扩缩容、部署、容灾、监控、日志、安全补丁等）全部由 serverless 系统托管。用户只需要为代码实际运行消耗的资源付费——代码未运行则不产生费用。 就像无线互联网实际有的地方也需要用到有线连接一样，无服务器架构仍然在某处有服务器。开发者无需关注服务器，只需关注代码。erverless 相对于 serverful，对业务用户强调 noserver（serverless 并不是说没有服务器，只是业务人员无需关注服务器了，代码仍然是运行在真实存在的服务器上）的运维理念，业务人员只需要聚焦业务逻辑代码。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/assembly/serverless.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"组件Serverless"}],["meta",{"property":"og:description","content":"1 什么是severless ? Serverless（无服务器架构）是指服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，其业务层面的状态则存储在数据库或其他介质中。 img_58.png 纵观云原生技术的发展过程， 体现出的一条脉络就是对底层实现、基础设施关心的越来越少，而把重心放在业务逻辑上。 那么serverless到底是什么呢？ 下引用serverless handbook给出通俗易懂和具体的定义。 简单版：Serverless（无服务器架构）指的是服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，而业务层面的状态则记录在数据库或存储资源中。 进阶定义: Serverless是由事件（event）驱动（例如 HTTP、pub/sub）的全托管计算服务。用户无需管理服务器等基础设施，只需编写代码和选择触发器（trigger)，比如 RPC 请求、定时器等并上传，其余的工作（如实例选择、扩缩容、部署、容灾、监控、日志、安全补丁等）全部由 serverless 系统托管。用户只需要为代码实际运行消耗的资源付费——代码未运行则不产生费用。 就像无线互联网实际有的地方也需要用到有线连接一样，无服务器架构仍然在某处有服务器。开发者无需关注服务器，只需关注代码。erverless 相对于 serverful，对业务用户强调 noserver（serverless 并不是说没有服务器，只是业务人员无需关注服务器了，代码仍然是运行在真实存在的服务器上）的运维理念，业务人员只需要聚焦业务逻辑代码。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:42:50.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:42:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件Serverless\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:42:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1 什么是severless ?","slug":"_1-什么是severless","link":"#_1-什么是severless","children":[]},{"level":2,"title":"2 有服务到无服务构架有哪些变化？","slug":"_2-有服务到无服务构架有哪些变化","link":"#_2-有服务到无服务构架有哪些变化","children":[]},{"level":2,"title":"3 serverless发展历史","slug":"_3-serverless发展历史","link":"#_3-serverless发展历史","children":[]},{"level":2,"title":"4 severless 分类","slug":"_4-severless-分类","link":"#_4-severless-分类","children":[]},{"level":2,"title":"5 severles优缺点","slug":"_5-severles优缺点","link":"#_5-severles优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"6 serverless使用场景","slug":"_6-serverless使用场景","link":"#_6-serverless使用场景","children":[]},{"level":2,"title":"7 serverless核心技术","slug":"_7-serverless核心技术","link":"#_7-serverless核心技术","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1713152222000,"updatedTime":1713152570000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":14.73,"words":4418},"filePathRelative":"assembly/serverless.md","localizedDate":"2024年4月15日","excerpt":"<h2> 1 什么是severless ?</h2>\\n<p>Serverless（无服务器架构）是指服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，其业务层面的状态则存储在数据库或其他介质中。</p>\\n<figure><figcaption>img_58.png</figcaption></figure>\\n<p>纵观云原生技术的发展过程， 体现出的一条脉络就是对底层实现、基础设施关心的越来越少，而把重心放在业务逻辑上。</p>\\n<p>那么serverless到底是什么呢？ 下引用serverless handbook给出通俗易懂和具体的定义。</p>\\n<ul>\\n<li>简单版：Serverless（无服务器架构）指的是服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，而业务层面的状态则记录在数据库或存储资源中。</li>\\n<li>进阶定义: Serverless是由事件（event）驱动（例如 HTTP、pub/sub）的全托管计算服务。用户无需管理服务器等基础设施，只需编写代码和选择触发器（trigger)，比如 RPC 请求、定时器等并上传，其余的工作（如实例选择、扩缩容、部署、容灾、监控、日志、安全补丁等）全部由 serverless 系统托管。用户只需要为代码实际运行消耗的资源付费——代码未运行则不产生费用。<br>\\n就像无线互联网实际有的地方也需要用到有线连接一样，无服务器架构仍然在某处有服务器。开发者无需关注服务器，只需关注代码。erverless 相对于 serverful，对业务用户强调 noserver（serverless 并不是说没有服务器，只是业务人员无需关注服务器了，代码仍然是运行在真实存在的服务器上）的运维理念，业务人员只需要聚焦业务逻辑代码。</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
