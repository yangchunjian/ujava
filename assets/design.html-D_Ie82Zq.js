import{_ as t,o as a,c as n,a as r}from"./app-DO_NcI_B.js";const o={};function p(i,e){return a(),n("div",null,e[0]||(e[0]=[r('<h4 id="_15-【推荐】避免如下误解-敏捷开发-讲故事-编码-发布。" tabindex="-1"><a class="header-anchor" href="#_15-【推荐】避免如下误解-敏捷开发-讲故事-编码-发布。"><span>15.【推荐】避免如下误解：敏捷开发=讲故事+编码+发布。</span></a></h4><p>说明：敏捷开发是快速交付迭代可用的系统，省略多余的设计方案，摒弃传统的审批流程，但核心关键点上的必要设计和文档沉淀是需要的。</p><p>反例：某团队为了业务快速发展，敏捷成了产品经理催进度的借口，系统中均是勉强能运行但像面条一样的代码，可维护性和可扩展性极差，一年之后，不得不进行大规模重构，得不偿失。</p><h4 id="_16-【参考】设计文档的作用是明确需求、理顺逻辑、后期维护-次要目的用于指导编码。" tabindex="-1"><a class="header-anchor" href="#_16-【参考】设计文档的作用是明确需求、理顺逻辑、后期维护-次要目的用于指导编码。"><span>16.【参考】设计文档的作用是明确需求、理顺逻辑、后期维护，次要目的用于指导编码。</span></a></h4><p>说明：避免为了设计而设计，系统设计文档有助于后期的系统维护和重构，所以设计结果需要进行分类归档保存。</p><h4 id="_17-【参考】可扩展性的本质是找到系统的变化点-并隔离变化点。" tabindex="-1"><a class="header-anchor" href="#_17-【参考】可扩展性的本质是找到系统的变化点-并隔离变化点。"><span>17.【参考】可扩展性的本质是找到系统的变化点，并隔离变化点。</span></a></h4><p>说明：世间众多设计模式其实就是一种设计模式即隔离变化点的模式。</p><p>正例：极致扩展性的标志，就是需求的新增，不会在原有代码交付物上进行任何形式的修改。</p><h4 id="_18-【参考】设计的本质就是识别和表达系统难点。" tabindex="-1"><a class="header-anchor" href="#_18-【参考】设计的本质就是识别和表达系统难点。"><span>18.【参考】设计的本质就是识别和表达系统难点。</span></a></h4><p>说明：识别和表达完全是两回事，很多人错误地认为识别到系统难点在哪里，表达只是自然而然的事情，但是大家在设计评审中经常出现语焉不详，甚至是词不达意的情况。准确地表达系统难点需要具备如下能力：表达规则和表达工具的熟练性。抽象思维和总结能力的局限性。基础知识体系的完备性。深入浅出的生动表达力。</p><h4 id="_19-【参考】代码即文档的观点是错误的-清晰的代码只是文档的某个片断-而不是全部。" tabindex="-1"><a class="header-anchor" href="#_19-【参考】代码即文档的观点是错误的-清晰的代码只是文档的某个片断-而不是全部。"><span>19.【参考】代码即文档的观点是错误的，清晰的代码只是文档的某个片断，而不是全部。</span></a></h4><p>说明：代码的深度调用，模块层面上的依赖关系网，业务场景逻辑，非功能性需求等问题要相应的文档来完整地呈现。</p><h4 id="_20-【参考】在做无障碍产品设计时-需要考虑到" tabindex="-1"><a class="header-anchor" href="#_20-【参考】在做无障碍产品设计时-需要考虑到"><span>20.【参考】在做无障碍产品设计时，需要考虑到：</span></a></h4><ul><li>⚫ 所有可交互的控件元素必须能被 tab 键聚焦，并且焦点顺序需符合自然操作逻辑。</li><li>⚫ 用于登录校验和请求拦截的验证码均需提供图形验证以外的其它方式。</li><li>⚫ 自定义的控件类型需明确交互方式。<br> 正例：登录场景中，输入框的按钮都需要考虑 tab 键聚焦，符合自然逻辑的操作顺序如下，&quot;输入用户名，输入密码，输入验证码，点击登录&quot;，其中验证码实现语音验证方式。如有自定义标签实现的控件设置控件类型可使用 role 属性。</li></ul>',14)]))}const s=t(o,[["render",p],["__file","design.html.vue"]]),d=JSON.parse('{"path":"/standard/design.html","title":"规范设计","lang":"zh-CN","frontmatter":{"title":"规范设计","icon":"laptop-code","category":["设计规范"],"tag":["规范"],"description":"1.【强制】存储方案和底层数据结构的设计获得评审一致通过，并沉淀成为文档。 说明：有缺陷的底层数据结构容易导致系统风险上升，可扩展性下降，重构成本也会因历史数据迁移和系统平滑过渡而陡然增加，所以，存储方案和数据结构需要认真地进行设计和评审，生产环境提交执行后，需要进行 double check。 正例：评审内容包括存储介质选型、表结构设计能否满足技术方...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/standard/design.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"规范设计"}],["meta",{"property":"og:description","content":"1.【强制】存储方案和底层数据结构的设计获得评审一致通过，并沉淀成为文档。 说明：有缺陷的底层数据结构容易导致系统风险上升，可扩展性下降，重构成本也会因历史数据迁移和系统平滑过渡而陡然增加，所以，存储方案和数据结构需要认真地进行设计和评审，生产环境提交执行后，需要进行 double check。 正例：评审内容包括存储介质选型、表结构设计能否满足技术方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:32:25.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"规范"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:32:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"规范设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:32:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1697622608000,"updatedTime":1713151945000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":6}]},"readingTime":{"minutes":7.94,"words":2382},"filePathRelative":"standard/design.md","localizedDate":"2023年10月18日","excerpt":"<h4>1.【强制】存储方案和底层数据结构的设计获得评审一致通过，并沉淀成为文档。</h4>\\n<p>说明：有缺陷的底层数据结构容易导致系统风险上升，可扩展性下降，重构成本也会因历史数据迁移和系统平滑过渡而陡然增加，所以，存储方案和数据结构需要认真地进行设计和评审，生产环境提交执行后，需要进行 double check。</p>\\n<p>正例：评审内容包括存储介质选型、表结构设计能否满足技术方案、存取性能和存储空间能否满足业务发展、表或字段之间的辩证关系、字段名称、字段类型、索引等；数据结构变更（如在原有表中新增字段）也需要在评审通过后上线。</p>\\n<h4>2.【强制】在需求分析阶段，如果与系统交互的 User 超过一类并且相关的 UseCase 超过 5 个，使用用例图来表达更加清晰的结构化需求。</h4>","autoDesc":true}');export{s as comp,d as data};
