---
title: 设计数据库索引
icon: laptop-code
category:
  - 设计高频
tag:
  - 高频
---

## 简介

建立最优的数据库索引是提升数据库查询性能的重要手段。在某种意义上，索引就是磁盘记录在内存中的缓存。索引要做的事情，就是快速找到匹配条件的记录行，并尽可能减少磁盘读写次数。本文总结数据库索引相关的知识及实践。


## 基本知识
InnoDB 里表数据是按照主键顺序存放的。InnoDB 会按照表定义的第一个非空索引（按索引定义顺序）作为主键。 索引（在 MySQL 中）是由存储引擎实现的。索引类型主要有顺序索引和哈希索引。顺序索引的底层结构是 B+Tree ，哈希索引的底层结构是哈希表。

索引是以空间换时间，减少了要扫描的数据量、避免排序、将随机IO变成顺序IO。使用索引的代价是：空间占用更大、插入和更新成本更大。顺序索引可支持：全值匹配、最左顺序匹配、列前缀匹配、范围匹配、精确匹配数列并范围匹配一列、只访问索引的查询、索引扫描排序。哈希索引可支持：全值匹配。


#### 顺序索引

InnoDB 的顺序索引是将主键列表构建成一棵 B+ 树。内节点存放的是均是主键值，叶子节点存放的是整张表的行数据。这样，可以让节点尽可能存放更多的主键值，从而降低树的高度。B+ 树是有序查找平衡树，高度通常在 2-4 之间，因为要尽可能减少磁盘读写次数。B+ 树的插入操作在节点关键数满的情况下，会分裂成两个子节点。理解 B+ 树对于理解顺序索引非常关键。

顺序索引可以分为聚簇索引和非聚簇索引。

聚簇索引：在叶子节点中保存了 B-Tree 索引和数据行。将索引列放在内节点上，而将行数据放在叶子节点上。聚簇索引可以极大提升 IO 密集型的性能。一个表只能有一个聚簇索引，通常用主键列。聚簇索引的最优插入顺序是按照主键值顺序插入。如果是随机插入，更新聚簇索引的代价较高：更多的查找操作、频繁的“页分裂”、移动大量数据、产生碎片。
非聚簇索引：非聚簇索引的内节点存放的是非聚簇索引列的值，叶子节点存储的是对应数据行的主键值。因此，根据非聚簇索引需要两次索引查找。先从叶子节点找到主键值，再根据主键值在聚簇索引里找到数据行。非聚簇索引因为不存储数据行的信息，因此占用空间会比聚簇索引更小。

#### 哈希索引

使用哈希原理实现，性能很高，只能等值匹配，按索引整列匹配、不支持范围查找、不能用于排序。哈希函数可以选择 crc32 或者 md5 的一部分。哈希索引要避免大量冲突同时不占用过多空间。哈希索引的选择性取决于该列哈希列值的冲突度。Memory 引擎支持哈希索引，也支持 B+Tree 索引。可以为较长的字符串（比如 URL）创建哈希索引，在条件中必须同时带上哈希值条件和列值条件。where url = xxx and hashed_url = yyy 。

InnoDB 为某些非常频繁的索引值在 B+ 上在内存中再创建一个哈希索引，称为自适应哈希索引。


## 开发事项
#### 适合做索引的列

选择性高原则。如果所有行在该列上的“不重复值数量/所有值数量”的比率越高，则选择性越高，越适合做索引。列的选择性：count(distinct(col)) / count(col) 。唯一索引的选择性是 1。使用 show index from tablename ，Cardinality 的值展示了索引列的不重复值的预估值。可以用来判断这个索引是否合适。如果 Cardinality 的值接近于表的记录总数，则是选择性高的。

注意，在单列索引的时候，这个值对应指定索引列的 Cardinality 值，而在联合索引中，这个值对应联合列的 Cardinality 值。如下所示: sid_index 的值为 41659 , tid_index 的值是 101 , sid_index 的选择性高于 tid_index ； stc_id_index.t_id 的值是 3443139 ，是指 (s_id, t_id) 联合索引的值，高于 sid_index 单列索引的选择性。

如何找到高选择性的列呢？

* 定性分析：值比较倾向于唯一的，是高选择性的；而值域在某个有限集合的，是低选择性的。比如 ID 值通常是高选择性的，而 age 值则是低选择性的。
* 测量分析：使用 count(distinct(col)) / count(col) 来计算，值越接近于 1 的是高选择性的。测量分析通常用于验证或否定。

```sql
mysql> show index from student_courses;

+-----------------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+

| Table           | Non_unique | Key_name     | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |

+-----------------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+

| student_courses |          0 | PRIMARY      |            1 | id          | A         |     7764823 |     NULL | NULL   |      | BTREE      |         |               |

| student_courses |          1 | stc_id_index |            1 | s_id        | A         |       40417 |     NULL | NULL   |      | BTREE      |         |               |

| student_courses |          1 | stc_id_index |            2 | t_id        | A         |     3443139 |     NULL | NULL   |      | BTREE      |         |               |

| student_courses |          1 | stc_id_index |            3 | c_id        | A         |     7764823 |     NULL | NULL   |      | BTREE      |         |               |

| student_courses |          1 | sid_index    |            1 | s_id        | A         |       41659 |     NULL | NULL   |      | BTREE      |         |               |

| student_courses |          1 | tid_index    |            1 | t_id        | A         |         101 |     NULL | NULL   |      | BTREE      |         |               |

+-----------------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+

6 rows in set (0.00 sec)


```


#### 构建索引

先列出所有可能的搜索语句，找到出现的列，将选择性高的列放在最左边，有范围查找的列尽可能放最右边。从左开始逐个将列添加到联合索引里，尽可能覆盖所有搜索语句。可能需要建立多个联合索引来覆盖。最后，要考虑选择语句和排序语句的列，尽可能使用索引覆盖获取列数据，使用索引扫描来排序。


#### 联合索引

联合索引也是一棵 B+ 树，关键字是一个元组。类似索引的多级搜索，逐步大幅减少需要扫描和匹配的行。联合索引搜索遵循最左匹配原则。联合索引需要建立最优索引列顺序。注意，在每个需要搜索的列上建立单列索引，不是联合索引（搜索的时候只能单列搜索后，再用到索引合并来合并结果）。

联合索引匹配遵循最左匹配原则。匹配终止条件：将搜索条件按照联合索引顺序重排列，遇到等值查询（包括 IN 查询）继续，遇到范围查询、BETWEEN、LIKE 查询则终止。无法使用索引的情况：在 where 条件中，索引列在表达式中或对索引列使用函数。

实践中，需要用相同的列但顺序不同的联合索引来满足不同的查询需求。


#### 前缀索引

为长字符串建立索引。使用指定长度的字符串的前缀来建立索引。对于 BLOB, TEXT, 很长的 VARCHAR 列，必须使用前缀索引。前缀索引要选择一个合适的长度：选择性与整列的选择性接近，同时不占用过多空间。前缀索引无法使用 GROUP BY 和 ORDER BY，无法做覆盖扫描。如果字符串后缀或某个部分的选择性更高，也可以做一些预处理转化为前缀索引。思想是相同的。

寻找前缀索引最佳长度的步骤：

* STEP1 - 先找到该列所有值的 TOPN，可以使用 count as c, col from table group by col order by c desc limit N 语句；
* STEP2 - 从一个比较合适的值（比如 3）开始，测试选择性，直到 TOPN 绝大部分列的 c 的数量与 TOPN 的 c 比较接近。


#### 覆盖索引

覆盖索引的列包含了所有需要查询的列，可以减少大量的磁盘读，大幅提升性能。如果某个列在 select cols 字句中频繁出现，也可以考虑放在联合索引里，利用覆盖索引来优化性能。延迟关联技术可以使用覆盖索引能力。


#### 索引扫描排序

只有当索引的列顺序与 ORDER BY 字句的顺序完全一致，并且所有列的排序方向都一样时，才能使用索引对结果做排序。有一个例外，就是前导列条件指定为常数。比如 (date, fans_id) 对于 where date = 'xxx' order by fans_id desc 也可以使用索引扫描排序。


#### 索引提示

可以使用 FORCE INDEX(a) 强制指定 SQL 语句要使用的索引。


#### MRR

Multi-Range Read。针对范围查询的优化。MRR 会将查询到的辅助索引键放到缓存里，然后按照主键排序（将随机 IO 转换为顺序 IO，可以减少页替换），再根据排序后主键来顺序来访问实际数据。适用于 range, ref, eq_ref 的查询。

MRR 默认开启。使用 optimizer_switch 的标记来控制是否使用MRR.设置mrr=on时，表示启用MRR优化。
SET @@optimizer_switch='mrr=on,mrr_cost_based=on';


#### “系统账号”问题

索引列的某个值出现次数非常多。应避免使用系统账号值出现在查询语句里。


## 索引实验
#### 准备工作
#### 准备表

假设有个学生选课表。如下所示：
```sql
## executed using root account
## mysql -uroot -p < /path/to/project.sql

DROP USER 'test'@'localhost';
drop database if exists test;

CREATE USER 'test'@'localhost' IDENTIFIED BY 'test';
create database test ;
grant all privileges on test.* to 'test'@'localhost' identified by 'test';

use test
drop table if exists student_courses;
create table student_courses (
    id int(10) UNSIGNED not null primary key AUTO_INCREMENT comment 'AUTO_INCREMENT ID',
    s_id varchar(64) not null comment 'student ID',
    t_id varchar(64) not null comment 'teacher ID',
    room varchar(64) not null comment 'room name',
    c_id varchar(32) not null comment 'course ID',
    c_time int(10) not null comment 'course time',
    extra varchar(256) default '' comment 'extra info',
    gmt_create datetime DEFAULT CURRENT_TIMESTAMP,
      gmt_modified datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```


#### 准备数据

写个 groovy 脚本生成 800w 条选课数据。批量插入的效率更高。单个插入，每刷新一次，几千的插入；批量插入，每刷新一次，20w 的插入。
```java
package cc.lovesq.study.data

class StudentCoursesDataGenerator {

    private static final STUDENT_PREFIX = "STU";
    private static final TEACHER_PREFIX = "TCH";
    private static final ROOM_PREFIX = "ROOM";
    private static final COURSE_PREFIX = "CRE";

    static Random random = new Random(47);
    static int THREE_MONTH = 3 * 60 * 60 * 24 * 30;

    static void main(args) {

        def filePath = "./sql/stu_courses.sql"
        File file = new File(filePath)
        def batchSize = 50

        file.withWriter { writer ->
            for (int i=0; i< 8000000/batchSize; i++) {
                def insertSql = "insert into student_courses(s_id, t_id, room, c_id, c_time) values "
                for (int j=0; j< batchSize; j++) {
                    def sId = STUDENT_PREFIX + "_" + random.nextInt(40000)
                    def tId = TEACHER_PREFIX + random.nextInt(100)
                    def room = ROOM_PREFIX + random.nextInt(50)
                    def cId = COURSE_PREFIX + random.nextInt(60)
                    def cTime = Math.floor((System.currentTimeMillis() - random.nextInt(THREE_MONTH)) / 1000)
                    insertSql += "('$sId', '$tId', '$room', '$cId', $cTime),"
                }
                insertSql = insertSql.substring(0, insertSql.length()-1) + ";\n"
                //print(insertSql)
                writer.write(insertSql)
            }
        }
    }
}

```


生成的样例数据如下：
```sql
insert into student_courses(s_id, t_id, room, c_id, c_time) values ('STU_29258', 'TCH55', 'ROOM43', 'CRE41', 1.604717694E9),('STU_429', 'TCH68', 'ROOM0', 'CRE42', 1.604714673E9),('STU_38288', 'TCH28', 'ROOM1', 'CRE49', 1.604719218E9),('STU_7278', 'TCH98', 'ROOM11', 'CRE20', 1.604712414E9),('STU_8916', 'TCH40', 'ROOM11', 'CRE42', 1.604715357E9),('STU_17383', 'TCH6', 'ROOM25', 'CRE10', 1.604718551E9),('STU_27674', 'TCH4', 'ROOM0', 'CRE6', 1.604714485E9),('STU_30896', 'TCH33', 'ROOM34', 'CRE4', 1.604716917E9),('STU_28303', 'TCH41', 'ROOM38', 'CRE52', 1.604716827E9),('STU_8689', 'TCH85', 'ROOM42', 'CRE46', 1.604713881E9),('STU_2447', 'TCH68', 'ROOM4', 'CRE35', 1.604713422E9),('STU_10354', 'TCH16', 'ROOM22', 'CRE36', 1.604713187E9),('STU_29257', 'TCH34', 'ROOM2', 'CRE17', 1.604717763E9),('STU_17242', 'TCH80', 'ROOM48', 'CRE1', 1.60471313E9),('STU_17052', 'TCH65', 'ROOM4', 'CRE9', 1.604711894E9),('STU_12209', 'TCH58', 'ROOM8', 'CRE43', 1.604712827E9),('STU_1246', 'TCH94', 'ROOM20', 'CRE4', 1.604715802E9),('STU_33533', 'TCH61', 'ROOM8', 'CRE8', 1.604718404E9),('STU_14367', 'TCH79', 'ROOM5', 'CRE42', 1.604714165E9),('STU_28037', 'TCH99', 'ROOM21', 'CRE13', 1.604718321E9),('STU_31909', 'TCH28', 'ROOM3', 'CRE36', 1.604718883E9),('STU_16994', 'TCH1', 'ROOM19', 'CRE3', 1.604719329E9),('STU_25382', 'TCH34', 'ROOM12', 'CRE26', 1.604714293E9),('STU_21718', 'TCH55', 'ROOM15', 'CRE40', 1.604715585E9),('STU_36228', 'TCH17', 'ROOM1', 'CRE17', 1.604716797E9),('STU_24146', 'TCH62', 'ROOM2', 'CRE12', 1.604714202E9),('STU_36499', 'TCH11', 'ROOM42', 'CRE14', 1.604718307E9),('STU_30843', 'TCH16', 'ROOM35', 'CRE6', 1.604717656E9),('STU_32930', 'TCH15', 'ROOM23', 'CRE33', 1.604718313E9),('STU_12921', 'TCH3', 'ROOM13', 'CRE35', 1.604711955E9),('STU_16669', 'TCH83', 'ROOM20', 'CRE58', 1.604717105E9),('STU_10225', 'TCH1', 'ROOM26', 'CRE5', 1.60471344E9),('STU_9399', 'TCH98', 'ROOM31', 'CRE45', 1.604714572E9),('STU_17332', 'TCH25', 'ROOM10', 'CRE31', 1.604713764E9),('STU_38771', 'TCH10', 'ROOM10', 'CRE11', 1.604716834E9),('STU_9529', 'TCH16', 'ROOM30', 'CRE10', 1.604718969E9),('STU_32513', 'TCH36', 'ROOM40', 'CRE44', 1.604714399E9),('STU_38907', 'TCH34', 'ROOM31', 'CRE33', 1.604716016E9),('STU_31551', 'TCH13', 'ROOM35', 'CRE28', 1.604716906E9),('STU_39883', 'TCH39', 'ROOM46', 'CRE23', 1.604719006E9),('STU_34965', 'TCH47', 'ROOM45', 'CRE10', 1.604713917E9),('STU_12265', 'TCH85', 'ROOM46', 'CRE11', 1.604714663E9),('STU_9348', 'TCH22', 'ROOM4', 'CRE14', 1.604712076E9),('STU_38391', 'TCH35', 'ROOM29', 'CRE37', 1.60471538E9),('STU_25424', 'TCH78', 'ROOM23', 'CRE3', 1.604717869E9),('STU_39334', 'TCH25', 'ROOM14', 'CRE48', 1.604717478E9),('STU_26085', 'TCH17', 'ROOM16', 'CRE23', 1.604718913E9),('STU_35483', 'TCH16', 'ROOM6', 'CRE5', 1.604712875E9),('STU_28009', 'TCH77', 'ROOM47', 'CRE39', 1.604716687E9),('STU_15094', 'TCH71', 'ROOM23', 'CRE18', 1.604712238E9);



```

可以查看表空间大小：

```sql
mysql> select CONCAT(ROUND(SUM(DATA_LENGTH) / (1024 * 1024 * 1024),3),' GB') as TABLE_SIZE from information_schema.TABLES where information_schema.TABLES.TABLE_NAME='student_courses'\G

*************************** 1. row ***************************

TABLE_SIZE: 0.538 GB



```

## 开始试验
#### 给裸表添加索引

假设什么索引都不建，裸表一个，通过 s_id 搜索需要 2.94s; 添加 sid_index 索引后，同样的搜索不到 0.01s 。
```sql
select * from student_courses where s_id = 'STU_17242';

194 rows in set (2.94 sec)




ALTER TABLE `student_courses` ADD INDEX sid_index ( `s_id` );

select * from student_courses where s_id = 'STU_17242';


194 rows in set (0.01 sec)



```


使用 explain 解释下：

* select_type：查询类型， SIMPLE 表示这是一个简单的 SELECT 查询；
* type: 表的连接类型。 const 表示匹配最多一行，通常是根据主键查询；ref 表示使用非主键/唯一索引匹配少量行； range 表示范围查询，<>, >, <, <=, >=, IN, BETWEEN, LIKE ； index 扫描索引树，但数量太大，相当于全表扫描；ALL 全表扫描。
* possible_keys 和 key : 可能使用的索引以及实际使用的索引。
* ref: 对于 key 给出的列，哪些列或哪些常量被用来比较了。
* rows: 为了找到满足条件的行要扫描的预计行数。
* filtered: 被过滤行数的比例。
* Extra: 索引使用的额外信息。 Using Where 需要使用 where 字句条件来过滤记录; Using Index 要获取的列信息可以从索引树上拿到; Using filesort 文件排序; Using MRR 是否使用了 MRR 优化范围查询.

```sql
mysql> explain select * from student_courses where id = 5;

+----+-------------+-----------------+------------+-------+---------------+---------+---------+-------+------+----------+-------+

| id | select_type | table           | partitions | type  | possible_keys | key     | key_len | ref   | rows | filtered | Extra |

+----+-------------+-----------------+------------+-------+---------------+---------+---------+-------+------+----------+-------+

|  1 | SIMPLE      | student_courses | NULL       | const | PRIMARY       | PRIMARY | 4       | const |    1 |   100.00 | NULL  |

+----+-------------+-----------------+------------+-------+---------------+---------+---------+-------+------+----------+-------+


mysql> explain select * from student_courses where s_id = 'STU_17242';

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+------+----------+-------+

| id | select_type | table           | partitions | type | possible_keys | key       | key_len | ref   | rows | filtered | Extra |

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+------+----------+-------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | sid_index     | sid_index | 194     | const |  194 |   100.00 | NULL  |

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+------+----------+-------+


mysql> explain select count(id) from student_courses;

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+---------+----------+-------------+

| id | select_type | table           | partitions | type  | possible_keys | key      | key_len | ref  | rows    | filtered | Extra       |

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+---------+----------+-------------+

|  1 | SIMPLE      | student_courses | NULL       | index | NULL          | tc_index | 292     | NULL | 7785655 |   100.00 | Using index |

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+---------+----------+-------------+



```


对索引列使用了函数不会使用索引：
```sql
select * from student_courses where REPLACE(s_id,"STU_","") = '17242';



mysql> explain select * from student_courses where REPLACE(s_id,"STU_","") = '17242';

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+

| id | select_type | table           | partitions | type | possible_keys | key  | key_len | ref  | rows    | filtered | Extra       |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+

|  1 | SIMPLE      | student_courses | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 7764823 |   100.00 | Using where |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+




```

假设有如下语句，可以看到使用了索引 sid_index ，从 194 条过滤到最终 3 条。因为 sid_index 已经过滤了绝大多数记录，因此添加 t_id 索引看上去没有必要。不过，这里只是某个 s_id 值的查询结果，不代表其它的 s_id 查询结果。不能仅仅据此就断定不需要加 (s_id, t_id) 联合索引。可以 count group by s_id 看看 s_id 的重复数量，进一步判断。
```sql
select * from student_courses where t_id = 'TCH86' and s_id = 'STU_17242';



mysql> explain select * from student_courses where t_id = 'TCH86' and s_id = 'STU_17242';

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+------+----------+-------------+

| id | select_type | table           | partitions | type | possible_keys | key       | key_len | ref   | rows | filtered | Extra       |

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+------+----------+-------------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | sid_index     | sid_index | 194     | const |  194 |    10.00 | Using where |

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+------+----------+-------------+




mysql> select s_id, count(s_id) as c from student_courses group by s_id order by c desc limit 10;

+-----------+-----+

| s_id      | c   |

+-----------+-----+

| STU_36180 | 258 |

| STU_25572 | 255 |

| STU_32924 | 255 |

| STU_20767 | 254 |

| STU_7738  | 253 |

| STU_26647 | 253 |

| STU_22931 | 253 |

| STU_22940 | 252 |

| STU_3963  | 252 |

| STU_25568 | 251 |

+-----------+-----+

10 rows in set (1.75 sec)



```

现在删除 sid_index 索引，添加 tid_index 索引。看看情况如何。由于 t_id 选择性较低，添加 tid_index 过滤后仍然有 8w+ 条记录，两条搜索语句耗时 0.4s 左右。计算一下 s_id 和 t_id 的不重复行数量， s_id 更大，选择性更高。这说明：添加选择性高的索引，性能提升更优。
```sql
ALTER TABLE student_courses drop index sid_index;


ALTER TABLE student_courses add index tid_index(t_id);


select * from student_courses where t_id = 'TCH86';

80195 rows in set (0.45 sec)


select * from student_courses where t_id = 'TCH86' and s_id = 'STU_17242';

3 rows in set (0.40 sec)


mysql> explain select * from student_courses where t_id = 'TCH86' and s_id = 'STU_17242';

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+--------+----------+-------------+

| id | select_type | table           | partitions | type | possible_keys | key       | key_len | ref   | rows   | filtered | Extra       |

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+--------+----------+-------------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | tid_index     | tid_index | 194     | const | 151664 |    10.00 | Using where |

+----+-------------+-----------------+------------+------+---------------+-----------+---------+-------+--------+----------+-------------+


mysql> select count(distinct s_id) / count(*) as s_id_selectivity, count(distinct t_id) / count(*) as t_id_selectivity  from student_courses;

+------------------+------------------+

| s_id_selectivity | t_id_selectivity |

+------------------+------------------+

|           0.0050 |           0.0000 |

+------------------+------------------+

1 row in set (10.11 sec)


```


#### 联合索引

考虑如下语句。仍然使用 tid_index ，耗时 0.4s 。如果使用联合索引 (tid_index, cid_index) , 则耗时 0.03s 。相当于做了两次索引查找，当然比一次要快。代价是，索引占用空间更高。
```sql
select * from student_courses where t_id = 'TCH86' and c_id = 'CRE33';


1423 rows in set (0.41 sec)


ALTER TABLE student_courses add index tid_cid_index(t_id, c_id);

select * from student_courses where t_id = 'TCH86' and c_id = 'CRE33';
1423 rows in set (0.03 sec)


```


结合情形一，通常会将多个业务 ID 建成联合索引 (s_id, t_id, c_id) ，这样，(s_id), (s_id, t_id), (s_id, t_id, c_id) 的联合等值查询都可以应用到这个索引。由于 s_id 选择性非常大，可以单独建一个索引（节省索引占用空间）；而 (t_id, c_id) 需要建一个联合索引，因为 (s_id, t_id, c_id) 无法匹配 t_id 和 c_id 联合查询的情况。根据最左匹配原则，s_id 必须出现。
```sql
ALTER TABLE student_courses add index stc_id_index(s_id,t_id,c_id);  或者 ALTER TABLE student_courses add index sid_index(s_id)

ALTER TABLE student_courses add index stc_id_index(t_id, c_id);


```


联合索引是应对多条件查询的性能提升的关键。最左匹配原则是应用联合索引的最重要的原则之一。将查询条件按照联合索引定义的顺序 (a,b,c,d,e) 重新排列，逐个比较：

* 如果查询条件均是等值查询，则出现顺序没有关系，按照联合索引定义顺序重新排列即可。比如 a=1 and b=2 与 b=2 and a=1 是等同的。顺序可以不同，但必须出现。如果 b=2 and c=3 就无法应用联合索引 (a,b,c,d,e) 了，因为 a 没出现。
* 如果联合索引里没有出现该列，则匹配到此终止。比如 b=2 and a=1 and d = 4 只能应用 (a,b)，因为 c 没出现。
* 如果联合索引里出现了范围匹配的列，则匹配到该列终止，后面的条件无法应用索引。比如 b=2 and a=1 and d=4 and c in (2,3) 只能应用 (a,b,c) ，因为 c 出现了范围匹配。
在 explain 命令中，可以看 ref , filter 来判断应用了哪些索引。如果没有应用到某个列的索引，也可以删除相应的查询条件，用 explain 命令的 ref 和 rows 来对比是否有变化。如果只应用到了某个索引，则 Extra = Using index condition 。 假设现在只建立了 (s_id, t_id, c_id) 联合索引。可以用 show index from student_courses; 查看建立了哪些索引。
```sql
mysql> show index from student_courses;
+-----------------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table           | Non_unique | Key_name     | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
+-----------------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| student_courses |          0 | PRIMARY      |            1 | id          | A         |     7764823 |     NULL | NULL   |      | BTREE      |         |               |
| student_courses |          1 | stc_id_index |            1 | s_id        | A         |       40417 |     NULL | NULL   |      | BTREE      |         |               |
| student_courses |          1 | stc_id_index |            2 | t_id        | A         |     3443139 |     NULL | NULL   |      | BTREE      |         |               |
| student_courses |          1 | stc_id_index |            3 | c_id        | A         |     7764823 |     NULL | NULL   |      | BTREE      |         |               |
+-----------------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+

```

下面是各语句以及应用联合索引的情况：
```sql
 // 全表扫，无法应用联合索引
mysql> explain select * from student_courses where c_id = 'CRE3' and t_id = 'TCH21'; 
+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+
| id | select_type | table           | partitions | type | possible_keys | key  | key_len | ref  | rows    | filtered | Extra       |
+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+
|  1 | SIMPLE      | student_courses | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 7764823 |     1.00 | Using where |
+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+

// 应用了 (s_id, t_id, c_id) ，因为都是等值查询且都出现了，在查询语句的出现顺序没有关系
mysql> explain select * from student_courses where s_id = 'STU_18528' and c_id = 'CRE3' and t_id = 'TCH21';

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref               | rows | filtered | Extra |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 486     | const,const,const |    1 |   100.00 | NULL  |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+


// 应用 (s_id, t_id) ，因此 ref = const, const
mysql> explain select * from student_courses where s_id = 'STU_18528' and t_id = 'TCH21';  

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------+------+----------+-------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref         | rows | filtered | Extra |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------+------+----------+-------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 388     | const,const |    2 |   100.00 | NULL  |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------+------+----------+-------+



// 仅应用 (s_id) ，因为 t_id 没出现
mysql> explain select * from student_courses where s_id = 'STU_18528' and c_id = 'CRE3';

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+-----------------------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref   | rows | filtered | Extra                 |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+-----------------------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 194     | const |  195 |    10.00 | Using index condition |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+-----------------------+



// 第一个应用 (s_id, t_id, c_id) 估计是将 in ( 'TCH21') 优化为等值查询了； 第二个应用了 (s_id, t_id)。
mysql> explain select * from student_courses where s_id = 'STU_18528' and c_id = 'CRE3' and t_id in ( 'TCH21');

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref               | rows | filtered | Extra |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 486     | const,const,const |    1 |   100.00 | NULL  |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+

1 row in set, 1 warning (0.00 sec)



mysql> explain select * from student_courses where s_id = 'STU_18528' and c_id = 'CRE3' and t_id > 'TCH21';

+----+-------------+-----------------+------------+-------+---------------+--------------+---------+------+------+----------+-----------------------+

| id | select_type | table           | partitions | type  | possible_keys | key          | key_len | ref  | rows | filtered | Extra                 |

+----+-------------+-----------------+------------+-------+---------------+--------------+---------+------+------+----------+-----------------------+

|  1 | SIMPLE      | student_courses | NULL       | range | stc_id_index  | stc_id_index | 388     | NULL |  171 |    10.00 | Using index condition |

+----+-------------+-----------------+------------+-------+---------------+--------------+---------+------+------+----------+-----------------------+


```


#### 索引覆盖

索引覆盖是指 select 中的列均出现在联合索引列中。如下两个语句，后面那个语句应用了索引覆盖，Extra = Using index ，取列数据时可以直接从索引中获取，而不需要去读磁盘。
```sql
mysql> explain select * from student_courses where s_id = 'STU_18528' and c_id = 'CRE3' and t_id= 'TCH21';
+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+
| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref               | rows | filtered | Extra |
+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+
|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 486     | const,const,const |    1 |   100.00 | NULL  |
+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------+

mysql> explain select s_id, t_id from student_courses where s_id = 'STU_18528' and c_id = 'CRE3' and t_id= 'TCH21';
+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------------+
| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref               | rows | filtered | Extra       |
+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------------+
|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 486     | const,const,const |    1 |   100.00 | Using index |
+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------------+------+----------+-------------+

```

#### 索引扫描排序

索引可以用来排序，从而减少随机 IO，提升排序性能。如下三种情况可以应用索引排序：

* 索引列顺序与 ORDER BY 子句的顺序完全一致时，并且所有列的排序方向都相同；如果要关联多张表，则 ORDER BY 引用的排序字段都为第一张表的字段时；
* 如果前导列为等值查询，后续的 ORDER BY 子句的字段顺序与索引列顺序一致。
如果使用了索引排序，则 type = index ； 如果未能引用索引排序，那么 Extra 会提示 Using filesort 。
```sql
// 应用索引排序：ORDER BY 字句的所有列与索引列顺序一致，且排序方向一致
mysql> explain select * from student_courses order by s_id desc, t_id desc, c_id desc limit 10;

+----+-------------+-----------------+------------+-------+---------------+--------------+---------+------+------+----------+-------+

| id | select_type | table           | partitions | type  | possible_keys | key          | key_len | ref  | rows | filtered | Extra |

+----+-------------+-----------------+------------+-------+---------------+--------------+---------+------+------+----------+-------+

|  1 | SIMPLE      | student_courses | NULL       | index | NULL          | stc_id_index | 486     | NULL |   10 |   100.00 | NULL  |

+----+-------------+-----------------+------------+-------+---------------+--------------+---------+------+------+----------+-------+


// 没有应用索引排序：ORDER BY 字句的所有列与索引列顺序一致，但排序方向不一致
mysql> explain select * from student_courses order by s_id asc, t_id desc limit 10;

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+----------------+

| id | select_type | table           | partitions | type | possible_keys | key  | key_len | ref  | rows    | filtered | Extra          |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+----------------+

|  1 | SIMPLE      | student_courses | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 7764823 |   100.00 | Using filesort |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+----------------+



// 没有应用索引排序：ORDER BY 字句的所有列顺序 (t_id, s_id) 与索引列顺序 (s_id, t_id, c_id) 不一致
mysql> explain select * from student_courses order by t_id desc, s_id desc limit 10;

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+----------------+

| id | select_type | table           | partitions | type | possible_keys | key  | key_len | ref  | rows    | filtered | Extra          |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+----------------+

|  1 | SIMPLE      | student_courses | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 7764823 |   100.00 | Using filesort |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+----------------+



// 应用索引排序：前导列为 s_id 与 t_id 联合，与索引列定义顺序一致
mysql> explain select s_id, t_id from student_courses where s_id = 'STU_18528' order by t_id;

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+--------------------------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref   | rows | filtered | Extra                    |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+--------------------------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 194     | const |  195 |   100.00 | Using where; Using index |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+--------------------------+



// 应用索引排序：前导列为 s_id, t_id 与 c_id 联合，与索引列定义顺序一致
mysql> explain select s_id, t_id from student_courses where s_id = 'STU_18528' and t_id = 'TCH21' order by c_id desc;

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------+------+----------+--------------------------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref         | rows | filtered | Extra                    |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------+------+----------+--------------------------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 388     | const,const |    2 |   100.00 | Using where; Using index |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------------+------+----------+--------------------------+



// 未能应用索引排序：前导列为 s_id 与 c_id 联合，与索引列定义顺序不一致
mysql> explain select s_id, t_id from student_courses where s_id = 'STU_18528' order by c_id desc;

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+------------------------------------------+

| id | select_type | table           | partitions | type | possible_keys | key          | key_len | ref   | rows | filtered | Extra                                    |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+------------------------------------------+

|  1 | SIMPLE      | student_courses | NULL       | ref  | stc_id_index  | stc_id_index | 194     | const |  195 |   100.00 | Using where; Using index; Using filesort |

+----+-------------+-----------------+------------+------+---------------+--------------+---------+-------+------+----------+------------------------------------------+



```

#### MRR

如果使用 MRR 导致的开销过高，也不会开启 MRR。此时，可以使用强制索引，或者设置无论如何都开启 MRR。如下所示，t_id < 'T24' 会开启 MRR，但 t_id < 'T32' 则不会开启。此时，可以强制使用索引 tc_index， 这样，就会使用 MRR。
```sql
mysql> explain select * from student_courses where t_id >= 'TCH21' and t_id < 'TCH24';

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+--------+----------+----------------------------------+

| id | select_type | table           | partitions | type  | possible_keys | key      | key_len | ref  | rows   | filtered | Extra                            |

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+--------+----------+----------------------------------+

|  1 | SIMPLE      | student_courses | NULL       | range | tc_index      | tc_index | 194     | NULL | 508500 |   100.00 | Using index condition; Using MRR |

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+--------+----------+----------------------------------+

1 row in set, 1 warning (0.00 sec)





mysql> explain select * from student_courses where t_id >= 'TCH21' and t_id < 'TCH32';

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+

| id | select_type | table           | partitions | type | possible_keys | key  | key_len | ref  | rows    | filtered | Extra       |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+

|  1 | SIMPLE      | student_courses | NULL       | ALL  | tc_index      | NULL | NULL    | NULL | 7785655 |    27.09 | Using where |

+----+-------------+-----------------+------------+------+---------------+------+---------+------+---------+----------+-------------+

1 row in set, 1 warning (0.00 sec)





mysql> explain select * from student_courses FORCE INDEX(tc_index) where t_id >= 'TCH21' and t_id < 'TCH32';

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+---------+----------+----------------------------------+

| id | select_type | table           | partitions | type  | possible_keys | key      | key_len | ref  | rows    | filtered | Extra                            |

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+---------+----------+----------------------------------+

|  1 | SIMPLE      | student_courses | NULL       | range | tc_index      | tc_index | 194     | NULL | 2109100 |   100.00 | Using index condition; Using MRR |

+----+-------------+-----------------+------------+-------+---------------+----------+---------+------+---------+----------+----------------------------------+




```

## 小结
数据库是开发人员最常打交道的软件，而索引是高效访问数据库的重中之重。深入理解索引的原理，合理设计适配查询的索引，是有必要下功夫的。

索引基本功：

* 根据查询条件创建高效的索引；
* 理解最左匹配原则并定义最优的联合索引；
* 尽可能用好覆盖索引和索引扫描。
