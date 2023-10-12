import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as t,e as n}from"./app-f4361273.js";const c={},r=n('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：原型设计模式允许通过复制现有对象来创建新对象，而不是通过实例化类来创建新对象。用原型实例指定创建对象的种类，并且<code>通过拷贝这些原型创建新的对象</code>。原型模式有两种实现方法，<code>深拷贝和浅拷贝。原型模式的目的是 降低实例对象个数 , 减少构造函数的调用次数</code>。</p><p><strong>场景</strong>：在需要创建大量相似对象时非常有用，它可以避免重复创建对象，从而提高性能，并且可以根据需要实现浅拷贝或深拷贝。在Java中，原型模式的实现通常涉及到实现Cloneable接口和重写clone()方法。如果对象的创建成本比较大，而同一个类的不同对象之间差别不大（大部分字段都相同），在这种情况下，我们可以利用对已有对象（原型）进行复制（或者叫拷贝）的方式，来创建新对象，以达到节省创建时间的目的。<code>Spring 中原型 bean 的创建</code>。</p><p><strong>优点</strong>：</p><ul><li>1.性能高 : 使用原型模式复用的方式创建实例对象 , 比使用构造函数重新创建对象性能要高 ; ( 针对类实例对象开销大的情况 )</li><li>2.流程简单 : 原型模式可以简化创建的过程 , 可以直接修改现有的对象实例的值 , 达到复用的目的 ; ( 针对构造函数繁琐的情况 )<br><strong>不足</strong>：</li><li>1.覆盖 clone 方法 ( 必须 ) : 必须重写对象的 clone 方法 , Java 中提供了 cloneable 标识该对象可以被拷贝 , 但是必须覆盖 Object 的 clone 方法才能被拷贝 ;</li><li>2.深拷贝 与 浅拷贝 风险 : 克隆对象时进行的一些修改 , 容易出错 ; 需要灵活运用深拷贝与浅拷贝操作 ;</li></ul>',5),l=[r];function a(s,i){return o(),t("div",null,l)}const _=e(c,[["render",a],["__file","prototype.html.vue"]]);export{_ as default};
