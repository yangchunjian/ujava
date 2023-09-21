import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as d,a as e,b as a,d as r,e as l}from"./app-8a5cd404.js";const h={},s=e("p",null,[e("strong",null,"推荐语"),a("：牛客网热帖，写的很全面！暑期实习，投了阿里、腾讯、字节，拿到了阿里和腾讯的 offer。")],-1),c=e("br",null,null,-1),p=e("strong",null,"原文地址：",-1),u={href:"https://www.nowcoder.com/discuss/640519",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),f=e("strong",null,"下篇",-1),b={href:"https://www.nowcoder.com/discuss/804679",target:"_blank",rel:"noopener noreferrer"},g=l('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>写这篇文章的时候，腾讯 offer 已经下来了，春招也算结束了，这次找暑期实习没有像去年找日常实习一样海投，只投了 BAT 三家，阿里和腾讯收获了 offer，字节没有给面试机会，可能是笔试太拉垮了。</p><p>楼主大三，双非本科，我的春招的起始时间应该是 2 月 20 日到 3 月 23 日收到阿里意向书为止，但是从 3 月 7 日蚂蚁技术终面面完之后就没有面过技术面了，只面过两个 HR 面，剩下的时间都在等 offer。最开始是找朋友内推了字节财经的日常实习，但是到现在还在简历评估，后面又投了财经的暑期实习，笔试之后就一直卡在流程里了。腾讯是一开始被天美捞了，一面挂了之后被 PCG 捞了，最后走完了流程。阿里提前批投了好多部门，蚂蚁最先走完了终面，就录入了系统，最后拿了 offer。这一路走过来真的是酸甜苦辣都经历过，因为学历自卑过，以至于想去考研。总而言之，一定要找一个搭档和你一起复习，比如说 @你怕是个憨批哦，这是我实验室的同学，也是我们实验室的队长，这个人是真的强，阿里核心部门都拿遍了，他在我复习的过程中给了我很多帮助。</p><h2 id="写这个帖子的目的" tabindex="-1"><a class="header-anchor" href="#写这个帖子的目的" aria-hidden="true">#</a> 写这个帖子的目的</h2><ol><li>写给自己：总结反思一下大学前三年以及找工作的一些经历与感悟。</li><li>写给还在找实习的朋友：希望自己的经历以及面经]能给你们一些启发和帮助。</li><li>写给和我一样有着大厂梦的学弟学妹们：你们还有很长的准备时间，无论你之前在干什么，没有目标也好，碌碌无为也好，没找对方向也好，只要从现在开始，找对学习的方向，并且坚持不懈的学上一年两年，一定可以实现你的梦想的。</li></ol><h2 id="我的大学经历" tabindex="-1"><a class="header-anchor" href="#我的大学经历" aria-hidden="true">#</a> 我的大学经历</h2><p>先简单聊聊一下自己大学的经历。</p><p>本人无论文、无比赛、无 ACM，要啥奖没啥奖，绩点还行，不是很拉垮，也不亮眼。保研肯定保不了，考研估计也考不上。</p><p>大一时候加入了工作室，上学期自学了 C 语言和数据结构，从寒假开始学 Java，当时还不知道 Java 那么卷，我得到的消息是 Java 好找工作，这里就不由得感叹信息差的重要性了，我当时只知道前端、后端和安卓开发，而我确实对后端开发感兴趣，但是因为信息差，我只知道 Java 可以做后端开发，并不知道后端开发其实是一个很局限的概念，后面才慢慢了解到后台开发、服务端开发这些名词，也不知道 C++、Golang 等语言也可以做后台开发，所以就学了 Java。但其实 Java 更适合做业务，C++ 更适合做底层开发、服务端开发，我虽然对业务不反感，但是对 OS、Network 这些更感兴趣一些，当然这些会作为我的一些兴趣，业余时间会自己去研究下。</p><h3 id="学习路线" tabindex="-1"><a class="header-anchor" href="#学习路线" aria-hidden="true">#</a> 学习路线</h3><p>大概学习的路线就是：Java SE 基础 -&gt; MySQL -&gt; Java Web（主要包括 JDBC、Servlet、JSP 等）-&gt; SSM（其实当时 Spring Boot 已经兴起，但是我觉得没有 SSM 基础很难学会 Spring Boot，就先学了 SSM）-&gt; Spring Boot -&gt; Spring Cloud（当时虽然学了 Spring Cloud，但是缺少项目的锤炼，完全不会用，只是了解了分布式的一些概念）-&gt; Redis -&gt; Nginx -&gt; 计算机网络（本来是计算机专业的必修课，可是我们专业要到大三下才学，所以就提前自学了）-&gt; Dubbo -&gt; Zookeeper -&gt; JVM -&gt; JUC -&gt; Netty -&gt; Rabbit MQ -&gt; 操作系统（同计算机网络）-&gt; 计算机组成原理（直接不开这门课）。</p><p>这就是我的一个具体的学习路线，大概是在大二的下学期学完的这些东西，都是通过看视频学的，只会用，并不了解底层原理，达不到面试八股文的水准，把这些东西学完之后，搭建起了知识体系，就开始准备面试了，大概的开始时间是去年的六月份，开始在牛客网上看一些面经，然后会自己总结。准备面试的阶段我觉得最重要的是啃书 + 刷题，八股文只是辅助，我们只是自嘲说面试就背背八股文，但其实像阿里这样的公司，背八股文是完全不能蒙混过关的，除非你有非常亮眼的项目或者实习经历。</p><h3 id="书籍推荐" tabindex="-1"><a class="header-anchor" href="#书籍推荐" aria-hidden="true">#</a> 书籍推荐</h3><ul><li>《Thinking in Java》：不多说了，好书，但太厚了，买了没看。</li><li>《深入理解 Java 虚拟机》：JVM 的圣经，看了两遍，每一遍都有不同的收获。</li><li>《Java 并发编程的艺术》：阿里人写的，基本涵盖了面试会问的并发编程的问题。</li><li>《MySQL 技术内幕》：写的很深入，但是对初学者可能不太友好，第一感觉写的比较深而杂，后面单独去看每一章节，觉得收获很大。</li><li>《Redis 设计与实现》：书如其名，结合源码深入讲解了 Redis 的实现原理，必看。</li><li>《深入理解计算机系统》：大名鼎鼎的 CSAPP，对你面 Java 可能帮助不是很大，但是不得不说这是一本经典，涵盖了计算机系统、体系结构、组成原理、操作系统等知识，我蚂蚁二面的时候就被问了遇到的最大的困难，我就和面试官交流了读这本书中遇到的一些问题，淘系二面的时候也和面试官交流了这本书，我们都觉得这本书还需要二刷。</li><li>《TCP/IP 详解卷 1》：我只看了 TCP 相关的章节，但是是有必要通读一遍的，面天美时候和面试官交流了这本书。</li><li>《操作系统导论》：颇具盛名的 OSTEP，南大操作系统的课本，看的时候可以结合在 B 站蒋炎岩老师的视频，我会在下面放链接。</li></ul><p>这几本书理解透彻了，我相信面试的时候可以面试官面试官聊的很深入了，面试官也会对你印象非常好。但是对于普通人来说，看一遍是肯定记不住的，遗忘是非常正常的现象，我很多也只看了一遍，很多细节也记不清了，最近准备二刷。</p>',15),v={href:"https://javaguide.cn/books/",target:"_blank",rel:"noopener noreferrer"},S=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/p3-juejin/62099c9b2fd24d3cb6511e49756f486b~tplv-k3u1fbpfcp-zoom-1.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("h3",{id:"教程推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#教程推荐","aria-hidden":"true"},"#"),a(" 教程推荐")],-1),J=e("p",null,"我上面谈到的学习路线，我建议是跟着视频学，尚硅谷和黑马的教程都可以，一定要手敲一遍。",-1),k={href:"https://www.bilibili.com/video/BV1HN41197Ko",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/BV16J41127jq",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1jt4y117KR",target:"_blank",rel:"noopener noreferrer"},C={href:"https://time.geekbang.org/column/intro/100020801",target:"_blank",rel:"noopener noreferrer"},M={href:"https://time.geekbang.org/column/intro/100056701",target:"_blank",rel:"noopener noreferrer"},R={href:"https://javaguide.cn/books/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519384&idx=1&sn=bc7e71af75350b755f04ca4178395b1a&chksm=cea1c353f9d64a458f797696d4144b4d6e58639371a4612b8e4d106d83a66d2289e7b2cd7431&token=660789642&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},y=l('<h2 id="找工作" tabindex="-1"><a class="header-anchor" href="#找工作" aria-hidden="true">#</a> 找工作</h2><p>大概是去年 11 月的时候，牛客上日常实习的面经开始多了起来，我也有了找实习的意识，然后就开始一边复习一边海投，投了很多公司，给面试机会的就那几家，腾讯二面挂了两次，当时心态完全崩了，甚至有了看空春招的想法。很幸运最后收获了一个实习机会，在实习的时候，除了完成日常的工作以外，其余时间也没有松懈，晚上下班后、周末的时间都用来复习，心里也暗暗下定决心，春招一定要卷土重来！</p><p>从二月下旬开始海投阿里提前批，基本都有了面试，开系统那天收到了 16 封内推邮件，具体的面经可以看我以前发的文章。</p><p>从 3.1 到 3.7 那一个周平均每天三场面试，真的非常崩溃，一度想考研，也焦虑过、哭过、笑过，还好结果是好的，最后也去了一直想去的支付宝。</p><p>我主要是想通过自己对面试过程的总结给大家提一些建议，大佬不喜勿喷。</p><h3 id="面试准备" tabindex="-1"><a class="header-anchor" href="#面试准备" aria-hidden="true">#</a> 面试准备</h3><p>要去面试首先要准备一份简历，我个人认为一份好的简历应该有一下三个部分：</p><ol><li>完整的个人信息，这个不多说了吧，个人信息不完整面试官或 HR 都联系不上你，就算学校不好也要写上去，因为听说有些公司没有学校无法进行简历评估，非科班或者说学校不太出名可以将教育信息写在最下面。</li><li>项目/实习经历，项目真的很重要，面试大部分时间会围绕着项目来，你项目准备好了可以把控面试的节奏，引导面试官问你擅长的方向，我就是在这方面吃了亏。如果没有项目怎么办，可以去 GitHub 上找一些开源的项目，自己跟着做一遍，加入一些自己的思考和理解。还有做项目不能简单实现功能，还要考虑性能和优化，面试官并不关注你这个功能是怎么实现的，他想知道的是你是如何一步步思考的，一开始的方案是什么，后面选了什么方案，对性能有哪些提升，还能再改进吗？</li><li>具备的专业技能，这个可以简单的写一下你学过的专业知识，这样可以让面试官有针对的问一些基础知识，切忌长篇罗列，最擅长的一定要写在上面，依次往下。</li></ol><p>简历写好了之后就进入了投递环节，最好找一个靠谱的内推人，因为内推人可以帮你跟进面试的进度，必要时候和 HR 沟通，哪怕挂了也可以告诉你原因，哪些方面表现的不好。现在内推已经不再是门槛，而是最低的入场券，没有认识的人内推也可以在牛客上找一些师兄内推，他们往往也很热情。</p><p>在面试过程中一定不要紧张，因为一面面试官可能比我们大不了几岁，也工作没几年，所以 duck 不必紧张的不会说话，不会就说不会，然后笑一下，会就流利的表达出来，面试并不是一问一答，面试是沟通，是交流，你可以大胆的说出自己的思考，表达沟通能力也是面试的一个衡量指标。</p><p>我个人认为面试和追妹子是差不多的，都是尽快的让对方了解自己，发现你身上的闪光点，只不过面试是让面试官了解你在技术上的造诣。所以，自我介绍环节就变得非常重要，你可以简单介绍完自己的个人信息之后，介绍一下你做过的项目，自我介绍最好长一些，因为在面试前，面试官可能没看过你的简历（逃），你最好留给面试官充足的时间去看你的简历。自我介绍包括项目的介绍可以写成一遍文档，多读几遍，在面试的时候能够背下来，实在不行也可以照着读。</p><h3 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h3><p>我还是要重点讲一下项目，我以前认为项目是一个不确定性非常大的地方，后来经过面试才知道项目是最容易带面试官节奏的地方。问项目的意义是通过项目来问基础知识，所以就要求你对自己的项目非常熟悉，考虑各种极端情况以及优化方案，熟悉用到的中间件原理，以及这些中间件是如何处理这些情况的，比如说，MQ 的宕机恢复，Redis 集群、哨兵，缓存雪崩、缓存击穿、缓存穿透等。</p><p>优化主要可以从缓存、MQ 解耦、加索引、多线程、异步任务、用 ElasticSearch 做检索等方面考虑，我认为项目优化主要的着手点就是减少数据库的访问量，减少同步调用的次数，比如说加缓存、用 ElasticSearch 做检索就是通过减少数据库的访问来实现的优化，MQ 解耦、异步任务等就是通过减少同步调用的次数来实现的优化。</p><p>项目中还可以学到很多东西，比如下面的这些就是通过项目来学习的：</p><ol><li>权限控制（ABAC、RBAC）</li><li>JWT</li><li>单点登录</li><li>分库分表</li><li>分片上传/导出</li><li>分布式锁</li><li>负载均衡</li></ol><p>当然还有很多东西，每个人的项目不一样，能学到的东西也天差地别，但是你要相信的是，你接触到的东西，面试官应该是都会的，所以一定要好好准备，不然容易被怼。</p><p>本质上来讲，项目也可以拆解成八股文，可以用准备基础知识的方式来准备项目。</p><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><p>项目的八股文化，会进一步导致无法准确的甄选候选人，所以就到了面试的第三个衡量标准，那就是算法，我曾经在反问阶段问过面试官刷算法对哪些方面有帮助，面试官直截了当的对我说，刷题对你以后找工作有帮助。我的观点是算法其实也是可以通过记忆来提高的，LeetCode 前 200 道题能刷上 3 遍，我不信面试时候还能手撕不了，所以在复习的过程中一定要保持算法的训练。</p><h3 id="面试建议" tabindex="-1"><a class="header-anchor" href="#面试建议" aria-hidden="true">#</a> 面试建议</h3><ol><li>自我介绍尽量丰富一下，项目提前准备好如何介绍。</li><li>在面试的时候，遇到不会的问题最好不要直接说不会，然后愣着，等面试官问下一个问题，你可以说自己对这方面不太了解，但是对 XX 有一些了解，然后讲一下，如果面试官感兴趣，你就可以继续说，不感兴趣他就会问下一个问题，面试官一般是不会打断的，这也是让面试官快速了解你的一个小技巧。</li><li>尽量向面试官展示你的技术热情，比如说你可以和面试官聊 Java 每个版本的新特性，最近技术圈的一些新闻等等，因为就我所知，技术热情也是阿里面试考察的一方面。</li><li>面试是一个双向选择的过程，不要表现的太过去谄媚。</li><li>好好把握好反问阶段，问一些有价值的内容，比如说新人培养机制、转正机制等。</li></ol><h2 id="经验" tabindex="-1"><a class="header-anchor" href="#经验" aria-hidden="true">#</a> 经验</h2><ol><li>如果你现在大一，OK，我希望你能多了解一下互联网就业的方向，看看自己的兴趣在哪，先把基础打好，比如说数据结构、操作性、计算机网络、计算机组成原理，因为这四门课既是大部分学校考研的专业课，也是面试中常常会被问到的问题。</li><li>如果已经大二了，那就要明确自己的方向，要有自驱力，知道你学习的这个方向都要学哪些知识，学到什么程度能够就业，合理安排好时间，知道自己在什么阶段要达到什么样的水准。</li><li>如果你学历比较吃亏，亦或是非科班出身，那么我建议你一定要付出超过常人的努力，因为在我混迹牛客这么多年，我看到的面经一般是学校好一些的问的简单一些，相对差一些的问的难一些，其实也可以理解，毕竟普遍上来说名校出身的综合实力要强一些。</li><li>尽量早点实习，如果你现在大二，已经有了能够实习的水平，我建议你早点投简历，尽量找暑期实习，你相信我，如果你这个暑假去实习了，明年一定是乱杀。</li><li>接上条，如果找不到实习，尽量要做几个有挑战的项目，并且找到这个项目的抓手。</li><li>多刷刷牛客，我在牛客上就认识了很多志同道合的人，他们在我找工作过程中给了我很多帮助。</li></ol><h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h2><ol><li>一定要抱团取暖，一起找工作的同学可以拉一个群，无论是自己学校的还是网上认识的，平常多交流复习心得，n 个 1 相加的和一定是大于 n 的。</li><li>知识的深度和广度都很重要，平常一定要多了解新技术，而且每学一门技术一定要争取了解它的原理，不然你学的不算是计算机，而是英语系，工作职位也不是研发工程师，而是 API 调用工程师。</li><li>运营好自己的 CSDN、掘金等博客平台，我有个学弟大二是 CSDN 博客专家，已经有猎头联系他了，平常写的代码尽量都提交到 GitHub 上，无论是项目也好，实验也好，如果有能力的话最好能录制一些视频发到哔哩哔哩上，因为这是面试官在面试你之前了解你表达能力的一个重要途径。</li><li>心态一定要好，面试不顺利，不一定是你的能力问题，也可能是因为他们招人很少，或者说某一些客观条件与他们不匹配，一定要多尝试不同的选择。</li><li>多和人沟通交流，不要自己埋头苦干，因为你以后进公司里也需要和别人合作，所以表达和沟通能力是一项基本的技能，要提前培养。</li></ol><h2 id="闲聊" tabindex="-1"><a class="header-anchor" href="#闲聊" aria-hidden="true">#</a> 闲聊</h2><h3 id="谈谈信息差" tabindex="-1"><a class="header-anchor" href="#谈谈信息差" aria-hidden="true">#</a> 谈谈信息差</h3><p>我觉得学校的差距并不只是体现在教学水平上，诚然名校的老师讲课水平、实验水平都是高于弱校的，但是信息差才是主要的差距。在 985 学校里面读书，不仅能接触到更多优质企业的校招宣讲、讲座，还能接触到更好的就业氛围，因为名校里面去大厂、去外企的人、甚至出国的人更多，学长学姐的内推只是一方面，另一方面是你可以从他们身上学到技术以外的东西，而双非学校去大厂的人少，他们能影响的只是很少一部分人，这就是信息差。信息差的劣势主要体现在哪些方面呢？比如人家大二已经开始找日常实习了，而你认为找工作是大四的事情，人家大三已经找到暑期实习了，你暑假还需要去参加学校组织的培训，一步步的就这样拉下了。</p><p>好在，互联网的出现让信息更加透明，你可以在网上检索各种各样你想要的信息，比如我就在牛客]上认识了一些志同道合的朋友，他们在找工作的过程中给了我很多帮助。平常可以多刷刷牛客，能够有效的减小信息差。</p><h3 id="谈谈-java-的内卷" tabindex="-1"><a class="header-anchor" href="#谈谈-java-的内卷" aria-hidden="true">#</a> 谈谈 Java 的内卷</h3><p>Java 卷吗？毫无疑问，很卷，我个人认为开发属于没有什么门槛的工作，本科生来干正合适，但是因为算法岗更是神仙打架，导致很多的研究生也转了开发，而且基本都转了 Java 开发。Java 的内卷只是这个原因造成的吗？当然不是，我认为还有一个原因就是培训机构的兴起，让这个行业的门槛进一步降低，你要学什么东西，怎么学，都有人给你安排好了，这是造成内卷的第二个原因。第三个原因就是非科班转码，其它行业的凋落和互联网行业的繁荣形成了鲜明对比，导致很多其它专业的人也自学计算机，找互联网的工作，导致这个行业的人越来越多，蛋糕就那么大，分蛋糕的人却越来越多。</p><p>其实内卷也不一定是个坏现象，这说明阶级上升的通道还没有完全关闭，还是有不少人愿意通过努力来改变现状，这也一定程度上会加快行业的发展，社会的发展。选择权在你自己手上，你可以选择回老家躺平或者进互联网公司内卷，如果选择后者的话，我的建议还是尽早占下坑位，因为唯一不变的是变化，你永远不知道三年后是什么样子。</p><h2 id="祝福" tabindex="-1"><a class="header-anchor" href="#祝福" aria-hidden="true">#</a> 祝福</h2><p>惟愿诸君，前程似锦！</p>',35);function N(j,A){const i=t("ExternalLinkIcon");return o(),d("div",null,[e("blockquote",null,[s,c,e("p",null,[p,a(),e("a",u,[a("https://www.nowcoder.com/discuss/640519"),r(i)])]),_,e("p",null,[f,a("："),e("a",b,[a("十年饮冰，难凉热血——秋招总结"),r(i)])])]),g,e("p",null,[a("更多书籍推荐建议大家看 "),e("a",v,[a("JavaGuide"),r(i)]),a(" 这个网站上的书籍推荐，比较全面。")]),S,m,J,e("ul",null,[e("li",null,[e("a",k,[a("2021 南京大学 “操作系统：设计与实现” (蒋炎岩)"),r(i)]),a("：我不多说了，看评论就知道了。")]),e("li",null,[e("a",x,[a("SpringSecurity-Social-OAuth2 社交登录接口授权鉴权系列课程"),r(i)]),a("：字母哥讲的 Spring Security 也很好，Spring Security 或者 Shiro 是做项目必备的，会一个就好，根据实际场景以及个人喜好（笑）来选型。")]),e("li",null,[e("a",w,[a("清华大学邓俊辉数据结构与算法"),r(i)]),a("：清华不解释了。")]),e("li",null,[e("a",C,[a("MySQL 实战 45 讲"),r(i)]),a("：前 27 讲多看几遍基本可以秒杀面试中遇到的 MySQL 问题了。")]),e("li",null,[e("a",M,[a("Redis 核心技术与实战"),r(i)]),a("：讲解了大量的 Redis 在生产上的使用场景，和《Redis 设计与实现》配合着看，也可以秒杀面试中遇到的 Redis 问题了。")]),e("li",null,[e("a",R,[a("JavaGuide"),r(i)]),a("：「Java 学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。")]),e("li",null,[e("a",B,[a("《Java 面试指北》"),r(i)]),a("：这是一份教你如何更高效地准备面试的小册，涵盖常见八股文（系统设计、常见框架、分布式、高并发 ......）、优质面经等内容。")])]),y])}const Q=n(h,[["render",N],["__file","summary-of-spring-recruitment.html.vue"]]);export{Q as default};
