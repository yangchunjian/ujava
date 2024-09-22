import{_ as l,c as t,a as i,o as a}from"./app-D23Pcn8f.js";const r={};function n(p,e){return a(),t("div",null,e[0]||(e[0]=[i('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>具备一些基本必要的思想是重要的。这些思想会影响我们的思考方式，以及设计和编写程序的决策。</p><ol><li>使用“对象”（而不是类）的思维去思考问题。</li></ol><p>类只是刻画对象的一种方式而已，但绝不是唯一的方式。 思考应用程序将由那些对象及其交互来构成和实现。应用程序中不一定有类，但一定有对象。</p><ol start="2"><li>编写并发安全的程序的核心是保护共享可变状态的访问。</li></ol><p>并发安全的核心不是关于并发机制，而是关于状态的管理。从状态的角度来考虑并发，而不是从并发机制。 因为思考方式会决定并发机制的实现与选择。</p><blockquote><p>关键元素：环境、状态、 对象、资源、 事件、活动、时间</p></blockquote><ul><li>状态：构成应用程序实现的原子量。状态是对数据所包含信息的一种抽象。</li><li>环境：是状态的集合。 分为全局环境、局部环境和个体环境。 个体环境是指单个对象的状态所构成的极小语境；<br> 全局环境是由所有对象的状态构成的极大语境；局部环境是根据需求而划定的中间语境，由若干对象的状态所构成的。 环境影响对象及其活动。</li></ul><p>对象：是拥有状态、执行活动的基本单位。通过对象活动来修改环境的状态，从而实现事件的发展和环境的变更。对象执行活动需要依赖于一些资源。这些资源有些是对象自身所拥有的状态，比如能力、素质等，有些是对象之外的状态，比如机器设备等。根据对象职责的不同，可以分为：<br> 普通对象， 协调者对象、 全局管理者、 资源分配与调度对象等。</p><ul><li>活动：活动的作用是对环境的状态产生变更。</li><li>资源：资源实际上也是一种对象， 但它通常不具备执行活动的能力。资源是对象完成活动的必不可少的元素。</li><li>事件： 在一个事件中， 会有零个或多个对象执行活动。事件完成后会具有影响力，这些影响意味着全局环境状态的变化。</li><li>时间：一种横跨上述各种概念的重要元素。</li></ul><p>应用程序的设计与管理就是对上述各种元素的设计与管理，尤其主要的是对状态的管理； 有了时间的影响，<br> 就更加困难了：要对全局状态的变迁进行管理。软件的可扩展性就是因为状态的变迁带来的。</p><h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路"><span>基本思路</span></a></h2><ol><li><p>对象自治和定期自检。 要管理全局状态实在太困难了， 比如说为了确保人体健康，要明晰人体每个细胞的状态， 那是件繁重的工程。<br> 因此， 第一个思路就是对象自治原则。 每个对象自己负责自己的状态管理和活动。根据需求定期对自己的状态进行检查， 以确保自己满足约束条件；</p></li><li><p>局部自治与全局协调。 分而治之总是一把很好的钥匙。 全局状态的管理是必要的，<br> 通过分治的方式，划定局部范围，每个局部包括若干局部管理者，负责汇总本区域的状态，并向全局管理者进行汇报；<br> 全局管理者根据战略目标进行协调和分配。局部管理者必须保证自己区域的合理状态；</p></li><li><p>备份与候补。 总有故障发生的时候， 比如说一个对象或细胞的坏死， 那么， 就不能因为这么个极小状态影响全局。 因此，<br> 局部管理者必须保证其管理范围内的备份与候补，以保证这个范围不会因为任何对象的错误导致不合理状态；<br> 同样，全局管理者亦可采用相应策略。冗余的优点是保证系统可靠性， 带来的风险是全局状态的不一致，状态同步开销。</p></li></ol><p>有时， 利用“纯对象”的思维来考虑问题会有点怪异。 考虑一个人拿笔写字。 那么，用对象的方式来表达：究竟是人在写字，笔在写字，<br> 还是纸在写字呢？一种思考方式是：</p><p>person.use(pen) ; pen.write(paper) ; paper.outprint(something) .</p><p>是不是有点拐弯抹角的 ？ 虽然看上去蛮符合对象思维的。</p><h2 id="场景描述" tabindex="-1"><a class="header-anchor" href="#场景描述"><span>场景描述</span></a></h2><ol><li>相互独立。 对象A 与对象B 使用各种相互独立的资源互不干扰地完成各自的活动。 它们唯一的交集是全局环境状态。<br> 比如一位中国的高中生在中国的操场上打篮球与一个美国的高中生在美国的操场上打篮球。 虽然它们共用全局环境状态，<br> 只要这种状态的变更不影响彼此的活动， 基本可以认为是相互独立的。 换句话说， 这两个人所处的局部环境是没有交集的。</li><li>共用资源。 对象 A 与对象 B 共用一台打印机。 它们的交集不仅仅是全局环境状态，而且有局部环境状态， 这种环境状态会影响彼此的活动的进行。<br> 这时候，必须进行顺序的协调。基本的方法是: 并发访问。 至于具体的访问实现细节，比如你先用几分钟我后用几分钟， 则依靠协议的约束。</li><li>相互协作。对象 A 给对象 B 发送邮件， 邮件中含有 B 的重要工作内容， B 在活动中必须给 A 发送邮件，汇报执行的进展。这时候， A<br> 与 B 是相互协调的关系。 B 的活动开始依赖于 A 的活动的完成； 同时， A 必须抽一点时间来查询 B 的执行状态，<br> 以决定下一步如何走。基本的方法是： 通知。 这里可以有一个通知者对象，专门负责彼此的协调或消息传递。</li></ol><p>具体到一个应用系统，乃至社会活动与发展，往往涉及这三个场景的相互交织，并且具有更多的复杂性。 不过， 使用这种思考方式还是蛮有趣的。</p><h2 id="并发程序设计的基本手段" tabindex="-1"><a class="header-anchor" href="#并发程序设计的基本手段"><span>并发程序设计的基本手段</span></a></h2><p>有一些基本技术手段用来减少并发带来的系统失败风险，提高并发程序的安全性和可维护性。</p><ol><li>不共享资源；</li><li>使用常量和不可变量；</li><li>使用实例限定，限制对象的作用范围和生命周期；</li><li>使用对象封装，限制对象的访问路径；</li><li>使用已有的安全并发组件。</li></ol><h2 id="计算机中的并发" tabindex="-1"><a class="header-anchor" href="#计算机中的并发"><span>计算机中的并发</span></a></h2><ol><li>IO操作与CPU计算相分离。 IO 操作是典型的慢性子， 而CPU 是急性子， 注定两者要分离。 事实上， I/0 操作彼此应该都是相互独立和并发的。IO操作和CPU<br> 计算的并发可以发生在单核CPU 计算机中；</li><li>多核CPU计算机。CPU 总是埋怨 内存读取太慢， 可仔细想想， 一个CPU 占用一个偌大的内存，是不是有点奢侈呢？ 于是，<br> 出现了多核CPU计算机。多个核共同占用一个内存，或者，多个核各占用各自的内存。然后一个总的CPU 负责调度所有的活动。<br> 现在有了并发的味道了。</li><li>分布式系统或计算机网络。当计算机互联后，这种并发的味道更浓了。 多CPU 的并发执行，使得计算机网络的能力更加强大，这就催生了现代互联网的各种奇迹。从最初的WEB<br> 网站，到分布式系统，高性能并行计算， 再到如今热火朝天的移动互联网。</li><li>移动设备（手机等）。其实相比微型计算机、笔记本、平板电脑而言，手机更像“计算细胞”，更容易形成繁荣的计算族群、部落。假设人均持有一台手机设备，那么世界将有几十亿个计算细胞，这些计算细胞就如同一个个体一样并发活动，<br> 足够构成一个壮观的计算世界了。</li></ol><h2 id="并发的高层语义" tabindex="-1"><a class="header-anchor" href="#并发的高层语义"><span>并发的高层语义</span></a></h2><p>显然，应用程序开发者不可能总是在原子语义上思考并发程序的设计和编写，那就如同用机器语言编写程序一样。必须存在精确的并发高层语义，由编程语言或操作系统或开发库提供，比如<br> Java 的线程类， 或者 Linux 系统的进程函数 fork 。<br> 当执行这些语义时，编译器或操作系统会根据自身的实现来自动分发和管理并发活动，保证并发活动的顺利正确完成。当使用各种高层语义时，必须精确理解这些语义，才能正确使用好，必要的时候必须深入底层实现一探究竟。<br> 海面之上的冰山是蔚为壮观的，海面之下的冰山则藏着无限丰富的乐趣。</p>',26)]))}const c=l(r,[["render",n],["__file","obj.html.vue"]]),s=JSON.parse('{"path":"/principle/obj.html","title":"对象与并发","lang":"zh-CN","frontmatter":{"title":"对象与并发","icon":"laptop-code","category":["设计原理"],"description":"简介 具备一些基本必要的思想是重要的。这些思想会影响我们的思考方式，以及设计和编写程序的决策。 使用“对象”（而不是类）的思维去思考问题。 类只是刻画对象的一种方式而已，但绝不是唯一的方式。 思考应用程序将由那些对象及其交互来构成和实现。应用程序中不一定有类，但一定有对象。 编写并发安全的程序的核心是保护共享可变状态的访问。 并发安全的核心不是关于并发...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/principle/obj.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"对象与并发"}],["meta",{"property":"og:description","content":"简介 具备一些基本必要的思想是重要的。这些思想会影响我们的思考方式，以及设计和编写程序的决策。 使用“对象”（而不是类）的思维去思考问题。 类只是刻画对象的一种方式而已，但绝不是唯一的方式。 思考应用程序将由那些对象及其交互来构成和实现。应用程序中不一定有类，但一定有对象。 编写并发安全的程序的核心是保护共享可变状态的访问。 并发安全的核心不是关于并发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:25:51.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:25:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象与并发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:25:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"基本思路","slug":"基本思路","link":"#基本思路","children":[]},{"level":2,"title":"场景描述","slug":"场景描述","link":"#场景描述","children":[]},{"level":2,"title":"并发程序设计的基本手段","slug":"并发程序设计的基本手段","link":"#并发程序设计的基本手段","children":[]},{"level":2,"title":"计算机中的并发","slug":"计算机中的并发","link":"#计算机中的并发","children":[]},{"level":2,"title":"并发的高层语义","slug":"并发的高层语义","link":"#并发的高层语义","children":[]}],"git":{"createdTime":1699504842000,"updatedTime":1713151551000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":7.97,"words":2392},"filePathRelative":"principle/obj.md","localizedDate":"2023年11月9日","excerpt":"<h2>简介</h2>\\n<p>具备一些基本必要的思想是重要的。这些思想会影响我们的思考方式，以及设计和编写程序的决策。</p>\\n<ol>\\n<li>使用“对象”（而不是类）的思维去思考问题。</li>\\n</ol>\\n<p>类只是刻画对象的一种方式而已，但绝不是唯一的方式。 思考应用程序将由那些对象及其交互来构成和实现。应用程序中不一定有类，但一定有对象。</p>\\n<ol start=\\"2\\">\\n<li>编写并发安全的程序的核心是保护共享可变状态的访问。</li>\\n</ol>\\n<p>并发安全的核心不是关于并发机制，而是关于状态的管理。从状态的角度来考虑并发，而不是从并发机制。 因为思考方式会决定并发机制的实现与选择。</p>","autoDesc":true}');export{c as comp,s as data};
