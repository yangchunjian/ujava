import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-yMnkNbBs.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：如果有多个对象有机会处理请求，<strong>责任链可使请求的发送者和接受者解耦，请求沿着责任链传递，直到有一个对象处理了它为止</strong></p><p><strong>场景</strong>：</p><ul><li>1.多个对象可以处理同一个请求，但具体由哪个对象处理则在运行时动态决定。</li><li><ol start="2"><li>在请求处理者不明确的情况下向对个对象中的一个提交一个请求。</li></ol></li><li><ol start="3"><li>需要<strong>动态处理一组对象处理请求</strong>。</li></ol></li></ul><p>常用在框架开发中，用来<strong>实现过滤器、拦截器</strong>功能，让框架的使用者在不需要修改框架源码的情况下，添加新的过滤、拦截功能。 Servlet 中的过滤器 Filter</p><p><strong>优点</strong>：</p><ul><li>1.<strong>解耦</strong> : 请求的 发送者 和 接收者 解耦 ; 接收者 是 请求的处理者 ;</li><li>2.<strong>动态组合</strong> : 责任链 可以 动态组合 , 使用配置 设置责任链的 顺序及 是否出现 ; <strong>可以随时对责任链排序 , 随时增加拆除责任链中的某个请求对象</strong> ;</li></ul><p><strong>不足</strong>：</p><ul><li>1.性能 : 如果 责任链 太长 , 或责任链中请求的 处理时间过长 , 可能会 影响性能 ;</li><li>2.个数 : 责任链 可能过多 ;</li></ul><p>责任链模式是一种行为设计模式，它允许将请求沿着处理链进行传递，直到有一个处理程序处理它为止。在Java中实现责任链模式通常需要以下几个步骤：</p><ul><li>定义一个处理器接口，该接口包含一个处理请求的方法。</li><li>创建一个抽象处理器类，它实现处理器接口，并包含一个指向下一个处理器的引用。</li><li>创建具体的处理器类，它们继承自抽象处理器类，并实现处理请求的方法。</li><li>在客户端代码中，创建处理器链，并将请求发送到链的第一个处理器。</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象处理者</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Handler</span> nextHandler<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Handler</span> <span class="token function">setNext</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> nextHandler<span class="token punctuation">;</span>
        <span class="token keyword">return</span> nextHandler<span class="token punctuation">;</span> <span class="token comment">// 返回nextHandler使得setNext可以链式调用</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 实际处理者</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteHandler1</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理类型1的请求</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;处理类型1的请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转发请求给下一个处理者</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">ConcreteHandler2</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理类型2的请求</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;处理类型2的请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转发请求给下一个处理者</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 请求类型</span>
<span class="token keyword">enum</span> <span class="token class-name">RequestType</span> <span class="token punctuation">{</span>
    <span class="token constant">TYPE1</span><span class="token punctuation">,</span> <span class="token constant">TYPE2</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 请求类</span>
<span class="token keyword">class</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">RequestType</span> type<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token class-name">RequestType</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token class-name">RequestType</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Handler</span> handler1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteHandler1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Handler</span> handler2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteHandler2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        handler1<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>handler2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置责任链</span>
 
        <span class="token comment">// 发送请求</span>
        handler1<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handler1<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了一个请求类型RequestType和请求类Request。然后，我们定义了一个抽象处理者Handler，它有一个指向下一个处理者的引用。接着，我们创建了两个具体的处理者ConcreteHandler1和ConcreteHandler2，它们实现了handleRequest方法来处理它们负责的请求类型。最后，在客户端代码中，我们设置了责任链，并发送了两个不同类型的请求，观察处理者如何处理这些请求。</p>`,14),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","responsibility.html.vue"]]);export{d as default};
