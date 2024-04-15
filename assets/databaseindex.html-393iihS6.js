const e=JSON.parse('{"key":"v-3f55d0d6","path":"/synthesis/databaseindex.html","title":"设计数据库索引","lang":"zh-CN","frontmatter":{"title":"设计数据库索引","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"简介 建立最优的数据库索引是提升数据库查询性能的重要手段。在某种意义上，索引就是磁盘记录在内存中的缓存。索引要做的事情，就是快速找到匹配条件的记录行，并尽可能减少磁盘读写次数。本文总结数据库索引相关的知识及实践。 基本知识 InnoDB 里表数据是按照主键顺序存放的。InnoDB 会按照表定义的第一个非空索引（按索引定义顺序）作为主键。 索引（在 MySQL 中）是由存储引擎实现的。索引类型主要有顺序索引和哈希索引。顺序索引的底层结构是 B+Tree ，哈希索引的底层结构是哈希表。 索引是以空间换时间，减少了要扫描的数据量、避免排序、将随机IO变成顺序IO。使用索引的代价是：空间占用更大、插入和更新成本更大。顺序索引可支持：全值匹配、最左顺序匹配、列前缀匹配、范围匹配、精确匹配数列并范围匹配一列、只访问索引的查询、索引扫描排序。哈希索引可支持：全值匹配。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/synthesis/databaseindex.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"设计数据库索引"}],["meta",{"property":"og:description","content":"简介 建立最优的数据库索引是提升数据库查询性能的重要手段。在某种意义上，索引就是磁盘记录在内存中的缓存。索引要做的事情，就是快速找到匹配条件的记录行，并尽可能减少磁盘读写次数。本文总结数据库索引相关的知识及实践。 基本知识 InnoDB 里表数据是按照主键顺序存放的。InnoDB 会按照表定义的第一个非空索引（按索引定义顺序）作为主键。 索引（在 MySQL 中）是由存储引擎实现的。索引类型主要有顺序索引和哈希索引。顺序索引的底层结构是 B+Tree ，哈希索引的底层结构是哈希表。 索引是以空间换时间，减少了要扫描的数据量、避免排序、将随机IO变成顺序IO。使用索引的代价是：空间占用更大、插入和更新成本更大。顺序索引可支持：全值匹配、最左顺序匹配、列前缀匹配、范围匹配、精确匹配数列并范围匹配一列、只访问索引的查询、索引扫描排序。哈希索引可支持：全值匹配。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:42:50.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:42:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计数据库索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:42:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"基本知识","slug":"基本知识","link":"#基本知识","children":[]},{"level":2,"title":"开发事项","slug":"开发事项","link":"#开发事项","children":[]},{"level":2,"title":"索引实验","slug":"索引实验","link":"#索引实验","children":[]},{"level":2,"title":"开始试验","slug":"开始试验","link":"#开始试验","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1713152570000,"updatedTime":1713152570000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":19.84,"words":5952},"filePathRelative":"synthesis/databaseindex.md","localizedDate":"2024年4月15日","excerpt":"<h2> 简介</h2>\\n<p>建立最优的数据库索引是提升数据库查询性能的重要手段。在某种意义上，索引就是磁盘记录在内存中的缓存。索引要做的事情，就是快速找到匹配条件的记录行，并尽可能减少磁盘读写次数。本文总结数据库索引相关的知识及实践。</p>\\n<h2> 基本知识</h2>\\n<p>InnoDB 里表数据是按照主键顺序存放的。InnoDB 会按照表定义的第一个非空索引（按索引定义顺序）作为主键。 索引（在 MySQL 中）是由存储引擎实现的。索引类型主要有顺序索引和哈希索引。顺序索引的底层结构是 B+Tree ，哈希索引的底层结构是哈希表。</p>\\n<p>索引是以空间换时间，减少了要扫描的数据量、避免排序、将随机IO变成顺序IO。使用索引的代价是：空间占用更大、插入和更新成本更大。顺序索引可支持：全值匹配、最左顺序匹配、列前缀匹配、范围匹配、精确匹配数列并范围匹配一列、只访问索引的查询、索引扫描排序。哈希索引可支持：全值匹配。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
