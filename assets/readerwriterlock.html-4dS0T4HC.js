const e=JSON.parse('{"key":"v-3f42dafe","path":"/design/other/readerwriterlock.html","title":"读写锁(Reader Writer Lock)模式","lang":"zh-CN","frontmatter":{"title":"读写锁(Reader Writer Lock)模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 当访问数据结构模式时，常规锁不会区分“读锁”和“写锁” 由许多读取数据的线程组成，每个线程都必须锁定数据，这会产生不必要的序列化。 众所周知，读写器锁的存在解决了这个问题 “多个并发读卡器，单个写入器锁”，用于由多个线程同时读取数据组成 并且只允许一个线程写入或修改数据。所有其他人（读者或作者）将被阻止，而作者 正在修改或写入数据，并被取消阻止，直到写入程序完成写入。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/other/readerwriterlock.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"读写锁(Reader Writer Lock)模式"}],["meta",{"property":"og:description","content":"概述 当访问数据结构模式时，常规锁不会区分“读锁”和“写锁” 由许多读取数据的线程组成，每个线程都必须锁定数据，这会产生不必要的序列化。 众所周知，读写器锁的存在解决了这个问题 “多个并发读卡器，单个写入器锁”，用于由多个线程同时读取数据组成 并且只允许一个线程写入或修改数据。所有其他人（读者或作者）将被阻止，而作者 正在修改或写入数据，并被取消阻止，直到写入程序完成写入。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-04T06:36:55.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-03-04T06:36:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"读写锁(Reader Writer Lock)模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-04T06:36:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1709534215000,"updatedTime":1709534215000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"design/other/readerwriterlock.md","localizedDate":"2024年3月4日","excerpt":"<h2> 概述</h2>\\n<p>当访问数据结构模式时，常规锁不会区分“读锁”和“写锁”<br>\\n由许多读取数据的线程组成，每个线程都必须锁定数据，这会产生不必要的序列化。<br>\\n众所周知，读写器锁的存在解决了这个问题<br>\\n“多个并发读卡器，单个写入器锁”，用于由多个线程同时读取数据组成<br>\\n并且只允许一个线程写入或修改数据。所有其他人（读者或作者）将被阻止，而作者<br>\\n正在修改或写入数据，并被取消阻止，直到写入程序完成写入。</p>\\n","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
