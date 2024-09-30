import{_ as i,c as a,a as n,o as t}from"./app-C8q9BFR2.js";const e={};function l(p,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换</p><p><strong>介绍</strong>：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，<strong>应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的</strong>。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑</p><p><strong>场景</strong>：</p><ul><li>1.业务代码需要根据场景不同，切换不同的实现逻辑</li><li>2.避免使用多重条件判断。</li></ul><p>策略模式在 JDK 中，ThreadPoolExecutor 类。TreeMap中</p><p><strong>优点</strong>：</p><ul><li>1.<strong>算法可以自由切换</strong>。</li><li>2.扩展可变部分，子类实现模板父类的某些细节，有助于模板父类的扩展</li><li>3.扩展性良好</li></ul><p><strong>不足</strong>：</p><ul><li>1.策略类会增多</li><li>2.<strong>所有策略类都需要对外暴露</strong></li></ul><p>策略模式把<code>对象本身</code>和<code>运算规则</code>区分开来。分为三个部分：</p><pre><code>抽象策略类(Strategy):策略的抽象
具体策略类(ConcreteStrategy):具体的策略实现
具体应用入口类：
</code></pre><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><p>第一步： 定义抽象策略类</p><pre><code>public interface  TravelStrategy {
    void goHome();
}
</code></pre><p>第二步： 实现具体策略类</p><pre><code>// 步行
public class FirstTravelStrategy implements TravelStrategy {
    @Override
    public void goHome() {
        System.out.println(&quot;我是步行回家的...&quot;);
    }
}

// 火车
public class TwoTravelStrategy implements TravelStrategy {
    @Override
    public void goHome() {
        System.out.println(&quot;我是火车回家的...&quot;);
    }
}

// 飞机
public class ThreeTravelStrategy implements TravelStrategy {
    @Override
    public void goHome() {
        System.out.println(&quot;我是飞机回家的...&quot;);
    }
}
</code></pre><p>第三步：具体应用</p><pre><code>public class GoHome {
    TravelStrategy travelStrategy;
    public void setTravelStrategy(TravelStrategy travelStrategy) {
        this.travelStrategy = travelStrategy;
    }
    public void goHome() {
        travelStrategy.goHome();
    }
    public static void main(String args) {
        GoHome goHome = new GoHome();
        // 步行
//        goHome.setTravelStrategy(new FirstTravelStrategy());
        // 火车
//        goHome.setTravelStrategy(new TwoTravelStrategy());
        // 飞机
        goHome.setTravelStrategy(new ThreeTravelStrategy());

        goHome.goHome();
    }
}
</code></pre><p>Spring实现策略模式<br> 除了以上三步，Spring可以添加一个工厂类，用工厂创建需要执行的策略类，应用Spring依赖注入，省去我们自己创建策略类的过程。</p><p>修改如下：</p><p>之前第二步加上注解：</p><pre><code>// 步行
@Service(&quot;walk&quot;)
public class FirstTravelStrategy implements TravelStrategy {
    @Override
    public void goHome() {
        System.out.println(&quot;我是步行回家的...&quot;);
    }
}
</code></pre><p>其他俩个同上，加上注解并添加名称<code>@Service(“train”)</code>，<code>@Service(“plane”)</code></p><p>添加工厂类：</p><pre><code>@Service
public class TravelStrategyFactory {

// spring容器启动会讲对应TravelStrategy下策略类都加载到此map中
    @Autowired
    Map&lt;String, TravelStrategy&gt; bases = new ConcurrentHashMap&lt;&gt;();

    public TravelStrategy getTravelStrategy(String type) {
        TravelStrategy travelStrategy = bases.get(type);
        return travelStrategy;
    }

}
</code></pre><p>最终应用类：</p><pre><code>public class GoHome {
    @Autowired
    TravelStrategyFactory travelStrategyFactory;

    TravelStrategy travelStrategy;
    public void setTravelStrategy(String type) {
        this.travelStrategy = travelStrategyFactory.getTravelStrategy(type);
    }
    public void goHome() {
        travelStrategy.goHome();
    }
    public static void main(String args) {
        GoHome goHome = new GoHome();
        // 步行
        //goHome.setTravelStrategy(&quot;wale&quot;);
        // 火车
        //goHome.setTravelStrategy(&quot;train&quot;);
        // 飞机
        goHome.setTravelStrategy(&quot;plane&quot;);

        goHome.goHome();
    }
}
</code></pre><h2 id="具体示例" tabindex="-1"><a class="header-anchor" href="#具体示例"><span>具体示例</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 策略接口</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 策略实现</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ConcreteStrategyA</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;执行策略 A&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ConcreteStrategyB</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;执行策略 B&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 策略上下文</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Strategy</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> strategy;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 使用策略模式的示例</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 创建策略对象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Strategy</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> strategyA</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ConcreteStrategyA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Strategy</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> strategyB</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ConcreteStrategyB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 使用策略A</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Context</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> contextA</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(strategyA);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        contextA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 使用策略B</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Context</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> contextB</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(strategyB);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        contextB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子展示了如何在Java中实现策略模式。策略模式允许你在运行时更改对象的行为，将算法的定义抽象为类，从而可以使用继承来改变行为。在这个例子中，Context类依赖于Strategy接口，而具体的策略（如ConcreteStrategyA和ConcreteStrategyB）实现了这个接口。通过将具体策略的实例注入到上下文中，我们可以动态地改变上下文的行为。</p>`,31)]))}const r=i(e,[["render",l],["__file","strategy.html.vue"]]),k=JSON.parse('{"path":"/design/action/strategy.html","title":"策略模式","lang":"zh-CN","frontmatter":{"title":"策略模式","icon":"laptop-code","category":["设计模式"],"tag":["设计模式"],"description":"概述 定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换 介绍：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/action/strategy.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"策略模式"}],["meta",{"property":"og:description","content":"概述 定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换 介绍：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-28T12:22:09.000Z"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:modified_time","content":"2024-09-28T12:22:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-28T12:22:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"具体示例","slug":"具体示例","link":"#具体示例","children":[]}],"git":{"createdTime":1696678805000,"updatedTime":1727526129000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":7}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"design/action/strategy.md","localizedDate":"2023年10月7日","excerpt":"<h2>概述</h2>\\n<p>定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换</p>\\n<p><strong>介绍</strong>：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，<strong>应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的</strong>。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑</p>","autoDesc":true}');export{r as comp,k as data};
