const t=JSON.parse('{"key":"v-fd7ebd70","path":"/database/mysql/mysql-auto-increment-primary-key-continuous.html","title":"MySQL自增主键一定是连续的吗","lang":"zh-CN","frontmatter":{"title":"MySQL自增主键一定是连续的吗","category":"数据库","tag":["MySQL","大厂面试"],"description":"作者：飞天小牛肉 原文：https://mp.weixin.qq.com/s/qci10h9rJx_COZbHV3aygQ 众所周知，自增主键可以让聚集索引尽量地保持递增顺序插入，避免了随机查询，从而提高了查询效率。 但实际上，MySQL 的自增主键并不能保证一定是连续递增的。 下面举个例子来看下，如下所示创建一张表： 自增值保存在哪里？ 使用 ins...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/database/mysql/mysql-auto-increment-primary-key-continuous.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"MySQL自增主键一定是连续的吗"}],["meta",{"property":"og:description","content":"作者：飞天小牛肉 原文：https://mp.weixin.qq.com/s/qci10h9rJx_COZbHV3aygQ 众所周知，自增主键可以让聚集索引尽量地保持递增顺序插入，避免了随机查询，从而提高了查询效率。 但实际上，MySQL 的自增主键并不能保证一定是连续递增的。 下面举个例子来看下，如下所示创建一张表： 自增值保存在哪里？ 使用 ins..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"大厂面试"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL自增主键一定是连续的吗\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"自增值保存在哪里？","slug":"自增值保存在哪里","link":"#自增值保存在哪里","children":[]},{"level":2,"title":"自增值不连续的场景","slug":"自增值不连续的场景","link":"#自增值不连续的场景","children":[{"level":3,"title":"自增值不连续场景 1","slug":"自增值不连续场景-1","link":"#自增值不连续场景-1","children":[]},{"level":3,"title":"自增值不连续场景 2","slug":"自增值不连续场景-2","link":"#自增值不连续场景-2","children":[]},{"level":3,"title":"自增值不连续场景 3","slug":"自增值不连续场景-3","link":"#自增值不连续场景-3","children":[]},{"level":3,"title":"自增值不连续场景 4","slug":"自增值不连续场景-4","link":"#自增值不连续场景-4","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":9.91,"words":2973},"filePathRelative":"database/mysql/mysql-auto-increment-primary-key-continuous.md","localizedDate":"2023年9月21日","autoDesc":true}');export{t as data};
