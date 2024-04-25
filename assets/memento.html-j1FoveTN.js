import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yMnkNbBs.js";const e={},p=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：Java备忘录模式是一种行为设计模式，它允许在不破坏封装性的情况下捕获和恢复对象的内部状态。备忘录模式通常用于需要撤销操作或恢复先前状态的情况下。该模式包括三个主要组件：原始对象、备忘录对象和负责管理备忘录对象的对象。在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存着这个状态。这样以后就<strong>可将该对象恢复到原先保存的状态.备忘录模式又可以分为“白箱”备忘录模式和“黑箱”备忘录模式。</strong></p><p><strong>场景</strong>：</p><ul><li>1.提供一个<strong>可回滚</strong>的操作</li><li>2.保存一个对象在某一个时刻的状态或部分状态，这样以后需要时它能够恢复到先前的状态。</li><li>3.如果用一个接口来让其他对象得到这些状态，将会暴露对象的实现细节并破坏对象的封装性，一个对象不希望外界直接访问其内部状态，通过负责人可以间接访问其内部状态</li></ul><p>Spring源码，类StateManageableMessageContext中</p><p><strong>优点</strong>：</p><ul><li>1.如果某个操作错误地破坏了数据的完整性，此时可以<strong>使用备忘录模式将数据恢复成原来正确的数据</strong>。</li><li>2.备份的状态数据保存在发起人角色之外，这样发起人就不需要对各个备份的状态进行管理。而是由备忘录角色进行管理，而备忘录角色又是由管理者角色管理，<strong>符合单一职责原则</strong>。</li><li>3.提供了一种状态恢复的实现机制，使得用户可以方便地回到一个特定的历史步骤，当新的状态无效或者存在问题时，可以使用先前存储起来的备忘录将状态复原。</li><li>4.<strong>实现了信息的封装</strong>，一个备忘录对象是一种原发器对象的表示，不会被其他代码改动，这种模式简化了原发器对象，备忘录只保存原发器的状态，采用堆栈来存储备忘录对象可以实现多次撤销操作，可以通过在负责人中定义集合对象来存储多个备忘录。</li></ul><p><strong>不足</strong>：</p><ul><li>1.<strong>消耗资源</strong>。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。</li><li>2.在实际的系统中，可能需要维护多个备份，需要额外的资源，这样对资源的消耗比较严重。资源消耗过大，如果类的成员变量太多，就不可避免占用大量的内存，而且每保存一次对象的状态都需要消耗内存资源，如果知道这一点大家就容易理解为什么一些提供了撤销功能的软件在运行时所需的内存和硬盘空间比较大了</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 备忘录模式：备份和恢复对象状态</span>
 
<span class="token comment">// Originator 类，负责创建一个备忘录来保存其状态</span>
<span class="token keyword">class</span> <span class="token class-name">Originator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Originator</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 创建备忘录对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token function">createMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 恢复备忘录对象的状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">restoreMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> memento<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// Memento 类，负责保存 Originator 对象的状态</span>
<span class="token keyword">class</span> <span class="token class-name">Memento</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// Caretaker 类，负责保存好备忘录对象，不应该对它的内容进行操作或检查</span>
<span class="token keyword">class</span> <span class="token class-name">Caretaker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Memento</span> memento<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token function">retrieveMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>memento <span class="token operator">=</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 使用示例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MementoPatternExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Originator</span> originator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Originator</span><span class="token punctuation">(</span><span class="token string">&quot;State #1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Originator initial state: &quot;</span> <span class="token operator">+</span> originator<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 保存状态</span>
        <span class="token class-name">Caretaker</span> caretaker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Caretaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        caretaker<span class="token punctuation">.</span><span class="token function">saveMemento</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span><span class="token function">createMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 改变原始对象的状态</span>
        originator<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&quot;State #2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Originator new state: &quot;</span> <span class="token operator">+</span> originator<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 恢复状态</span>
        originator<span class="token punctuation">.</span><span class="token function">restoreMemento</span><span class="token punctuation">(</span>caretaker<span class="token punctuation">.</span><span class="token function">retrieveMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Originator restored state: &quot;</span> <span class="token operator">+</span> originator<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码展示了如何在Java中实现备忘录模式。Originator类负责保存其状态，Memento类负责保存Originator的状态，而Caretaker类负责保存好Memento对象，不应该对其进行操作或检查。使用示例中，我们创建了一个Originator对象，并改变了它的状态。然后我们保存了这个状态，并再次更改了Originator的状态。最后，我们从Caretaker恢复了原始状态。</p>`,12),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","memento.html.vue"]]);export{k as default};
