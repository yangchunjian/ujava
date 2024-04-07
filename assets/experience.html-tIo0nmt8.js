const e=JSON.parse('{"key":"v-db68a69a","path":"/highfreq/experience.html","title":"设计实践经验","lang":"zh-CN","frontmatter":{"title":"设计实践经验","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"简介 记录道具来源等的 source 字段时，可以使用（类名+方法名） / （包名+方法名）的组合，可以清晰地区分来源。并且可以灵活地增加新的渠道/动作。 涉及金额、钱的字段，使用整型，以分为单位。也可以考虑使用 Decimal 类型来存储金额字段，避免因为精度问题导致计算错误。同时也可以考虑使用货币格式化库，方便对金额进行格式化显示。 使用 HTTP DELETE 方法来实现删除单条数据，这样更符合 RESTful 风格，同时也可以考虑使用 HTTP POST 方法来实现批量删除、复杂请求。 使用异步日志组件来进行日志记录，避免在主进程中进行日志记录导致性能问题。 将账号系统与认证系统进行分离，避免账号系统变得复杂。同时可以考虑使用第三方认证平台来进行认证，避免自行开发认证系统的复杂度。另外，可以考虑使用 OAuth2.0 协议来实现多渠道认证。 账号系统在设计维度上一般主要有 登录方式、渠道。 合并登录方式 登录方式以手机号为中心 合并。 渠道分组，按渠道分组分区分服。 事务的开启，根据等级不同，会对数据进行不同范围的上锁；使用行级锁来实现事务控制，避免对整个表进行锁定导致性能问题。 go的每一个err都需要进行处理，不处理就会跳过。json解析、mysql查询等，使用错误处理库来统一处理错误，避免在代码中到处返回错误。同时可以考虑使用日志库来记录错误信息，方便进行错误追踪和问题定位。 业务逻辑分离不错乱，上层交给下层方法统一处理的业务，上层业务不要再另外处理下层的业务；将不同业务模块的代码分离开来，通过模块化的方式进行统一处理和管理，以避免代码重复和混乱。 使用Redis分布式锁时，加入重试机制以及超时机制，以确保锁的获取和释放能够及时有效。 一个事务要整体一致，比如一个物品的购买和多个物品的购买，最后只进行一次账户扣减操作，只分为余额充足和余额不足两种情况；根据具体业务需求进行设计和优化，以确保事务的原子性、一致性和持久性。 如果需要对redis中设置了过期时间的数据进行修改，要考虑到修改途中数据过期的情况。这时候可以给key带上一些标识，比如每天领取次数限制的数据，设置key时带上日期，避免因为临界值时间出现的数据错乱。 业务价值不强但消耗性能相对大的功能，这样的情况往往不需要性能优秀，一般有较大的容忍性。要在尽可能保证主业务稳定运行的情况下，实现此类功能的运行：比如一个消息存储的业务，所需要的读写性能可能都非常大，这时候可以尽量不引入新的存储介质，使用分库分表加分布式文件存储持久化来实现。 mysql的delete操作，是不释放表空间的。只是做了逻辑上的标记删除，在磁盘上数据并没有被真正删除。这样的设计是因为：如果在磁盘上移除之后，很多其它的记录需要在磁盘上重新排列，这会消耗大量的性能。( 例如：一个大表，存在索引，删除了其中一行，那么整个索引结构就会发生变化，随之而来的改变索引结构，必将带来磁盘 IO)。这时候想要释放可以选择","head":[["meta",{"property":"og:url","content":"https://ujava.cn/highfreq/experience.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"设计实践经验"}],["meta",{"property":"og:description","content":"简介 记录道具来源等的 source 字段时，可以使用（类名+方法名） / （包名+方法名）的组合，可以清晰地区分来源。并且可以灵活地增加新的渠道/动作。 涉及金额、钱的字段，使用整型，以分为单位。也可以考虑使用 Decimal 类型来存储金额字段，避免因为精度问题导致计算错误。同时也可以考虑使用货币格式化库，方便对金额进行格式化显示。 使用 HTTP DELETE 方法来实现删除单条数据，这样更符合 RESTful 风格，同时也可以考虑使用 HTTP POST 方法来实现批量删除、复杂请求。 使用异步日志组件来进行日志记录，避免在主进程中进行日志记录导致性能问题。 将账号系统与认证系统进行分离，避免账号系统变得复杂。同时可以考虑使用第三方认证平台来进行认证，避免自行开发认证系统的复杂度。另外，可以考虑使用 OAuth2.0 协议来实现多渠道认证。 账号系统在设计维度上一般主要有 登录方式、渠道。 合并登录方式 登录方式以手机号为中心 合并。 渠道分组，按渠道分组分区分服。 事务的开启，根据等级不同，会对数据进行不同范围的上锁；使用行级锁来实现事务控制，避免对整个表进行锁定导致性能问题。 go的每一个err都需要进行处理，不处理就会跳过。json解析、mysql查询等，使用错误处理库来统一处理错误，避免在代码中到处返回错误。同时可以考虑使用日志库来记录错误信息，方便进行错误追踪和问题定位。 业务逻辑分离不错乱，上层交给下层方法统一处理的业务，上层业务不要再另外处理下层的业务；将不同业务模块的代码分离开来，通过模块化的方式进行统一处理和管理，以避免代码重复和混乱。 使用Redis分布式锁时，加入重试机制以及超时机制，以确保锁的获取和释放能够及时有效。 一个事务要整体一致，比如一个物品的购买和多个物品的购买，最后只进行一次账户扣减操作，只分为余额充足和余额不足两种情况；根据具体业务需求进行设计和优化，以确保事务的原子性、一致性和持久性。 如果需要对redis中设置了过期时间的数据进行修改，要考虑到修改途中数据过期的情况。这时候可以给key带上一些标识，比如每天领取次数限制的数据，设置key时带上日期，避免因为临界值时间出现的数据错乱。 业务价值不强但消耗性能相对大的功能，这样的情况往往不需要性能优秀，一般有较大的容忍性。要在尽可能保证主业务稳定运行的情况下，实现此类功能的运行：比如一个消息存储的业务，所需要的读写性能可能都非常大，这时候可以尽量不引入新的存储介质，使用分库分表加分布式文件存储持久化来实现。 mysql的delete操作，是不释放表空间的。只是做了逻辑上的标记删除，在磁盘上数据并没有被真正删除。这样的设计是因为：如果在磁盘上移除之后，很多其它的记录需要在磁盘上重新排列，这会消耗大量的性能。( 例如：一个大表，存在索引，删除了其中一行，那么整个索引结构就会发生变化，随之而来的改变索引结构，必将带来磁盘 IO)。这时候想要释放可以选择"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:00:03.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计实践经验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T03:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]}],"git":{"createdTime":1700219885000,"updatedTime":1709434803000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":4}]},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"highfreq/experience.md","localizedDate":"2023年11月17日","excerpt":"<h2> 简介</h2>\\n<ul>\\n<li>记录道具来源等的 source 字段时，可以使用（类名+方法名） / （包名+方法名）的组合，可以清晰地区分来源。并且可以灵活地增加新的渠道/动作。</li>\\n<li>涉及金额、钱的字段，使用整型，以分为单位。也可以考虑使用 Decimal 类型来存储金额字段，避免因为精度问题导致计算错误。同时也可以考虑使用货币格式化库，方便对金额进行格式化显示。</li>\\n<li>使用 HTTP DELETE 方法来实现删除单条数据，这样更符合 RESTful 风格，同时也可以考虑使用 HTTP POST 方法来实现批量删除、复杂请求。</li>\\n<li>使用异步日志组件来进行日志记录，避免在主进程中进行日志记录导致性能问题。</li>\\n<li>将账号系统与认证系统进行分离，避免账号系统变得复杂。同时可以考虑使用第三方认证平台来进行认证，避免自行开发认证系统的复杂度。另外，可以考虑使用<br>\\nOAuth2.0 协议来实现多渠道认证。\\n<ul>\\n<li>账号系统在设计维度上一般主要有 登录方式、渠道。</li>\\n<li>合并登录方式 登录方式以手机号为中心 合并。</li>\\n<li>渠道分组，按渠道分组分区分服。</li>\\n</ul>\\n</li>\\n<li>事务的开启，根据等级不同，会对数据进行不同范围的上锁；使用行级锁来实现事务控制，避免对整个表进行锁定导致性能问题。</li>\\n<li>go的每一个err都需要进行处理，不处理就会跳过。json解析、mysql查询等，使用错误处理库来统一处理错误，避免在代码中到处返回错误。同时可以考虑使用日志库来记录错误信息，方便进行错误追踪和问题定位。</li>\\n<li>业务逻辑分离不错乱，上层交给下层方法统一处理的业务，上层业务不要再另外处理下层的业务；将不同业务模块的代码分离开来，通过模块化的方式进行统一处理和管理，以避免代码重复和混乱。</li>\\n<li>使用Redis分布式锁时，加入重试机制以及超时机制，以确保锁的获取和释放能够及时有效。</li>\\n<li>一个事务要整体一致，比如一个物品的购买和多个物品的购买，最后只进行一次账户扣减操作，只分为余额充足和余额不足两种情况；根据具体业务需求进行设计和优化，以确保事务的原子性、一致性和持久性。</li>\\n<li>如果需要对redis中设置了过期时间的数据进行修改，要考虑到修改途中数据过期的情况。这时候可以给key带上一些标识，比如每天领取次数限制的数据，设置key时带上日期，避免因为临界值时间出现的数据错乱。</li>\\n<li>业务价值不强但消耗性能相对大的功能，这样的情况往往不需要性能优秀，一般有较大的容忍性。要在尽可能保证主业务稳定运行的情况下，实现此类功能的运行：比如一个消息存储的业务，所需要的读写性能可能都非常大，这时候可以尽量不引入新的存储介质，使用分库分表加分布式文件存储持久化来实现。</li>\\n<li>mysql的delete操作，是不释放表空间的。只是做了逻辑上的标记删除，在磁盘上数据并没有被真正删除。这样的设计是因为：如果在磁盘上移除之后，很多其它的记录需要在磁盘上重新排列，这会消耗大量的性能。(<br>\\n例如：一个大表，存在索引，删除了其中一行，那么整个索引结构就会发生变化，随之而来的改变索引结构，必将带来磁盘 IO)。这时候想要释放可以选择</li>\\n</ul>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
