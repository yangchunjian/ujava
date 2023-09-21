const e=JSON.parse('{"key":"v-1e3967c6","path":"/high-availability/high-availability-system-design.html","title":"高可用系统设计指南","lang":"zh-CN","frontmatter":{"title":"高可用系统设计指南","category":"高可用","description":"什么是高可用？可用性的判断标准是啥？ 高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。 一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/high-availability/high-availability-system-design.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"高可用系统设计指南"}],["meta",{"property":"og:description","content":"什么是高可用？可用性的判断标准是啥？ 高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。 一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高可用系统设计指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"什么是高可用？可用性的判断标准是啥？","slug":"什么是高可用-可用性的判断标准是啥","link":"#什么是高可用-可用性的判断标准是啥","children":[]},{"level":2,"title":"哪些情况会导致系统不可用？","slug":"哪些情况会导致系统不可用","link":"#哪些情况会导致系统不可用","children":[]},{"level":2,"title":"有哪些提高系统可用性的方法？","slug":"有哪些提高系统可用性的方法","link":"#有哪些提高系统可用性的方法","children":[{"level":3,"title":"注重代码质量，测试严格把关","slug":"注重代码质量-测试严格把关","link":"#注重代码质量-测试严格把关","children":[]},{"level":3,"title":"使用集群，减少单点故障","slug":"使用集群-减少单点故障","link":"#使用集群-减少单点故障","children":[]},{"level":3,"title":"限流","slug":"限流","link":"#限流","children":[]},{"level":3,"title":"超时和重试机制设置","slug":"超时和重试机制设置","link":"#超时和重试机制设置","children":[]},{"level":3,"title":"熔断机制","slug":"熔断机制","link":"#熔断机制","children":[]},{"level":3,"title":"异步调用","slug":"异步调用","link":"#异步调用","children":[]},{"level":3,"title":"使用缓存","slug":"使用缓存","link":"#使用缓存","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1645},"filePathRelative":"high-availability/high-availability-system-design.md","localizedDate":"2023年9月21日","autoDesc":true}');export{e as data};
