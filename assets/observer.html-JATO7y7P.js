const t=JSON.parse('{"key":"v-093a1cc2","path":"/design/action/observer.html","title":"观察者模式","lang":"zh-CN","frontmatter":{"title":"观察者模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 介绍：Java观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。该模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理等。定义对象间的一种一对多的依赖关系,当一个对象的状态发生改变时, 所有依赖于它的对象都得到通知并被自动更新。观察者 有多个 , 被观察的 主题对象 只有一个。 场景： 一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。 需要在系统中创建一个触发链，使得事件拥有跨域通知（跨越两种观察者的类型） 当一个对象的状态发生改变时，需要通知其他对象并更新它们的状态。 当一个对象需要将自己的状态变化通知给其他对象，但是又不希望与这些对象之间产生紧密的耦合关系。 当一个对象的改变需要同时改变其他对象的状态，而且不知道具体有多少对象需要改变。 当一个对象的改变需要其他对象的协助，但是不希望这些对象与自己产生紧密的耦合关系。 当一个对象的改变会引起一系列的连锁反应，而且这些连锁反应的具体实现不希望被该对象所知道。 当一个对象需要向其他对象提供一种数据更新的方式，而且这种更新方式需要在不同的时间点通知不同的对象。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/action/observer.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"观察者模式"}],["meta",{"property":"og:description","content":"概述 介绍：Java观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。该模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理等。定义对象间的一种一对多的依赖关系,当一个对象的状态发生改变时, 所有依赖于它的对象都得到通知并被自动更新。观察者 有多个 , 被观察的 主题对象 只有一个。 场景： 一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。 需要在系统中创建一个触发链，使得事件拥有跨域通知（跨越两种观察者的类型） 当一个对象的状态发生改变时，需要通知其他对象并更新它们的状态。 当一个对象需要将自己的状态变化通知给其他对象，但是又不希望与这些对象之间产生紧密的耦合关系。 当一个对象的改变需要同时改变其他对象的状态，而且不知道具体有多少对象需要改变。 当一个对象的改变需要其他对象的协助，但是不希望这些对象与自己产生紧密的耦合关系。 当一个对象的改变会引起一系列的连锁反应，而且这些连锁反应的具体实现不希望被该对象所知道。 当一个对象需要向其他对象提供一种数据更新的方式，而且这种更新方式需要在不同的时间点通知不同的对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"观察者模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Java自带观察者模式介绍","slug":"java自带观察者模式介绍","link":"#java自带观察者模式介绍","children":[]}],"git":{"createdTime":1696676011000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":3.8,"words":1141},"filePathRelative":"design/action/observer.md","localizedDate":"2023年10月7日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：Java观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。该模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理等。定义对象间的一种一对多的依赖关系,<strong>当一个对象的状态发生改变时, 所有依赖于它的对象都得到通知并被自动更新</strong>。观察者 有多个 , 被观察的 主题对象 只有一个。</p>\\n<p><strong>场景</strong>：</p>\\n<ul>\\n<li>一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。</li>\\n<li>需要在系统中创建一个<strong>触发链，使得事件拥有跨域通知</strong>（跨越两种观察者的类型）</li>\\n<li>当一个对象的状态发生改变时，需要通知其他对象并更新它们的状态。</li>\\n<li>当一个对象需要将自己的状态变化通知给其他对象，但是又不希望与这些对象之间产生紧密的耦合关系。</li>\\n<li>当一个对象的改变需要同时改变其他对象的状态，而且不知道具体有多少对象需要改变。</li>\\n<li>当一个对象的改变需要其他对象的协助，但是不希望这些对象与自己产生紧密的耦合关系。</li>\\n<li>当一个对象的改变会引起一系列的连锁反应，而且这些连锁反应的具体实现不希望被该对象所知道。</li>\\n<li>当一个对象需要向其他对象提供一种数据更新的方式，而且这种更新方式需要在不同的时间点通知不同的对象。</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
