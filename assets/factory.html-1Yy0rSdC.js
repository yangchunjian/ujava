const e=JSON.parse('{"key":"v-942c7fac","path":"/design/create/factory.html","title":"工厂模式","lang":"zh-CN","frontmatter":{"title":"工厂模式","icon":"laptop-code","category":["设计模式"],"description":"概述 介绍： 通过一个工厂类来实现对象的创建，而无需直接暴露对象的创建逻辑给客户端。 工厂模式包括简单工厂、工厂方法、抽象工厂这3种细分模式。用来创建不同但是相关类型的对象（继承同一父类或者接口的一组子类），由给定的参数来决定创建哪种类型的对象。简单工厂模式的优点在于客户端无需了解具体产品类的创建细节，只需通过工厂类来创建对象，并且工厂类可以根据客户端的需求来动态创建不同类型的对象。但是缺点也比较明显，如果需要创建的产品类数量较多，则工厂类的代码会变得很臃肿，不便于维护。 场景：当对象创建逻辑比较复杂，是一个“大工程”的时候，就考虑使用工厂模式，封装对象的创建过程，将对象的创建和使用相分离。Spring IOC、Google Guice就是使用的工厂模式。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/create/factory.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"工厂模式"}],["meta",{"property":"og:description","content":"概述 介绍： 通过一个工厂类来实现对象的创建，而无需直接暴露对象的创建逻辑给客户端。 工厂模式包括简单工厂、工厂方法、抽象工厂这3种细分模式。用来创建不同但是相关类型的对象（继承同一父类或者接口的一组子类），由给定的参数来决定创建哪种类型的对象。简单工厂模式的优点在于客户端无需了解具体产品类的创建细节，只需通过工厂类来创建对象，并且工厂类可以根据客户端的需求来动态创建不同类型的对象。但是缺点也比较明显，如果需要创建的产品类数量较多，则工厂类的代码会变得很臃肿，不便于维护。 场景：当对象创建逻辑比较复杂，是一个“大工程”的时候，就考虑使用工厂模式，封装对象的创建过程，将对象的创建和使用相分离。Spring IOC、Google Guice就是使用的工厂模式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T03:13:51.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2024-03-01T03:13:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工厂模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T03:13:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1696751184000,"updatedTime":1709262831000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":3}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"design/create/factory.md","localizedDate":"2023年10月8日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>： 通过一个工厂类来实现对象的创建，而无需直接暴露对象的创建逻辑给客户端。 工厂模式包括简单工厂、工厂方法、抽象工厂这3种细分模式。<code>用来创建不同但是相关类型的对象</code>（继承同一父类或者接口的一组子类），由给定的参数来决定创建哪种类型的对象。简单工厂模式的优点在于客户端无需了解具体产品类的创建细节，只需通过工厂类来创建对象，并且工厂类可以根据客户端的需求来动态创建不同类型的对象。但是缺点也比较明显，如果需要创建的产品类数量较多，则工厂类的代码会变得很臃肿，不便于维护。</p>\\n<p><strong>场景</strong>：当对象创建逻辑比较复杂，是一个“大工程”的时候，就考虑使用工厂模式，<code>封装对象的创建过程，将对象的创建和使用相分离</code>。Spring IOC、Google Guice就是使用的工厂模式。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
