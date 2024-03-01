const e=JSON.parse('{"key":"v-2f61fe2d","path":"/design/other/bytecode.html","title":"字节码模式","lang":"zh-CN","frontmatter":{"title":"字节码模式","icon":"laptop-code","category":["设计模式"],"description":"概述 字节码模式(bytecode pattern) 的目的是通过将数据编码为虚拟机的指令来为行为提供数据的灵活性。指令集定义了可以执行的低级操作。一系列指令被编码为字节序列。虚拟机一次执行一个指令，使用堆栈作为中间值。通过组合指令，可以定义复杂的高级行为。 当需要定义大量行为并且实现引擎不是一个好的选择时，应该使用此模式，因为它太低级别了，由于编译时间慢或其他工具问题，迭代它需要很长时间。它有太多的信任。如果要确保所定义的行为不会破坏游戏，则需要将其从代码库的其余部分沙盒化。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/design/other/bytecode.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"字节码模式"}],["meta",{"property":"og:description","content":"概述 字节码模式(bytecode pattern) 的目的是通过将数据编码为虚拟机的指令来为行为提供数据的灵活性。指令集定义了可以执行的低级操作。一系列指令被编码为字节序列。虚拟机一次执行一个指令，使用堆栈作为中间值。通过组合指令，可以定义复杂的高级行为。 当需要定义大量行为并且实现引擎不是一个好的选择时，应该使用此模式，因为它太低级别了，由于编译时间慢或其他工具问题，迭代它需要很长时间。它有太多的信任。如果要确保所定义的行为不会破坏游戏，则需要将其从代码库的其余部分沙盒化。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T03:13:51.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2024-03-01T03:13:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字节码模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T03:13:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"createdTime":1709175153000,"updatedTime":1709262831000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":2}]},"readingTime":{"minutes":0.74,"words":221},"filePathRelative":"design/other/bytecode.md","localizedDate":"2024年2月29日","excerpt":"<h2> 概述</h2>\\n<p>字节码模式(bytecode pattern)<br>\\n的目的是通过将数据编码为虚拟机的指令来为行为提供数据的灵活性。指令集定义了可以执行的低级操作。一系列指令被编码为字节序列。虚拟机一次执行一个指令，使用堆栈作为中间值。通过组合指令，可以定义复杂的高级行为。<br>\\n当需要定义大量行为并且实现引擎不是一个好的选择时，应该使用此模式，因为它太低级别了，由于编译时间慢或其他工具问题，迭代它需要很长时间。它有太多的信任。如果要确保所定义的行为不会破坏游戏，则需要将其从代码库的其余部分沙盒化。</p>\\n","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
