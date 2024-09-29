import{_ as s,c as a,a as e,o as n}from"./app-CZKXz-g7.js";const t="/assets/adapter_1-D0pJNznS.png",p="/assets/adapter_2-DSUS6k5I.png",l="/assets/adapter_3-DapPWtdR.png",r={};function h(d,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p><strong>介绍</strong>：适配器模式是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一个接口。适配器模式的主要目的是解决两个不兼容接口之间的接口转换问题，使得原本由于接口不匹配而无法工作的类可以协同工作。<br> 适配器模式是用来做适配的，它将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式有两种实现方式：类适配器和对象适配器。其中，类适配器使用继承关系来实现，对象适配器使用组合关系来实现。<br> 适配器模式的核心思想是创建一个适配器类，该适配器类实现了客户端期望的目标接口，并持有一个对被适配者对象的引用。适配器类通过调用被适配者对象的方法来实现目标接口的方法，从而完成接口的适配。它允许不兼容的接口之间进行通信。适配器模式通过将一个类的接口转换为客户端所期望的另一个接口来实现这一点。这种模式可以在不修改现有代码的情况下重用现有类。<br> 适配器模式可以帮助我们在不修改现有代码的情况下重用现有类，并且可以使不兼容的接口之间进行通信。</p><p>把一个类的接口变换成客户端所期待的另一种接口，从而使原本因接口不匹配而无法在一起工作的两个类能够在一起工作。</p><p><strong>场景</strong>：</p><p>适配器模式将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p><ul><li>1.封装有缺陷的接口设计</li><li>2.统一多个类的接口设计</li><li>3.替换依赖的外部系统</li><li>4.兼容老版本接口</li><li>5.适配不同格式的数据</li></ul><p>在Spring 的 AOP 面向切面编程 中</p><p><strong>优点</strong>：</p><ul><li>1.更好的复用性，系统需要使用现有的类，而此类的接口不符合系统的需要,那么通过适配器模式就可以让这些功能得到更好的复用。</li><li>2.透明、简单，客户端可以调用同一接口，因而对客户端来说是透明的</li><li>3.更好的扩展性，在实现适配器功能的时候，可以调用自己开发的功能，从而自然地扩展系统的功能</li><li>4.解耦性，目标类和适配者类解耦，通过引入一个适配器类重用现有的适配者类，而无需修改原有代码</li></ul><p><strong>不足</strong>：过多的使用适配器，会让系统非常零乱，不易整体进行把握</p><h3 id="适配器模式涉及三种角色" tabindex="-1"><a class="header-anchor" href="#适配器模式涉及三种角色"><span>适配器模式涉及三种角色</span></a></h3><pre><code>源（Adaptee）：需要被适配的对象或类型
目标（Target）：期待得到的目标
适配器（Adapter）：连接源和目标的中间对象
</code></pre><h3 id="适配器模式包括3种形式" tabindex="-1"><a class="header-anchor" href="#适配器模式包括3种形式"><span>适配器模式包括3种形式</span></a></h3><pre><code>类适配器模式
对象适配器模式
接口适配器模式
</code></pre><h4 id="类适配器模式" tabindex="-1"><a class="header-anchor" href="#类适配器模式"><span>类适配器模式</span></a></h4><p>从下面的结构图可以看出，Adaptee类并没有method2()方法，而客户端则期待这个方法。为使客户端能够使用Adaptee类，我们把Adaptee与Target衔接起来。<br> Adapter与Adaptee是继承关系，这决定了这是一个类适配器模式。<br><img src="`+t+`" alt="adapter_1.png" loading="lazy"></p><p>代码实现：</p><p>源：</p><pre><code>public class Adaptee {
    public void method1(){
        System.out.println(&quot;method 1&quot;);
    }
}
</code></pre><p>目标：</p><pre><code>public interface Target {
    void method1();
    void method2();
}
</code></pre><p>适配器：</p><pre><code>public class Adapter extends Adaptee implements Target {
    @Override
    public void method2() {
        System.out.println(&quot;method 2&quot;);
    }
}
</code></pre><p>// 测试</p><pre><code>class AdapterTest {
    public static void main(String[] args) {
        Adapter adapter = new Adapter();
        adapter.method1();
        adapter.method2();
    }
}
</code></pre><p>运行结果：</p><pre><code>method 1
method 2
</code></pre><h4 id="对象适配器模式" tabindex="-1"><a class="header-anchor" href="#对象适配器模式"><span>对象适配器模式</span></a></h4><p>对象适配器模式是另外6种结构型设计模式的起源。<br><img src="`+p+'" alt="adapter_2.png" loading="lazy"></p><p>从下面的结构图可以看出，Adaptee类并没有method2()方法，而客户端则期待这个方法。与类适配器模式一样，为使客户端能够使用Adaptee类，我们把Adaptee与Target衔接起来。<br> 但这里我们不继承Adaptee，而是把Adaptee封装进Adapter里。这里Adaptee与Adapter是组合关系。<br><img src="'+l+`" alt="adapter_3.png" loading="lazy"></p><p>代码实现：</p><p>Target和Adaptee和上面的类适配器一样，不再贴出。</p><p>适配器：</p><pre><code>public class Adapter implements Target {

    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void method1() {
        adaptee.method1();
    }

    @Override
    public void method2() {
        System.out.println(&quot;method 2&quot;);
    }

}

class AdapterTest {
    public static void main(String[] args) {
        Adapter adapter = new Adapter(new Adaptee());
        adapter.method1();
        adapter.method2();
    }
}
</code></pre><p>运行结果：</p><pre><code>method 1
method 2
</code></pre><p><strong>类适配器与对象适配器的区别</strong></p><p>类适配器使用的是继承的方式，直接继承了Adaptee，所以无法对Adaptee的子类进行适配。</p><p>对象适配器使用的是组合的方式，·所以Adaptee及其子孙类都可以被适配。另外，对象适配器对于增加一些新行为非常方便，而且新增加的行为同时适用于所有的源。</p><p>基于<strong>组合/聚合优于继承</strong>的原则，使用对象适配器是更好的选择。</p><h4 id="接口适配器模式-缺省适配模式" tabindex="-1"><a class="header-anchor" href="#接口适配器模式-缺省适配模式"><span>接口适配器模式（缺省适配模式）</span></a></h4><p>思想是：为一个接口提供缺省实现，这样子类可以从这个缺省实现进行扩展，而不必从原有接口进行扩展。</p><p>这里提供一个例子。java.awt.KeyListener是一个键盘监听器接口，我们把这个接口的实现类对象注册进容器后，这个容器就会对键盘行为进行监听，像这样：</p><pre><code>public static void main(String[] args) {
    JFrame frame = new JFrame();
    frame.addKeyListener(new KeyListener() {
        @Override
        public void keyTyped(KeyEvent e) {}

        @Override
        public void keyPressed(KeyEvent e) {
            System.out.println(&quot;hey geek!&quot;);
        }

        @Override
        public void keyReleased(KeyEvent e) {
        }
    });
}
</code></pre><p>可以看到其实我们只使用到其中一个方法，但必须要把接口中所有方法都实现一遍，如果接口里方法非常多，那岂不是非常麻烦。于是我们引入一个默认适配器，让适配器把接口里的方法都实现一遍，使用时继承这个适配器，把需要的方法实现一遍就好了。JAVA里也为java.awt.KeyListener提供了这样一个适配器：java.awt.KeyAdapter。我们使用这个适配器来改改上面的代码：</p><pre><code>public static void main(String[] args) {
    JFrame frame = new JFrame();
    frame.addKeyListener(new KeyAdapter() {
        @Override
        public void keyPressed(KeyEvent e) {
            System.out.println(&quot;fxcku!&quot;);
        }
    });
}
</code></pre><p>这样不必再把每个方法都实现一遍，代码看起来简洁多了。在任何时候，如果不准备实现一个接口里的所有方法时，就可以使用“缺省适配模式”制造一个抽象类，实现所有方法，这样，从这个抽象类再继承下去的子类就不必实现所有的方法，只要重写需要的方法就可以了。</p><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例"><span>具体示例</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 目标接口</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 需要适配的类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> specificRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;特定请求被处理&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 适配器类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Adapter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Adaptee</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> adaptee </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">specificRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 测试适配器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Target</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> target</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Adapter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 输出: 特定请求被处理</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，Target接口定义了一个方法request()，而Adaptee类有一个特定的方法specificRequest()，我们需要创建一个适配器Adapter，它实现了Target接口，并且内部包含了Adaptee的实例。这样，当我们调用适配器的request()方法时，它就会调用被适配对象的specificRequest()方法。这样，我们就可以在不修改现有代码的情况下，将现有的类集成到我们的系统中。</p>`,50)]))}const c=s(r,[["render",h],["__file","adapter.html.vue"]]),o=JSON.parse('{"path":"/design/structure/adapter.html","title":"适配器模式","lang":"zh-CN","frontmatter":{"title":"适配器模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 介绍：适配器模式是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一个接口。适配器模式的主要目的是解决两个不兼容接口之间的接口转换问题，使得原本由于接口不匹配而无法工作的类可以协同工作。 适配器模式是用来做适配的，它将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式有两种实现方式：类适配...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/structure/adapter.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"适配器模式"}],["meta",{"property":"og:description","content":"概述 介绍：适配器模式是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一个接口。适配器模式的主要目的是解决两个不兼容接口之间的接口转换问题，使得原本由于接口不匹配而无法工作的类可以协同工作。 适配器模式是用来做适配的，它将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式有两种实现方式：类适配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-28T12:22:09.000Z"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-09-28T12:22:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"适配器模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-28T12:22:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"适配器模式涉及三种角色","slug":"适配器模式涉及三种角色","link":"#适配器模式涉及三种角色","children":[]},{"level":3,"title":"适配器模式包括3种形式","slug":"适配器模式包括3种形式","link":"#适配器模式包括3种形式","children":[]}]},{"level":2,"title":"具体示例","slug":"具体示例","link":"#具体示例","children":[]}],"git":{"createdTime":1695092193000,"updatedTime":1727526129000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":7}]},"readingTime":{"minutes":6.56,"words":1967},"filePathRelative":"design/structure/adapter.md","localizedDate":"2023年9月19日","excerpt":"<h2>概述</h2>\\n<p><strong>介绍</strong>：适配器模式是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一个接口。适配器模式的主要目的是解决两个不兼容接口之间的接口转换问题，使得原本由于接口不匹配而无法工作的类可以协同工作。<br>\\n适配器模式是用来做适配的，它将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式有两种实现方式：类适配器和对象适配器。其中，类适配器使用继承关系来实现，对象适配器使用组合关系来实现。<br>\\n适配器模式的核心思想是创建一个适配器类，该适配器类实现了客户端期望的目标接口，并持有一个对被适配者对象的引用。适配器类通过调用被适配者对象的方法来实现目标接口的方法，从而完成接口的适配。它允许不兼容的接口之间进行通信。适配器模式通过将一个类的接口转换为客户端所期望的另一个接口来实现这一点。这种模式可以在不修改现有代码的情况下重用现有类。<br>\\n适配器模式可以帮助我们在不修改现有代码的情况下重用现有类，并且可以使不兼容的接口之间进行通信。</p>","autoDesc":true}');export{c as comp,o as data};
