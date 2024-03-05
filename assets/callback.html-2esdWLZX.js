import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-oeUzSxMW.js";const e={},t=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>回调是强大的编程模式之一。 它可以实现调用反转，在子函数中调用高层的函数（通常是由高层函数来调用底层的子函数），<br> 获得更灵活的调用关系。通常用于框架、代码复用等场合。 在这里， 函数可以作为参数传入子函数，可以由子函数进行调用和返回。回调函数可以用<br> Java 的接口， 或者 C/C++ 的函数指针来实现， 而在 Javascript / LISP 中， 函数是一种通用对象，具有很大的灵活性。</p><h2 id="动机" tabindex="-1"><a class="header-anchor" href="#动机" aria-hidden="true">#</a> 动机</h2><p>调用者 A 想要调用函数 B， 但并不知道具体的 B 应该是哪一个，由 A 的调用者将 函数B 作为参数传入给调用者 A。 函数B 称为回调函数，<br> B 函数的调用称为回调。</p><p>框架设计者将那些固定不可变的流程和逻辑写好，而对于那些需要根据业务来定制的逻辑，则以回调接口的形式提供给开发者使用。Js<br> 框架中提供了大量回调接口； struts2 的拦截器，WEB 中的过滤器， Spring AOP 等都可以看成是回调的一种形式。它类似于模板方法中的钩子。</p><p>回调的威力在于， 能够在任何时间、任何地点、以指定形式调用任何抽象层级的逻辑。</p><p>回调最著名的例子是灵活的对象排序。 排序函数对指定的同类型的多个对象进行排序， 但它并不知道如何去比较对象的大小，因此，<br> 必须传入一个比较对象的函数给它。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>sort<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>comp<span class="token punctuation">)</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> {
    <span class="token comment">// codes (*comp)(obj1, obj2)</span>
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码<br> 在 Javascript 中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// other code</span>
    <span class="token keyword">var</span> params <span class="token operator">=</span> <span class="token function">obtain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// codes to process</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">客户端调用</span><span class="token operator">:</span>
    <span class="token constant">A</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 中：与命令模式有点像。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">menuClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MenuItem</span> <span class="token keyword">implements</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Command</span> command<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MenuItem</span><span class="token punctuation">(</span><span class="token class-name">Command</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> command<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">menuClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        command<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OpenFileCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// some codes</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端调用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">obtainMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MenuItem</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OpenFileCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
        <span class="token class-name">Menu</span> menu<span class="token operator">=</span><span class="token function">obtainMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 只有 obtainMenu 知道会返回哪个具体的 menu</span>
        menu<span class="token punctuation">.</span><span class="token function">menuClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缘起" tabindex="-1"><a class="header-anchor" href="#缘起" aria-hidden="true">#</a> 缘起</h2><p>首先， 一段普通的函数调用 :</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        function <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码意图很明确， main 调用了 A， A 又调用了B 。关系很确定。 然而， A 函数可能是一段模板化的代码块， 其中只有一个地方不确定：</p><p>假设单击按钮A 的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>function <span class="token function">btnAclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// some codes</span>
        <span class="token keyword">var</span> result<span class="token operator">=</span><span class="token function">callApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token operator">==</span>&#39;success&#39;<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">succA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//  只有这里不一样</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// other codes</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单击按钮B 的代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">btnAclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// some codes</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">callApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">succB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//  只有这里不一样</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// other codes</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当按钮很多时， 重复这一段代码是非常无趣的事情。 这时， 可以写一个回调， 来复用代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tplbtnclick</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// some codes</span>

    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">callApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//  回调</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// other codes</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来的函数就可以简化为:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">btnAclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">tplbtnclick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">succA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">btnBclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">tplbtnclick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">succB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看， 这样是不是更加简洁呢？</p><h2 id="禁忌" tabindex="-1"><a class="header-anchor" href="#禁忌" aria-hidden="true">#</a> 禁忌</h2><p>和任何一种强大的编程技术一样， 回调也不宜过度使用， 过多层的回调容易把人弄晕。 遵循“事不过三” 的原则， 可以将回调层数尽量限制在三层及以下。</p>`,29),c=[t];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","callback.html.vue"]]);export{k as default};
