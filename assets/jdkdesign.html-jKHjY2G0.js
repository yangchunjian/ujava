const e=JSON.parse('{"key":"v-d5e12a84","path":"/java/jdkdesign.html","title":"JDK源码中用到的23种设计模式","lang":"zh-CN","frontmatter":{"title":"JDK源码中用到的23种设计模式","category":"Java","icon":"laptop-code","tag":["设计Java"],"description":"创建模式 Singleton(单例) Abstract factory(抽象工厂) Factory(工厂方法) Builder(建造者) Prototype(原型) 结构模式 Adapter(适配器) Composite(组合) Decorator(装饰器) Facade(门面) Flyweight(享元模式) Proxy(代理) 行为模式 Chain of Responsibility(责任链) Command(命令) Interpreter(解释器) Iterator(迭代器) Mediator(中介) Memento(快照-备忘录模式) Observer(观察者) State(状态) Strategy(策略) Template(模板) Visitor(访问者)","head":[["meta",{"property":"og:url","content":"https://ujava.cn/java/jdkdesign.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"JDK源码中用到的23种设计模式"}],["meta",{"property":"og:description","content":"创建模式 Singleton(单例) Abstract factory(抽象工厂) Factory(工厂方法) Builder(建造者) Prototype(原型) 结构模式 Adapter(适配器) Composite(组合) Decorator(装饰器) Facade(门面) Flyweight(享元模式) Proxy(代理) 行为模式 Chain of Responsibility(责任链) Command(命令) Interpreter(解释器) Iterator(迭代器) Mediator(中介) Memento(快照-备忘录模式) Observer(观察者) State(状态) Strategy(策略) Template(模板) Visitor(访问者)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:03:42.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"设计Java"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:03:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK源码中用到的23种设计模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:03:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Singleton(单例)","slug":"singleton-单例","link":"#singleton-单例","children":[]},{"level":2,"title":"Abstract factory(抽象工厂)","slug":"abstract-factory-抽象工厂","link":"#abstract-factory-抽象工厂","children":[]},{"level":2,"title":"Factory(工厂方法)","slug":"factory-工厂方法","link":"#factory-工厂方法","children":[]},{"level":2,"title":"Builder(建造者)","slug":"builder-建造者","link":"#builder-建造者","children":[]},{"level":2,"title":"Prototype(原型)","slug":"prototype-原型","link":"#prototype-原型","children":[]},{"level":2,"title":"Adapter(适配器)","slug":"adapter-适配器","link":"#adapter-适配器","children":[]},{"level":2,"title":"Composite(组合)","slug":"composite-组合","link":"#composite-组合","children":[]},{"level":2,"title":"Decorator(装饰器)","slug":"decorator-装饰器","link":"#decorator-装饰器","children":[]},{"level":2,"title":"Facade(门面)","slug":"facade-门面","link":"#facade-门面","children":[]},{"level":2,"title":"Flyweight(享元模式)","slug":"flyweight-享元模式","link":"#flyweight-享元模式","children":[]},{"level":2,"title":"Proxy(代理)","slug":"proxy-代理","link":"#proxy-代理","children":[]},{"level":2,"title":"Chain of Responsibility(责任链)","slug":"chain-of-responsibility-责任链","link":"#chain-of-responsibility-责任链","children":[]},{"level":2,"title":"Command(命令)","slug":"command-命令","link":"#command-命令","children":[]},{"level":2,"title":"Interpreter(解释器)","slug":"interpreter-解释器","link":"#interpreter-解释器","children":[]},{"level":2,"title":"Iterator(迭代器)","slug":"iterator-迭代器","link":"#iterator-迭代器","children":[]},{"level":2,"title":"Mediator(中介)","slug":"mediator-中介","link":"#mediator-中介","children":[]},{"level":2,"title":"Memento(快照-备忘录模式)","slug":"memento-快照-备忘录模式","link":"#memento-快照-备忘录模式","children":[]},{"level":2,"title":"Observer(观察者)","slug":"observer-观察者","link":"#observer-观察者","children":[]},{"level":2,"title":"State(状态)","slug":"state-状态","link":"#state-状态","children":[]},{"level":2,"title":"Strategy(策略)","slug":"strategy-策略","link":"#strategy-策略","children":[]},{"level":2,"title":"Template(模板)","slug":"template-模板","link":"#template-模板","children":[]},{"level":2,"title":"Visitor(访问者)","slug":"visitor-访问者","link":"#visitor-访问者","children":[]}],"git":{"createdTime":1706144210000,"updatedTime":1709435022000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":5}]},"readingTime":{"minutes":3.48,"words":1043},"filePathRelative":"java/jdkdesign.md","localizedDate":"2024年1月25日","excerpt":"<!-- TOC -->\\n<ul>\\n<li><a href=\\"#%E5%88%9B%E5%BB%BA%E6%A8%A1%E5%BC%8F\\">创建模式</a>\\n<ul>\\n<li><a href=\\"#singleton%E5%8D%95%E4%BE%8B\\">Singleton(单例)</a></li>\\n<li><a href=\\"#abstract-factory%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82\\">Abstract factory(抽象工厂)</a></li>\\n<li><a href=\\"#factory%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95\\">Factory(工厂方法)</a></li>\\n<li><a href=\\"#builder%E5%BB%BA%E9%80%A0%E8%80%85\\">Builder(建造者)</a></li>\\n<li><a href=\\"#prototype%E5%8E%9F%E5%9E%8B\\">Prototype(原型)</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E7%BB%93%E6%9E%84%E6%A8%A1%E5%BC%8F\\">结构模式</a>\\n<ul>\\n<li><a href=\\"#adapter%E9%80%82%E9%85%8D%E5%99%A8\\">Adapter(适配器)</a></li>\\n<li><a href=\\"#composite%E7%BB%84%E5%90%88\\">Composite(组合)</a></li>\\n<li><a href=\\"#decorator%E8%A3%85%E9%A5%B0%E5%99%A8\\">Decorator(装饰器)</a></li>\\n<li><a href=\\"#facade%E9%97%A8%E9%9D%A2\\">Facade(门面)</a></li>\\n<li><a href=\\"#flyweight%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F\\">Flyweight(享元模式)</a></li>\\n<li><a href=\\"#proxy%E4%BB%A3%E7%90%86\\">Proxy(代理)</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E8%A1%8C%E4%B8%BA%E6%A8%A1%E5%BC%8F\\">行为模式</a>\\n<ul>\\n<li><a href=\\"#chain-of-responsibility%E8%B4%A3%E4%BB%BB%E9%93%BE\\">Chain of Responsibility(责任链)</a></li>\\n<li><a href=\\"#command%E5%91%BD%E4%BB%A4\\">Command(命令)</a></li>\\n<li><a href=\\"#interpreter%E8%A7%A3%E9%87%8A%E5%99%A8\\">Interpreter(解释器)</a></li>\\n<li><a href=\\"#iterator%E8%BF%AD%E4%BB%A3%E5%99%A8\\">Iterator(迭代器)</a></li>\\n<li><a href=\\"#mediator%E4%B8%AD%E4%BB%8B\\">Mediator(中介)</a></li>\\n<li><a href=\\"#memento%E5%BF%AB%E7%85%A7-%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F\\">Memento(快照-备忘录模式)</a></li>\\n<li><a href=\\"#observer%E8%A7%82%E5%AF%9F%E8%80%85\\">Observer(观察者)</a></li>\\n<li><a href=\\"#state%E7%8A%B6%E6%80%81\\">State(状态)</a></li>\\n<li><a href=\\"#strategy%E7%AD%96%E7%95%A5\\">Strategy(策略)</a></li>\\n<li><a href=\\"#template%E6%A8%A1%E6%9D%BF\\">Template(模板)</a></li>\\n<li><a href=\\"#visitor%E8%AE%BF%E9%97%AE%E8%80%85\\">Visitor(访问者)</a></li>\\n</ul>\\n</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};