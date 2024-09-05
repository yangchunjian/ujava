import{_ as n,r as i,o as r,c as s,a as o,b as p,e as t,d as l}from"./app-DO_NcI_B.js";const c="/assets/1-DpnoXddv.png",g="/assets/2-CYWLQz4n.png",d="/assets/3-4DS_SUdA.png",h="/assets/4-Bp47mQtF.png",m="/assets/5-DNvRpQGr.png",f="/assets/6-DYG_OUuP.png",u="/assets/7-fV6eKCG7.png",_="/assets/8-Bz1RaQy4.png",b="/assets/9-DqlDL3ZK.png",y={},x={href:"http://xn--draw-955fn1koi57ny3ibkg51n9w4beb3a3cyhe2c.io",target:"_blank",rel:"noopener noreferrer"};function L(v,e){const a=i("ExternalLinkIcon");return r(),s("div",null,[e[3]||(e[3]=o('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>众所周知，软件开发是一个分阶段进行的过程。不同的开发阶段需要使用不同的模型图来描述业务场景和设计思路，在不同的阶段输出不同的设计文档也是必不可少的，例如，在需求分析阶段需要输出领域模型和业务模型，在架构阶段需要输出物理架构设计，在详细设计阶段需要输出数据库设计等。这样做可以更好地实践软件开发，并提高软件开发的实用性。</p><p>软件建模与设计过程可以分为三个阶段：需求分析、架构设计和详细设计。在这三个阶段中，大量使用符合 UML 规范的模型图，其中常用的有<br> 7 种，包括类图、序列图、组件图、部署图、用例图、状态图和活动图。</p><p>在需求分析阶段，使用用例图和领域模型图描述用户需求和业务场景。在架构设计阶段，使用组件图和部署图描述软件系统的组成部分和部署情况。在详细设计阶段，使用类图、序列图和状态图描述软件系统的实现细节。</p><p>下面我们将探讨如何绘制这 7 种模型图，以及如何在不同阶段使用这些模型来生成相应的设计文档。</p><h2 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h2><p>类图是软件设计中使用最广泛的 UML 图形之一，用来描述类的特性以及类之间的静态关系。在一个类图中，每个类都由三个部分组成：类名、属性列表和方法列表。</p><p>除了描述类的基本特征，类图还用来表示类之间的关系，其中包括六种静态关系：</p><p>关联（Association）：表示一个类对象与另一个类对象之间的关系，比如订单与客户之间的关系。</p><p>依赖（Dependency）：表示一个类对另一个类的使用或调用，比如客户下订单时需要使用订单类。</p><p>组合（Composition）：表示一种包含关系，表示一个类对象包含另一个类对象，比如一个订单包含多个商品。</p><p>聚合（Aggregation）：也表示一种包含关系，但是聚合关系中包含的类对象可以被多个类共享，比如一个学校包含多个班级。</p><p>继承（Inheritance）：表示一个类继承自另一个类，可以从父类中继承属性和方法，并且可以添加新的属性和方法。</p><p>泛化（Generalization）：与继承关系相似，但泛化关系可以用来表示更抽象的关系，比如多个类都实现了一个接口。</p><p>通过绘制类图，我们可以清晰地描述一个软件系统中的类及其之间的关系，帮助开发人员更好地理解软件系统的结构和功能。</p><p>在UML工具中把相关的一组类及其关系用一张图画出来，就是类图。</p><p><img src="'+c+'" alt="1.png" loading="lazy"><br> 如上图所示，描述的就是一个典型的责任链模式的实现类图。</p><p>类图主要是在 详细设计<br> 阶段画，一旦类图设计完成，开发工程师可以根据类图来实现代码。只要类方法的逻辑不是太复杂，不同工程师实现的代码几乎是一样的，这有利于保证软件的规范和统一性。在实际应用中，通常不需要画出所有类的类图，只需要画出核心、代表性、技术难度较高的类图即可。</p><p><img src="'+g+'" alt="2.png" loading="lazy"><br> 除了在详细设计阶段绘制类图外，还可以在需求分析阶段使用类图来表示关键领域模型对象。在这个阶段中，我们不要将注意力集中在属性或行为上，而应该专注于识别领域对象及其之间的关系。因此，可以使用简化的类图来描述，只需要绘制类的名称和它们之间的关系即可。</p><p>如上所示描述的是在需求分析阶段挖掘出SIM卡、运营商、手机、手机厂商等模型对象之间的关系。</p><h2 id="序列图" tabindex="-1"><a class="header-anchor" href="#序列图"><span>序列图</span></a></h2><p>类图之外，另一种常用的图形是序列图。</p><p>类图描述类之间的静态关系，而序列图用于描述参与者之间的动态调用关系。每个参与者都有一条垂直向下的生命线，该生命线用虚线表示。参与者之间的消息按照从上到下的顺序表示它们的调用顺序关系，这就是序列图这个词的来源。每个生命线都有一个激活条，它是图中的细长矩形条，只有在参与者活动时才是激活的。</p><figure><img src="'+d+'" alt="3.png" tabindex="0" loading="lazy"><figcaption>3.png</figcaption></figure><p>通常使用序列图表示对象之间的交互，这些对象可以是类对象，也可以是更大的参与者，如组件、服务器、子系统等。总之，只要涉及到不同参与者之间的交互，都可以使用序列图，比如下面这张图就是业务分析阶段，系统建设后完成后的业务流程。</p><figure><img src="'+h+'" alt="4.png" tabindex="0" loading="lazy"><figcaption>4.png</figcaption></figure><p>记住，在软件设计的不同阶段都可以使用序列图。</p><h2 id="组件图" tabindex="-1"><a class="header-anchor" href="#组件图"><span>组件图</span></a></h2><p>组件是比类更大粒度的设计元素，通常一个组件中包含多个类。组件图有时与包图的用途相似，通常用于描述物理组件，如JAR、DLL等。在实践中，我们更多地使用组件图进行模块设计。</p><figure><img src="'+m+'" alt="5.png" tabindex="0" loading="lazy"><figcaption>5.png</figcaption></figure><p>组件图描述组件之间的静态关系，主要是依赖关系。如果想要描述组件之间的动态调用关系，可以使用组件序列图，以组件作为参与者，描述组件之间的消息调用关系。</p><p>由于组件的粒度较大，通常用于描述和设计软件的模块及其之间的关系。因此，在设计的早期阶段就需要画出组件图，一般用于架构设计阶段。</p><h2 id="部署图" tabindex="-1"><a class="header-anchor" href="#部署图"><span>部署图</span></a></h2><p>部署图描述的是软件系统最终的物理部署情况，包括需要部署的服务器数量、关键组件的部署位置等。它是软件系统最终呈现的物理蓝图，能够让客户、老板和工程师清晰地了解系统的最终运行状态，以及与现有系统和第三方服务器的关系。通过部署图，可以预估服务器和第三方软件的采购成本。</p><p>因此，部署图是整个软件设计模型中相当宏观的一种图，需要在设计早期就绘制。各方可以根据部署图讨论是否认可该方案，只有对部署图达成共识，才能继续后面的细节设计。部署图主要用于架构设计阶段，并且与组件图要彼此呼应。<br><img src="'+f+'" alt="6.png" loading="lazy"></p><h2 id="用例图" tabindex="-1"><a class="header-anchor" href="#用例图"><span>用例图</span></a></h2><p>用例图分为业务用例和系统用例，业务用例图主要体现在 业务分析阶段， 描述一个承建系统的组织对外提供的能力，系统用例体现在需求分析阶段描述系统对外提供的能力。</p><figure><img src="'+u+'" alt="7.png" tabindex="0" loading="lazy"><figcaption>7.png</figcaption></figure><p>这张图中，左边是业务用例图，右边是系统用例图。虽然它们的画法相似，但它们本质上有很大的区别，具体可以查看我之前写的这篇文章。</p><p>图中的人形元素称为角色，角色可以是人也可以是其他系统。由于系统的功能可能很复杂，用例图可能仅包含其中的一小部分功能，这些功能被画在一个矩形框内，这个矩形框是用例边界。矩形框里面的椭圆表示单个功能，它们可以相互依赖或需要扩展。因为用例图中的功能描述相对简单，所以通常需要配以文字说明以形成需求文档。</p><h2 id="状态图" tabindex="-1"><a class="header-anchor" href="#状态图"><span>状态图</span></a></h2><p>状态图用来展现单个对象生命周期中的状态变迁。</p><p>在业务系统中，许多重要的领域对象都有相当复杂的状态变化，比如订单，它们可以有待付款、待审核、待发货、待收货、交易关闭和交易完成等各种状态。</p><p>这些状态变化可以在用例图中用文本形式描述，并随着各个用户的不同操作而改变。但是，使用这种方法描述状态时，状态会分散到不同的地方，这样可能会导致开发错误以及产品经理在设计时的困惑。</p><p>采用UML状态图可以有效地解决这些问题，因为它可以在一张图表中展示对象的整个生命周期以及各个状态和变迁之间的关系。比如下面的图表展示了一个订单从创建到交易完成的状态变化。</p><figure><img src="'+_+'" alt="8.png" tabindex="0" loading="lazy"><figcaption>8.png</figcaption></figure><p>状态图要在需求分析阶段画，描述状态变迁的逻辑关系，在详细设计阶段也要画，这个时候，状态要用枚举值表示，以指导具体的开发。</p><h2 id="活动图" tabindex="-1"><a class="header-anchor" href="#活动图"><span>活动图</span></a></h2><p>活动图常用于描述系统或业务流程中的动态行为。它可以清晰地展现从一个活动到另一个活动的控制流，描绘出系统或业务流程的逻辑和流程，让开发人员更好地了解整个系统的运作方式。</p><p>在活动图中，实心圆表示流程的开始，空心圆表示流程的结束，圆角矩形表示活动，菱形表示分支判断。这些符号的使用能够使活动图更加规范化和可读性，有助于提高系统开发的效率和质量。</p><figure><img src="'+b+'" alt="9.png" tabindex="0" loading="lazy"><figcaption>9.png</figcaption></figure><p>此外，活动图引入了一个重要的概念——泳道。活动图可以根据活动的范围，将活动根据领域、系统和角色等划分到不同的泳道中，使流程边界更加清晰。</p><p>流程图也比较有普适性，可以在需求分析阶段描述业务流程，也可以在架构设计阶段描述子系统和组件的交互，还可以在详细设计阶段描述一个类方法内部的计算流程。</p><p>使用合适的 UML 模型构建一个设计文档<br> UML 模型图本身并不难掌握，但如何在正确的场合下用适当的 UML 模型表达设计意图，形成一套清晰且详细的软件模型，并在团队内外达成共识的设计文档则需要注意。</p><p>根据软件设计不同阶段的需要，我们可以使用不同的模型图进行建模。</p><p>在需求分析阶段，我们可以使用用例图、活动图、时序图和简化的类图进行领域模型抽象和关系描述。</p><p>在架构设计阶段，通过组件图、组件时序图和部署图描述系统物理蓝图和模块关系。</p><p>在详细设计阶段，主要侧重于类图和类的时序图，而对于复杂的方法逻辑，可以使用方法的活动图进行描述。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>掌握类图、时序图、组件图、部署图、用例图、状态图、活动图这七种UML模型图，根据实际场景，在需求分析、架构设计和详细设计阶段选择并巧妙应用对应的模型图，有助于有效地进行软件建模和系统设计，成为一个掌控大局、指导技术团队的优秀架构师。</p><p>要注意模型图的规范和注释，遵循命名规范，对模型元素进行命名，注释模型元素的关系和属性等，简洁明了。此外，UML模型图只是设计文档的一部分，需要与其他文档相结合，如需求文档、设计文档、测试文档等，形成一个完整的设计文档，指导软件开发。</p>',61)),p("p",null,[e[1]||(e[1]=t("对于画UML的工具，有收费的专业软件设计工具像EA(Enterprise Architect)、Astah和亿图，")),p("a",x,[e[0]||(e[0]=t("以及免费的在线工具比如draw.io")),l(a)]),e[2]||(e[2]=t("，processon等，建议可以根据自身需要选择合适的工具，同时也建议从简单易用的工具入手。"))])])}const M=n(y,[["render",L],["__file","uml.html.vue"]]),k=JSON.parse('{"path":"/base/uml.html","title":"UML图","lang":"zh-CN","frontmatter":{"title":"UML图","icon":"laptop-code","category":["设计基础"],"tag":["基础"],"description":"简介 众所周知，软件开发是一个分阶段进行的过程。不同的开发阶段需要使用不同的模型图来描述业务场景和设计思路，在不同的阶段输出不同的设计文档也是必不可少的，例如，在需求分析阶段需要输出领域模型和业务模型，在架构阶段需要输出物理架构设计，在详细设计阶段需要输出数据库设计等。这样做可以更好地实践软件开发，并提高软件开发的实用性。 软件建模与设计过程可以分为三...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/base/uml.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"UML图"}],["meta",{"property":"og:description","content":"简介 众所周知，软件开发是一个分阶段进行的过程。不同的开发阶段需要使用不同的模型图来描述业务场景和设计思路，在不同的阶段输出不同的设计文档也是必不可少的，例如，在需求分析阶段需要输出领域模型和业务模型，在架构阶段需要输出物理架构设计，在详细设计阶段需要输出数据库设计等。这样做可以更好地实践软件开发，并提高软件开发的实用性。 软件建模与设计过程可以分为三..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T07:11:10.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:modified_time","content":"2024-04-15T07:11:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UML图\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T07:11:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"类图","slug":"类图","link":"#类图","children":[]},{"level":2,"title":"序列图","slug":"序列图","link":"#序列图","children":[]},{"level":2,"title":"组件图","slug":"组件图","link":"#组件图","children":[]},{"level":2,"title":"部署图","slug":"部署图","link":"#部署图","children":[]},{"level":2,"title":"用例图","slug":"用例图","link":"#用例图","children":[]},{"level":2,"title":"状态图","slug":"状态图","link":"#状态图","children":[]},{"level":2,"title":"活动图","slug":"活动图","link":"#活动图","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1713165070000,"updatedTime":1713165070000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":10.57,"words":3171},"filePathRelative":"base/uml.md","localizedDate":"2024年4月15日","excerpt":"<h2>简介</h2>\\n<p>众所周知，软件开发是一个分阶段进行的过程。不同的开发阶段需要使用不同的模型图来描述业务场景和设计思路，在不同的阶段输出不同的设计文档也是必不可少的，例如，在需求分析阶段需要输出领域模型和业务模型，在架构阶段需要输出物理架构设计，在详细设计阶段需要输出数据库设计等。这样做可以更好地实践软件开发，并提高软件开发的实用性。</p>\\n<p>软件建模与设计过程可以分为三个阶段：需求分析、架构设计和详细设计。在这三个阶段中，大量使用符合 UML 规范的模型图，其中常用的有<br>\\n7 种，包括类图、序列图、组件图、部署图、用例图、状态图和活动图。</p>\\n<p>在需求分析阶段，使用用例图和领域模型图描述用户需求和业务场景。在架构设计阶段，使用组件图和部署图描述软件系统的组成部分和部署情况。在详细设计阶段，使用类图、序列图和状态图描述软件系统的实现细节。</p>","autoDesc":true}');export{M as comp,k as data};
