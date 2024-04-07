import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as a,a as e,b as s}from"./app-fRcXugPl.js";const c={},n=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),s(" 概述")],-1),r=e("p",null,"数据访问对象（DAO）是一个为某种类型的数据库或其他持久性机制提供抽象接口的对象。通过将应用程序调用映射到持久层，DAO在不公开数据库细节的情况下提供了一些特定的数据操作。这种隔离支持单一责任原则。它将特定于域的对象和数据类型（DAO的公共接口）方面的数据访问应用程序需求与特定DBMS如何满足这些需求区分开来。",-1),_=e("p",null,"使用DAO模式，我们可以使用各种方法调用来检索/添加/删除/更新数据，而无需直接与数据源交互。下面的示例演示了基本的CRUD操作：选择、添加、更新和删除。",-1),d=[n,r,_];function i(l,h){return o(),a("div",null,d)}const u=t(c,[["render",i],["__file","dao.html.vue"]]);export{u as default};