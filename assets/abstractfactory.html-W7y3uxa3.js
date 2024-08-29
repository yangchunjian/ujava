import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-DT2jLd1E.js";const t={},c=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：</p><p>通过定义一个创建对象的接口来创建对象，但将具体实现的决定留给子类来决定。在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。<strong>提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类</strong>。</p><p><strong>场景</strong>：</p><ul><li>1.客户端（应用层）不依赖与产品类示例如何被创建、实现等细节</li><li>2.强调一系列相关的产品对象（数据同一产品族）一起使用创建对象需要大量的重复代码</li><li>3.提供一个产品类的库，所有的产品以同样的接口出现，使得客户端不依赖于具体实现</li></ul><p>Spring 中，BeanFactory 是用于管理 Bean 的一个工厂，所有工厂都是 BeanFactory 的子类</p><p><strong>优点</strong>：</p><ul><li>1.<strong>具体产品在应用层的代码隔离，无需关系创建的细节</strong></li><li>2.将一个系列的产品统一到一起创建</li></ul><p><strong>不足</strong>：</p><ul><li>1.规定了所有可能被创建的产品集合，<strong>产品族中扩展新的产品困难</strong></li><li>2.增加了系统的抽象性和理解难度</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例" aria-hidden="true">#</a> 具体示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 车辆接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 汽车类实现</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;汽车启动。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 自行车类实现</span>
<span class="token keyword">class</span> <span class="token class-name">Bicycle</span> <span class="token keyword">implements</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自行车启动。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 抽象工厂接口</span>
<span class="token keyword">interface</span> <span class="token class-name">VehicleFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vehicle</span> <span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 汽车工厂实现</span>
<span class="token keyword">class</span> <span class="token class-name">CarFactory</span> <span class="token keyword">implements</span> <span class="token class-name">VehicleFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Vehicle</span> <span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 自行车工厂实现</span>
<span class="token keyword">class</span> <span class="token class-name">BicycleFactory</span> <span class="token keyword">implements</span> <span class="token class-name">VehicleFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Vehicle</span> <span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Bicycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactoryPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建汽车工厂</span>
        <span class="token class-name">VehicleFactory</span> carFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用汽车工厂创建汽车</span>
        <span class="token class-name">Vehicle</span> car <span class="token operator">=</span> carFactory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        car<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 创建自行车工厂</span>
        <span class="token class-name">VehicleFactory</span> bicycleFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BicycleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用自行车工厂创建自行车</span>
        <span class="token class-name">Vehicle</span> bicycle <span class="token operator">=</span> bicycleFactory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bicycle<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中，我们定义了一个Vehicle接口和两个实现类Car和Bicycle，它们都实现了start方法。然后我们定义了一个VehicleFactory接口和两个实现工厂类CarFactory和BicycleFactory，它们负责创建相应的车辆对象。在客户端代码中，我们创建了汽车工厂和自行车工厂，并用它们分别创建汽车和自行车，然后启动它们。这就是抽象工厂模式的一个简单应用。</p>`,13),p=[c];function l(o,i){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","abstractfactory.html.vue"]]);export{r as default};
