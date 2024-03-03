const e=JSON.parse('{"key":"v-c32b2652","path":"/design/other/doubledispatch.html","title":"双分派模式","lang":"zh-CN","frontmatter":{"title":"双分派模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 当带有参数的消息发送到对象时，结果行为由接收方中该方法的实现定义。有时，行为也必须由参数的类型决定。 实现此目的的一种方法是为 methods 参数创建多个 instanceof-checks。但是，这会产生维护问题。添加新类型时，我们还需要更改方法的实现并添加新的 instanceof-check。这违反了单一责任原则——一个类应该只有一个理由来改变。 而不是 instanceof-checks，更好的方法是对参数对象进行另一个虚拟调用。这样，可以轻松添加新功能，而无需修改现有实现（开闭原则）。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/other/doubledispatch.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"双分派模式"}],["meta",{"property":"og:description","content":"概述 当带有参数的消息发送到对象时，结果行为由接收方中该方法的实现定义。有时，行为也必须由参数的类型决定。 实现此目的的一种方法是为 methods 参数创建多个 instanceof-checks。但是，这会产生维护问题。添加新类型时，我们还需要更改方法的实现并添加新的 instanceof-check。这违反了单一责任原则——一个类应该只有一个理由来改变。 而不是 instanceof-checks，更好的方法是对参数对象进行另一个虚拟调用。这样，可以轻松添加新功能，而无需修改现有实现（开闭原则）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双分派模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1709261449000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":3}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"design/other/doubledispatch.md","localizedDate":"2024年3月1日","excerpt":"<h2> 概述</h2>\\n<p>当带有参数的消息发送到对象时，结果行为由接收方中该方法的实现定义。有时，行为也必须由参数的类型决定。<br>\\n实现此目的的一种方法是为 methods 参数创建多个 instanceof-checks。但是，这会产生维护问题。添加新类型时，我们还需要更改方法的实现并添加新的 instanceof-check。这违反了单一责任原则——一个类应该只有一个理由来改变。<br>\\n而不是 instanceof-checks，更好的方法是对参数对象进行另一个虚拟调用。这样，可以轻松添加新功能，而无需修改现有实现（开闭原则）。</p>\\n","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
