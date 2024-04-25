import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-ceqeJiVr.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：Java中介者模式是一种行为设计模式，它允许对象之间通过中介者对象进行通信，从而避免对象之间的直接耦合。中介者模式将对象之间的复杂关系转化为中介者和对象之间的简单关系，从而提高了系统的灵活性和可维护性。在Java中介者模式中，中介者对象负责协调对象之间的通信，它通常包含一些公共方法，用于处理对象之间的交互。对象之间的通信通过中介者对象进行，从而避免了对象之间的直接耦合。<br> 又叫做调停模式，<strong>定义一个封装一组对象如何交互的对象</strong> ，通过使对象明确地相互引用 , 促进松散耦合 , 允许独立改变它们之间的 交互 ;比如<strong>我们各种设备之间的通信，就是通过服务器作为中介对象来进行交互</strong></p><p><strong>场景</strong>：</p><ul><li>1.系统中对象之间存在复杂的引用关系，系统结构混乱且难以理解</li><li><ol start="2"><li>一个对象由于引用了其他很多对象并且直接和这些对象通信，导致难以复用该对象</li></ol></li><li>3.需要通过一个中间类来封装多个类中的行为，但又不想生成太多的子类</li></ul><p><strong>在MVC框架中，控制器（Controller）就是模型（Model）和视图（View）之间的中介者</strong></p><p><strong>优点</strong>：</p><ul><li>1.<strong>遵守单一职责原则</strong>，各个组件的职责都可以保持克制和单一</li><li>2.<strong>遵守开闭原则</strong>，各个组件的代码不需要修改，但是他们的行为的可以通过实现中介类来做扩展</li><li>3.<strong>遵守迪米特法则</strong>，各个组件之间无需知晓对方的知识，只需要关注和中介的基础交互即可</li></ul><p><strong>不足</strong>：组件的可扩展、可维护，是将复杂度转移到中介对象上为代价，因此如果不加控制和设计，<strong>中介对象很容已成为一个“上帝对象”，啥都要管，谁都不敢改动</strong></p><p><strong>具体示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象同事类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Colleague</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体同事类，实现具体操作</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteColleague</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteColleague</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行操作</span>
        <span class="token comment">// ...</span>
        <span class="token comment">// 通知中介者</span>
        mediator<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 抽象中介者，定义同事对象之间交互的接口</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">Colleague</span> colleague<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体中介者，实现协调同事对象之间的交互</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteMediator</span> <span class="token keyword">extends</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ConcreteColleague1</span> c1<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ConcreteColleague2</span> c2<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">ConcreteMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteColleague1</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteColleague2</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">Colleague</span> colleague<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现协调操作</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Mediator</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 客户端不需要直接与具体同事类交互，中介者模式解耦了同事类之间的直接交互</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个代码示例展示了如何在Java中实现中介者模式。同事类ConcreteColleague实现了具体的操作，而中介者ConcreteMediator协调两个同事类之间的交互。客户端代码中，我们创建了中介者对象，同事类之间的交互被中介者所解耦，客户端不需要直接与具体的同事类进行交互。</p>`,11),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","mediator.html.vue"]]);export{d as default};
