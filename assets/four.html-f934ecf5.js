import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-8f078898.js";const p="/assets/img_1-eddee708.png",e={},c=t('<h1 id="第四梯队思想" tabindex="-1"><a class="header-anchor" href="#第四梯队思想" aria-hidden="true">#</a> 第四梯队思想</h1><h2 id="_1-面向过程编程" tabindex="-1"><a class="header-anchor" href="#_1-面向过程编程" aria-hidden="true">#</a> 1.面向过程编程</h2><p>“面向过程”(Procedure Oriented)是一种以过程为中心的编程思想。这些都是以什么正在发生为目标进行编程，不同于面向对象的是谁在受影响。与面向对象明显的不同就是封装、继承、类。</p><ul><li>特性：模块化 流程化</li><li>优点：性能比面向对象高, 因为类调用时需要实例化，开销比较大，比较消耗资源;</li><li>单片机、嵌入式开发、Linux/Unix等一般采用面向过程开发，性能是最重要的因素。</li><li>缺点：没有面向对象易维护、易复用、易扩展</li></ul><p>例如下面这个学生入学的例子：<br><img src="'+p+`" alt="img_1.png" loading="lazy"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>第一个用户的信息
student_a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token char">&#39;name&#39;</span><span class="token operator">:</span> <span class="token char">&#39;小明&#39;</span><span class="token punctuation">,</span>
    <span class="token char">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
    <span class="token char">&#39;gender&#39;</span><span class="token operator">:</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">,</span>
    # 座右铭
    <span class="token char">&#39;matto&#39;</span><span class="token operator">:</span> &#39;人生苦短， 我用python<span class="token operator">!</span>&#39;
<span class="token punctuation">}</span>

第二个用户的信息
student_b <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token char">&#39;name&#39;</span><span class="token operator">:</span> <span class="token char">&#39;小红&#39;</span><span class="token punctuation">,</span>
    <span class="token char">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
    <span class="token char">&#39;gender&#39;</span><span class="token operator">:</span> <span class="token char">&#39;女&#39;</span><span class="token punctuation">,</span>
    # 座右铭
    <span class="token char">&#39;matto&#39;</span><span class="token operator">:</span> &#39;合理安排时间，就等于节约时间。&#39;
<span class="token punctuation">}</span>

第三个用户的信息
student_c <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token char">&#39;name&#39;</span><span class="token operator">:</span> <span class="token char">&#39;小李&#39;</span><span class="token punctuation">,</span>
    <span class="token char">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
    <span class="token char">&#39;gender&#39;</span><span class="token operator">:</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">,</span>
    # 座右铭
    <span class="token char">&#39;matto&#39;</span><span class="token operator">:</span> &#39;挫折不是惩罚而是学习的机会。&#39;
<span class="token punctuation">}</span>



def <span class="token function">roll</span><span class="token punctuation">(</span>studentDict<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    入学过程封装的函数
    :return:
    &quot;&quot;&quot;</span>
    # 字典的get方法<span class="token operator">:</span> 如果key值不存在， 直接返回为空；
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;正在办理手续&quot;</span><span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token char">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;正在注册用户[%s]信息&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>studentDict<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token char">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;用户[%s]正在入学&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>studentDict<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token char">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;用户[%s]正在上课&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>studentDict<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token char">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;用户[%s]正在自我介绍&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>studentDict<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token char">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value in studentDict<span class="token punctuation">.</span><span class="token function">items</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token char">&#39;:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>

<span class="token function">roll</span><span class="token punctuation">(</span>student_a<span class="token punctuation">)</span>       
<span class="token function">roll</span><span class="token punctuation">(</span>student_b<span class="token punctuation">)</span> 
<span class="token function">roll</span><span class="token punctuation">(</span>student_c<span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码就是典型的面向过程编程。</p><p>面向过程：根据业务逻辑从上到下写代码 。面向过程编程最易被初学者接受，其往往用一长段代码来实现指定功能，开发过程的思路是将数据与函数按照执行的逻辑顺序组织在一起，数据与函数分开考虑。</p><p>考虑现实生活中，我们的思维方式是放在学生这个个人上，是学生做了自我介<br> 绍。而不是像我们刚刚写出的代码，先有了介绍的行为，再去看介绍了谁。<br> 用我们的现实思维方式该怎么用程序表达呢？这就要用到面向对象的编程思想了。</p><p>面向对象：将数据与函数绑定到一起，进行封装，这样能够更快速的开发程序，减少了重复代码的重写过程</p><h2 id="_2-函数式编程" tabindex="-1"><a class="header-anchor" href="#_2-函数式编程" aria-hidden="true">#</a> 2. 函数式编程</h2><p>函数式编程是种编程方式，它将电脑运算视为函数的计算。函数编程语言最重要的基础是λ演算（lambda calculus），而且λ演算的函数可以接受函数当作输入（参数）和输出（返回值）。</p><p>主要思想: 把运算过程尽量写成一系列嵌套的函数调用。<br> 例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>def <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b

def <span class="token function">multi</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> a<span class="token operator">*</span>b

<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">multi</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python 不是也不大可能会成为一种函数式编程语言，但是它支持许多有价值的函数式编程语言构建。也有些表现得像函数式编程机制（如：内建函数 filter()、map()、reduce()），但是从传统上也不能被认为是函数式编程语言的构建。</p><h2 id="_3-面向对象编程" tabindex="-1"><a class="header-anchor" href="#_3-面向对象编程" aria-hidden="true">#</a> 3.面向对象编程</h2><p>面向对象是按人们认识客观世界的系统思维方式，采用基于对象（实体）的概念建立模型，模拟客观世界分析、设计、实现软件的办法。通过面向对象的理念使计算机软件系统能与现实世界中的系统一一对应。</p><ul><li>特性：抽象 封装 继承 多态</li><li>优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护</li><li>缺点：性能比面向过程低</li></ul><h2 id="_4-面向过程与面向对象的区别" tabindex="-1"><a class="header-anchor" href="#_4-面向过程与面向对象的区别" aria-hidden="true">#</a> 4.面向过程与面向对象的区别</h2><ul><li>面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了；</li><li>面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。</li></ul><p>可以拿生活中的实例来理解面向过程与面向对象，例如五子棋。</p><p>面向过程的设计思路就是首先分析问题的步骤：1、开始游戏，2、黑子先走，3、绘制画面，4、判断输赢，5、轮到白子，6、绘制画面，7、判断输赢，8、返回步骤2，9、输出最后结果。把上面每个步骤用不同的方法来实现。</p><p>如果是面向对象的设计思想来解决问题。面向对象的设计则是从另外的思路来解决问题。整个五子棋可以分为1、黑白双方，这两方的行为是一模一样的，2、棋盘系统，负责绘制画面，3、规则系统，负责判定诸如犯规、输赢等。第一类对象（玩家对象）负责接受用户输入，并告知第二类对象（棋盘对象）棋子布局的变化，棋盘对象接收到了棋子的变化就要负责在屏幕上面显示出这种变化，同时利用第三类对象（规则系统）来对棋局进行判定。</p><p>可以明显地看出，面向对象是以功能来划分问题，而不是步骤。同样是绘制棋局，这样的行为在面向过程的设计中分散在了多个步骤中，很可能出现不同的绘制版本，因为通常设计人员会考虑到实际情况进行各种各样的简化。而面向对象的设计中，绘图只可能在棋盘对象中出现，从而保证了绘图的统一。</p>`,24),o=[c];function i(l,u){return s(),a("div",null,o)}const k=n(e,[["render",i],["__file","four.html.vue"]]);export{k as default};
