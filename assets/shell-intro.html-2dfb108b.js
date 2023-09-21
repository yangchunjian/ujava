const l=JSON.parse('{"key":"v-160f5f98","path":"/cs-basics/operating-system/shell-intro.html","title":"Shell 编程基础知识总结","lang":"zh-CN","frontmatter":{"title":"Shell 编程基础知识总结","category":"计算机基础","tag":["操作系统","Linux"],"head":[["meta",{"name":"description","content":"Shell 编程在我们的日常开发工作中非常实用，目前 Linux 系统下最流行的运维自动化语言就是 Shell 和 Python 了。这篇文章我会简单总结一下 Shell 编程基础知识，带你入门 Shell 编程！"}],["meta",{"property":"og:url","content":"https://ujava.cn/cs-basics/operating-system/shell-intro.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"Shell 编程基础知识总结"}],["meta",{"property":"og:description","content":"Shell 编程在我们的日常开发工作中非常实用，目前 Linux 系统下最流行的运维自动化语言就是 Shell 和 Python 了。 这篇文章我会简单总结一下 Shell 编程基础知识，带你入门 Shell 编程！ 走进 Shell 编程的大门 为什么要学 Shell？ 学一个东西，我们大部分情况都是往实用性方向着想。从工作角度来讲，学习 Shell..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell 编程基础知识总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]],"description":"Shell 编程在我们的日常开发工作中非常实用，目前 Linux 系统下最流行的运维自动化语言就是 Shell 和 Python 了。 这篇文章我会简单总结一下 Shell 编程基础知识，带你入门 Shell 编程！ 走进 Shell 编程的大门 为什么要学 Shell？ 学一个东西，我们大部分情况都是往实用性方向着想。从工作角度来讲，学习 Shell..."},"headers":[{"level":2,"title":"走进 Shell 编程的大门","slug":"走进-shell-编程的大门","link":"#走进-shell-编程的大门","children":[{"level":3,"title":"为什么要学 Shell？","slug":"为什么要学-shell","link":"#为什么要学-shell","children":[]},{"level":3,"title":"什么是 Shell？","slug":"什么是-shell","link":"#什么是-shell","children":[]},{"level":3,"title":"Shell 编程的 Hello World","slug":"shell-编程的-hello-world","link":"#shell-编程的-hello-world","children":[]}]},{"level":2,"title":"Shell 变量","slug":"shell-变量","link":"#shell-变量","children":[{"level":3,"title":"Shell 编程中的变量介绍","slug":"shell-编程中的变量介绍","link":"#shell-编程中的变量介绍","children":[]},{"level":3,"title":"Shell 字符串入门","slug":"shell-字符串入门","link":"#shell-字符串入门","children":[]},{"level":3,"title":"Shell 字符串常见操作","slug":"shell-字符串常见操作","link":"#shell-字符串常见操作","children":[]},{"level":3,"title":"Shell 数组","slug":"shell-数组","link":"#shell-数组","children":[]}]},{"level":2,"title":"Shell 基本运算符","slug":"shell-基本运算符","link":"#shell-基本运算符","children":[{"level":3,"title":"算数运算符","slug":"算数运算符","link":"#算数运算符","children":[]},{"level":3,"title":"关系运算符","slug":"关系运算符","link":"#关系运算符","children":[]},{"level":3,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[]},{"level":3,"title":"布尔运算符","slug":"布尔运算符","link":"#布尔运算符","children":[]},{"level":3,"title":"字符串运算符","slug":"字符串运算符","link":"#字符串运算符","children":[]},{"level":3,"title":"文件相关运算符","slug":"文件相关运算符","link":"#文件相关运算符","children":[]}]},{"level":2,"title":"shell 流程控制","slug":"shell-流程控制","link":"#shell-流程控制","children":[{"level":3,"title":"if 条件语句","slug":"if-条件语句","link":"#if-条件语句","children":[]},{"level":3,"title":"for 循环语句","slug":"for-循环语句","link":"#for-循环语句","children":[]},{"level":3,"title":"while 语句","slug":"while-语句","link":"#while-语句","children":[]}]},{"level":2,"title":"shell 函数","slug":"shell-函数","link":"#shell-函数","children":[{"level":3,"title":"不带参数没有返回值的函数","slug":"不带参数没有返回值的函数","link":"#不带参数没有返回值的函数","children":[]},{"level":3,"title":"有返回值的函数","slug":"有返回值的函数","link":"#有返回值的函数","children":[]},{"level":3,"title":"带参数的函数","slug":"带参数的函数","link":"#带参数的函数","children":[]}]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":11.83,"words":3548},"filePathRelative":"cs-basics/operating-system/shell-intro.md","localizedDate":"2023年9月21日","autoDesc":true}');export{l as data};
