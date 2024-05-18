import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-Zg_W5k5H.js";const p={},c=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：命令模式是一种行为设计模式，它允许将请求封装为一个对象，从而使不同的请求可以使用不同的参数进行参数化，队列或日志请求，以及支持可撤销的操作。在Java中，命令模式的实现通常涉及一个命令接口和一个或多个具体命令类，这些类实现了命令接口，并在其execute()方法中定义了实际的命令逻辑。此外，命令模式还可能涉及一个调用者类，该类将一个或多个命令对象与接收者对象关联起来，并在需要时调用它们的execute()方法。 命令模式是一种非常灵活和可扩展的模式，可以用于许多不同的应用程序场景。将一个请求封装成一个对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，可以提供灵敏的撤销和恢复公共能。在命令模式中，会将一个请求封装为一个对象，以便使用不同参数来表示不同的请求（即命名），同时命令模式也支持可撤销的操作</p><p><strong>场景</strong>：需要将请求调用者和请求接收者解耦，使得调用者和接收者不直接交互；需要在不同的时间指定请求、将请求排队和执行请求；需要支持命令的撤销操作和恢复操作，需要将一组操作组合在一起，即支持宏命令</p><p><strong>优点</strong>：</p><ul><li>1.降低系统的耦合度。</li><li>2.新的命令可以很容易地加入到系统中。</li><li>3.可以比较容易地设计一个命令队列和宏命令（组合命令）。</li><li>4.可以方便地实现对请求的Undo和Redo。</li></ul><p><strong>不足</strong>：使用命令模式可能会导致某些系统有过多的具体命令类。因为针对每一个命令都需要设计一个具体命令类，因此某些系统可能需要大量具体命令类，这将影响命令模式的使用</p><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 命令接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体命令类</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Receiver</span> receiver<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteCommand</span><span class="token punctuation">(</span><span class="token class-name">Receiver</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        receiver<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接收者类</span>
<span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Action performed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者类</span>
<span class="token keyword">class</span> <span class="token class-name">Invoker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Command</span> command<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span><span class="token class-name">Command</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> command<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommandPatternExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Receiver</span> receiver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Receiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Command</span> command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteCommand</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Invoker</span> invoker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>

        invoker<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行命令，将调用receiver的action方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，Command是一个接口，定义了一个方法execute。ConcreteCommand是Command的一个具体实现，它包含了一个Receiver的引用，并在execute方法中调用了Receiver的action方法。Receiver是一个接收者，它知道如何执行一个具体的动作。Invoker是一个调用者，它持有一个命令对象，并在其invoke方法中调用命令对象的execute方法。客户端代码创建了一个Receiver、一个ConcreteCommand、一个Invoker，并最终通过Invoker来执行命令。</p>`,9),t=[c];function o(i,l){return s(),a("div",null,t)}const k=n(p,[["render",o],["__file","command.html.vue"]]);export{k as default};
