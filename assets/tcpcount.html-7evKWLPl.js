const t=JSON.parse('{"key":"v-189b3577","path":"/synthesis/tcpcount.html","title":"服务器高并发之提高TCP连接数","lang":"zh-CN","frontmatter":{"title":"服务器高并发之提高TCP连接数","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"前言 测试服务器系统：ubuntu server 20.04.3 nginx负载均衡服务器：centos 7 服务器上我放了一个web系统用来测试连接数：开源的支持高并发的服务器 发出请求的是我的电脑，电脑系统：win7 发出请求用的是python的压测工具：locust TCP连接能连接多少","head":[["meta",{"property":"og:url","content":"https://ujava.cn/synthesis/tcpcount.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"服务器高并发之提高TCP连接数"}],["meta",{"property":"og:description","content":"前言 测试服务器系统：ubuntu server 20.04.3 nginx负载均衡服务器：centos 7 服务器上我放了一个web系统用来测试连接数：开源的支持高并发的服务器 发出请求的是我的电脑，电脑系统：win7 发出请求用的是python的压测工具：locust TCP连接能连接多少"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:42:50.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:42:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器高并发之提高TCP连接数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:42:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"TCP连接能连接多少","slug":"tcp连接能连接多少","link":"#tcp连接能连接多少","children":[]},{"level":2,"title":"实际测试","slug":"实际测试","link":"#实际测试","children":[{"level":3,"title":"测试1 未调整的情况下测试","slug":"测试1-未调整的情况下测试","link":"#测试1-未调整的情况下测试","children":[]},{"level":3,"title":"测试1分析","slug":"测试1分析","link":"#测试1分析","children":[]},{"level":3,"title":"测试1优化","slug":"测试1优化","link":"#测试1优化","children":[]}]}],"git":{"createdTime":1713152570000,"updatedTime":1713152570000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":5.06,"words":1519},"filePathRelative":"synthesis/tcpcount.md","localizedDate":"2024年4月15日","excerpt":"<h2> 前言</h2>\\n<ul>\\n<li>测试服务器系统：ubuntu server 20.04.3</li>\\n<li>nginx负载均衡服务器：centos 7</li>\\n<li>服务器上我放了一个web系统用来测试连接数：<a href=\\"https://github.com/yedf/handy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">开源的支持高并发的服务器</a></li>\\n<li>发出请求的是我的电脑，电脑系统：win7</li>\\n<li>发出请求用的是python的压测工具：locust</li>\\n</ul>\\n<h2> TCP连接能连接多少</h2>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{t as data};