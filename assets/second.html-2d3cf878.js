import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as h,e as r}from"./app-85aa9840.js";const d={},p=r('<h1 id="第二梯队思想" tabindex="-1"><a class="header-anchor" href="#第二梯队思想" aria-hidden="true">#</a> 第二梯队思想</h1><p>第二梯队思想，虽然不如第一梯队思想那么通用广泛，却也是编程领域的重要思想，有着举足轻重的地位。</p><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>一个规模为N的问题的解可以由规模为S（S&lt;=N）的同样性质的问题的解来构造。</p><p>举个简单的例子，1+2+3+4+5 = 1 + (2+3+4+5) = 1 + (2 + (3+4+5)) = 1 + (2 + (3 + (4+5))) = 1 + (2 + (3 + (4+(5))))。 N 个数的和等于第 N 个数加上 N-1 个数的和。</p><p>递归技术是一种非常有效的程序设计技术。很多数据结构都有递归特性。列表、字符串、二叉树、JSON等。</p><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><p>索引类似于书的目录。要定位某篇文章，只要按目录页码直接翻到对应页码即可，而无需一页一页地翻看和查找。</p><p>通过某种算法对数据项标识和设置索引值，从而能够按照索引值快速定位相应数据，提升查找效率。</p><p>索引是海量数据查询的技术基础，而海量数据查询是现代互联网应用的基石。</p><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>迭代是使用固定的计算规则集合不断用新值取代旧值趋向真实值的控制结构。比如牛顿迭代法求N的平方根 X(k+1) = (X(k) + N/X(k))/2 (k&gt;=0) 就是一个迭代过程。可以指定初始值和终结迭代过程的迭代次数。迭代的重要指标是收敛性和收敛速度。</p><p>TDD 是一种迭代的测试开发方法论。先写好一个测试用例，运行测试用例，亮红灯，然后编程实现，再运行测试用例，亮绿灯。如此，一个测试用例就通过了。反复如此，直到所有测试用例都通过。迭代使得可控地趋于期望的目标。</p><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><p>遍历是从结构中的某个初始节点出发，使用算法访问结构中的所有节点。遍历有深度优先遍历和广度优先遍历。</p><p>深度遍历是一直往一个方向走（一条胡同走到底），先遍历根节点的第一个子节点，然后是第一个子节点的第一个子节点，如此递归，直到没有子节点，然后回退到上一个可选择路径的节点，遍历其下的第二个子节点，接着第二个子节点的第一个子节点，递归，如此，其依次直至所有节点都访问完毕。</p><p>广度遍历是先遍历根节点的所有第一层子节点，遍历完成后，从第一层的第一个子节点开始，遍历该节点下的第二层的所有节点；然后再从第一层的第二个子节点，遍历该节点下的第二层的所有节点；如此，其依次直至所有节点都访问完毕。</p><h2 id="中断" tabindex="-1"><a class="header-anchor" href="#中断" aria-hidden="true">#</a> 中断</h2><p>当你正投入工作状态的时候，领导发话了：开会开会！ 于是你不得不放下手头“心爱”的事情，跑去听一段@#￥@#%@￥%@%#￥%#的讲话，讲话回来后再以莫名的心绪重新干活。当然，人是有记忆的，当你去开会前，实际上已经记忆了当时做的事情的一些重要细节和进程，这样在回来时就能从这些细节和进程逐渐恢复到当时状态继续干活，就像讲话似乎没发生过一样。这就是中断：做某件事，更高优先级事情插入，保存现场，完成更高优先级的事情，恢复现场，继续做原来的事情。</p><p>中断是计算机心脏 CPU 来应对系统内外各种事件的机制。当发生某种事件时，产生一个信号中断，CPU 会保存现场，去执行中断处理程序；待中断处理程序执行完成后，就会恢复现场，继续执行之前的查询。</p><p>中断提供了有效应对系统中各种事件、使得系统能够正常运转的重要机制。同时，它也是一种重要思想：保存现场，做更高优先级事情, 恢复现场。</p><h2 id="回滚" tabindex="-1"><a class="header-anchor" href="#回滚" aria-hidden="true">#</a> 回滚</h2><p>回滚是计算机执行发生错误时，希望能够回到某个保存点，以便下次能够接续执行。</p><p>回滚提供了一种可靠的中途接续执行机制。 事务机制是回滚思想的重要应用。</p><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><p>通过替换静态模板中的变量， 从而生成动态文本的思想和技术。</p><p>如果多个输出都具有相似的格式或流程，就可以定义模板，通过模板与具体数据的结合，来实现具体的输出。</p><p>比如结婚请柬就是典型大的模板应用。请柬上的大部分内容是相同的，只有被邀请的人是不一样的，这部分是空出待填充的。</p><h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2><p>模式，俗称套路，是已有经验的提炼和总结。适当借助模式，能够有效地复用已有经验和实践，高效处理问题，避免重复踩坑。</p><p>模式，有编程模式、设计模式、分析模式、架构模式、业务模式等。善于发现模式、使用模式，是站在专家的肩膀上，能够看得更远。模式，即是学会汲取别人的丰富经验。</p><p>用模式“斩断”日常问题后，才能腾出更多精力做有创造性的事情。</p><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h2><p>代理，顾名思义，就是代替某物做某事。</p><p>代理通常作为”中间人“，起着缓存、保护、延迟加载、负载均衡等作用。</p>',35),i=[p];function n(t,c){return e(),h("div",null,i)}const l=a(d,[["render",n],["__file","second.html.vue"]]);export{l as default};
