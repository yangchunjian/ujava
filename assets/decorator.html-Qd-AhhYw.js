const t=JSON.parse('{"key":"v-9619129c","path":"/design/structure/decorator.html","title":"装饰器模式","lang":"zh-CN","frontmatter":{"title":"装饰器模式","index":false,"icon":"laptop-code","category":["设计模式"],"description":"概述 介绍：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个或多个装饰器类来向对象添加附加行为。 每个装饰器类都具有对其装饰的对象的引用，并且它可以在委托给对象的原始行为之前或之后修改对象的行为。 允许向一个现有的对象添加新的功能，同时又不改变其结构。主要解决继承关系过于复杂的问题，通过组合来替代继承，给原始类动态添加增强功能。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/structure/decorator.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"装饰器模式"}],["meta",{"property":"og:description","content":"概述 介绍：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个或多个装饰器类来向对象添加附加行为。 每个装饰器类都具有对其装饰的对象的引用，并且它可以在委托给对象的原始行为之前或之后修改对象的行为。 允许向一个现有的对象添加新的功能，同时又不改变其结构。主要解决继承关系过于复杂的问题，通过组合来替代继承，给原始类动态添加增强功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-12T11:19:18.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2023-10-12T11:19:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰器模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-12T11:19:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1696673862000,"updatedTime":1697109558000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"design/structure/decorator.md","localizedDate":"2023年10月7日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个或多个装饰器类来向对象添加附加行为。 每个装饰器类都具有对其装饰的对象的引用，并且它可以在委托给对象的原始行为之前或之后修改对象的行为。<br>\\n<code>允许向一个现有的对象添加新的功能，同时又不改变其结构</code>。主要解决继承关系过于复杂的问题，<code>通过组合来替代继承，给原始类动态添加增强功能</code>。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
