import{_ as a,o as t,c as p,a as n}from"./app-DO_NcI_B.js";const i={};function l(r,e){return t(),p("div",null,e[0]||(e[0]=[n('<h1 id="第三梯队思想" tabindex="-1"><a class="header-anchor" href="#第三梯队思想"><span>第三梯队思想</span></a></h1><p>第三梯队思想，是程序执行流程的高层构建块，能够用来构建灵活而强大的指令流程。</p><h2 id="管道" tabindex="-1"><a class="header-anchor" href="#管道"><span>管道</span></a></h2><p>管道是类 Unix 系统的经典发明。管道将左边程序的输出传给右边程序的输入，可以轻易将连接的多个实用程序组成一条流水线，实现强大而多样化的功能（小程序、微功能）。</p><p>比如如下命令：在当前目录及子目录下的所有 .java 文件中查找匹配模式 pattern 的字符串，显示文件名，行号及匹配的行内容。</p><p><code>find . -name &#39;*.java&#39; | xargs awk &#39; $0 ~ /pattern/ { printf &quot;%s : Line %s :\\n%s \\n&quot; , FILENAME, FNR, $0 } &#39; | sed &#39;s/^[[:space:]]\\{1,\\}/ /&#39;</code></p><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h2><p>并发是同一个执行单元在一段时间内交替做多件事情。</p><p>比如一个人一边烧水，一遍看电视，一遍督促孩子做作业。看上去就像是在同一时间段内同时做了多件事情。由于某一项需要等待，往往在多项任务之间不断切换（保留现场和恢复现场）。切换会耗费一定的时间。</p><p>并发是利用多核的性能提升手段。事实上，并发也是世界运行的本质。这个世界正是由不计其数的人并发地去进行自己的活动所构建起来的。</p><h2 id="并行" tabindex="-1"><a class="header-anchor" href="#并行"><span>并行</span></a></h2><p>并行是多个互相独立的执行单元在同一段时间相互独立地做不同事情。</p><p>比如一个公司里，产品在理需求，研发在做技术调研，两个人都是朝同一目标前进，但做着不同的事情。</p><p>并行是并发的一种更严格的形式。</p><h2 id="批量" tabindex="-1"><a class="header-anchor" href="#批量"><span>批量</span></a></h2><p>涉及网络传输时，单个单个去获取数据和处理数据往往会比较慢，因为传输的次数增多，需要反复建立和销毁连接，会耗费不必要的连接建立时间和传输时间，尤其是连接建立成本、传输成本与处理成本相当甚至更大的情形。</p><p>比如传输一次需要 10s， 处理一个需要 5s。如果单个处理，那么处理 10 个需要 (10+5)10 = 150s；而如果一次批量获取10个，然后批量处理，则只需要 10 + 510 = 60s。 中间 90s 的传输成本都是不必要的。因此大量数据的获取和处理，往往是批量方式处理的。</p><p>比如运货，通常是一整箱一整箱地运送，而不是一个个的运送。</p><p>批量是提升大量数据处理的效率的常用手段。</p><h2 id="异步" tabindex="-1"><a class="header-anchor" href="#异步"><span>异步</span></a></h2><p>异步最初是为了解决响应的体验问题。在提交后台任务执行的同时，给前端先返回一个消息，让用户能够有所感知，而不是百无聊赖的等待。异步，多用于解耦后台耗时任务与前台展示。</p><p>多路 IO 复用，是异步方式解决高并发问题的技术基础。</p><h2 id="回调" tabindex="-1"><a class="header-anchor" href="#回调"><span>回调</span></a></h2><p>回调有点类似于埋点。指定做完一件事之后，要去处理一段特定逻辑，而这段特定逻辑可能是不同的。这段特定逻辑就称为回调逻辑。</p><p>回调能够让函数的功能更加灵活，是函数式编程的重要特征之一。回调的函数参数通常是函数指针。</p><h2 id="延迟" tabindex="-1"><a class="header-anchor" href="#延迟"><span>延迟</span></a></h2><p>亦称惰性加载。仅在必要时才去加载、访问和计算。</p><p>通常用于创建需要耗费资源较大的对象，或者将访问和计算延迟到必要的时候才去进行，以减少不必要的消耗。</p><p>比如说，举办一次会议，仅在会前一天或几个小时，才有必要在会场去”铺设“饮用矿泉水。因为如果提前去铺设，万一会议取消了，或者转换场地了，那么这些努力（连带时间和精力）就都白费了；比如说颁奖，只有在需要颁奖的时候，才让获奖人上台领奖，而不是从一开始就在台前等着。</p><p>延迟加载的常见使用场景：</p><ul><li>大图片延迟加载。浏览网站时，往往会先展示图片的缩略图，点击之后才会展示原图，这即是一种延迟加载策略。</li><li>Stream 流计算。 从 Stream 流读取数据，可以进行 filter, map，flatmap 等各种操作，但只有在 collect 的时候才进行计算。</li><li>初始化大对象。 对于创建开销高昂的对象，仅在需要的时候才去创建。</li></ul><h2 id="定时" tabindex="-1"><a class="header-anchor" href="#定时"><span>定时</span></a></h2><p>定时是在指定的时间周期性地做一件事。</p><p>软件系统中充满了各种定时任务。比如闹钟就是一个定时任务。</p><h2 id="通知" tabindex="-1"><a class="header-anchor" href="#通知"><span>通知</span></a></h2><p>与定时的指定时间不同，通知，是在所关注的事情发生变化时，发送消息通知，以便做相应处理。</p><p>比如订阅了一个公众号，公众号在发布文章时，就会给你推送一个消息。</p><p>通知往往是基于事件驱动机制或订阅推送机制来实现的。</p><h2 id="阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞"><span>阻塞</span></a></h2><p>我们自然希望程序能够时时刻刻流畅无阻地永远运行下去，但人类的思维能力是有限的。面对现实的复杂多变，很难做到如此完美。</p><p>阻塞，也是一种重要的编程思想。阻塞用于两种情形：</p><ul><li>适当阻塞，可以消减大规模程序的快速运转状况下的时间差（这种时间差是人很难消除和预料的）导致的 BUG，让程序行为容易推断；</li><li>程序在大流量的侵袭下，适当阻塞，能够让程序免于瞬间崩溃，有效利用系统资源。<br> 当然，程序阻塞也可以实现让客户持续付费</li></ul><p>排队机制，也是一种阻塞实现。当数据量超过系统能力承载范围时，让数据先入队等待，待系统处理有余力时再出队处理。“生产者-消费者”模式就是一种经典的阻塞并发模式。</p><p>阻塞有利有弊。可控地阻塞时，可以让系统有节奏地处理； 重度阻塞时，就可能会导致系统运行进一步恶化，最终导致崩溃。不可不防。</p>',44)]))}const h=a(i,[["render",l],["__file","third.html.vue"]]),c=JSON.parse(`{"path":"/mind/third.html","title":"第三梯队思想","lang":"zh-CN","frontmatter":{"title":"第三梯队思想","icon":"laptop-code","category":["设计思想"],"description":"第三梯队思想 第三梯队思想，是程序执行流程的高层构建块，能够用来构建灵活而强大的指令流程。 管道 管道是类 Unix 系统的经典发明。管道将左边程序的输出传给右边程序的输入，可以轻易将连接的多个实用程序组成一条流水线，实现强大而多样化的功能（小程序、微功能）。 比如如下命令：在当前目录及子目录下的所有 .java 文件中查找匹配模式 pattern 的...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/mind/third.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"第三梯队思想"}],["meta",{"property":"og:description","content":"第三梯队思想 第三梯队思想，是程序执行流程的高层构建块，能够用来构建灵活而强大的指令流程。 管道 管道是类 Unix 系统的经典发明。管道将左边程序的输出传给右边程序的输入，可以轻易将连接的多个实用程序组成一条流水线，实现强大而多样化的功能（小程序、微功能）。 比如如下命令：在当前目录及子目录下的所有 .java 文件中查找匹配模式 pattern 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三梯队思想\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"管道","slug":"管道","link":"#管道","children":[]},{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[]},{"level":2,"title":"并行","slug":"并行","link":"#并行","children":[]},{"level":2,"title":"批量","slug":"批量","link":"#批量","children":[]},{"level":2,"title":"异步","slug":"异步","link":"#异步","children":[]},{"level":2,"title":"回调","slug":"回调","link":"#回调","children":[]},{"level":2,"title":"延迟","slug":"延迟","link":"#延迟","children":[]},{"level":2,"title":"定时","slug":"定时","link":"#定时","children":[]},{"level":2,"title":"通知","slug":"通知","link":"#通知","children":[]},{"level":2,"title":"阻塞","slug":"阻塞","link":"#阻塞","children":[]}],"git":{"createdTime":1698747933000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":3}]},"readingTime":{"minutes":5.42,"words":1625},"filePathRelative":"mind/third.md","localizedDate":"2023年10月31日","excerpt":"\\n<p>第三梯队思想，是程序执行流程的高层构建块，能够用来构建灵活而强大的指令流程。</p>\\n<h2>管道</h2>\\n<p>管道是类 Unix 系统的经典发明。管道将左边程序的输出传给右边程序的输入，可以轻易将连接的多个实用程序组成一条流水线，实现强大而多样化的功能（小程序、微功能）。</p>\\n<p>比如如下命令：在当前目录及子目录下的所有 .java 文件中查找匹配模式 pattern 的字符串，显示文件名，行号及匹配的行内容。</p>\\n<p><code>find . -name '*.java' | xargs awk ' $0 ~ /pattern/ { printf \\"%s : Line %s :\\\\n%s \\\\n\\" , FILENAME, FNR, $0 } ' | sed 's/^[[:space:]]\\\\{1,\\\\}/ /'</code></p>","autoDesc":true}`);export{h as comp,c as data};
