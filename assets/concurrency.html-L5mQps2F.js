const e=JSON.parse('{"key":"v-a9fa29dc","path":"/principle/concurrency.html","title":"设计原理:并发","lang":"zh-CN","frontmatter":{"title":"设计原理:并发","icon":"laptop-code","category":["设计原理"],"description":"简介 并发，就是在同一时间段内有多个任务同时进行着。这些任务或者互不影响互不干扰，或者共同协作来完成一个更大的任务。 比如我在做项目 A，修改工程 a ; 你在做项目 B, 修改工程 b 。我们各自做完自己的项目后上线。我和你做的事情就是并发的。如果我和你修改同一个工程，就可能需要协调处理冲突。并发是一种高效的运作方式，但往往也要处理并发带来的冲突和协作。 世界天然是并发的。本文总结并发相关的知识和实践。 基础 计算机中实现并发的方式有：多核、多进程、多线程；共享内存模型。基本方法是分而治之、划分均衡任务、独立工作单元、隔离访问共享资源。可以将一个大任务划分为多个互相协作的子任务，将一个大数据集划分为多个小的子数据集，分别处理后合并起来完成整个任务。并发需要解决执行实体之间的资源共享和通信机制。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/ujava/principle/concurrency.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"设计原理:并发"}],["meta",{"property":"og:description","content":"简介 并发，就是在同一时间段内有多个任务同时进行着。这些任务或者互不影响互不干扰，或者共同协作来完成一个更大的任务。 比如我在做项目 A，修改工程 a ; 你在做项目 B, 修改工程 b 。我们各自做完自己的项目后上线。我和你做的事情就是并发的。如果我和你修改同一个工程，就可能需要协调处理冲突。并发是一种高效的运作方式，但往往也要处理并发带来的冲突和协作。 世界天然是并发的。本文总结并发相关的知识和实践。 基础 计算机中实现并发的方式有：多核、多进程、多线程；共享内存模型。基本方法是分而治之、划分均衡任务、独立工作单元、隔离访问共享资源。可以将一个大任务划分为多个互相协作的子任务，将一个大数据集划分为多个小的子数据集，分别处理后合并起来完成整个任务。并发需要解决执行实体之间的资源共享和通信机制。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计原理:并发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"模式","slug":"模式","link":"#模式","children":[]},{"level":2,"title":"工具","slug":"工具","link":"#工具","children":[]},{"level":2,"title":"陷阱","slug":"陷阱","link":"#陷阱","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":2,"title":"挑战","slug":"挑战","link":"#挑战","children":[]}],"git":{"createdTime":1699503411000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":5}]},"readingTime":{"minutes":26.2,"words":7860},"filePathRelative":"principle/concurrency.md","localizedDate":"2023年11月9日","excerpt":"<h2> 简介</h2>\\n<p>并发，就是在同一时间段内有多个任务同时进行着。这些任务或者互不影响互不干扰，或者共同协作来完成一个更大的任务。</p>\\n<p>比如我在做项目 A，修改工程 a ; 你在做项目 B, 修改工程 b 。我们各自做完自己的项目后上线。我和你做的事情就是并发的。如果我和你修改同一个工程，就可能需要协调处理冲突。并发是一种高效的运作方式，但往往也要处理并发带来的冲突和协作。</p>\\n<p>世界天然是并发的。本文总结并发相关的知识和实践。</p>\\n<h2> 基础</h2>\\n<p>计算机中实现并发的方式有：多核、多进程、多线程；共享内存模型。基本方法是分而治之、划分均衡任务、独立工作单元、隔离访问共享资源。可以将一个大任务划分为多个互相协作的子任务，将一个大数据集划分为多个小的子数据集，分别处理后合并起来完成整个任务。并发需要解决执行实体之间的资源共享和通信机制。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
