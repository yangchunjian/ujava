const e=JSON.parse('{"key":"v-a9d6ff5c","path":"/design/create/prototype.html","title":"原型模式","lang":"zh-CN","frontmatter":{"title":"原型模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 介绍：原型设计模式允许通过复制现有对象来创建新对象，而不是通过实例化类来创建新对象。用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。原型模式有两种实现方法，深拷贝和浅拷贝。原型模式的目的是 降低实例对象个数 , 减少构造函数的调用次数。 场景：在需要创建大量相似对象时非常有用，它可以避免重复创建对象，从而提高性能，并且可以根据需要实现浅拷贝或深拷贝。在Java中，原型模式的实现通常涉及到实现Cloneable接口和重写clone()方法。如果对象的创建成本比较大，而同一个类的不同对象之间差别不大（大部分字段都相同），在这种情况下，我们可以利用对已有对象（原型）进行复制（或者叫拷贝）的方式，来创建新对象，以达到节省创建时间的目的。Spring 中原型 bean 的创建。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/create/prototype.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"原型模式"}],["meta",{"property":"og:description","content":"概述 介绍：原型设计模式允许通过复制现有对象来创建新对象，而不是通过实例化类来创建新对象。用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。原型模式有两种实现方法，深拷贝和浅拷贝。原型模式的目的是 降低实例对象个数 , 减少构造函数的调用次数。 场景：在需要创建大量相似对象时非常有用，它可以避免重复创建对象，从而提高性能，并且可以根据需要实现浅拷贝或深拷贝。在Java中，原型模式的实现通常涉及到实现Cloneable接口和重写clone()方法。如果对象的创建成本比较大，而同一个类的不同对象之间差别不大（大部分字段都相同），在这种情况下，我们可以利用对已有对象（原型）进行复制（或者叫拷贝）的方式，来创建新对象，以达到节省创建时间的目的。Spring 中原型 bean 的创建。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原型模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1696680072000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"design/create/prototype.md","localizedDate":"2023年10月7日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：原型设计模式允许通过复制现有对象来创建新对象，而不是通过实例化类来创建新对象。用原型实例指定创建对象的种类，并且<code>通过拷贝这些原型创建新的对象</code>。原型模式有两种实现方法，<code>深拷贝和浅拷贝。原型模式的目的是 降低实例对象个数 , 减少构造函数的调用次数</code>。</p>\\n<p><strong>场景</strong>：在需要创建大量相似对象时非常有用，它可以避免重复创建对象，从而提高性能，并且可以根据需要实现浅拷贝或深拷贝。在Java中，原型模式的实现通常涉及到实现Cloneable接口和重写clone()方法。如果对象的创建成本比较大，而同一个类的不同对象之间差别不大（大部分字段都相同），在这种情况下，我们可以利用对已有对象（原型）进行复制（或者叫拷贝）的方式，来创建新对象，以达到节省创建时间的目的。<code>Spring 中原型 bean 的创建</code>。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};