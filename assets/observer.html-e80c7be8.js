import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-ea358bf2.js";const p={},e=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Java观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。该模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理等。</p><p>观察者模式适用于以下场景：</p><ul><li>当一个对象的状态发生改变时，需要通知其他对象并更新它们的状态。</li><li>当一个对象需要将自己的状态变化通知给其他对象，但是又不希望与这些对象之间产生紧密的耦合关系。</li><li>当一个对象的改变需要同时改变其他对象的状态，而且不知道具体有多少对象需要改变。</li><li>当一个对象的改变需要其他对象的协助，但是不希望这些对象与自己产生紧密的耦合关系。</li><li>当一个对象的改变会引起一系列的连锁反应，而且这些连锁反应的具体实现不希望被该对象所知道。</li><li>当一个对象需要向其他对象提供一种数据更新的方式，而且这种更新方式需要在不同的时间点通知不同的对象。</li></ul><p>总之，观察者模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理、GUI编程、消息队列等。</p><h2 id="java自带观察者模式介绍" tabindex="-1"><a class="header-anchor" href="#java自带观察者模式介绍" aria-hidden="true">#</a> Java自带观察者模式介绍</h2><p>Java提供的一种内置的观察者模式实现。它使用了Java中的Observable类和Observer接口来实现观察者模式。</p><p>Observable类是一个抽象类，它表示一个可观察的对象，具有添加、删除和通知观察者的方法。当Observable对象的状态发生改变时，会调用它的notifyObservers()方法，通知所有的观察者对象，并更新它们的状态。Observable类还提供了setChanged()方法和clearChanged()方法，用于标记Observable对象的状态是否发生了改变。</p><p>Observer接口表示观察者对象，具有更新状态的方法update()。当Observable对象的状态发生改变时，会调用观察者对象的update()方法，传递更新的数据。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observer</span></span><span class="token punctuation">;</span>
 
<span class="token comment">// 具体主题类</span>
<span class="token keyword">class</span> <span class="token class-name">WeatherStation</span> <span class="token keyword">extends</span> <span class="token class-name">Observable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token function">setChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getTemperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> temperature<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getHumidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> humidity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPressure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pressure<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 具体观察者类</span>
<span class="token keyword">class</span> <span class="token class-name">Display</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Observable</span> o<span class="token punctuation">,</span> <span class="token class-name">Object</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">WeatherStation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">WeatherStation</span> weatherStation <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">WeatherStation</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> weatherStation<span class="token punctuation">.</span><span class="token function">getTemperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> weatherStation<span class="token punctuation">.</span><span class="token function">getHumidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> weatherStation<span class="token punctuation">.</span><span class="token function">getPressure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Temperature: &quot;</span> <span class="token operator">+</span> temperature<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Humidity: &quot;</span> <span class="token operator">+</span> humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pressure: &quot;</span> <span class="token operator">+</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 使用JDK自带观察者模式实现气象站</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WeatherStation</span> weatherStation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherStation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Display</span> display1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Display</span> display2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherStation<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>display1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherStation<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>display2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherStation<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">25.0f</span><span class="token punctuation">,</span> <span class="token number">60.0f</span><span class="token punctuation">,</span> <span class="token number">1013.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherStation<span class="token punctuation">.</span><span class="token function">deleteObserver</span><span class="token punctuation">(</span>display2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherStation<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">26.0f</span><span class="token punctuation">,</span> <span class="token number">65.0f</span><span class="token punctuation">,</span> <span class="token number">1012.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","observer.html.vue"]]);export{r as default};