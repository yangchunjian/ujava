const t=JSON.parse('{"key":"v-6235ecc4","path":"/design/action/template.html","title":"模版模式","lang":"zh-CN","frontmatter":{"title":"模版模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 介绍：Java模板模式是一种行为设计模式，它定义了一个操作中的程序骨架，将一些步骤延迟到子类中实现。这使得子类可以在不改变程序结构的情况下重新定义程序中的某些步骤。定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。一次性实现一个算法的不变的部分，并将可变的行为留给子类来实现。主要是用来解决复用和扩展两个问题 场景： 多个子类有共同的方法，且逻辑基本相同 可以把核心的算法和重要的功能设计为模板方法，子类去实现相关细节功能 系统在进行重构或者是功能优化的时候可以将子类重复的代码抽离到父类中 当需要定义一组算法，并且这些算法的结构相似，但是实现细节不同时，可以使用模板模式。 当需要控制算法的流程，并且在算法的不同阶段需要不同的行为时，可以使用模板模式。 当需要在不影响算法整体结构的情况下，对算法的某些步骤进行定制化时，可以使用模板模式。 当需要在多个类中使用相同的算法时，可以使用模板模式，避免代码重复。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/ujava/design/action/template.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"模版模式"}],["meta",{"property":"og:description","content":"概述 介绍：Java模板模式是一种行为设计模式，它定义了一个操作中的程序骨架，将一些步骤延迟到子类中实现。这使得子类可以在不改变程序结构的情况下重新定义程序中的某些步骤。定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。一次性实现一个算法的不变的部分，并将可变的行为留给子类来实现。主要是用来解决复用和扩展两个问题 场景： 多个子类有共同的方法，且逻辑基本相同 可以把核心的算法和重要的功能设计为模板方法，子类去实现相关细节功能 系统在进行重构或者是功能优化的时候可以将子类重复的代码抽离到父类中 当需要定义一组算法，并且这些算法的结构相似，但是实现细节不同时，可以使用模板模式。 当需要控制算法的流程，并且在算法的不同阶段需要不同的行为时，可以使用模板模式。 当需要在不影响算法整体结构的情况下，对算法的某些步骤进行定制化时，可以使用模板模式。 当需要在多个类中使用相同的算法时，可以使用模板模式，避免代码重复。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模版模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1696676857000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"design/action/template.md","localizedDate":"2023年10月7日","excerpt":"<h2> 概述</h2>\\n<p><strong>介绍</strong>：Java模板模式是一种行为设计模式，它定义了一个操作中的程序骨架，将一些步骤延迟到子类中实现。这使得子类可以在不改变程序结构的情况下重新定义程序中的某些步骤。<strong>定义一个操作中的算法的骨架，而将一些步骤延迟到子类中</strong>。使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。一次性实现一个算法的不变的部分，并将可变的行为留给子类来实现。<strong>主要是用来解决复用和扩展两个问题</strong></p>\\n<p><strong>场景</strong>：</p>\\n<ul>\\n<li><strong>多个子类有共同的方法，且逻辑基本相同</strong></li>\\n<li>可以把核心的算法和重要的功能设计为模板方法，子类去实现相关细节功能</li>\\n<li>系统在进行重构或者是功能优化的时候可以将子类重复的代码抽离到父类中</li>\\n<li>当需要定义一组算法，并且这些算法的结构相似，但是实现细节不同时，可以使用模板模式。</li>\\n<li>当需要控制算法的流程，并且在算法的不同阶段需要不同的行为时，可以使用模板模式。</li>\\n<li>当需要在不影响算法整体结构的情况下，对算法的某些步骤进行定制化时，可以使用模板模式。</li>\\n<li>当需要在多个类中使用相同的算法时，可以使用模板模式，避免代码重复。</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
