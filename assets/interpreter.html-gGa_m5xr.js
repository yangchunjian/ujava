import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-VNTOiWo7.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：Java解释器模式是一种行为设计模式，它定义了一种语言和该语言的解释器，使得可以使用该语言来表达一些特定的操作。该模式适用于需要解释一些特定语言的场景，例如编译器、表达式计算器等。给分析对象定义一个语言，并定义该语言的文法表示，再设计一个解析器来解释语言中的句子。也就是说，<strong>用编译语言的方式来分析应用中的实例</strong>。这种模式实现了文法表达式处理的接口，该接口解释一个特定的上下文。<br> 在Java中，可以使用抽象语法树（AST）来表示语言表达式，并使用解释器来执行这些表达式。解释器模式通常包括以下几个组件：</p><ul><li>抽象表达式（Abstract Expression）：定义了一个抽象的解释器接口，该接口包含了解释器需要实现的方法。</li><li>终结符表达式（Terminal Expression）：实现了抽象表达式接口的终结符，用于表示语言中的基本操作或值。</li><li>非终结符表达式（Non-Terminal Expression）：实现了抽象表达式接口的非终结符，用于表示语言中的复杂操作。</li><li>上下文（Context）：包含了解释器需要的一些全局信息，例如变量、函数等。</li><li>解释器（Interpreter）：使用上述组件来解释语言表达式，并执行相应的操作。</li></ul><p><strong>场景</strong>：</p><ul><li>1.解释器模式适用场景 : <strong>某个 特定类型问题 发生频率 足够高</strong> ;</li><li><ol start="2"><li><strong>日志处理</strong> : 使用 脚本语言 或 编程语言 处理日志时 , 有很多服务 会产生 大量的日志 , 需要 对日志进行解析 , 生成报表 ;各个服务的日志格式不同 , 数据中的要素相同 , 这种情况下 , 通过程序解决上述问题 , 主要的解决方案就是使用解释器模式 ;</li></ol></li></ul><p>Spring 框架中 SpelExpressionParser 就使用解释器模式。日常项目中 , 解释器模式使用情况很少 ;解释器一般是 开源包 , 如 Express4J , JEP ;</p><p><strong>优点</strong>：</p><ul><li>1.<strong>扩展性好</strong>。由于在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展文法</li><li>2.<strong>容易实现</strong>。在语法树中的每个表达式节点类都是相似的，所以实现其文法较为容易</li></ul><p><strong>不足</strong>：</p><ul><li>1.执行效率较低。解释器模式中通常使用大量的循环和递归调用，当要解释的句子较复杂时，其运行速度很慢，且代码的调试过程也比较麻烦。</li><li>2.会引起类膨胀。解释器模式中的每条规则至少需要定义一个类，当包含的文法规则很多时，类的个数将急剧增加，导致系统难以管理与维护。</li><li>3.可应用的场景比较少。在软件开发中，需要定义语言文法的应用实例非常少，所以这种模式很少被使用到。</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象表达式角色</span>
<span class="token keyword">interface</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 终结符表达式角色</span>
<span class="token keyword">class</span> <span class="token class-name">TerminalExpression</span> <span class="token keyword">implements</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">TerminalExpression</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 非终结符表达式角色</span>
<span class="token keyword">class</span> <span class="token class-name">NonterminalExpression</span> <span class="token keyword">implements</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Expression</span> left<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Expression</span> right<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">NonterminalExpression</span><span class="token punctuation">(</span><span class="token class-name">Expression</span> left<span class="token punctuation">,</span> <span class="token class-name">Expression</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现相应的逻辑，例如加法</span>
        <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span> right<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 环境角色</span>
<span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可能包含解释器运行需要的全局信息</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterpreterPatternExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建表达式对象</span>
        <span class="token class-name">Expression</span> expr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NonterminalExpression</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">TerminalExpression</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
            <span class="token keyword">new</span> <span class="token class-name">TerminalExpression</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 执行解释操作</span>
        <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> expr<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;解释器计算结果: &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出 30</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，Expression是抽象表达式角色，它声明了interpret方法来解释表达式。TerminalExpression是终结符表达式角色，它实现了具体的解释操作。NonterminalExpression是非终结符表达式角色，它通过组合方式将两个表达式组合起来，实现了逻辑运算。Context类可以用来传递解释器运行时的上下文信息。客户端代码创建了一个加法表达式并执行了解释操作。</p>`,13),o=[p];function l(i,c){return s(),a("div",null,o)}const k=n(t,[["render",l],["__file","interpreter.html.vue"]]);export{k as default};
