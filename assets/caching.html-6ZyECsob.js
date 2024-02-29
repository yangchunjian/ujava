import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as o,a as e,b as c}from"./app-Pp0azAcF.js";const r={},n=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),c(" 概述")],-1),s=e("p",null,[c("缓存模式(caching)描述了如何通过不在资源使用后立即释放资源来避免昂贵的资源重新获取。这些资源保留了它们的身份，保存在一些快速访问存储中，并被重新使用以避免再次获取它们。此模式中有四种主要的缓存策略/技术；每个人都有自己的优点和缺点。它们是在单个事务中将数据写入高速缓存和数据库的写操作，将数据立即写入数据库而不是高速缓存的绕写操作，最初将数据写入高速缓冲存储器的后写操作，而数据仅在高速缓冲存储器满时写入数据库，并将保持两个数据源中的数据同步的责任推给应用程序本身。read-through策略也包含在上述四种策略中——如果存在，则将数据从缓存返回给调用方，否则从DB查询并将其存储到缓存中以备将来使用。"),e("br"),c(" 这些策略决定了缓存中的数据何时应写回后备存储（即数据库），并有助于保持两个数据源的同步/最新。这种模式可以提高性能，也有助于保持缓存中的数据与底层数据存储中的数据之间的一致性。")],-1),_=[n,s];function h(i,d){return a(),o("div",null,_)}const m=t(r,[["render",h],["__file","caching.html.vue"]]);export{m as default};
