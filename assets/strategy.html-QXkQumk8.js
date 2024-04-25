import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-CEJXkxb5.js";const e={},p=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，<strong>应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的</strong>。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑</p><p><strong>场景</strong>：</p><ul><li>1.业务代码需要根据场景不同，切换不同的实现逻辑</li><li>2.避免使用多重条件判断。</li></ul><p>策略模式在 JDK 中，ThreadPoolExecutor 类。TreeMap中</p><p><strong>优点</strong>：</p><ul><li>1.<strong>算法可以自由切换</strong>。</li><li>2.扩展可变部分，子类实现模板父类的某些细节，有助于模板父类的扩展</li><li>3.扩展性良好</li></ul><p><strong>不足</strong>：</p><ul><li>1.策略类会增多</li><li>2.<strong>所有策略类都需要对外暴露</strong></li></ul><p><strong>具体示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 策略接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 策略实现</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyA</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行策略 A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyB</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行策略 B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 策略上下文</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Strategy</span> strategy<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token class-name">Strategy</span> strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        strategy<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 使用策略模式的示例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建策略对象</span>
        <span class="token class-name">Strategy</span> strategyA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Strategy</span> strategyB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 使用策略A</span>
        <span class="token class-name">Context</span> contextA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span>strategyA<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contextA<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 使用策略B</span>
        <span class="token class-name">Context</span> contextB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span>strategyB<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contextB<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子展示了如何在Java中实现策略模式。策略模式允许你在运行时更改对象的行为，将算法的定义抽象为类，从而可以使用继承来改变行为。在这个例子中，Context类依赖于Strategy接口，而具体的策略（如ConcreteStrategyA和ConcreteStrategyB）实现了这个接口。通过将具体策略的实例注入到上下文中，我们可以动态地改变上下文的行为。</p>`,12),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","strategy.html.vue"]]);export{r as default};
