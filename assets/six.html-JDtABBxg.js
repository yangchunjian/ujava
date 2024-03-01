const t=JSON.parse('{"key":"v-6a98b9ba","path":"/principle/six.html","title":"设计原理:架构模式","lang":"zh-CN","frontmatter":{"title":"设计原理:架构模式","icon":"laptop-code","category":["设计原理"],"description":"简介 架构模式是系统组件及组件交互的模式，决定了处理数据和领域对象的全局控制结构。组件化是使用架构模式的前提。 模式清单 分层模式 分层模式： 将应用划分为多个层次，定义各层的接口、任务抽象及消息格式，以及各层之间的通信与交互。业务系统通常会划分为业务逻辑层、服务层、领域层、数据层。网络栈协议是分层模式的典型应用。应用分层模式时，为确保系统可维护性，通常第j+1层只依赖于第j层的接口和服务；在性能场合下，可能会有跨层依赖的情况；应对特殊场景的设计中，会有“第j层的服务依赖于第j+1层的服务”的反向依赖关系。可参阅《面向模式的软件架构：模式系统》第2.2.1节。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/principle/six.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"设计原理:架构模式"}],["meta",{"property":"og:description","content":"简介 架构模式是系统组件及组件交互的模式，决定了处理数据和领域对象的全局控制结构。组件化是使用架构模式的前提。 模式清单 分层模式 分层模式： 将应用划分为多个层次，定义各层的接口、任务抽象及消息格式，以及各层之间的通信与交互。业务系统通常会划分为业务逻辑层、服务层、领域层、数据层。网络栈协议是分层模式的典型应用。应用分层模式时，为确保系统可维护性，通常第j+1层只依赖于第j层的接口和服务；在性能场合下，可能会有跨层依赖的情况；应对特殊场景的设计中，会有“第j层的服务依赖于第j+1层的服务”的反向依赖关系。可参阅《面向模式的软件架构：模式系统》第2.2.1节。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T03:13:51.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2024-03-01T03:13:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计原理:架构模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T03:13:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"模式清单","slug":"模式清单","link":"#模式清单","children":[]}],"git":{"createdTime":1698915541000,"updatedTime":1709262831000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":3.23,"words":968},"filePathRelative":"principle/six.md","localizedDate":"2023年11月2日","excerpt":"<h2> 简介</h2>\\n<p>架构模式是系统组件及组件交互的模式，决定了处理数据和领域对象的全局控制结构。组件化是使用架构模式的前提。</p>\\n<h2> 模式清单</h2>\\n<h4> 分层模式</h4>\\n<p>分层模式：<br>\\n将应用划分为多个层次，定义各层的接口、任务抽象及消息格式，以及各层之间的通信与交互。业务系统通常会划分为业务逻辑层、服务层、领域层、数据层。网络栈协议是分层模式的典型应用。应用分层模式时，为确保系统可维护性，通常第j+1层只依赖于第j层的接口和服务；在性能场合下，可能会有跨层依赖的情况；应对特殊场景的设计中，会有“第j层的服务依赖于第j+1层的服务”的反向依赖关系。可参阅《面向模式的软件架构：模式系统》第2.2.1节。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
