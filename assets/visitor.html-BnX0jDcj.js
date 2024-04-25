import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-yMnkNbBs.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：Java访问者模式是一种行为型设计模式，它允许你在不修改对象结构的前提下定义新的操作。访问者模式将对象结构和操作分离开来，使得操作可以独立地应用于对象结构中的元素。在访问者模式中，有两个主要角色：访问者和元素。访问者定义了对元素进行操作的方法，而元素则提供了接受访问者的方法。指<strong>将作用域某种数据结构中的各元素的操作分离出来封装成独立的类</strong>，使其在<strong>不改变数据结构的前提下可以添加作用于这些元素的新的操作</strong>。封装 作用于 某种 数据结构 的 各元素 操作 , 数据结构指的是 List , Set , Map 等 ;在 不改变 元素类 的前提下 , 定义 作用于 元素 的操作</p><p><strong>场景</strong>：</p><ul><li>一个对象结构包含多个类型的对象，<strong>希望对这些对象实施一些依赖其具体类型的操作</strong></li><li>在访问者中针对每一种具体的类型都提供了一个访问操作，不同类型的对象可以有不同的访问操作</li><li>需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作污染这些对象的类，也不希望在增加新操作时修改这些类</li><li>对象结构比较稳定，但经常需要在此对象结构上定义新的操作。</li><li>需要对一个对象结构中的对象进行很多不同的且不相关的操作，而不希望这些操作“污染”这些对象的类。</li><li>对象结构中对象的类很少改变，但经常需要在这些对象上定义新的操作。</li><li>需要在运行时根据对象的类型执行不同的操作。</li><li>需要对对象结构中的所有对象进行某种类型的处理，但是对象所采取的处理方式根据对象类型不同而异。</li><li>常见的使用访问者模式的场景包括：编译器的语法分析、XML文档解析、静态分析器、模型验证器、模型转换器等。</li></ul><p>JDK源码中，Files 类提供了 walkFileTree() 方法。Spring源码中PropertySourcesPlaceholderConfigurer 允许我们用 Properties 文件中的属性来定义应用上下文</p><p><strong>优点</strong>：</p><ul><li>1.将元素对象的访问行为集中到一个访问者对象中，而不是分散在一个个的元素类中。类的职责更加清晰，有利于对象结构中元素对象的复用，相同的对象结构可以供多个不同的访问者访问</li><li>2.<strong>增加新的访问操作就意味着增加一个新的具体访问者类</strong>，方便扩展，无须修改源代码，符合开闭原则</li></ul><p><strong>不足</strong>：</p><ul><li>1.<strong>增加新的元素类很困难</strong>。在访问者模式中，每增加一个新的元素类都意味着要在抽象访问者角色中增加一个新的抽象操作，并在每一个具体访问者类中增加相应的具体操作，这违背了开闭原则的要求。</li><li>2.<strong>破坏封装</strong>。访问者模式要求访问者对象访问并调用每一个元素对象的操作，这意味着元素对象有时候必须暴露一些自己的内部操作和内部状态，否则无法供访问者访问。</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Element接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体的ElementA类</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteElementA</span> <span class="token keyword">implements</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体的ElementB类</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteElementB</span> <span class="token keyword">implements</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// Visitor接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体的Visitor类</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对ConcreteElementA的具体操作</span>
        element<span class="token punctuation">.</span><span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对ConcreteElementB的具体操作</span>
        element<span class="token punctuation">.</span><span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 使用访问者模式的示例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConcreteElementA</span> elementA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteElementA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteElementB</span> elementB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteElementB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Visitor</span> visitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        elementA<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementB<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","visitor.html.vue"]]);export{r as default};
