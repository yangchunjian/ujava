const e=JSON.parse('{"key":"v-600cd572","path":"/java/package.html","title":"Java核心包结构设计思想","lang":"zh-CN","frontmatter":{"title":"Java核心包结构设计思想","category":"Java","icon":"laptop-code","tag":["设计Java"],"description":"在研读 JDK 源码之前，先了解 JDK 几个核心包的设计思想，将有助于我们理解当初的设计者们的意图，让我们更能体会到设计者的良苦用心。 1 java.lang 语言包 提供利用 Java 编程语言进行程序设计的基础类。最重要的类是 Object（类层次结构的根）和 Class（其实例表示正在运行的应用程序中的类）。 把基本类型的值当成一个对象来表示通常很有必要。包装器类 Boolean、Character、Integer、Long、Float 和 Double 就是用于这个目的。例如，一个 Double 类型的对象包含了一个类型为 double 的字段，这表示如果引用某个值，则可以将该值存储在引用类型的变量中。这些类还提供了大量用于转换基值的方法，并支持一些标准方法，比如 equals 和 hashCode。Void 类是一个非实例化的类，它保持一个对表示基本类型 void 的 Class 对象的引用。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/java/package.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"Java核心包结构设计思想"}],["meta",{"property":"og:description","content":"在研读 JDK 源码之前，先了解 JDK 几个核心包的设计思想，将有助于我们理解当初的设计者们的意图，让我们更能体会到设计者的良苦用心。 1 java.lang 语言包 提供利用 Java 编程语言进行程序设计的基础类。最重要的类是 Object（类层次结构的根）和 Class（其实例表示正在运行的应用程序中的类）。 把基本类型的值当成一个对象来表示通常很有必要。包装器类 Boolean、Character、Integer、Long、Float 和 Double 就是用于这个目的。例如，一个 Double 类型的对象包含了一个类型为 double 的字段，这表示如果引用某个值，则可以将该值存储在引用类型的变量中。这些类还提供了大量用于转换基值的方法，并支持一些标准方法，比如 equals 和 hashCode。Void 类是一个非实例化的类，它保持一个对表示基本类型 void 的 Class 对象的引用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T03:14:02.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"设计Java"}],["meta",{"property":"article:modified_time","content":"2024-01-24T03:14:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java核心包结构设计思想\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-24T03:14:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 java.lang 语言包","slug":"_1-java-lang-语言包","link":"#_1-java-lang-语言包","children":[]},{"level":2,"title":"2 java.util","slug":"_2-java-util","link":"#_2-java-util","children":[]},{"level":2,"title":"3 java.util.concurrent","slug":"_3-java-util-concurrent","link":"#_3-java-util-concurrent","children":[{"level":3,"title":"3.1 执行器（Executors）","slug":"_3-1-执行器-executors","link":"#_3-1-执行器-executors","children":[]},{"level":3,"title":"3.2 队列","slug":"_3-2-队列","link":"#_3-2-队列","children":[]},{"level":3,"title":"3.3 超时","slug":"_3-3-超时","link":"#_3-3-超时","children":[]},{"level":3,"title":"3.4 同步器","slug":"_3-4-同步器","link":"#_3-4-同步器","children":[]},{"level":3,"title":"3.5 并发容器","slug":"_3-5-并发容器","link":"#_3-5-并发容器","children":[]},{"level":3,"title":"3.6 内存一致性属性","slug":"_3-6-内存一致性属性","link":"#_3-6-内存一致性属性","children":[]}]},{"level":2,"title":"4 java.util.concurrent.locks","slug":"_4-java-util-concurrent-locks","link":"#_4-java-util-concurrent-locks","children":[]},{"level":2,"title":"5 java.io","slug":"_5-java-io","link":"#_5-java-io","children":[]}],"git":{"createdTime":1706066042000,"updatedTime":1706066042000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":16.69,"words":5008},"filePathRelative":"java/package.md","localizedDate":"2024年1月24日","excerpt":"<p>在研读 JDK 源码之前，先了解 JDK 几个核心包的设计思想，将有助于我们理解当初的设计者们的意图，让我们更能体会到设计者的良苦用心。</p>\\n<h2> 1 java.lang 语言包</h2>\\n<p>提供利用 Java 编程语言进行程序设计的基础类。最重要的类是 Object（类层次结构的根）和 Class（其实例表示正在运行的应用程序中的类）。</p>\\n<p>把基本类型的值当成一个对象来表示通常很有必要。包装器类 Boolean、Character、Integer、Long、Float 和 Double 就是用于这个目的。例如，一个 Double 类型的对象包含了一个类型为 double 的字段，这表示如果引用某个值，则可以将该值存储在引用类型的变量中。这些类还提供了大量用于转换基值的方法，并支持一些标准方法，比如 equals 和 hashCode。Void 类是一个非实例化的类，它保持一个对表示基本类型 void 的 Class 对象的引用。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
