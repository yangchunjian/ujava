const e=JSON.parse('{"key":"v-6169a9d6","path":"/database/redis/redis-questions-02.html","title":"Redis常见面试题总结(下)","lang":"zh-CN","frontmatter":{"title":"Redis常见面试题总结(下)","category":"数据库","tag":["Redis"],"head":[["meta",{"name":"keywords","content":"Redis基础,Redis常见数据结构,Redis线程模型,Redis内存管理,Redis事务,Redis性能优化"}],["meta",{"name":"description","content":"一篇文章总结Redis常见的知识点和面试题，涵盖Redis基础、Redis常见数据结构、Redis线程模型、Redis内存管理、Redis事务、Redis性能优化等内容。"}],["meta",{"property":"og:url","content":"https://ujava.cn/database/redis/redis-questions-02.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"Redis常见面试题总结(下)"}],["meta",{"property":"og:description","content":"Redis 事务 什么是 Redis 事务？ 你可以将 Redis 中的事务理解为：Redis 事务提供了一种将多个命令请求打包的功能。然后，再按顺序执行打包的所有命令，并且不会被中途打断。 Redis 事务实际开发中使用的非常少，功能比较鸡肋，不要将其和我们平时理解的关系型数据库的事务混淆了。 除了不满足原子性和持久性之外，事务中的每条命令都会与 R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis常见面试题总结(下)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]],"description":"Redis 事务 什么是 Redis 事务？ 你可以将 Redis 中的事务理解为：Redis 事务提供了一种将多个命令请求打包的功能。然后，再按顺序执行打包的所有命令，并且不会被中途打断。 Redis 事务实际开发中使用的非常少，功能比较鸡肋，不要将其和我们平时理解的关系型数据库的事务混淆了。 除了不满足原子性和持久性之外，事务中的每条命令都会与 R..."},"headers":[{"level":2,"title":"Redis 事务","slug":"redis-事务","link":"#redis-事务","children":[{"level":3,"title":"什么是 Redis 事务？","slug":"什么是-redis-事务","link":"#什么是-redis-事务","children":[]},{"level":3,"title":"如何使用 Redis 事务？","slug":"如何使用-redis-事务","link":"#如何使用-redis-事务","children":[]},{"level":3,"title":"Redis 事务支持原子性吗？","slug":"redis-事务支持原子性吗","link":"#redis-事务支持原子性吗","children":[]},{"level":3,"title":"Redis 事务支持持久性吗？","slug":"redis-事务支持持久性吗","link":"#redis-事务支持持久性吗","children":[]},{"level":3,"title":"如何解决 Redis 事务的缺陷？","slug":"如何解决-redis-事务的缺陷","link":"#如何解决-redis-事务的缺陷","children":[]}]},{"level":2,"title":"Redis 性能优化（重要）","slug":"redis-性能优化-重要","link":"#redis-性能优化-重要","children":[{"level":3,"title":"使用批量操作减少网络传输","slug":"使用批量操作减少网络传输","link":"#使用批量操作减少网络传输","children":[]},{"level":3,"title":"大量 key 集中过期问题","slug":"大量-key-集中过期问题","link":"#大量-key-集中过期问题","children":[]},{"level":3,"title":"Redis bigkey（大 Key）","slug":"redis-bigkey-大-key","link":"#redis-bigkey-大-key","children":[]},{"level":3,"title":"Redis hotkey（热 Key）","slug":"redis-hotkey-热-key","link":"#redis-hotkey-热-key","children":[]},{"level":3,"title":"慢查询命令","slug":"慢查询命令","link":"#慢查询命令","children":[]},{"level":3,"title":"Redis 内存碎片","slug":"redis-内存碎片","link":"#redis-内存碎片","children":[]}]},{"level":2,"title":"Redis 生产问题（重要）","slug":"redis-生产问题-重要","link":"#redis-生产问题-重要","children":[{"level":3,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":3,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[]},{"level":3,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":3,"title":"如何保证缓存和数据库数据的一致性？","slug":"如何保证缓存和数据库数据的一致性","link":"#如何保证缓存和数据库数据的一致性","children":[]},{"level":3,"title":"哪些情况可能会导致 Redis 阻塞？","slug":"哪些情况可能会导致-redis-阻塞","link":"#哪些情况可能会导致-redis-阻塞","children":[]}]},{"level":2,"title":"Redis 集群","slug":"redis-集群","link":"#redis-集群","children":[]},{"level":2,"title":"Redis 使用规范","slug":"redis-使用规范","link":"#redis-使用规范","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":33.42,"words":10026},"filePathRelative":"database/redis/redis-questions-02.md","localizedDate":"2023年9月21日","autoDesc":true}');export{e as data};
