const t=JSON.parse('{"key":"v-43aed388","path":"/design/structure/bridge.html","title":"桥接模式","lang":"zh-CN","frontmatter":{"title":"桥接模式","icon":"laptop-code","category":["设计模式"],"description":"概述 介绍：桥接模式是一种将抽象化和实现化解耦的设计模式。它使用了封装、聚合以及继承等基本技术，将两个独立变化的维度通过抽象化的方式进行桥接，从而降低了它们之间的耦合度，使得系统更加灵活。将抽象部分与它的实现部分分离，使它们都可以独立地变化。是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。 场景： 1.抽象和具体实现之间 , 需要增加更多灵活性的情况。 2.不希望使用继承 , 或 因多层继承导致系统类的个数增加。 3.一个类存在 2 个或更多的 独立变化维度 , 并且这些维度都需要独立扩展。源码中JDBC 规范和不同数据库厂商驱动都用的桥接模式","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/structure/bridge.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"桥接模式"}],["meta",{"property":"og:description","content":"概述 介绍：桥接模式是一种将抽象化和实现化解耦的设计模式。它使用了封装、聚合以及继承等基本技术，将两个独立变化的维度通过抽象化的方式进行桥接，从而降低了它们之间的耦合度，使得系统更加灵活。将抽象部分与它的实现部分分离，使它们都可以独立地变化。是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。 场景： 1.抽象和具体实现之间 , 需要增加更多灵活性的情况。 2.不希望使用继承 , 或 因多层继承导致系统类的个数增加。 3.一个类存在 2 个或更多的 独立变化维度 , 并且这些维度都需要独立扩展。源码中JDBC 规范和不同数据库厂商驱动都用的桥接模式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T03:13:51.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2024-03-01T03:13:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"桥接模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T03:13:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1695721559000,"updatedTime":1709262831000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":3}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"design/structure/bridge.md","localizedDate":"2023年9月26日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：桥接模式是一种将<strong>抽象化和实现化解耦</strong>的设计模式。它使用了封装、聚合以及继承等基本技术，将两个独立变化的维度通过抽象化的方式进行桥接，从而降低了它们之间的耦合度，使得系统更加灵活。将抽象部分与它的实现部分分离，使它们都可以独立地变化。<code>是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度</code>。</p>\\n<p><strong>场景</strong>：</p>\\n<ul>\\n<li>1.抽象和具体实现之间 , 需要增加更多灵活性的情况。</li>\\n<li>2.不希望使用继承 , 或 因多层继承导致系统类的个数增加。</li>\\n<li>3.一个类存在 2 个或更多的 独立变化维度 , 并且这些维度都需要独立扩展。<code>源码中JDBC 规范和不同数据库厂商驱动都用的桥接模式</code></li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
