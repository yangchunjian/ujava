const t=JSON.parse('{"key":"v-bfe6b376","path":"/design/action/strategy.html","title":"策略模式","lang":"zh-CN","frontmatter":{"title":"策略模式","icon":"laptop-code","category":["设计模式"],"description":"概述 介绍：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/action/strategy.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"策略模式"}],["meta",{"property":"og:description","content":"概述 介绍：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T03:13:51.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2024-03-01T03:13:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T03:13:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1696678805000,"updatedTime":1709262831000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":3}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"design/action/strategy.md","localizedDate":"2023年10月7日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，<strong>应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的</strong>。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
