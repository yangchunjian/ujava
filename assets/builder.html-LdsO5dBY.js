import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-CEJXkxb5.js";const t={},e=p(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：建造者模式是一种创建型设计模式，它允许您通过一步一步地构建复杂对象来创建不同类型的对象。它使用一个建造者类来封装对象的创建过程并将其分解为多个简单的步骤。这使得您可以通过更改这些步骤来创建不同类型的对象。 <code>用来创建复杂对象</code>，可以通过设置不同的可选参数，“定制化”地创建不同的对象。与工厂模式不同的是，建造者的目的在于把复杂构造过程从不同对象展现中抽离出来，使得同样的构造工序可以展现出不同的产品对象。<code>建造者模式注重零部件的组装过程，而工厂方法模式更注重零部件的创建过程</code>，但两者可以结合使用</p><p><strong>场景</strong>：创建组装复杂对象。StringBuilder 类中提供了 append() 方法，这就是一种链式创建对象的方法，开放构造步骤，最后调用 toString() 方法就可以获得一个完整的对象。MyBatis 中 SqlSessionFactoryBuiler 类用到了建造者模式</p><p><strong>优点</strong>：</p><ul><li>1.各个具体的<code>建造者相互独立，有利于系统的扩展</code></li><li>2.客户端不必知道产品内部组成的细节，便于<code>控制细节风险</code></li></ul><p><strong>不足</strong>：</p><ul><li>1.产品的组成部分必须相同，这限制了其使用范围</li><li>2.如果产品的内部变化复杂，该模式会增加很多的建造者类</li></ul><p><strong>具体示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 建造者模式示例：建造一辆汽车</span>
 
<span class="token comment">// 车辆类</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> engine<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> wheel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> body<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token class-name">String</span> engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWheel</span><span class="token punctuation">(</span><span class="token class-name">String</span> wheel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wheel <span class="token operator">=</span> wheel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBody</span><span class="token punctuation">(</span><span class="token class-name">String</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>body <span class="token operator">=</span> body<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;车辆{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;引擎=&#39;&quot;</span> <span class="token operator">+</span> engine <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, 轮子=&#39;&quot;</span> <span class="token operator">+</span> wheel <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, 车身=&#39;&quot;</span> <span class="token operator">+</span> body <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 建造者接口</span>
<span class="token keyword">interface</span> <span class="token class-name">CarBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">buildEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">buildWheel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">buildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体的建造者实现</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteCarBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">CarBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Car</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        car<span class="token punctuation">.</span><span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token string">&quot;V8引擎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildWheel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        car<span class="token punctuation">.</span><span class="token function">setWheel</span><span class="token punctuation">(</span><span class="token string">&quot;大轮子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        car<span class="token punctuation">.</span><span class="token function">setBody</span><span class="token punctuation">(</span><span class="token string">&quot;豪华车身&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> car<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 指挥者类</span>
<span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">construct</span><span class="token punctuation">(</span><span class="token class-name">CarBuilder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">buildEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildWheel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 使用示例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuilderPatternExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Director</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CarBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteCarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> car <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码首先定义了一个Car类，它代表了要构建的汽车实体。然后定义了一个CarBuilder接口，该接口规定了构建汽车的不同部分的方法。ConcreteCarBuilder是CarBuilder的具体实现，负责实际构建汽车的各个部分。Director类负责安排如何构建汽车，它接受一个CarBuilder实例作为参数，并调用其方法来构建汽车。最后，在BuilderPatternExample类的main方法中，我们创建了Director、ConcreteCarBuilder，并通过Director来构建一辆汽车，然后打印出汽车的信息。</p>`,10),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","builder.html.vue"]]);export{d as default};
