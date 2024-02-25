const e=JSON.parse('{"key":"v-9cf002e2","path":"/highfreq/hash.html","title":"一致性Hash算法","lang":"zh-CN","frontmatter":{"title":"一致性Hash算法","index":false,"icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"简介 在分布式系统中，数据的存储和访问是很重要的问题。为了提高系统的可用性和扩展性，常常需要将数据分布到不同的节点上，而且这些节点也可能会动态地加入或离开集群。一致性哈希算法就是一种常用的解决方案，它可以解决节点的动态变化和负载均衡的问题。 本文将深入探讨一致性哈希算法的底层原理，包括其基本思想、关键步骤以及优缺点等，同时结合实际场景进行举例说明。 产生背景 考虑这么一种场景： 我们有三台缓存服务器编号node0、node1、node2，现在有 3000 万个key，希望可以将这些个 key 均匀的缓存到三台机器上，你会想到什么方案呢？","head":[["meta",{"property":"og:url","content":"https://ujava.cn/highfreq/hash.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"一致性Hash算法"}],["meta",{"property":"og:description","content":"简介 在分布式系统中，数据的存储和访问是很重要的问题。为了提高系统的可用性和扩展性，常常需要将数据分布到不同的节点上，而且这些节点也可能会动态地加入或离开集群。一致性哈希算法就是一种常用的解决方案，它可以解决节点的动态变化和负载均衡的问题。 本文将深入探讨一致性哈希算法的底层原理，包括其基本思想、关键步骤以及优缺点等，同时结合实际场景进行举例说明。 产生背景 考虑这么一种场景： 我们有三台缓存服务器编号node0、node1、node2，现在有 3000 万个key，希望可以将这些个 key 均匀的缓存到三台机器上，你会想到什么方案呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T01:16:48.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-02-25T01:16:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一致性Hash算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-25T01:16:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"产生背景","slug":"产生背景","link":"#产生背景","children":[]},{"level":2,"title":"什么是一致性哈希算法","slug":"什么是一致性哈希算法","link":"#什么是一致性哈希算法","children":[]},{"level":2,"title":"一致性哈希算法原理","slug":"一致性哈希算法原理","link":"#一致性哈希算法原理","children":[]},{"level":2,"title":"服务器扩缩容场景","slug":"服务器扩缩容场景","link":"#服务器扩缩容场景","children":[]},{"level":2,"title":"数据偏斜&服务器性能平衡问题","slug":"数据偏斜-服务器性能平衡问题","link":"#数据偏斜-服务器性能平衡问题","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1700218620000,"updatedTime":1708823808000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":10.22,"words":3067},"filePathRelative":"highfreq/hash.md","localizedDate":"2023年11月17日","excerpt":"<h2> 简介</h2>\\n<p>在分布式系统中，数据的存储和访问是很重要的问题。为了提高系统的可用性和扩展性，常常需要将数据分布到不同的节点上，而且这些节点也可能会动态地加入或离开集群。一致性哈希算法就是一种常用的解决方案，它可以解决节点的动态变化和负载均衡的问题。</p>\\n<p>本文将深入探讨一致性哈希算法的底层原理，包括其基本思想、关键步骤以及优缺点等，同时结合实际场景进行举例说明。</p>\\n<h2> 产生背景</h2>\\n<p>考虑这么一种场景：</p>\\n<p>我们有三台缓存服务器编号node0、node1、node2，现在有 3000 万个key，希望可以将这些个 key 均匀的缓存到三台机器上，你会想到什么方案呢？</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
