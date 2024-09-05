import{_ as h,r as i,o as u,c,b as n,e as t,d as e,a as l,w as m}from"./app-DO_NcI_B.js";const x={},b={href:"http://t1.id",target:"_blank",rel:"noopener noreferrer"},f={href:"http://t2.id",target:"_blank",rel:"noopener noreferrer"},_={href:"http://t1.name",target:"_blank",rel:"noopener noreferrer"},g={href:"http://t1.id",target:"_blank",rel:"noopener noreferrer"},L={href:"http://t2.id",target:"_blank",rel:"noopener noreferrer"},k={href:"http://t1.name",target:"_blank",rel:"noopener noreferrer"},y={href:"http://t1.id",target:"_blank",rel:"noopener noreferrer"},v={href:"http://t2.id",target:"_blank",rel:"noopener noreferrer"},N={id:"_3-【强制】不要用-resultclass-当返回参数-即使所有类属性名与数据库字段一一对应-也需要定义-反过来-每一个表也必然有一个与之对应。",tabindex:"-1"},q={class:"header-anchor",href:"#_3-【强制】不要用-resultclass-当返回参数-即使所有类属性名与数据库字段一一对应-也需要定义-反过来-每一个表也必然有一个与之对应。"},E={id:"_10-【参考】中的-comparevalue-是与属性值对比的常量-一般是数字-表示相等时带上此条件-表示不为空且不为-null-时执行-表示不为-null-值时执行。",tabindex:"-1"},U={class:"header-anchor",href:"#_10-【参考】中的-comparevalue-是与属性值对比的常量-一般是数字-表示相等时带上此条件-表示不为空且不为-null-时执行-表示不为-null-值时执行。"};function S(T,a){const r=i("resultMap"),s=i("ExternalLinkIcon"),d=i("isEqual"),o=i("isNotEmpty"),p=i("isNotNull");return u(),c("div",null,[a[34]||(a[34]=n("h2",{id:"一-建表规约",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-建表规约"},[n("span",null,"(一) 建表规约")])],-1)),a[35]||(a[35]=n("h4",{id:"_1-【强制】表达是与否概念的字段-必须使用-is-xxx-的方式命名-数据类型是-unsigned-tinyint-1-表示是-0-表示否-。",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-【强制】表达是与否概念的字段-必须使用-is-xxx-的方式命名-数据类型是-unsigned-tinyint-1-表示是-0-表示否-。"},[n("span",null,"1.【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。")])],-1)),n("p",null,[a[0]||(a[0]=t("注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在")),e(r),a[1]||(a[1]=t("设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取值含义与取值范围。"))]),a[36]||(a[36]=l('<ul><li>说明：任何字段如果为非负数，必须是 unsigned。</li><li>正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。</li></ul><h4 id="_2-【强制】表名、字段名必须使用小写字母或数字-禁止出现数字开头禁止两个下划线中间只出现数字。数据库字段名的修改代价很大-因为无法进行预发布-所以字段名称需要慎重考虑。" tabindex="-1"><a class="header-anchor" href="#_2-【强制】表名、字段名必须使用小写字母或数字-禁止出现数字开头禁止两个下划线中间只出现数字。数据库字段名的修改代价很大-因为无法进行预发布-所以字段名称需要慎重考虑。"><span>2.【强制】表名、字段名必须使用小写字母或数字，禁止出现数字开头禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。</span></a></h4><p>说明：MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。</p><ul><li>正例：aliyun_admin，rdc_config，level3_name</li><li>反例：AliyunAdmin，rdcConfig，level_3_name</li></ul><h4 id="_3-【强制】表名不使用复数名词。" tabindex="-1"><a class="header-anchor" href="#_3-【强制】表名不使用复数名词。"><span>3.【强制】表名不使用复数名词。</span></a></h4><p>说明：表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数形式，符合表达习惯。</p><h4 id="_4-【强制】禁用保留字-如-desc、range、match、delayed-等-请参考-mysql-官方保留字。" tabindex="-1"><a class="header-anchor" href="#_4-【强制】禁用保留字-如-desc、range、match、delayed-等-请参考-mysql-官方保留字。"><span>4.【强制】禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。</span></a></h4><h4 id="_5-【强制】主键索引名为-pk-字段名-唯一索引名为-uk-字段名-普通索引名则为-idx-字段名。" tabindex="-1"><a class="header-anchor" href="#_5-【强制】主键索引名为-pk-字段名-唯一索引名为-uk-字段名-普通索引名则为-idx-字段名。"><span>5.【强制】主键索引名为 pk_字段名；唯一索引名为 uk_字段名；普通索引名则为 idx_字段名。</span></a></h4><p>说明：pk_即 primary key；uk_即 unique key；idx_即 index 的简称。</p><h4 id="_6-【强制】小数类型为-decimal-禁止使用-float-和-double。" tabindex="-1"><a class="header-anchor" href="#_6-【强制】小数类型为-decimal-禁止使用-float-和-double。"><span>6.【强制】小数类型为 decimal，禁止使用 float 和 double。</span></a></h4><p>说明：在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。</p><h4 id="_7-【强制】如果存储的字符串长度几乎相等-使用-char-定长字符串类型。" tabindex="-1"><a class="header-anchor" href="#_7-【强制】如果存储的字符串长度几乎相等-使用-char-定长字符串类型。"><span>7.【强制】如果存储的字符串长度几乎相等，使用 char 定长字符串类型。</span></a></h4><h4 id="_8-【强制】varchar-是可变长字符串-不预先分配存储空间-长度不要超过-5000-如果存储长度大于此值-定义字段类型为-text-独立出来一张表-用主键来对应-避免影响其它字段索引率。" tabindex="-1"><a class="header-anchor" href="#_8-【强制】varchar-是可变长字符串-不预先分配存储空间-长度不要超过-5000-如果存储长度大于此值-定义字段类型为-text-独立出来一张表-用主键来对应-避免影响其它字段索引率。"><span>8.【强制】varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引率。</span></a></h4><h4 id="_9-【强制】表必备三字段-id-create-time-update-time。" tabindex="-1"><a class="header-anchor" href="#_9-【强制】表必备三字段-id-create-time-update-time。"><span>9.【强制】表必备三字段：id，create_time，update_time。</span></a></h4><p>说明：其中 id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。create_time，update_time 的类型均为datetime 类型，如果要记录时区信息，那么类型设置为 timestamp。</p><h4 id="_10-【强制】在数据库中不能使用物理删除操作-要使用逻辑删除。" tabindex="-1"><a class="header-anchor" href="#_10-【强制】在数据库中不能使用物理删除操作-要使用逻辑删除。"><span>10.【强制】在数据库中不能使用物理删除操作，要使用逻辑删除。</span></a></h4><p>说明：逻辑删除在数据删除后可以追溯到行为操作。不过会使得一些情况下的唯一主键变得不唯一，需要根据情况来酌情解决。</p><h4 id="_11-【推荐】表的命名最好是遵循-业务名称-表的作用-。-正例-alipay-task-force-project-trade-config-tes-question" tabindex="-1"><a class="header-anchor" href="#_11-【推荐】表的命名最好是遵循-业务名称-表的作用-。-正例-alipay-task-force-project-trade-config-tes-question"><span>11.【推荐】表的命名最好是遵循“业务名称_表的作用”。 正例：alipay_task / force_project / trade_config / tes_question</span></a></h4><h4 id="_12-【推荐】库名与应用名称尽量一致。" tabindex="-1"><a class="header-anchor" href="#_12-【推荐】库名与应用名称尽量一致。"><span>12.【推荐】库名与应用名称尽量一致。</span></a></h4><h4 id="_13-【推荐】如果修改字段含义或对字段表示的状态追加时-需要及时更新字段注释。" tabindex="-1"><a class="header-anchor" href="#_13-【推荐】如果修改字段含义或对字段表示的状态追加时-需要及时更新字段注释。"><span>13.【推荐】如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。</span></a></h4><h4 id="_14-【推荐】字段允许适当冗余-以提高查询性能-但必须考虑数据一致。冗余字段应遵循" tabindex="-1"><a class="header-anchor" href="#_14-【推荐】字段允许适当冗余-以提高查询性能-但必须考虑数据一致。冗余字段应遵循"><span>14.【推荐】字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循：</span></a></h4><ul><li>1）不是频繁修改的字段。</li><li>2）不是唯一索引的字段。</li><li>3）不是 varchar 超长字段，更不能是 text 字段。<br> 正例：各业务线经常冗余存储商品名称，避免查询时需要调用 IC 服务获取。</li></ul><h4 id="_15-【推荐】单表行数超过-500-万行或者单表容量超过-2gb-才推荐进行分库分表。" tabindex="-1"><a class="header-anchor" href="#_15-【推荐】单表行数超过-500-万行或者单表容量超过-2gb-才推荐进行分库分表。"><span>15.【推荐】单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。</span></a></h4><p>说明：如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。</p><h4 id="_16-【参考】合适的字符存储长度-不但节约数据库表空间、节约索引存储-更重要的是提升检索速度。" tabindex="-1"><a class="header-anchor" href="#_16-【参考】合适的字符存储长度-不但节约数据库表空间、节约索引存储-更重要的是提升检索速度。"><span>16.【参考】合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。</span></a></h4><p>正例：无符号值可以避免误存负数，且扩大了表示范围：</p><table><thead><tr><th>对象</th><th>年龄区间</th><th>类型</th><th>字节</th><th>表示范围</th></tr></thead><tbody><tr><td>人</td><td>150 岁之内</td><td>tinyint unsigned</td><td>1</td><td>无符号值：0 到 255</td></tr><tr><td>龟</td><td>数百岁</td><td>smallint unsigned</td><td>2</td><td>无符号值：0 到 65535</td></tr><tr><td>恐龙化石</td><td>数千万年</td><td>int unsigned</td><td>4</td><td>无符号值：0 到约 43 亿</td></tr><tr><td>太阳</td><td>约 50 亿年</td><td>bigint unsigned</td><td>8</td><td>无符号值：0 到约 10 的 19 次方</td></tr></tbody></table><h2 id="二-索引规约" tabindex="-1"><a class="header-anchor" href="#二-索引规约"><span>(二) 索引规约</span></a></h2><h4 id="_1-【强制】业务上具有唯一特性的字段-即使是组合字段-也必须建成唯一索引。" tabindex="-1"><a class="header-anchor" href="#_1-【强制】业务上具有唯一特性的字段-即使是组合字段-也必须建成唯一索引。"><span>1.【强制】业务上具有唯一特性的字段，即使是组合字段，也必须建成唯一索引。</span></a></h4><p>说明：不要以为唯一索引影响了 insert 速度，这个速度损耗可以忽略，但提高查找速度是明显的；另外，即使在应用层做了非常完善的校验控制，只要没有唯一索引，根据墨菲定律，必然有脏数据产生。</p><h4 id="_2-【强制】超过三个表禁止-join。需要-join-的字段-数据类型保持绝对一致-多表关联查询时-保证被关联的字段需要有索引。" tabindex="-1"><a class="header-anchor" href="#_2-【强制】超过三个表禁止-join。需要-join-的字段-数据类型保持绝对一致-多表关联查询时-保证被关联的字段需要有索引。"><span>2.【强制】超过三个表禁止 join。需要 join 的字段，数据类型保持绝对一致；多表关联查询时，保证被关联的字段需要有索引。</span></a></h4><p>说明：即使双表 join 也要注意表索引、SQL 性能。</p><h4 id="_3-【强制】在-varchar-字段上建立索引时-必须指定索引长度-没必要对全字段建立索引-根据实际文本区分度决定索引长度。" tabindex="-1"><a class="header-anchor" href="#_3-【强制】在-varchar-字段上建立索引时-必须指定索引长度-没必要对全字段建立索引-根据实际文本区分度决定索引长度。"><span>3.【强制】在 varchar 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度。</span></a></h4><p>说明：索引的长度与区分度是一对矛盾体，一般对字符串类型数据，长度为 20 的索引，区分度会高达 90%以上，可以使用 count(distinct left(列名，索引长度)) / count(*) 的区分度来确定。</p><h4 id="_4-【强制】页面搜索严禁左模糊或者全模糊-如果需要请走搜索引擎来解决。" tabindex="-1"><a class="header-anchor" href="#_4-【强制】页面搜索严禁左模糊或者全模糊-如果需要请走搜索引擎来解决。"><span>4.【强制】页面搜索严禁左模糊或者全模糊，如果需要请走搜索引擎来解决。</span></a></h4><p>说明：索引文件具有 B-Tree 的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引。</p><h4 id="_5-【推荐】如果有-order-by-的场景-请注意利用索引的有序性。order-by-最后的字段是组合索引的一部分-并且放在索引组合顺序的最后-避免出现-filesort-的情况-影响查询性能。" tabindex="-1"><a class="header-anchor" href="#_5-【推荐】如果有-order-by-的场景-请注意利用索引的有序性。order-by-最后的字段是组合索引的一部分-并且放在索引组合顺序的最后-避免出现-filesort-的情况-影响查询性能。"><span>5.【推荐】如果有 order by 的场景，请注意利用索引的有序性。order by 最后的字段是组合索引的一部分，并且放在索引组合顺序的最后，避免出现 filesort 的情况，影响查询性能。</span></a></h4><ul><li>正例：where a = ? and b = ? order by c；索引：a_b_c</li><li>反例：索引如果存在范围查询，那么索引有序性无法利用，如：WHERE a &gt; 10 ORDER BY b；索引 a_b 无法排序。</li></ul><h4 id="_6-【推荐】利用覆盖索引来进行查询操作-避免回表。" tabindex="-1"><a class="header-anchor" href="#_6-【推荐】利用覆盖索引来进行查询操作-避免回表。"><span>6.【推荐】利用覆盖索引来进行查询操作，避免回表。</span></a></h4><p>说明：如果一本书需要知道第 11 章是什么标题，会翻开第 11 章对应的那一页吗？目录浏览一下就好，这个目录就是起到覆盖索引的作用。<br> 正例：能够建立索引的种类分为主键索引、唯一索引、普通索引三种，而覆盖索引只是一种查询的一种效果，用 explain 的结果，extra 列会出现：using index。</p><h4 id="_7-【推荐】利用延迟关联或者子查询优化超多分页场景。" tabindex="-1"><a class="header-anchor" href="#_7-【推荐】利用延迟关联或者子查询优化超多分页场景。"><span>7.【推荐】利用延迟关联或者子查询优化超多分页场景。</span></a></h4><p>说明：MySQL 并不是跳过 offset 行，而是取 offset+N 行，然后返回放弃前 offset 行，返回 N 行，那当 offset 特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行 SQL 改写。</p><p>正例：先快速定位需要获取的 id 段，然后再关联：</p>',43)),n("p",null,[a[4]||(a[4]=t("SELECT t1.* FROM 表 1 as t1 , (select id from 表 1 where 条件 LIMIT 100000 , 20) as t2 where ")),n("a",b,[a[2]||(a[2]=t("t1.id")),e(s)]),a[5]||(a[5]=t(" = ")),n("a",f,[a[3]||(a[3]=t("t2.id")),e(s)])]),a[37]||(a[37]=l('<h4 id="_8-【推荐】sql-性能优化的目标-至少要达到-range-级别-要求是-ref-级别-如果可以是-const-最好。" tabindex="-1"><a class="header-anchor" href="#_8-【推荐】sql-性能优化的目标-至少要达到-range-级别-要求是-ref-级别-如果可以是-const-最好。"><span>8.【推荐】SQL 性能优化的目标：至少要达到 range 级别，要求是 ref 级别，如果可以是 const 最好。</span></a></h4><p>说明：</p><ul><li>1）consts 单表中最多只有一个匹配行（主键或者唯一索引），在优化阶段即可读取到数据。</li><li>2）ref 指的是使用普通的索引（normal index）。</li><li>3）range 对索引进行范围检索。<br> 反例：explain 表的结果，type = index，索引物理文件全扫描，速度非常慢，这个 index 级别比较 range 还低，与全表扫描是小巫见大巫。</li></ul><h4 id="_9-【推荐】建组合索引的时候-区分度最高的在最左边。" tabindex="-1"><a class="header-anchor" href="#_9-【推荐】建组合索引的时候-区分度最高的在最左边。"><span>9.【推荐】建组合索引的时候，区分度最高的在最左边。</span></a></h4><p>正例：如果 where a = ? and b = ?，a 列的几乎接近于唯一值，那么只需要单建 idx_a 索引即可。</p><p>说明：存在非等号和等号混合判断条件时，在建索引时，请把等号条件的列前置。如：where c &gt; ? and d = ? 那么即使 c 的区分度更高，也必须把 d 放在索引的最前列，即建立组合索引 idx_d_c。</p><h4 id="_10-【推荐】防止因字段类型不同造成的隐式转换-导致索引失效。" tabindex="-1"><a class="header-anchor" href="#_10-【推荐】防止因字段类型不同造成的隐式转换-导致索引失效。"><span>10.【推荐】防止因字段类型不同造成的隐式转换，导致索引失效。</span></a></h4><h4 id="_11-【参考】创建索引时避免有如下极端误解" tabindex="-1"><a class="header-anchor" href="#_11-【参考】创建索引时避免有如下极端误解"><span>11.【参考】创建索引时避免有如下极端误解：</span></a></h4><ul><li>1）索引宁滥勿缺。认为一个查询就需要建一个索引。</li><li>2）吝啬索引的创建。认为索引会消耗空间、严重拖慢记录的更新以及行的新增速度。</li><li>3）抵制唯一索引。认为唯一索引一律需要在应用层通过“先查后插”方式解决。</li></ul><h2 id="三-sql-语句" tabindex="-1"><a class="header-anchor" href="#三-sql-语句"><span>(三) SQL 语句</span></a></h2><h4 id="_1-【强制】不要使用-count-列名-或-count-常量-来替代-count-count-是-sql92-定义的标准统计行数的语法-跟数据库无关-跟-null-和非-null-无关。" tabindex="-1"><a class="header-anchor" href="#_1-【强制】不要使用-count-列名-或-count-常量-来替代-count-count-是-sql92-定义的标准统计行数的语法-跟数据库无关-跟-null-和非-null-无关。"><span>1.【强制】不要使用 count(列名) 或 count(常量) 来替代 count(<em>)，count(</em>) 是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。</span></a></h4><p>说明：count(*) 会统计值为 NULL 的行，而 count(列名) 不会统计此列为 NULL 值的行。</p><h4 id="_2-【强制】count-distinct-col-计算该列除-null-之外的不重复行数-注意-count-distinct-col1-col2-如果其中一列全为-null-那么即使另一列有不同的值-也返回为-0。" tabindex="-1"><a class="header-anchor" href="#_2-【强制】count-distinct-col-计算该列除-null-之外的不重复行数-注意-count-distinct-col1-col2-如果其中一列全为-null-那么即使另一列有不同的值-也返回为-0。"><span>2.【强制】count(distinct col) 计算该列除 NULL 之外的不重复行数，注意 count(distinct col1 , col2) 如果其中一列全为 NULL，那么即使另一列有不同的值，也返回为 0。</span></a></h4><h4 id="_3-【强制】当某一列的值全是-null-时-count-col-的返回结果为-0-但-sum-col-的返回结果为-null-因此使用-sum-时需注意-npe-问题。" tabindex="-1"><a class="header-anchor" href="#_3-【强制】当某一列的值全是-null-时-count-col-的返回结果为-0-但-sum-col-的返回结果为-null-因此使用-sum-时需注意-npe-问题。"><span>3.【强制】当某一列的值全是 NULL 时，count(col) 的返回结果为 0；但 sum(col) 的返回结果为 NULL，因此使用 sum() 时需注意 NPE 问题。</span></a></h4><p>正例：可以使用如下方式来避免 sum 的 NPE 问题：SELECT IFNULL(SUM(column) , 0) FROM table;</p><h4 id="_4-【强制】使用-isnull-来判断是否为-null-值。" tabindex="-1"><a class="header-anchor" href="#_4-【强制】使用-isnull-来判断是否为-null-值。"><span>4.【强制】使用 ISNULL() 来判断是否为 NULL 值。</span></a></h4><p>说明：NULL 与任何值的直接比较都为 NULL。</p><ul><li>1）NULL&lt;&gt;NULL 的返回结果是 NULL，而不是 false。</li><li>2）NULL=NULL 的返回结果是 NULL，而不是 true。</li><li>3）NULL&lt;&gt;1 的返回结果是 NULL，而不是 true。<br> 反例：在 SQL 语句中，如果在 null 前换行，影响可读性。</li></ul><p>select * from table where column1 is null and column3 is not null；而 ISNULL(column) 是一个整体，简洁易懂。从性能数据上分析，ISNULL(column) 执行效率更快一些。</p><h4 id="_5-【强制】代码中写分页查询逻辑时-若-count-为-0-应直接返回-避免执行后面的分页语句。" tabindex="-1"><a class="header-anchor" href="#_5-【强制】代码中写分页查询逻辑时-若-count-为-0-应直接返回-避免执行后面的分页语句。"><span>5.【强制】代码中写分页查询逻辑时，若 count 为 0 应直接返回，避免执行后面的分页语句。</span></a></h4><h4 id="_6-【强制】不得使用外键与级联-一切外键概念必须在应用层解决。" tabindex="-1"><a class="header-anchor" href="#_6-【强制】不得使用外键与级联-一切外键概念必须在应用层解决。"><span>6.【强制】不得使用外键与级联，一切外键概念必须在应用层解决。</span></a></h4><p>说明：（概念解释）学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度。</p><h4 id="_7-【强制】禁止使用存储过程-存储过程难以调试和扩展-更没有移植性。" tabindex="-1"><a class="header-anchor" href="#_7-【强制】禁止使用存储过程-存储过程难以调试和扩展-更没有移植性。"><span>7.【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。</span></a></h4><h4 id="_8-【强制】数据订正-特别是删除或修改记录操作-时-要先-select-避免出现误删除的情况-确认无误才能执行更新语句。" tabindex="-1"><a class="header-anchor" href="#_8-【强制】数据订正-特别是删除或修改记录操作-时-要先-select-避免出现误删除的情况-确认无误才能执行更新语句。"><span>8.【强制】数据订正（特别是删除或修改记录操作）时，要先 select，避免出现误删除的情况，确认无误才能执行更新语句。</span></a></h4><h4 id="_9-【强制】对于数据库中表记录的查询和变更-只要涉及多个表-都需要在列名前加表的别名-或表名-进行限定。" tabindex="-1"><a class="header-anchor" href="#_9-【强制】对于数据库中表记录的查询和变更-只要涉及多个表-都需要在列名前加表的别名-或表名-进行限定。"><span>9.【强制】对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或表名）进行限定。</span></a></h4><p>说明：对多表进行查询记录、更新记录、删除记录时，如果对操作列没有限定表的别名（或表名），并且操作列在多个表中存在时，就会抛异常。</p>',26)),n("ul",null,[n("li",null,[a[9]||(a[9]=t("正例：select ")),n("a",_,[a[6]||(a[6]=t("t1.name")),e(s)]),a[10]||(a[10]=t(" from first_table as t1 , second_table as t2 where ")),n("a",g,[a[7]||(a[7]=t("t1.id")),e(s)]),a[11]||(a[11]=t(" = ")),n("a",L,[a[8]||(a[8]=t("t2.id")),e(s)]),a[12]||(a[12]=t(";"))]),a[13]||(a[13]=n("li",null,"反例：在某业务中，由于多表关联查询语句没有加表的别名（或表名）的限制，正常运行两年后，最近在某个表中增加一个同名字段，在预发布环境做数据库变更后，线上查询语句出现出 1052 异常： Column 'name' infield list is ambiguous。",-1))]),a[38]||(a[38]=n("h4",{id:"_10-【推荐】sql-语句中表的别名前加-as-并且以-t1、t2、t3、-的顺序依次命名。",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-【推荐】sql-语句中表的别名前加-as-并且以-t1、t2、t3、-的顺序依次命名。"},[n("span",null,"10.【推荐】SQL 语句中表的别名前加 as，并且以 t1、t2、t3、...的顺序依次命名。")])],-1)),a[39]||(a[39]=n("p",null,"说明：",-1)),n("ul",null,[a[23]||(a[23]=n("li",null,"1）别名可以是表的简称，或者是依照表在 SQL 语句中出现的顺序，以 t1、t2、t3 的方式命名。",-1)),n("li",null,[a[17]||(a[17]=t("2）别名前加 as 使别名更容易识别。")),a[18]||(a[18]=n("br",null,null,-1)),a[19]||(a[19]=t(" 正例：select ")),n("a",k,[a[14]||(a[14]=t("t1.name")),e(s)]),a[20]||(a[20]=t(" from first_table as t1 , second_table as t2 where ")),n("a",y,[a[15]||(a[15]=t("t1.id")),e(s)]),a[21]||(a[21]=t(" = ")),n("a",v,[a[16]||(a[16]=t("t2.id")),e(s)]),a[22]||(a[22]=t(";"))])]),a[40]||(a[40]=l(`<h4 id="_11-【推荐】in-操作能避免则避免-若实在避免不了-需要仔细评估-in-后边的集合元素数量-控制在1000-个之内。" tabindex="-1"><a class="header-anchor" href="#_11-【推荐】in-操作能避免则避免-若实在避免不了-需要仔细评估-in-后边的集合元素数量-控制在1000-个之内。"><span>11.【推荐】in 操作能避免则避免，若实在避免不了，需要仔细评估 in 后边的集合元素数量，控制在1000 个之内。</span></a></h4><h4 id="_12-【参考】因国际化需要-所有的字符存储与表示-均采用-utf8mb4-字符集-字符计数方法需要注意。" tabindex="-1"><a class="header-anchor" href="#_12-【参考】因国际化需要-所有的字符存储与表示-均采用-utf8mb4-字符集-字符计数方法需要注意。"><span>12.【参考】因国际化需要，所有的字符存储与表示，均采用 utf8mb4 字符集，字符计数方法需要注意。</span></a></h4><p>说明：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">SELECT</span> <span class="token function">LENGTH</span><span class="token punctuation">(</span><span class="token string">&quot;轻松工作&quot;</span><span class="token punctuation">)</span>；<span class="token operator">--</span>返回为 <span class="token number">12</span>
<span class="token class-name">SELECT</span> <span class="token function">CHARACTER_LENGTH</span><span class="token punctuation">(</span><span class="token string">&quot;轻松工作&quot;</span><span class="token punctuation">)</span>；<span class="token operator">--</span>返回为 <span class="token number">4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表情需要用 utf8mb4 来进行存储，注意它与 utf8 编码的区别。</p><h4 id="_13-【参考】truncate-table-比-delete-速度快-且使用的系统和事务日志资源少-但-truncate无事务且不触发-trigger-有可能造成事故-故不建议在开发代码中使用此语句。" tabindex="-1"><a class="header-anchor" href="#_13-【参考】truncate-table-比-delete-速度快-且使用的系统和事务日志资源少-但-truncate无事务且不触发-trigger-有可能造成事故-故不建议在开发代码中使用此语句。"><span>13.【参考】TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少，但 TRUNCATE无事务且不触发 trigger，有可能造成事故，故不建议在开发代码中使用此语句。</span></a></h4><p>说明：TRUNCATE TABLE 在功能上与不带 WHERE 子句的 DELETE 语句相同。</p><h2 id="四-orm-映射" tabindex="-1"><a class="header-anchor" href="#四-orm-映射"><span>(四) ORM 映射</span></a></h2><h4 id="_1-【强制】在表查询中-一律不要使用-作为查询的字段列表-需要哪些字段必须明确写明。" tabindex="-1"><a class="header-anchor" href="#_1-【强制】在表查询中-一律不要使用-作为查询的字段列表-需要哪些字段必须明确写明。"><span>1.【强制】在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明。</span></a></h4><p>说明：</p><ul><li>1）增加查询分析器解析成本。</li><li>2）增减字段容易与 resultMap 配置不一致。</li><li>3）无用字段增加网络消耗，尤其是 text 类型的字段。</li></ul><h4 id="_2-【强制】pojo-类的布尔属性不能加-is-而数据库字段必须加-is-要求在-resultmap-中进行字段与属性之间的映射。" tabindex="-1"><a class="header-anchor" href="#_2-【强制】pojo-类的布尔属性不能加-is-而数据库字段必须加-is-要求在-resultmap-中进行字段与属性之间的映射。"><span>2.【强制】POJO 类的布尔属性不能加 is，而数据库字段必须加 is_，要求在 resultMap 中进行字段与属性之间的映射。</span></a></h4><p>说明：参见定义 POJO 类以及数据库字段定义规定，在 sql.xml 增加映射，是必须的。</p>`,13)),n("h4",N,[n("a",q,[n("span",null,[a[24]||(a[24]=t("3.【强制】不要用 resultClass 当返回参数，即使所有类属性名与数据库字段一一对应，也需要定义")),e(r),a[25]||(a[25]=t("；反过来，每一个表也必然有一个")),e(r),a[26]||(a[26]=t("与之对应。"))])])]),a[41]||(a[41]=l(`<p>说明：配置映射关系，使字段与 DO 类解耦，方便维护。</p><h4 id="_4-【强制】sql-xml-配置参数使用-param-不要使用-此种方式容易出现-sql-注入。" tabindex="-1"><a class="header-anchor" href="#_4-【强制】sql-xml-配置参数使用-param-不要使用-此种方式容易出现-sql-注入。"><span>4.【强制】sql.xml 配置参数使用：#{}，#param# 不要使用 \${} 此种方式容易出现 SQL 注入。</span></a></h4><h4 id="_5-【强制】ibatis-自带的-queryforlist-string-statementname-int-start-int-size-不推荐使用。" tabindex="-1"><a class="header-anchor" href="#_5-【强制】ibatis-自带的-queryforlist-string-statementname-int-start-int-size-不推荐使用。"><span>5.【强制】iBATIS 自带的 queryForList(String statementName，int start，int size) 不推荐使用。</span></a></h4><p>说明：其实现方式是在数据库取到 statementName 对应的 SQL 语句的所有记录，再通过 subList 取 start，size的子集合，线上因为这个原因曾经出现过 OOM。</p><p>正例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-【强制】不允许直接拿-hashmap-与-hashtable-作为查询结果集的输出。" tabindex="-1"><a class="header-anchor" href="#_6-【强制】不允许直接拿-hashmap-与-hashtable-作为查询结果集的输出。"><span>6.【强制】不允许直接拿 HashMap 与 Hashtable 作为查询结果集的输出。</span></a></h4>`,7)),n("p",null,[a[28]||(a[28]=t("反例：某同学为避免写一个")),e(r,null,{default:m(()=>a[27]||(a[27]=[t("xxx")])),_:1}),a[29]||(a[29]=t("，直接使用 Hashtable 来接收数据库返回结果，结果出现日常是把 bigint 转成 Long 值，而线上由于数据库版本不一样，解析成 BigInteger，导致线上问题。"))]),a[42]||(a[42]=l('<h4 id="_7-【强制】更新数据表记录时-必须同时更新记录对应的-update-time-字段值为当前时间。" tabindex="-1"><a class="header-anchor" href="#_7-【强制】更新数据表记录时-必须同时更新记录对应的-update-time-字段值为当前时间。"><span>7.【强制】更新数据表记录时，必须同时更新记录对应的 update_time 字段值为当前时间。</span></a></h4><h4 id="_8-【推荐】不要写一个大而全的数据更新接口。" tabindex="-1"><a class="header-anchor" href="#_8-【推荐】不要写一个大而全的数据更新接口。"><span>8.【推荐】不要写一个大而全的数据更新接口。</span></a></h4><p>传入为 POJO 类，不管是不是自己的目标更新字段，都进行update table set c1 = value1 , c2 = value2 , c3 = value3；这是不对的。执行 SQL 时，不要更新无改动的字段，一是易出错；二是效率低；三是增加 binlog 存储。</p><h4 id="_9-【参考】-transactional-事务不要滥用。事务会影响数据库的-qps-另外使用事务的地方需要考虑各方面的回滚方案-包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。" tabindex="-1"><a class="header-anchor" href="#_9-【参考】-transactional-事务不要滥用。事务会影响数据库的-qps-另外使用事务的地方需要考虑各方面的回滚方案-包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。"><span>9.【参考】@Transactional 事务不要滥用。事务会影响数据库的 QPS，另外使用事务的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。</span></a></h4>',4)),n("h4",E,[n("a",U,[n("span",null,[a[30]||(a[30]=t("10.【参考】")),e(d),a[31]||(a[31]=t("中的 compareValue 是与属性值对比的常量，一般是数字，表示相等时带上此条件；")),e(o),a[32]||(a[32]=t("表示不为空且不为 null 时执行；")),e(p),a[33]||(a[33]=t("表示不为 null 值时执行。"))])])])])}const O=h(x,[["render",S],["__file","database.html.vue"]]),M=JSON.parse('{"path":"/standard/database.html","title":"规范库表","lang":"zh-CN","frontmatter":{"title":"规范库表","icon":"laptop-code","category":["设计规范"],"tag":["规范"],"description":"(一) 建表规约 1.【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。 注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx ...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/standard/database.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"规范库表"}],["meta",{"property":"og:description","content":"(一) 建表规约 1.【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。 注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:32:25.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"规范"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:32:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"规范库表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:32:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"(一) 建表规约","slug":"一-建表规约","link":"#一-建表规约","children":[]},{"level":2,"title":"(二) 索引规约","slug":"二-索引规约","link":"#二-索引规约","children":[]},{"level":2,"title":"(三) SQL 语句","slug":"三-sql-语句","link":"#三-sql-语句","children":[]},{"level":2,"title":"(四) ORM 映射","slug":"四-orm-映射","link":"#四-orm-映射","children":[]}],"git":{"createdTime":1697616899000,"updatedTime":1713151945000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":8}]},"readingTime":{"minutes":13.36,"words":4008},"filePathRelative":"standard/database.md","localizedDate":"2023年10月18日","excerpt":"<h2>(一) 建表规约</h2>\\n<h4>1.【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。</h4>\\n<p>注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取值含义与取值范围。</p>\\n<ul>\\n<li>说明：任何字段如果为非负数，必须是 unsigned。</li>\\n<li>正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。</li>\\n</ul>","autoDesc":true}');export{O as comp,M as data};
