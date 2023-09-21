const e=JSON.parse('{"key":"v-c2d3c54c","path":"/system-design/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html","title":"","lang":"zh-CN","frontmatter":{"description":"Servlet 总结 在 Java Web 程序中，Servlet主要负责接收用户请求 HttpServletRequest,在doGet(),`doPost()中做相应的处理，并将回应HttpServletResponse反馈给用户。Servlet 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/system-design/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:description","content":"Servlet 总结 在 Java Web 程序中，Servlet主要负责接收用户请求 HttpServletRequest,在doGet(),`doPost()中做相应的处理，并将回应HttpServletResponse反馈给用户。Servlet 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"Servlet 总结","slug":"servlet-总结","link":"#servlet-总结","children":[]},{"level":2,"title":"阐述 Servlet 和 CGI 的区别?","slug":"阐述-servlet-和-cgi-的区别","link":"#阐述-servlet-和-cgi-的区别","children":[{"level":3,"title":"CGI 的不足之处","slug":"cgi-的不足之处","link":"#cgi-的不足之处","children":[]},{"level":3,"title":"Servlet 的优点","slug":"servlet-的优点","link":"#servlet-的优点","children":[]}]},{"level":2,"title":"Servlet 接口中有哪些方法及 Servlet 生命周期探秘","slug":"servlet-接口中有哪些方法及-servlet-生命周期探秘","link":"#servlet-接口中有哪些方法及-servlet-生命周期探秘","children":[]},{"level":2,"title":"get 和 post 请求的区别","slug":"get-和-post-请求的区别","link":"#get-和-post-请求的区别","children":[]},{"level":2,"title":"什么情况下调用 doGet()和 doPost()","slug":"什么情况下调用-doget-和-dopost","link":"#什么情况下调用-doget-和-dopost","children":[]},{"level":2,"title":"转发(Forward)和重定向(Redirect)的区别","slug":"转发-forward-和重定向-redirect-的区别","link":"#转发-forward-和重定向-redirect-的区别","children":[]},{"level":2,"title":"自动刷新(Refresh)","slug":"自动刷新-refresh","link":"#自动刷新-refresh","children":[]},{"level":2,"title":"Servlet 与线程安全","slug":"servlet-与线程安全","link":"#servlet-与线程安全","children":[]},{"level":2,"title":"JSP 和 Servlet 是什么关系","slug":"jsp-和-servlet-是什么关系","link":"#jsp-和-servlet-是什么关系","children":[]},{"level":2,"title":"JSP 工作原理","slug":"jsp-工作原理","link":"#jsp-工作原理","children":[]},{"level":2,"title":"JSP 有哪些内置对象、作用分别是什么","slug":"jsp-有哪些内置对象、作用分别是什么","link":"#jsp-有哪些内置对象、作用分别是什么","children":[]},{"level":2,"title":"Request 对象的主要方法有哪些","slug":"request-对象的主要方法有哪些","link":"#request-对象的主要方法有哪些","children":[]},{"level":2,"title":"request.getAttribute()和 request.getParameter()有何区别","slug":"request-getattribute-和-request-getparameter-有何区别","link":"#request-getattribute-和-request-getparameter-有何区别","children":[]},{"level":2,"title":"include 指令 include 的行为的区别","slug":"include-指令-include-的行为的区别","link":"#include-指令-include-的行为的区别","children":[]},{"level":2,"title":"JSP 九大内置对象，七大动作，三大指令","slug":"jsp-九大内置对象-七大动作-三大指令","link":"#jsp-九大内置对象-七大动作-三大指令","children":[]},{"level":2,"title":"讲解 JSP 中的四种作用域","slug":"讲解-jsp-中的四种作用域","link":"#讲解-jsp-中的四种作用域","children":[]},{"level":2,"title":"如何实现 JSP 或 Servlet 的单线程模式","slug":"如何实现-jsp-或-servlet-的单线程模式","link":"#如何实现-jsp-或-servlet-的单线程模式","children":[]},{"level":2,"title":"实现会话跟踪的技术有哪些","slug":"实现会话跟踪的技术有哪些","link":"#实现会话跟踪的技术有哪些","children":[]},{"level":2,"title":"Cookie 和 Session 的区别","slug":"cookie-和-session-的区别","link":"#cookie-和-session-的区别","children":[]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":16.53,"words":4960},"filePathRelative":"system-design/J2EE基础知识.md","localizedDate":"2023年9月21日","autoDesc":true}');export{e as data};
