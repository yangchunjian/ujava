const e=JSON.parse('{"key":"v-6124e2da","path":"/java/basis/java-basic-questions-01.html","title":"Java基础常见面试题总结(上)","lang":"zh-CN","frontmatter":{"title":"Java基础常见面试题总结(上)","category":"Java","tag":["Java基础"],"head":[["meta",{"name":"keywords","content":"JVM,JDK,JRE,字节码详解,Java 基本数据类型,装箱和拆箱"}],["meta",{"name":"description","content":"全网质量最高的Java基础常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://ujava.cn/java/basis/java-basic-questions-01.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"Java基础常见面试题总结(上)"}],["meta",{"property":"og:description","content":"基础概念与常识 Java 语言有哪些特点? 1. 简单易学； 2. 面向对象（封装，继承，多态）； 3. 平台无关性（ Java 虚拟机实现平台无关性）； 4. 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）； 5. 可靠性（具备异常处理和自动内存管理机制）；..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础常见面试题总结(上)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]],"description":"基础概念与常识 Java 语言有哪些特点? 1. 简单易学； 2. 面向对象（封装，继承，多态）； 3. 平台无关性（ Java 虚拟机实现平台无关性）； 4. 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）； 5. 可靠性（具备异常处理和自动内存管理机制）；..."},"headers":[{"level":2,"title":"基础概念与常识","slug":"基础概念与常识","link":"#基础概念与常识","children":[{"level":3,"title":"Java 语言有哪些特点?","slug":"java-语言有哪些特点","link":"#java-语言有哪些特点","children":[]},{"level":3,"title":"JVM vs JDK vs JRE","slug":"jvm-vs-jdk-vs-jre","link":"#jvm-vs-jdk-vs-jre","children":[]},{"level":3,"title":"什么是字节码?采用字节码的好处是什么?","slug":"什么是字节码-采用字节码的好处是什么","link":"#什么是字节码-采用字节码的好处是什么","children":[]},{"level":3,"title":"为什么不全部使用 AOT 呢？","slug":"为什么不全部使用-aot-呢","link":"#为什么不全部使用-aot-呢","children":[]},{"level":3,"title":"为什么说 Java 语言“编译与解释并存”？","slug":"为什么说-java-语言-编译与解释并存","link":"#为什么说-java-语言-编译与解释并存","children":[]},{"level":3,"title":"Oracle JDK vs OpenJDK","slug":"oracle-jdk-vs-openjdk","link":"#oracle-jdk-vs-openjdk","children":[]},{"level":3,"title":"Java 和 C++ 的区别?","slug":"java-和-c-的区别","link":"#java-和-c-的区别","children":[]}]},{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"注释有哪几种形式？","slug":"注释有哪几种形式","link":"#注释有哪几种形式","children":[]},{"level":3,"title":"标识符和关键字的区别是什么？","slug":"标识符和关键字的区别是什么","link":"#标识符和关键字的区别是什么","children":[]},{"level":3,"title":"Java 语言关键字有哪些？","slug":"java-语言关键字有哪些","link":"#java-语言关键字有哪些","children":[]},{"level":3,"title":"自增自减运算符","slug":"自增自减运算符","link":"#自增自减运算符","children":[]},{"level":3,"title":"移位运算符","slug":"移位运算符","link":"#移位运算符","children":[]},{"level":3,"title":"continue、break 和 return 的区别是什么？","slug":"continue、break-和-return-的区别是什么","link":"#continue、break-和-return-的区别是什么","children":[]}]},{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[{"level":3,"title":"Java 中的几种基本数据类型了解么？","slug":"java-中的几种基本数据类型了解么","link":"#java-中的几种基本数据类型了解么","children":[]},{"level":3,"title":"基本类型和包装类型的区别？","slug":"基本类型和包装类型的区别","link":"#基本类型和包装类型的区别","children":[]},{"level":3,"title":"包装类型的缓存机制了解么？","slug":"包装类型的缓存机制了解么","link":"#包装类型的缓存机制了解么","children":[]},{"level":3,"title":"自动装箱与拆箱了解吗？原理是什么？","slug":"自动装箱与拆箱了解吗-原理是什么","link":"#自动装箱与拆箱了解吗-原理是什么","children":[]},{"level":3,"title":"为什么浮点数运算的时候会有精度丢失的风险？","slug":"为什么浮点数运算的时候会有精度丢失的风险","link":"#为什么浮点数运算的时候会有精度丢失的风险","children":[]},{"level":3,"title":"如何解决浮点数运算的精度丢失问题？","slug":"如何解决浮点数运算的精度丢失问题","link":"#如何解决浮点数运算的精度丢失问题","children":[]},{"level":3,"title":"超过 long 整型的数据应该如何表示？","slug":"超过-long-整型的数据应该如何表示","link":"#超过-long-整型的数据应该如何表示","children":[]}]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[{"level":3,"title":"成员变量与局部变量的区别？","slug":"成员变量与局部变量的区别","link":"#成员变量与局部变量的区别","children":[]},{"level":3,"title":"静态变量有什么作用？","slug":"静态变量有什么作用","link":"#静态变量有什么作用","children":[]},{"level":3,"title":"字符型常量和字符串常量的区别?","slug":"字符型常量和字符串常量的区别","link":"#字符型常量和字符串常量的区别","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"什么是方法的返回值?方法有哪几种类型？","slug":"什么是方法的返回值-方法有哪几种类型","link":"#什么是方法的返回值-方法有哪几种类型","children":[]},{"level":3,"title":"静态方法为什么不能调用非静态成员?","slug":"静态方法为什么不能调用非静态成员","link":"#静态方法为什么不能调用非静态成员","children":[]},{"level":3,"title":"静态方法和实例方法有何不同？","slug":"静态方法和实例方法有何不同","link":"#静态方法和实例方法有何不同","children":[]},{"level":3,"title":"重载和重写有什么区别？","slug":"重载和重写有什么区别","link":"#重载和重写有什么区别","children":[]},{"level":3,"title":"什么是可变长参数？","slug":"什么是可变长参数","link":"#什么是可变长参数","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":38.38,"words":11514},"filePathRelative":"java/basis/java-basic-questions-01.md","localizedDate":"2023年9月21日","autoDesc":true}');export{e as data};
