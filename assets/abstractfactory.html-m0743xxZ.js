import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as r,c as o,e as n}from"./app-k-CQzdUf.js";const s={},e=n('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>介绍</strong>：</p><p>通过定义一个创建对象的接口来创建对象，但将具体实现的决定留给子类来决定。在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。<strong>提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类</strong>。</p><p><strong>场景</strong>：</p><ul><li>1.客户端（应用层）不依赖与产品类示例如何被创建、实现等细节</li><li>2.强调一系列相关的产品对象（数据同一产品族）一起使用创建对象需要大量的重复代码</li><li>3.提供一个产品类的库，所有的产品以同样的接口出现，使得客户端不依赖于具体实现</li></ul><p>Spring 中，BeanFactory 是用于管理 Bean 的一个工厂，所有工厂都是 BeanFactory 的子类</p><p><strong>优点</strong>：</p><ul><li>1.<strong>具体产品在应用层的代码隔离，无需关系创建的细节</strong></li><li>2.将一个系列的产品统一到一起创建</li></ul><p><strong>不足</strong>：</p><ul><li>1.规定了所有可能被创建的产品集合，<strong>产品族中扩展新的产品困难</strong></li><li>2.增加了系统的抽象性和理解难度</li></ul>',10),a=[e];function l(i,c){return r(),o("div",null,a)}const g=t(s,[["render",l],["__file","abstractfactory.html.vue"]]);export{g as default};