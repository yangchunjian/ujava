import{_ as e,o as p,c as n,a as t}from"./app-DO_NcI_B.js";const r="/assets/img_6-DDuPg8yM.png",h={};function i(s,a){return p(),n("div",null,a[0]||(a[0]=[t('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>软件的构造，本质上就是组件与组合。组件是实现了特定功能的逻辑单元（程序），组合则是将“小组件集成为大组件，将大组件集成为整个应用系统”的联结方式。只要学过编程语言的人，大抵是会构造或大或小的组件的，那么组合结构就决定了程序是如何构成或优雅或拙劣的软件的。本文想探讨下软件是如何组合起来的。</p><h2 id="路线图" tabindex="-1"><a class="header-anchor" href="#路线图"><span>路线图</span></a></h2><figure><img src="'+r+'" alt="img_6.png" tabindex="0" loading="lazy"><figcaption>img_6.png</figcaption></figure><h2 id="基本构造元素" tabindex="-1"><a class="header-anchor" href="#基本构造元素"><span>基本构造元素</span></a></h2><h4 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h4><p>计算机的使命是计算和处理数据，而处理数据的最小单位就是指令。指令完成不可细分的原子的计算功能。也可以说，指令就是用于构造软件的原子组件。</p><h4 id="控制" tabindex="-1"><a class="header-anchor" href="#控制"><span>控制</span></a></h4><p>控制是指令的组合与执行顺序，主要有顺序/条件/循环三种。</p><p>计算机科学家已经证明：<br> 任何复杂的计算都可以分解为顺序、条件和循环三种基本结构。顺序是先吃饭后睡觉的时序结构；条件是根据某种因素决定下一步做什么，比如根据天气好坏决定出去玩还是宅家里；循环就是将某件事重复做若干次直到某种终止条件，比如某人玩游戏入迷直到被揪耳朵手机被摔。可以通过顺序/条件/循环三种基本结构来组合指令得到能做更多事情的指令序列。</p><h4 id="算法" tabindex="-1"><a class="header-anchor" href="#算法"><span>算法</span></a></h4><p>算法是能够完成一件事的指令序列的精确描述。比如一个人回家，先坐公交或地铁抵达火车站，然后检票上车抵达家所在的省份城市的火车站，然后从该城市的火车站坐火车到达家所在的县，最后做公交或出租车抵达家，就是一个算法。算法是通过顺序、条件、循环三种基本结构来构造的。相同的事情可以用不同复杂度的算法来实现，不同的事情需要复杂度不同的算法。算法的设计和实现决定了程序实现和完成任务的效率与优雅。</p><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h4><p>将指令序列通过算法组织起来，从而能够完成特定功能，并为之命名，就构成了函数。函数是有签名的算法。比如完成一段文字的单词计数。函数可以通过传入的参数来控制其行为，比如单词计数是否需要包含标点符号。传入的参数序列就是函数的签名。有了函数，通过函数的组合，就能构造出实用的程序。</p><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合"><span>组合</span></a></h2><h4 id="函数组合" tabindex="-1"><a class="header-anchor" href="#函数组合"><span>函数组合</span></a></h4><p>函数的基本组合方式有两种：直调和回调。<br> 直调是一个函数直接调用其他函数的能力来实现自己的能力；比如一个文件单词计数函数，可以调用文件读写函数来读取文件内容，这是直调，直调的逻辑是写死的；回调是通过传入的函数来灵活改变自己的能力；比如排序函数，通过调用传入的对象比较函数来实现任意的对象排序策略，则是回调，执行回调的函数是模板函数。<br> 回调衍生出高阶函数。</p><h4 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h4><p>直调有一种特殊形式： 函数反复调用自身，直到某个终止条件而退出。称之为“递归”。 递归是一种强大而有效的编程技术。</p><h4 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数"><span>高阶函数</span></a></h4><p>高阶函数是一个函数通过传入的函数来灵活地变换自己的行为，是函数式编程范式的基本思想。函数的功能粒度越小，可复用和可组合的能力程度越强。</p><h4 id="泛化" tabindex="-1"><a class="header-anchor" href="#泛化"><span>泛化</span></a></h4><p>泛化体现了函数和行为能够适配不同的类型和对象的能力。 比如排序功能可以对整数、字符串或任意对象进行排序；遍历功能可以对任意类型的对象列表或映射。</p><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h2><p>程序用于处理数据。将函数组织成流水线，让数据依次经过流水线进行加工处理得到最终结果，这是过程式编程范式。过程式编程范式可以完成很多实用功能，但过程式实现不容易组合成更大的容易理解、维护和修改的软件，不容易与外部系统交互和集成，也很难反映现实的语义，——<br> 过程式展现的是数据结构与算法的视角，而现实中的实体是拥有状态和行为的有机生命体。对于具有大量实体及复杂交互行为的系统，过程式很容易写成缠结在一起的一团面条。</p><p>面向对象则是在过程式范式的基础上，提供了一层数据与行为绑定的封装。数据就是事物或实体的各种属性的抽象与聚合，比如学生就是一个实体，而学生的身心的各种指标就是数据，行为则是实体数据的算法。这样，通过对象可以从语义上更自然清晰地描述现实中的实体及其行为，而程序的组织方式变成如何去分配对象的职责，以及如何组合对象的交互。对象的交互通过设计模式可以更加优雅的实现。</p><h4 id="继承与多态" tabindex="-1"><a class="header-anchor" href="#继承与多态"><span>继承与多态</span></a></h4><p>继承与多态是对象编程范式中的基本结构，体现了对象之间的普遍性和差异性。</p><p>继承是子类从基类直接获取的特征和行为。比如多数哺乳动物都有恒温胎生的行为；绝大多数人都具有相同的五官结构。</p><p>多态是子类相同的行为但是表现出不同的特征。 比如人和鸟都会飞，但是飞的实现方式不一样。鸟是靠生物自身机制，人是靠工具。绝大多数人都具备五感能力，但是使用五感的方式又有差异。</p><p>适宜地使用继承与多态，可以使对象的职责和组合更加自然清晰，使状态与行为的实现可复用和可扩展，程序的结构更加自然优雅，尽可能地避免难以维护和扩展的条件与分支语句。</p><h4 id="委托" tabindex="-1"><a class="header-anchor" href="#委托"><span>委托</span></a></h4><p>一个对象将某种行为委托给另一个对象来完成。比如一些危险的任务，在环境恶劣的地洞里或地球之外的其他星球勘探工作，人将这种无法适应环境工作的任务交给能够适应环境的机器人去完成。老板把任务委托给下属去完成。委托是直调在对象交互中的表现。</p><h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h4><p>组件是能够完成实用功能的封装的具有良好接口的可组合的逻辑单元。类似于俄罗斯方块游戏里的积木。函数、对象都可以看做是组件的实现形式。组件的设计优劣，一方面体现在内部设计实现上是否容易理解和修改以及运行得是否足够高效，一方面体现在其接口设计上是否更容易使用和与其它组件组合。组件的接口就类似插槽，插槽的设计决定了组件如何更好地使用。<br> 软件的构造，就是将功能各异的具有各种接口的组件合理地组织和集成起来，构成一个可视化的容易使用的实体。</p><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h2><p>既然能够完成一件事，那人们就想完成得更快。要完成得更快，要么投入更强的资源，比如招能力更强的工程师，要么投入更多的资源，比如招更多的工程师。能力更强的工程师总是少数，并且有瓶颈和上限，那么招更多的工程师，更合理滴分配任务就成了更常见的选择。俗话说：三个臭皮匠，顶个诸葛亮， ——<br> 嗯，对于软件人才来说，是很不真确的； 对于机器资源来说，还是合理的。</p><p>做一件事的算法，可以顺序，也可以并发。比如烧开水与读书，可以先烧开水，等开水烧好后再读书，这是顺序；<br> 可以在烧开水的同时读书。并发从本质上需要两个实体能够相互独立的行动，从语义上则可能针对某个实体来说。比如烧开水与读书，从语义上说是以人为中心的并发，但本质上是水与人两个实体的相互独立的活动。当然，也有人说并发也可以看成同一个实体在一段时间内能够做多个事情的能力，比如操作系统“看上去像是”可以在同一时间既运行音乐程序也运行文字处理程序和网页浏览程序。这是理解的差别。</p><p>并发反映了人希望能够通过投入更多资源获得更高效率的愿望和手段。<br> 比如多核处理器，通过将任务分配到多个处理器运行，通常比只有一个处理器运行更快。当然，这也取决于算法的设计是否可以充分利用多核处理器。糟糕或者不合理的算法可以使得多个处理器运行比一个处理器更慢。可以同时使用多个工作单元相互独立的工作，最后将这些单元的工作组合起来得到最终结果，这个是并行的概念，即增强的并发。</p><blockquote><p>并发提升了效率，也增加了复杂性。这是必得的命运。</p></blockquote><h4 id="协作" tabindex="-1"><a class="header-anchor" href="#协作"><span>协作</span></a></h4><p>既然涉及到多个工作单元的工作组合，那就涉及到协作。协作主要包括资源竞争和时序控制。如何控制多个资源访问有限的资源，比如多个人要共用少量的打印机；如何控制时序与进行，比如多个人集合达到某个地点后进行下一项活动。</p><p>第一种并发协作方式就是流水线。工作单元A,B,C,D,E,...<br> 依次执行，就像流水线一样。第I道工序与第J道工序是可以并发的。流水线并发方式需要对工序的时间有更精确的控制和安排。生产工艺制作流程，就是属于这种协作方式。</p><p>第二种并发协作方式就是每个工作单元都相互独立地工作，互不干扰。每个资源都完成了工作，那么整个工作就结束了。比如并发地下载多个文件，可以把这些文件分发到不同的处理器或进程，每个工作单元处理完成后，整个任务就结束了。</p><p>第三种并发协作方式是分而治之，聚而合之。<br> 比如要计算一亿个数的和。可以把这一亿个数分解成多个区间，每个区间使用一个工作单元进行求和处理，最后将所有工作单元的和合并起来（合并的过程还可以继续使用多区间分而合之的算法）。这种协作模式，需要规定一个抵达点，先完成工作到达抵达点的工作单元需要等待后完成工作到达抵达点的工作单元。</p><p>如果涉及到多个工作单元同时要访问有限的公共资源，就必须对工作单元访问同一个资源进行加锁和互斥操作。</p><h2 id="通信" tabindex="-1"><a class="header-anchor" href="#通信"><span>通信</span></a></h2><p>既然涉及到协作，那么必然涉及到通信。单机上的程序协作需要竞争资源和时序控制；多机的程序通信需要协议。</p><h4 id="信号" tabindex="-1"><a class="header-anchor" href="#信号"><span>信号</span></a></h4><p>一种通信方式是信号机制。比如程序与操作系统之间的通信就是信号。不同的信号有不同的含义，操作系统通过给程序发送信号来表达有某种事件发生，而程序则根据信号进行相应的处理，处理完成后发送信号给操作系统。</p><h4 id="消息" tabindex="-1"><a class="header-anchor" href="#消息"><span>消息</span></a></h4><p>一种通信方式是消息机制。比如程序与程序之间的通信是消息机制。 消息是信号的高级形式，含有更多的信息内容，程序可以根据消息做出更优的处理。</p><h4 id="协议" tabindex="-1"><a class="header-anchor" href="#协议"><span>协议</span></a></h4><p>消息投递和处理需要通过协议指定来完成。<br> 不同工作单元的效率是不一样的。比如单元A给单元B发送消息，如果A的发送速率远大于B的处理速率，那么B就会来不及处理，消息就会堆积甚至丢失；如果A的发送效率远小于B的处理效率，那么B就会一直等待闲置浪费。这时候就需要协议来控制A的发送速率和B的处理速率。此外，如果消息在中途阻塞、丢失等，都需要协议对这些情况指定如何处理。这样才能保证消息顺利滴从A发送到B并被适当滴处理。</p><h2 id="组合过程" tabindex="-1"><a class="header-anchor" href="#组合过程"><span>组合过程</span></a></h2><p>组合过程： 流程与规则 - 数据与算法 - 对象与交互 - 函数组合</p><p>首先，梳理事物运行规律的流程与规则；其次，设计表达流程与规则的数据结构与算法<br> ；接着，运用对象建模技术，将终端获取的数据合理地组织和分配到不同的对象实体中，通过交互的方式表达算法；然后，通过并发与通信手段，将实现不同功能的程序组件集成和连接构成最终的应用系统。</p><p>算法通过对象方法的交互来实现。对象方法保持尽可能少的逻辑，主要是提供交互的接口定义，而实现则通过基础工具函数和业务点函数的组合来完成。这就很好地融合了面向对象与函数式编程的优点：对象技术用于声明对象的特征和行为，而函数式编程用于实现对象的行为。</p><h2 id="算法是核心" tabindex="-1"><a class="header-anchor" href="#算法是核心"><span>算法是核心</span></a></h2><p>抛去纷扰的APP和技术，就能看到软件的灵魂：算法。算法，同数学、文学、绘画、艺术等，是更纯粹的思维形式，是人的生命中最精髓的部分。人之行踪，社会之变迁，皆此之外延。</p><p>无论是原子、函数、对象、组件、程序级别的组合，算法作为主线始终贯穿其中，组合可表达为算法。算法是计算领域的明珠。</p><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h4><p>本文对软件的组合结构进行了粗浅的探讨，旨在梳理软件的基本组合结构，为构造更大型的软件提供有益的思想基础。</p><p>指令是计算的原子单位，通过顺序、条件、循环三种基本结构组合成算法。这是原子级别上的组合结构。</p><p>算法可以实现成具有特定功能的指令序列，命名为函数。函数可以通过直调和回调实现更强大的函数和计算能力，可以通过泛化获得对类型的适配能力。这是在函数级别上的组合结构。</p><p>将数据和行为绑定在一起形成对象。继承和多态体现了对象特征与行为的普遍性和差异性。对象之间可以通过委托的方式来交互。这是在对象级别上的组合结构。</p><p>并发是提升效能的重要手段。并发涉及到算法在多核和多机上的分配和并发控制，涉及到程序与组件的协作与通信。程序与组件之间的信号与消息通过协议进行有效的通信，从而构成大型互联网应用系统。这是在程序与组件级别上的组合结构。</p>',67)]))}const c=e(h,[["render",i],["__file","five.html.vue"]]),d=JSON.parse('{"path":"/principle/five.html","title":"从指令到软件","lang":"zh-CN","frontmatter":{"title":"从指令到软件","icon":"laptop-code","category":["设计原理"],"description":"简介 软件的构造，本质上就是组件与组合。组件是实现了特定功能的逻辑单元（程序），组合则是将“小组件集成为大组件，将大组件集成为整个应用系统”的联结方式。只要学过编程语言的人，大抵是会构造或大或小的组件的，那么组合结构就决定了程序是如何构成或优雅或拙劣的软件的。本文想探讨下软件是如何组合起来的。 路线图 img_6.pngimg_6.png 基本构造元素...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/principle/five.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"从指令到软件"}],["meta",{"property":"og:description","content":"简介 软件的构造，本质上就是组件与组合。组件是实现了特定功能的逻辑单元（程序），组合则是将“小组件集成为大组件，将大组件集成为整个应用系统”的联结方式。只要学过编程语言的人，大抵是会构造或大或小的组件的，那么组合结构就决定了程序是如何构成或优雅或拙劣的软件的。本文想探讨下软件是如何组合起来的。 路线图 img_6.pngimg_6.png 基本构造元素..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:25:51.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:25:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从指令到软件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:25:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"路线图","slug":"路线图","link":"#路线图","children":[]},{"level":2,"title":"基本构造元素","slug":"基本构造元素","link":"#基本构造元素","children":[]},{"level":2,"title":"组合","slug":"组合","link":"#组合","children":[]},{"level":2,"title":"面向对象","slug":"面向对象","link":"#面向对象","children":[]},{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[]},{"level":2,"title":"通信","slug":"通信","link":"#通信","children":[]},{"level":2,"title":"组合过程","slug":"组合过程","link":"#组合过程","children":[]},{"level":2,"title":"算法是核心","slug":"算法是核心","link":"#算法是核心","children":[]}],"git":{"createdTime":1698915086000,"updatedTime":1713151551000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":13.84,"words":4151},"filePathRelative":"principle/five.md","localizedDate":"2023年11月2日","excerpt":"<h2>简介</h2>\\n<p>软件的构造，本质上就是组件与组合。组件是实现了特定功能的逻辑单元（程序），组合则是将“小组件集成为大组件，将大组件集成为整个应用系统”的联结方式。只要学过编程语言的人，大抵是会构造或大或小的组件的，那么组合结构就决定了程序是如何构成或优雅或拙劣的软件的。本文想探讨下软件是如何组合起来的。</p>\\n<h2>路线图</h2>\\n<figure><figcaption>img_6.png</figcaption></figure>\\n<h2>基本构造元素</h2>\\n<h4>指令</h4>\\n<p>计算机的使命是计算和处理数据，而处理数据的最小单位就是指令。指令完成不可细分的原子的计算功能。也可以说，指令就是用于构造软件的原子组件。</p>","autoDesc":true}');export{c as comp,d as data};
