const e=JSON.parse('{"key":"v-1f6ef736","path":"/system-design/security/design-of-authority-system.html","title":"权限系统设计详解","lang":"zh-CN","frontmatter":{"title":"权限系统设计详解","category":"系统设计","tag":["安全"],"head":[["meta",{"name":"keywords","content":"权限系统设计,RBAC,ABAC"}],["meta",{"name":"description","content":"基于角色的访问控制（Role-Based Access Control，简称 RBAC）指的是通过用户的角色（Role）授权其相关权限，实现了灵活的访问控制，相比直接授予用户权限，要更加简单、高效、可扩展。"}],["meta",{"property":"og:url","content":"https://ujava.cn/system-design/security/design-of-authority-system.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"权限系统设计详解"}],["meta",{"property":"og:description","content":"作者：转转技术团队 原文：https://mp.weixin.qq.com/s/ONMuELjdHYa0yQceTj01Iw 老权限系统的问题与现状 转转公司在过去并没有一个统一的权限管理系统，权限管理由各业务自行研发或是使用其他业务的权限系统，权限管理的不统一带来了不少问题： 1. 各业务重复造轮子，维护成本高 2. 各系统只解决部分场景问题，方案不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"权限系统设计详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]],"description":"作者：转转技术团队 原文：https://mp.weixin.qq.com/s/ONMuELjdHYa0yQceTj01Iw 老权限系统的问题与现状 转转公司在过去并没有一个统一的权限管理系统，权限管理由各业务自行研发或是使用其他业务的权限系统，权限管理的不统一带来了不少问题： 1. 各业务重复造轮子，维护成本高 2. 各系统只解决部分场景问题，方案不..."},"headers":[{"level":2,"title":"老权限系统的问题与现状","slug":"老权限系统的问题与现状","link":"#老权限系统的问题与现状","children":[]},{"level":2,"title":"业界权限系统的设计方式","slug":"业界权限系统的设计方式","link":"#业界权限系统的设计方式","children":[{"level":3,"title":"RBAC 模型","slug":"rbac-模型","link":"#rbac-模型","children":[]},{"level":3,"title":"ABAC 模型","slug":"abac-模型","link":"#abac-模型","children":[]}]},{"level":2,"title":"新权限系统的设计思想","slug":"新权限系统的设计思想","link":"#新权限系统的设计思想","children":[{"level":3,"title":"权限系统自身的权限管理","slug":"权限系统自身的权限管理","link":"#权限系统自身的权限管理","children":[]},{"level":3,"title":"权限类型的定义","slug":"权限类型的定义","link":"#权限类型的定义","children":[]},{"level":3,"title":"默认角色的分类","slug":"默认角色的分类","link":"#默认角色的分类","children":[]}]},{"level":2,"title":"新权限系统的核心模块设计","slug":"新权限系统的核心模块设计","link":"#新权限系统的核心模块设计","children":[{"level":3,"title":"系统/菜单/数据权限管理","slug":"系统-菜单-数据权限管理","link":"#系统-菜单-数据权限管理","children":[]},{"level":3,"title":"角色与用户管理","slug":"角色与用户管理","link":"#角色与用户管理","children":[]},{"level":3,"title":"权限申请","slug":"权限申请","link":"#权限申请","children":[]},{"level":3,"title":"操作日志","slug":"操作日志","link":"#操作日志","children":[]}]},{"level":2,"title":"总结与展望","slug":"总结与展望","link":"#总结与展望","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":13.61,"words":4083},"filePathRelative":"system-design/security/design-of-authority-system.md","localizedDate":"2023年9月21日","autoDesc":true}');export{e as data};
