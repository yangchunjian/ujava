const t=JSON.parse('{"key":"v-db91679e","path":"/design/other/caching.html","title":"缓存模式","lang":"zh-CN","frontmatter":{"title":"缓存模式","index":false,"icon":"laptop-code","category":["设计模式"],"description":"概述 缓存模式(caching)描述了如何通过不在资源使用后立即释放资源来避免昂贵的资源重新获取。这些资源保留了它们的身份，保存在一些快速访问存储中，并被重新使用以避免再次获取它们。此模式中有四种主要的缓存策略/技术；每个人都有自己的优点和缺点。它们是在单个事务中将数据写入高速缓存和数据库的写操作，将数据立即写入数据库而不是高速缓存的绕写操作，最初将数据写入高速缓冲存储器的后写操作，而数据仅在高速缓冲存储器满时写入数据库，并将保持两个数据源中的数据同步的责任推给应用程序本身。read-through策略也包含在上述四种策略中——如果存在，则将数据从缓存返回给调用方，否则从DB查询并将其存储到缓存中以备将来使用。 这些策略决定了缓存中的数据何时应写回后备存储（即数据库），并有助于保持两个数据源的同步/最新。这种模式可以提高性能，也有助于保持缓存中的数据与底层数据存储中的数据之间的一致性。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/other/caching.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"缓存模式"}],["meta",{"property":"og:description","content":"概述 缓存模式(caching)描述了如何通过不在资源使用后立即释放资源来避免昂贵的资源重新获取。这些资源保留了它们的身份，保存在一些快速访问存储中，并被重新使用以避免再次获取它们。此模式中有四种主要的缓存策略/技术；每个人都有自己的优点和缺点。它们是在单个事务中将数据写入高速缓存和数据库的写操作，将数据立即写入数据库而不是高速缓存的绕写操作，最初将数据写入高速缓冲存储器的后写操作，而数据仅在高速缓冲存储器满时写入数据库，并将保持两个数据源中的数据同步的责任推给应用程序本身。read-through策略也包含在上述四种策略中——如果存在，则将数据从缓存返回给调用方，否则从DB查询并将其存储到缓存中以备将来使用。 这些策略决定了缓存中的数据何时应写回后备存储（即数据库），并有助于保持两个数据源的同步/最新。这种模式可以提高性能，也有助于保持缓存中的数据与底层数据存储中的数据之间的一致性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-29T02:52:33.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2024-02-29T02:52:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-29T02:52:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1709175153000,"updatedTime":1709175153000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"design/other/caching.md","localizedDate":"2024年2月29日","excerpt":"<h2> 概述</h2>\\n<p>缓存模式(caching)描述了如何通过不在资源使用后立即释放资源来避免昂贵的资源重新获取。这些资源保留了它们的身份，保存在一些快速访问存储中，并被重新使用以避免再次获取它们。此模式中有四种主要的缓存策略/技术；每个人都有自己的优点和缺点。它们是在单个事务中将数据写入高速缓存和数据库的写操作，将数据立即写入数据库而不是高速缓存的绕写操作，最初将数据写入高速缓冲存储器的后写操作，而数据仅在高速缓冲存储器满时写入数据库，并将保持两个数据源中的数据同步的责任推给应用程序本身。read-through策略也包含在上述四种策略中——如果存在，则将数据从缓存返回给调用方，否则从DB查询并将其存储到缓存中以备将来使用。<br>\\n这些策略决定了缓存中的数据何时应写回后备存储（即数据库），并有助于保持两个数据源的同步/最新。这种模式可以提高性能，也有助于保持缓存中的数据与底层数据存储中的数据之间的一致性。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
