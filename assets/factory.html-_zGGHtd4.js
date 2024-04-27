import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-vl2w5ykp.js";const p={},t=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>： 通过一个工厂类来实现对象的创建，而无需直接暴露对象的创建逻辑给客户端。 工厂模式包括简单工厂、工厂方法、抽象工厂这3种细分模式。<code>用来创建不同但是相关类型的对象</code>（继承同一父类或者接口的一组子类），由给定的参数来决定创建哪种类型的对象。简单工厂模式的优点在于客户端无需了解具体产品类的创建细节，只需通过工厂类来创建对象，并且工厂类可以根据客户端的需求来动态创建不同类型的对象。但是缺点也比较明显，如果需要创建的产品类数量较多，则工厂类的代码会变得很臃肿，不便于维护。</p><p><strong>场景</strong>：当对象创建逻辑比较复杂，是一个“大工程”的时候，就考虑使用工厂模式，<code>封装对象的创建过程，将对象的创建和使用相分离</code>。Spring IOC、Google Guice就是使用的工厂模式。</p><p><strong>优点</strong>：</p><ul><li>1.<code>封装变化</code>：创建逻辑有可能变化，封装成工厂类之后，创建逻辑的变更对调用者透明</li><li>2.<code>代码复用</code>：创建代码抽离到独立的工厂类之后可以复用</li><li>3.<code>隔离复杂性</code>：封装复杂的创建逻辑，调用者无需了解如何创建对象</li><li>4.<code>控制复杂度</code>：将创建代码抽离出来，让原本的函数或类职责更单一，代码更简洁</li></ul><p><strong>不足</strong>：</p><ul><li>1.简单工厂，耦合度高，如果有变动就需要修改唯一的工厂</li><li>2.工厂方法，优点符合开闭（具体的业务类有具体工厂），缺点是每增加一个产品，相应的也要增加一个子工厂，加大了额外的开发量</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Shape.java 接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// Rectangle.java 类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Inside Rectangle::draw() method.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// ShapeFactory.java 工厂类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeFactory</span> <span class="token punctuation">{</span>
 
    <span class="token comment">// 使用 getShape 方法获取形状对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Shape</span> <span class="token function">getShape</span><span class="token punctuation">(</span><span class="token class-name">String</span> shapeType<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>shapeType <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>        
        <span class="token keyword">if</span><span class="token punctuation">(</span>shapeType<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span><span class="token string">&quot;RECTANGLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 测试工厂模式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryPatternDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ShapeFactory</span> shapeFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShapeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 获取 Rectangle 对象，并调用它的 draw 方法</span>
        <span class="token class-name">Shape</span> shape1 <span class="token operator">=</span> shapeFactory<span class="token punctuation">.</span><span class="token function">getShape</span><span class="token punctuation">(</span><span class="token string">&quot;RECTANGLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 调用 Rectangle 的 draw 方法</span>
        shape1<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，ShapeFactory类负责创建Shape类型的对象。当需要创建新的形状类型时，我们可以在ShapeFactory中添加相应的条件判断和创建逻辑。这就是简单的工厂模式实现。</p>`,10),c=[t];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","factory.html.vue"]]);export{k as default};
