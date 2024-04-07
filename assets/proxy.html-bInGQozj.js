const e=JSON.parse('{"key":"v-3c173006","path":"/design/create/proxy.html","title":"代理模式","lang":"zh-CN","frontmatter":{"title":"代理模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 介绍：在不改变原始类接口的条件下，为原始类定义一个代理类，主要目的是控制访问，而非加强功能，这也是它跟装饰器模式最大的不同。 场景：在需要用比较通用和复杂的对象指针代替简单的指针的时候，也常用在业务系统中开发一些非功能性需求。Spring的面向切面AOP，监控、统计、鉴权、限流、事务、幂等、日志，RPC、缓存。 优点： 1.代理模式能将代理对象与真实被调用的目标对象分离 2.一定程度上降低了系统的耦合度，扩展性好 3.可以起到保护目标对象的作用 4.可以对目标对象的功能增强","head":[["meta",{"property":"og:url","content":"https://ujava.cn/ujava/design/create/proxy.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"代理模式"}],["meta",{"property":"og:description","content":"概述 介绍：在不改变原始类接口的条件下，为原始类定义一个代理类，主要目的是控制访问，而非加强功能，这也是它跟装饰器模式最大的不同。 场景：在需要用比较通用和复杂的对象指针代替简单的指针的时候，也常用在业务系统中开发一些非功能性需求。Spring的面向切面AOP，监控、统计、鉴权、限流、事务、幂等、日志，RPC、缓存。 优点： 1.代理模式能将代理对象与真实被调用的目标对象分离 2.一定程度上降低了系统的耦合度，扩展性好 3.可以起到保护目标对象的作用 4.可以对目标对象的功能增强"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代理模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"1）静态代理","slug":"_1-静态代理","link":"#_1-静态代理","children":[]},{"level":2,"title":"2）jdk动态代理","slug":"_2-jdk动态代理","link":"#_2-jdk动态代理","children":[]},{"level":2,"title":"3）cglib动态代理","slug":"_3-cglib动态代理","link":"#_3-cglib动态代理","children":[]}],"git":{"createdTime":1696752619000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":3.91,"words":1173},"filePathRelative":"design/create/proxy.md","localizedDate":"2023年10月8日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：在不改变原始类接口的条件下，为原始类定义一个代理类，主要目的是控制访问，而非加强功能，这也是它跟装饰器模式最大的不同。</p>\\n<p><strong>场景</strong>：在需要用比较通用和复杂的对象指针代替简单的指针的时候，也常用在业务系统中开发一些非功能性需求。<code>Spring的面向切面AOP</code>，监控、统计、鉴权、限流、事务、幂等、日志，RPC、缓存。</p>\\n<p><strong>优点</strong>：</p>\\n<ul>\\n<li>1.代理模式能将代理对象与真实被调用的目标对象分离</li>\\n<li>2.一定程度上<code>降低了系统的耦合度</code>，扩展性好</li>\\n<li>3.可以起到保护目标对象的作用</li>\\n<li>4.可以<code>对目标对象的功能增强</code></li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
