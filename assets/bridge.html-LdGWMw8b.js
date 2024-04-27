import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-TUaodxBm.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：桥接模式是一种将<strong>抽象化和实现化解耦</strong>的设计模式。它使用了封装、聚合以及继承等基本技术，将两个独立变化的维度通过抽象化的方式进行桥接，从而降低了它们之间的耦合度，使得系统更加灵活。将抽象部分与它的实现部分分离，使它们都可以独立地变化。<code>是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度</code>。</p><p><strong>场景</strong>：</p><ul><li>1.抽象和具体实现之间 , 需要增加更多灵活性的情况。</li><li>2.不希望使用继承 , 或 因多层继承导致系统类的个数增加。</li><li>3.一个类存在 2 个或更多的 独立变化维度 , 并且这些维度都需要独立扩展。<code>源码中JDBC 规范和不同数据库厂商驱动都用的桥接模式</code></li></ul><p><strong>优点</strong>：</p><ul><li>1.抽象与实现分离，扩展能力强</li><li>2.符合开闭原则</li><li>3.符合合成复用原则</li><li>4.实现细节透明化</li></ul><p><strong>不足</strong>：由于聚合关系建立在抽象层，要求开发者针对抽象化进行设计与编程，能正确地识别出系统中两个独立变化的维度，这<code>增加了系统的理解与设计难度</code></p><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象类部分</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Abstraction</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Implementor</span> implementor<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Abstraction</span><span class="token punctuation">(</span><span class="token class-name">Implementor</span> implementor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>implementor <span class="token operator">=</span> implementor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        implementor<span class="token punctuation">.</span><span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 修正抽象类</span>
<span class="token keyword">class</span> <span class="token class-name">RefinedAbstraction</span> <span class="token keyword">extends</span> <span class="token class-name">Abstraction</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">RefinedAbstraction</span><span class="token punctuation">(</span><span class="token class-name">Implementor</span> implementor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>implementor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 可以在这里添加一些额外的操作</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 实现类接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Implementor</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体实现类</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteImplementorA</span> <span class="token keyword">implements</span> <span class="token class-name">Implementor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteImplementorA operation.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">ConcreteImplementorB</span> <span class="token keyword">implements</span> <span class="token class-name">Implementor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteImplementorB operation.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BridgePatternExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用具体实现类A</span>
        <span class="token class-name">Abstraction</span> abstractionWithA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RefinedAbstraction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteImplementorA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        abstractionWithA<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 使用具体实现类B</span>
        <span class="token class-name">Abstraction</span> abstractionWithB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RefinedAbstraction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteImplementorB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        abstractionWithB<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，Abstraction类是一个抽象类，它通过组合方式引用了Implementor接口。RefinedAbstraction是一个修正抽象类，可以进一步扩展抽象类的行为。Implementor接口定义了实现类需要实现的操作。ConcreteImplementorA和ConcreteImplementorB是具体的实现类，实现了operationImpl方法。客户端代码中，我们创建了使用不同实现类的抽象类对象，并调用了操作方法。</p>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","bridge.html.vue"]]);export{k as default};
