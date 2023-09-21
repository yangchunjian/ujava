const l=JSON.parse('{"key":"v-691ae374","path":"/database/mysql/mysql-high-performance-optimization-specification-recommendations.html","title":"MySQL高性能优化规范建议总结","lang":"zh-CN","frontmatter":{"title":"MySQL高性能优化规范建议总结","category":"数据库","tag":["MySQL"],"description":"作者: 听风 原文地址: 。 JavaGuide 已获得作者授权，并对原文内容进行了完善。 数据库命名规范 所有数据库对象名称必须使用小写字母并用下划线分割; 所有数据库对象名称禁止使用 MySQL 保留关键字（如果表名中包含关键字查询时，需要将其用单引号括起来）; 数据库对象的命名要能做到见名识意，并且最后不要超过 32 个字符; 临时库表必须以 t...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/database/mysql/mysql-high-performance-optimization-specification-recommendations.html"}],["meta",{"property":"og:site_name","content":"ujava"}],["meta",{"property":"og:title","content":"MySQL高性能优化规范建议总结"}],["meta",{"property":"og:description","content":"作者: 听风 原文地址: 。 JavaGuide 已获得作者授权，并对原文内容进行了完善。 数据库命名规范 所有数据库对象名称必须使用小写字母并用下划线分割; 所有数据库对象名称禁止使用 MySQL 保留关键字（如果表名中包含关键字查询时，需要将其用单引号括起来）; 数据库对象的命名要能做到见名识意，并且最后不要超过 32 个字符; 临时库表必须以 t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T03:27:17.000Z"}],["meta",{"property":"article:author","content":"ujava"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-09-21T03:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL高性能优化规范建议总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T03:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ujava\\",\\"url\\":\\"https://ujava.cn\\"}]}"]]},"headers":[{"level":2,"title":"数据库命名规范","slug":"数据库命名规范","link":"#数据库命名规范","children":[]},{"level":2,"title":"数据库基本设计规范","slug":"数据库基本设计规范","link":"#数据库基本设计规范","children":[{"level":3,"title":"所有表必须使用 InnoDB 存储引擎","slug":"所有表必须使用-innodb-存储引擎","link":"#所有表必须使用-innodb-存储引擎","children":[]},{"level":3,"title":"数据库和表的字符集统一使用 UTF8","slug":"数据库和表的字符集统一使用-utf8","link":"#数据库和表的字符集统一使用-utf8","children":[]},{"level":3,"title":"所有表和字段都需要添加注释","slug":"所有表和字段都需要添加注释","link":"#所有表和字段都需要添加注释","children":[]},{"level":3,"title":"尽量控制单表数据量的大小，建议控制在 500 万以内","slug":"尽量控制单表数据量的大小-建议控制在-500-万以内","link":"#尽量控制单表数据量的大小-建议控制在-500-万以内","children":[]},{"level":3,"title":"谨慎使用 MySQL 分区表","slug":"谨慎使用-mysql-分区表","link":"#谨慎使用-mysql-分区表","children":[]},{"level":3,"title":"经常一起使用的列放到一个表中","slug":"经常一起使用的列放到一个表中","link":"#经常一起使用的列放到一个表中","children":[]},{"level":3,"title":"禁止在表中建立预留字段","slug":"禁止在表中建立预留字段","link":"#禁止在表中建立预留字段","children":[]},{"level":3,"title":"禁止在数据库中存储文件（比如图片）这类大的二进制数据","slug":"禁止在数据库中存储文件-比如图片-这类大的二进制数据","link":"#禁止在数据库中存储文件-比如图片-这类大的二进制数据","children":[]},{"level":3,"title":"不要被数据库范式所束缚","slug":"不要被数据库范式所束缚","link":"#不要被数据库范式所束缚","children":[]},{"level":3,"title":"禁止在线上做数据库压力测试","slug":"禁止在线上做数据库压力测试","link":"#禁止在线上做数据库压力测试","children":[]},{"level":3,"title":"禁止从开发环境,测试环境直接连接生产环境数据库","slug":"禁止从开发环境-测试环境直接连接生产环境数据库","link":"#禁止从开发环境-测试环境直接连接生产环境数据库","children":[]}]},{"level":2,"title":"数据库字段设计规范","slug":"数据库字段设计规范","link":"#数据库字段设计规范","children":[{"level":3,"title":"优先选择符合存储需要的最小的数据类型","slug":"优先选择符合存储需要的最小的数据类型","link":"#优先选择符合存储需要的最小的数据类型","children":[]},{"level":3,"title":"避免使用 TEXT,BLOB 数据类型，最常见的 TEXT 类型可以存储 64k 的数据","slug":"避免使用-text-blob-数据类型-最常见的-text-类型可以存储-64k-的数据","link":"#避免使用-text-blob-数据类型-最常见的-text-类型可以存储-64k-的数据","children":[]},{"level":3,"title":"避免使用 ENUM 类型","slug":"避免使用-enum-类型","link":"#避免使用-enum-类型","children":[]},{"level":3,"title":"尽可能把所有列定义为 NOT NULL","slug":"尽可能把所有列定义为-not-null","link":"#尽可能把所有列定义为-not-null","children":[]},{"level":3,"title":"使用 TIMESTAMP(4 个字节) 或 DATETIME 类型 (8 个字节) 存储时间","slug":"使用-timestamp-4-个字节-或-datetime-类型-8-个字节-存储时间","link":"#使用-timestamp-4-个字节-或-datetime-类型-8-个字节-存储时间","children":[]},{"level":3,"title":"同财务相关的金额类数据必须使用 decimal 类型","slug":"同财务相关的金额类数据必须使用-decimal-类型","link":"#同财务相关的金额类数据必须使用-decimal-类型","children":[]},{"level":3,"title":"单表不要包含过多字段","slug":"单表不要包含过多字段","link":"#单表不要包含过多字段","children":[]}]},{"level":2,"title":"索引设计规范","slug":"索引设计规范","link":"#索引设计规范","children":[{"level":3,"title":"限制每张表上的索引数量,建议单张表索引不超过 5 个","slug":"限制每张表上的索引数量-建议单张表索引不超过-5-个","link":"#限制每张表上的索引数量-建议单张表索引不超过-5-个","children":[]},{"level":3,"title":"禁止使用全文索引","slug":"禁止使用全文索引","link":"#禁止使用全文索引","children":[]},{"level":3,"title":"禁止给表中的每一列都建立单独的索引","slug":"禁止给表中的每一列都建立单独的索引","link":"#禁止给表中的每一列都建立单独的索引","children":[]},{"level":3,"title":"每个 InnoDB 表必须有个主键","slug":"每个-innodb-表必须有个主键","link":"#每个-innodb-表必须有个主键","children":[]},{"level":3,"title":"常见索引列建议","slug":"常见索引列建议","link":"#常见索引列建议","children":[]},{"level":3,"title":"如何选择索引列的顺序","slug":"如何选择索引列的顺序","link":"#如何选择索引列的顺序","children":[]},{"level":3,"title":"避免建立冗余索引和重复索引（增加了查询优化器生成执行计划的时间）","slug":"避免建立冗余索引和重复索引-增加了查询优化器生成执行计划的时间","link":"#避免建立冗余索引和重复索引-增加了查询优化器生成执行计划的时间","children":[]},{"level":3,"title":"对于频繁的查询优先考虑使用覆盖索引","slug":"对于频繁的查询优先考虑使用覆盖索引","link":"#对于频繁的查询优先考虑使用覆盖索引","children":[]},{"level":3,"title":"索引 SET 规范","slug":"索引-set-规范","link":"#索引-set-规范","children":[]}]},{"level":2,"title":"数据库 SQL 开发规范","slug":"数据库-sql-开发规范","link":"#数据库-sql-开发规范","children":[{"level":3,"title":"优化对性能影响较大的 SQL 语句","slug":"优化对性能影响较大的-sql-语句","link":"#优化对性能影响较大的-sql-语句","children":[]},{"level":3,"title":"充分利用表上已经存在的索引","slug":"充分利用表上已经存在的索引","link":"#充分利用表上已经存在的索引","children":[]},{"level":3,"title":"禁止使用 SELECT * 必须使用 SELECT <字段列表> 查询","slug":"禁止使用-select-必须使用-select-字段列表-查询","link":"#禁止使用-select-必须使用-select-字段列表-查询","children":[]},{"level":3,"title":"禁止使用不含字段列表的 INSERT 语句","slug":"禁止使用不含字段列表的-insert-语句","link":"#禁止使用不含字段列表的-insert-语句","children":[]},{"level":3,"title":"建议使用预编译语句进行数据库操作","slug":"建议使用预编译语句进行数据库操作","link":"#建议使用预编译语句进行数据库操作","children":[]},{"level":3,"title":"避免数据类型的隐式转换","slug":"避免数据类型的隐式转换","link":"#避免数据类型的隐式转换","children":[]},{"level":3,"title":"避免使用子查询，可以把子查询优化为 join 操作","slug":"避免使用子查询-可以把子查询优化为-join-操作","link":"#避免使用子查询-可以把子查询优化为-join-操作","children":[]},{"level":3,"title":"避免使用 JOIN 关联太多的表","slug":"避免使用-join-关联太多的表","link":"#避免使用-join-关联太多的表","children":[]},{"level":3,"title":"减少同数据库的交互次数","slug":"减少同数据库的交互次数","link":"#减少同数据库的交互次数","children":[]},{"level":3,"title":"对应同一列进行 or 判断时，使用 in 代替 or","slug":"对应同一列进行-or-判断时-使用-in-代替-or","link":"#对应同一列进行-or-判断时-使用-in-代替-or","children":[]},{"level":3,"title":"禁止使用 order by rand() 进行随机排序","slug":"禁止使用-order-by-rand-进行随机排序","link":"#禁止使用-order-by-rand-进行随机排序","children":[]},{"level":3,"title":"WHERE 从句中禁止对列进行函数转换和计算","slug":"where-从句中禁止对列进行函数转换和计算","link":"#where-从句中禁止对列进行函数转换和计算","children":[]},{"level":3,"title":"在明显不会有重复值时使用 UNION ALL 而不是 UNION","slug":"在明显不会有重复值时使用-union-all-而不是-union","link":"#在明显不会有重复值时使用-union-all-而不是-union","children":[]},{"level":3,"title":"拆分复杂的大 SQL 为多个小 SQL","slug":"拆分复杂的大-sql-为多个小-sql","link":"#拆分复杂的大-sql-为多个小-sql","children":[]},{"level":3,"title":"程序连接不同的数据库使用不同的账号，禁止跨库查询","slug":"程序连接不同的数据库使用不同的账号-禁止跨库查询","link":"#程序连接不同的数据库使用不同的账号-禁止跨库查询","children":[]}]},{"level":2,"title":"数据库操作行为规范","slug":"数据库操作行为规范","link":"#数据库操作行为规范","children":[{"level":3,"title":"超 100 万行的批量写 (UPDATE,DELETE,INSERT) 操作,要分批多次进行操作","slug":"超-100-万行的批量写-update-delete-insert-操作-要分批多次进行操作","link":"#超-100-万行的批量写-update-delete-insert-操作-要分批多次进行操作","children":[]},{"level":3,"title":"对于大表使用 pt-online-schema-change 修改表结构","slug":"对于大表使用-pt-online-schema-change-修改表结构","link":"#对于大表使用-pt-online-schema-change-修改表结构","children":[]},{"level":3,"title":"禁止为程序使用的账号赋予 super 权限","slug":"禁止为程序使用的账号赋予-super-权限","link":"#禁止为程序使用的账号赋予-super-权限","children":[]},{"level":3,"title":"对于程序连接数据库账号,遵循权限最小原则","slug":"对于程序连接数据库账号-遵循权限最小原则","link":"#对于程序连接数据库账号-遵循权限最小原则","children":[]}]}],"git":{"createdTime":1695266837000,"updatedTime":1695266837000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":17.62,"words":5286},"filePathRelative":"database/mysql/mysql-high-performance-optimization-specification-recommendations.md","localizedDate":"2023年9月21日","autoDesc":true}');export{l as data};
