import{_ as s,c as a,a as n,o as l}from"./app-BggTsAex.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p><strong>介绍</strong>：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个或多个装饰器类来向对象添加附加行为。 每个装饰器类都具有对其装饰的对象的引用，并且它可以在委托给对象的原始行为之前或之后修改对象的行为。<br><code>允许向一个现有的对象添加新的功能，同时又不改变其结构</code>。主要解决继承关系过于复杂的问题，<code>通过组合来替代继承，给原始类动态添加增强功能</code>。</p><p><strong>场景</strong>：</p><ul><li>在不想增加很多子类的情况下扩展类时可用。</li><li>想要动态的为类增加功能</li><li>在不修改现有代码的情况下，向现有类添加新的功能。</li><li>在运行时动态地向对象添加新的行为。</li><li>以不同的方式组合对象，以实现不同的行为。</li></ul><p><code>在Mybatis中Executor接口</code>，是一个承上启下的执行器，在执行的过程中就会有本地缓存的一个使用，所以Mybatis使用上缓存的情况下，要在原有执行的方法上做增强（缓存），就考虑到装饰器模式来做缓存。</p><p><strong>优点</strong>：</p><ul><li>1.饰类和被装饰类可以独立发展，而不会相互耦合。是继承的一个替代模式。</li><li>2.装饰模式<code>可以动态地扩展或撤销一个实现类的功能</code></li></ul><p><strong>不足</strong>：会出现更多的代码，更多的类，增加程序复杂性</p><p><strong>注意</strong>：</p><ul><li>装饰器类需要实现与被装饰对象相同的接口，以便可以对被装饰对象进行包装。</li><li>装饰器类应该在调用被装饰对象的方法之前或之后添加新的行为。</li><li>不要创建过多的装饰器对象，否则会导致代码变得复杂难以维护。</li></ul><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例"><span>具体示例</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 定义一个接口，表示组件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> operation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 实现组件的具体类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ConcreteComponent</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> operation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;具体对象的操作&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 定义装饰者接口</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Decorator</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 实现装饰者的具体类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ConcreteDecorator</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Decorator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Component</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> component;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> operation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (component </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;具体装饰者的操作前&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 委托给组件处理请求</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">operation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;具体装饰者的操作后&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 使用示例</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DecoratorPatternDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 创建一个具体的组件实例</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Component</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> concreteComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ConcreteComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 创建一个装饰者实例</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Decorator</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> decorator</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ConcreteDecorator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 设置装饰者的组件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        decorator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(concreteComponent);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 通过装饰者调用操作</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        decorator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">operation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码定义了一个Component接口和一个具体的实现类ConcreteComponent，还定义了一个Decorator接口和一个具体的实现类ConcreteDecorator。在main方法中，我们创建了一个ConcreteComponent实例和一个ConcreteDecorator实例，将ConcreteComponent实例设置到ConcreteDecorator实例中，并调用了operation方法，演示了装饰者模式的使用。</p>`,13)]))}const k=s(t,[["render",e],["__file","decorator.html.vue"]]),r=JSON.parse('{"path":"/design/structure/decorator.html","title":"装饰器模式","lang":"zh-CN","frontmatter":{"title":"装饰器模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 介绍：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/structure/decorator.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"装饰器模式"}],["meta",{"property":"og:description","content":"概述 介绍：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-25T09:29:44.000Z"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-04-25T09:29:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰器模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-25T09:29:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"具体示例","slug":"具体示例","link":"#具体示例","children":[]}],"git":{"createdTime":1696673862000,"updatedTime":1714037384000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":6}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"design/structure/decorator.md","localizedDate":"2023年10月7日","excerpt":"<h2>概述</h2>\\n<p><strong>介绍</strong>：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个或多个装饰器类来向对象添加附加行为。 每个装饰器类都具有对其装饰的对象的引用，并且它可以在委托给对象的原始行为之前或之后修改对象的行为。<br>\\n<code>允许向一个现有的对象添加新的功能，同时又不改变其结构</code>。主要解决继承关系过于复杂的问题，<code>通过组合来替代继承，给原始类动态添加增强功能</code>。</p>","autoDesc":true}');export{k as comp,r as data};