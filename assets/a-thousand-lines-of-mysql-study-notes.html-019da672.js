import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as t,a as n,b as s,d as o,e as i}from"./app-8a5cd404.js";const c={},d={href:"https://shockerli.net/post/1000-line-mysql-note/",target:"_blank",rel:"noopener noreferrer"},r=i(`<p>非常不错的总结，强烈建议保存下来，需要的时候看一看。</p><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* Windows服务 */</span>
<span class="token comment">-- 启动 MySQL</span>
			net <span class="token keyword">start</span> mysql
<span class="token comment">-- 创建Windows服务</span>
				sc <span class="token keyword">create</span> mysql binPath<span class="token operator">=</span> mysqld_bin_path<span class="token punctuation">(</span>注意：等号与值之间有空格<span class="token punctuation">)</span>
<span class="token comment">/* 连接与断开服务器 */</span>
<span class="token comment">-- 连接 MySQL</span>
				mysql <span class="token operator">-</span>h 地址 <span class="token operator">-</span>P 端口 <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 密码
<span class="token comment">-- 显示哪些线程正在运行</span>
				<span class="token keyword">SHOW</span> PROCESSLIST
<span class="token comment">-- 显示系统变量信息</span>
				<span class="token keyword">SHOW</span> VARIABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 数据库操作 */</span>
<span class="token comment">-- 查看当前数据库</span>
    <span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 显示当前时间、用户名、数据库版本</span>
    <span class="token keyword">SELECT</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 创建库</span>
    <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span><span class="token punctuation">[</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> 数据库名 数据库选项
    数据库选项：
        <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> charset_name
        <span class="token keyword">COLLATE</span> collation_name
<span class="token comment">-- 查看已有库</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">[</span> <span class="token operator">LIKE</span> <span class="token string">&#39;PATTERN&#39;</span><span class="token punctuation">]</span>
<span class="token comment">-- 查看当前库信息</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 数据库名
<span class="token comment">-- 修改库的选项信息</span>
    <span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> 库名 选项信息
<span class="token comment">-- 删除库</span>
    <span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span><span class="token punctuation">[</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> 数据库名
        同时删除该数据库相关的目录及其目录内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表的操作" tabindex="-1"><a class="header-anchor" href="#表的操作" aria-hidden="true">#</a> 表的操作</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 表的操作  */</span>
<span class="token comment">-- 创建表</span>
    <span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token keyword">TEMPORARY</span><span class="token punctuation">]</span> <span class="token keyword">TABLE</span><span class="token punctuation">[</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>库名<span class="token punctuation">.</span><span class="token punctuation">]</span>表名 <span class="token punctuation">(</span> 表的结构定义 <span class="token punctuation">)</span><span class="token punctuation">[</span> 表选项<span class="token punctuation">]</span>
        每个字段必须有数据类型
        最后一个字段后不能有逗号
        <span class="token keyword">TEMPORARY</span> 临时表，会话结束时表自动消失
        对于字段的定义：
            字段名 数据类型 <span class="token punctuation">[</span><span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> default_value<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span> <span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">COMMENT</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">]</span>
<span class="token comment">-- 表选项</span>
    <span class="token comment">-- 字符集</span>
        <span class="token keyword">CHARSET</span> <span class="token operator">=</span> charset_name
        如果表没有设定，则使用数据库字符集
    <span class="token comment">-- 存储引擎</span>
        <span class="token keyword">ENGINE</span> <span class="token operator">=</span> engine_name
        表在管理数据时采用的不同的数据结构，结构不同会导致处理方式、提供的特性操作等不同
        常见的引擎：<span class="token keyword">InnoDB</span> MyISAM Memory<span class="token operator">/</span>Heap <span class="token keyword">BDB</span> <span class="token keyword">Merge</span> Example CSV MaxDB Archive
        不同的引擎在保存表的结构和数据时采用不同的方式
        MyISAM表文件含义：<span class="token punctuation">.</span>frm表定义，<span class="token punctuation">.</span>MYD表数据，<span class="token punctuation">.</span>MYI表索引
        <span class="token keyword">InnoDB</span>表文件含义：<span class="token punctuation">.</span>frm表定义，表空间数据和日志文件
        <span class="token keyword">SHOW</span> ENGINES <span class="token comment">-- 显示存储引擎的状态信息</span>
        <span class="token keyword">SHOW</span> <span class="token keyword">ENGINE</span> 引擎名 {LOGS<span class="token operator">|</span><span class="token keyword">STATUS</span>} <span class="token comment">-- 显示存储引擎的日志或状态信息</span>
    <span class="token comment">-- 自增起始数</span>
    	<span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> 行数
    <span class="token comment">-- 数据文件目录</span>
        <span class="token keyword">DATA</span> DIRECTORY <span class="token operator">=</span> <span class="token string">&#39;目录&#39;</span>
    <span class="token comment">-- 索引文件目录</span>
        <span class="token keyword">INDEX</span> DIRECTORY <span class="token operator">=</span> <span class="token string">&#39;目录&#39;</span>
    <span class="token comment">-- 表注释</span>
        <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span>
    <span class="token comment">-- 分区选项</span>
        <span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">(</span>详细见手册<span class="token punctuation">)</span>
<span class="token comment">-- 查看所有表</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">[</span> <span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span> <span class="token keyword">FROM</span>  库名
<span class="token comment">-- 查看表结构</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 （信息更详细）
    <span class="token keyword">DESC</span> 表名 <span class="token operator">/</span> <span class="token keyword">DESCRIBE</span> 表名 <span class="token operator">/</span> <span class="token keyword">EXPLAIN</span> 表名 <span class="token operator">/</span> <span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> 表名 <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;PATTERN&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">TABLE</span> <span class="token keyword">STATUS</span> <span class="token punctuation">[</span><span class="token keyword">FROM</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span><span class="token punctuation">]</span>
<span class="token comment">-- 修改表</span>
    <span class="token comment">-- 修改表本身的选项</span>
        <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 表的选项
        eg: <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ENGINE</span><span class="token operator">=</span>MYISAM<span class="token punctuation">;</span>
    <span class="token comment">-- 对表进行重命名</span>
        <span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> 原表名 <span class="token keyword">TO</span> 新表名
        <span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> 原表名 <span class="token keyword">TO</span> 库名<span class="token punctuation">.</span>表名 （可将表移动到另一个数据库）
        <span class="token comment">-- RENAME可以交换两个表名</span>
    <span class="token comment">-- 修改表的字段机构（13.1.2. ALTER TABLE语法）</span>
        <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 操作名
        <span class="token comment">-- 操作名</span>
            <span class="token keyword">ADD</span><span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 字段定义       <span class="token comment">-- 增加字段</span>
                <span class="token keyword">AFTER</span> 字段名          <span class="token comment">-- 表示增加在该字段名后面</span>
                <span class="token keyword">FIRST</span>               <span class="token comment">-- 表示增加在第一个</span>
            <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段名<span class="token punctuation">)</span>   <span class="token comment">-- 创建主键</span>
            <span class="token keyword">ADD</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span><span class="token comment">-- 创建唯一索引</span>
            <span class="token keyword">ADD</span> <span class="token keyword">INDEX</span> <span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span> <span class="token comment">-- 创建普通索引</span>
            <span class="token keyword">DROP</span><span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 字段名      <span class="token comment">-- 删除字段</span>
            <span class="token keyword">MODIFY</span><span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 字段名 字段属性     <span class="token comment">-- 支持对字段属性进行修改，不能修改字段名(所有原有属性也需写上)</span>
            CHANGE<span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 原字段名 新字段名 字段属性      <span class="token comment">-- 支持对字段名修改</span>
            <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span>    <span class="token comment">-- 删除主键(删除主键前需删除其AUTO_INCREMENT属性)</span>
            <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名 <span class="token comment">-- 删除索引</span>
            <span class="token keyword">DROP</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> 外键    <span class="token comment">-- 删除外键</span>
<span class="token comment">-- 删除表</span>
    <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span><span class="token punctuation">[</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> 表名 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 清空表数据</span>
    <span class="token keyword">TRUNCATE</span> <span class="token punctuation">[</span><span class="token keyword">TABLE</span><span class="token punctuation">]</span> 表名
<span class="token comment">-- 复制表结构</span>
    <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token operator">LIKE</span> 要复制的表名
<span class="token comment">-- 复制表结构和数据</span>
    <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">[</span><span class="token keyword">AS</span><span class="token punctuation">]</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 要复制的表名
<span class="token comment">-- 检查表是否有错误</span>
    <span class="token keyword">CHECK</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">option</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 优化表</span>
    <span class="token keyword">OPTIMIZE</span> <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 修复表</span>
    REPAIR <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">QUICK</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">EXTENDED</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>USE_FRM<span class="token punctuation">]</span>
<span class="token comment">-- 分析表</span>
    <span class="token keyword">ANALYZE</span> <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据操作" tabindex="-1"><a class="header-anchor" href="#数据操作" aria-hidden="true">#</a> 数据操作</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 数据操作 */</span> <span class="token comment">------------------</span>
<span class="token comment">-- 增</span>
    <span class="token keyword">INSERT</span> <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> 表名 <span class="token punctuation">[</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
        <span class="token comment">-- 如果要插入的值列表包含所有字段并且顺序一致，则可以省略字段列表。</span>
        <span class="token comment">-- 可同时插入多条数据记录！</span>
        <span class="token keyword">REPLACE</span>与<span class="token keyword">INSERT</span>类似，唯一的区别是对于匹配的行，现有行（与主键<span class="token operator">/</span>唯一键比较）的数据会被替换，如果没有现有行，则插入新行。
    <span class="token keyword">INSERT</span> <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> 表名 <span class="token keyword">SET</span> 字段名<span class="token operator">=</span>值<span class="token punctuation">[</span><span class="token punctuation">,</span> 字段名<span class="token operator">=</span>值<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token comment">-- 查</span>
    <span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名<span class="token punctuation">[</span> 其他子句<span class="token punctuation">]</span>
        <span class="token comment">-- 可来自多个表的多个字段</span>
        <span class="token comment">-- 其他子句可以不使用</span>
        <span class="token comment">-- 字段列表可以用*代替，表示所有字段</span>
<span class="token comment">-- 删</span>
    <span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">[</span> 删除条件子句<span class="token punctuation">]</span>
        没有条件子句，则会删除全部
<span class="token comment">-- 改</span>
    <span class="token keyword">UPDATE</span> 表名 <span class="token keyword">SET</span> 字段名<span class="token operator">=</span>新值<span class="token punctuation">[</span><span class="token punctuation">,</span> 字段名<span class="token operator">=</span>新值<span class="token punctuation">]</span> <span class="token punctuation">[</span>更新条件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符集编码" tabindex="-1"><a class="header-anchor" href="#字符集编码" aria-hidden="true">#</a> 字符集编码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 字符集编码 */</span> <span class="token comment">------------------</span>
<span class="token comment">-- MySQL、数据库、表、字段均可设置编码</span>
<span class="token comment">-- 数据编码与客户端编码不需一致</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;character_set_%&#39;</span>   <span class="token comment">-- 查看所有字符集编码项</span>
    character_set_client        客户端向服务器发送数据时使用的编码
    character_set_results       服务器端将结果返回给客户端所使用的编码
    character_set_connection    连接层编码
<span class="token keyword">SET</span> 变量名 <span class="token operator">=</span> 变量值
    <span class="token keyword">SET</span> character_set_client <span class="token operator">=</span> gbk<span class="token punctuation">;</span>
    <span class="token keyword">SET</span> character_set_results <span class="token operator">=</span> gbk<span class="token punctuation">;</span>
    <span class="token keyword">SET</span> character_set_connection <span class="token operator">=</span> gbk<span class="token punctuation">;</span>
<span class="token keyword">SET</span> NAMES GBK<span class="token punctuation">;</span>  <span class="token comment">-- 相当于完成以上三个设置</span>
<span class="token comment">-- 校对集</span>
    校对集用以排序
    <span class="token keyword">SHOW</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span><span class="token punctuation">]</span><span class="token operator">/</span><span class="token keyword">SHOW</span> <span class="token keyword">CHARSET</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span><span class="token punctuation">]</span>   查看所有字符集
    <span class="token keyword">SHOW</span> COLLATION <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span><span class="token punctuation">]</span>     查看所有校对集
    <span class="token keyword">CHARSET</span> 字符集编码     设置字符集编码
    <span class="token keyword">COLLATE</span> 校对集编码     设置校对集编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型-列类型" tabindex="-1"><a class="header-anchor" href="#数据类型-列类型" aria-hidden="true">#</a> 数据类型(列类型)</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 数据类型（列类型） */</span> <span class="token comment">------------------</span>
<span class="token number">1.</span> 数值类型
<span class="token comment">-- a. 整型 ----------</span>
    类型         字节     范围（有符号位）
    <span class="token keyword">tinyint</span>     <span class="token number">1</span>字节    <span class="token operator">-</span><span class="token number">128</span> <span class="token operator">~</span> <span class="token number">127</span>      无符号位：<span class="token number">0</span> <span class="token operator">~</span> <span class="token number">255</span>
    <span class="token keyword">smallint</span>    <span class="token number">2</span>字节    <span class="token operator">-</span><span class="token number">32768</span> <span class="token operator">~</span> <span class="token number">32767</span>
    <span class="token keyword">mediumint</span>   <span class="token number">3</span>字节    <span class="token operator">-</span><span class="token number">8388608</span> <span class="token operator">~</span> <span class="token number">8388607</span>
    <span class="token keyword">int</span>         <span class="token number">4</span>字节
    <span class="token keyword">bigint</span>      <span class="token number">8</span>字节
    <span class="token keyword">int</span><span class="token punctuation">(</span>M<span class="token punctuation">)</span>  M表示总位数
    <span class="token operator">-</span> 默认存在符号位，<span class="token keyword">unsigned</span> 属性修改
    <span class="token operator">-</span> 显示宽度，如果某个数不够定义字段时设置的位数，则前面以<span class="token number">0</span>补填，zerofill 属性修改
        例：<span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>   插入一个数<span class="token string">&#39;123&#39;</span>，补填后为<span class="token string">&#39;00123&#39;</span>
    <span class="token operator">-</span> 在满足要求的情况下，越小越好。
    <span class="token operator">-</span> <span class="token number">1</span>表示<span class="token keyword">bool</span>值真，<span class="token number">0</span>表示<span class="token keyword">bool</span>值假。MySQL没有布尔类型，通过整型<span class="token number">0</span>和<span class="token number">1</span>表示。常用<span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>表示布尔型。
<span class="token comment">-- b. 浮点型 ----------</span>
    类型             字节     范围
    <span class="token keyword">float</span><span class="token punctuation">(</span>单精度<span class="token punctuation">)</span>     <span class="token number">4</span>字节
    <span class="token keyword">double</span><span class="token punctuation">(</span>双精度<span class="token punctuation">)</span>    <span class="token number">8</span>字节
    浮点型既支持符号位 <span class="token keyword">unsigned</span> 属性，也支持显示宽度 zerofill 属性。
        不同于整型，前后均会补填<span class="token number">0.</span>
    定义浮点型时，需指定总位数和小数位数。
        <span class="token keyword">float</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span> D<span class="token punctuation">)</span>     <span class="token keyword">double</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span> D<span class="token punctuation">)</span>
        M表示总位数，D表示小数位数。
        M和D的大小会决定浮点数的范围。不同于整型的固定范围。
        M既表示总位数（不包括小数点和正负号），也表示显示宽度（所有显示符号均包括）。
        支持科学计数法表示。
        浮点数表示近似值。
<span class="token comment">-- c. 定点数 ----------</span>
    <span class="token keyword">decimal</span> <span class="token comment">-- 可变长度</span>
    <span class="token keyword">decimal</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span> D<span class="token punctuation">)</span>   M也表示总位数，D表示小数位数。
    保存一个精确的数值，不会发生数据的改变，不同于浮点数的四舍五入。
    将浮点数转换为字符串来保存，每<span class="token number">9</span>位数字保存为<span class="token number">4</span>个字节。
<span class="token number">2.</span> 字符串类型
<span class="token comment">-- a. char, varchar ----------</span>
    <span class="token keyword">char</span>    定长字符串，速度快，但浪费空间
    <span class="token keyword">varchar</span> 变长字符串，速度慢，但节省空间
    M表示能存储的最大长度，此长度是字符数，非字节数。
    不同的编码，所占用的空间不同。
    <span class="token keyword">char</span><span class="token punctuation">,</span>最多<span class="token number">255</span>个字符，与编码无关。
    <span class="token keyword">varchar</span><span class="token punctuation">,</span>最多<span class="token number">65535</span>字符，与编码有关。
    一条有效记录最大不能超过<span class="token number">65535</span>个字节。
        utf8 最大为<span class="token number">21844</span>个字符，gbk 最大为<span class="token number">32766</span>个字符，latin1 最大为<span class="token number">65532</span>个字符
    <span class="token keyword">varchar</span> 是变长的，需要利用存储空间保存 <span class="token keyword">varchar</span> 的长度，如果数据小于<span class="token number">255</span>个字节，则采用一个字节来保存长度，反之需要两个字节来保存。
    <span class="token keyword">varchar</span> 的最大有效长度由最大行大小和使用的字符集确定。
    最大有效长度是<span class="token number">65532</span>字节，因为在<span class="token keyword">varchar</span>存字符串时，第一个字节是空的，不存在任何数据，然后还需两个字节来存放字符串的长度，所以有效长度是<span class="token number">65535</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">=</span><span class="token number">65532</span>字节。
    例：若一个表定义为 <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb<span class="token punctuation">(</span>c1 <span class="token keyword">int</span><span class="token punctuation">,</span> c2 <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c3 <span class="token keyword">varchar</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">charset</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span> 问N的最大值是多少？ 答：<span class="token punctuation">(</span><span class="token number">65535</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">4</span><span class="token operator">-</span><span class="token number">30</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span>
<span class="token comment">-- b. blob, text ----------</span>
    <span class="token keyword">blob</span> 二进制字符串（字节字符串）
        <span class="token keyword">tinyblob</span><span class="token punctuation">,</span> <span class="token keyword">blob</span><span class="token punctuation">,</span> <span class="token keyword">mediumblob</span><span class="token punctuation">,</span> <span class="token keyword">longblob</span>
    <span class="token keyword">text</span> 非二进制字符串（字符字符串）
        <span class="token keyword">tinytext</span><span class="token punctuation">,</span> <span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token keyword">mediumtext</span><span class="token punctuation">,</span> <span class="token keyword">longtext</span>
    <span class="token keyword">text</span> 在定义时，不需要定义长度，也不会计算总长度。
    <span class="token keyword">text</span> 类型在定义时，不可给<span class="token keyword">default</span>值
<span class="token comment">-- c. binary, varbinary ----------</span>
    类似于<span class="token keyword">char</span>和<span class="token keyword">varchar</span>，用于保存二进制字符串，也就是保存字节字符串而非字符字符串。
    <span class="token keyword">char</span><span class="token punctuation">,</span> <span class="token keyword">varchar</span><span class="token punctuation">,</span> <span class="token keyword">text</span> 对应 <span class="token keyword">binary</span><span class="token punctuation">,</span> <span class="token keyword">varbinary</span><span class="token punctuation">,</span> <span class="token keyword">blob</span><span class="token punctuation">.</span>
<span class="token number">3.</span> 日期时间类型
    一般用整型保存时间戳，因为PHP可以很方便的将时间戳进行格式化。
    <span class="token keyword">datetime</span>    <span class="token number">8</span>字节    日期及时间     <span class="token number">1000</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">00</span> 到 <span class="token number">9999</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">31</span> <span class="token number">23</span>:<span class="token number">59</span>:<span class="token number">59</span>
    <span class="token keyword">date</span>        <span class="token number">3</span>字节    日期         <span class="token number">1000</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> 到 <span class="token number">9999</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">31</span>
    <span class="token keyword">timestamp</span>   <span class="token number">4</span>字节    时间戳        <span class="token number">19700101000000</span> 到 <span class="token number">2038</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">19</span> <span class="token number">03</span>:<span class="token number">14</span>:<span class="token number">07</span>
    <span class="token keyword">time</span>        <span class="token number">3</span>字节    时间         <span class="token operator">-</span><span class="token number">838</span>:<span class="token number">59</span>:<span class="token number">59</span> 到 <span class="token number">838</span>:<span class="token number">59</span>:<span class="token number">59</span>
    <span class="token keyword">year</span>        <span class="token number">1</span>字节    年份         <span class="token number">1901</span> <span class="token operator">-</span> <span class="token number">2155</span>
<span class="token keyword">datetime</span>    YYYY<span class="token operator">-</span>MM<span class="token operator">-</span>DD hh:mm:ss
<span class="token keyword">timestamp</span>   YY<span class="token operator">-</span>MM<span class="token operator">-</span>DD hh:mm:ss
            YYYYMMDDhhmmss
            YYMMDDhhmmss
            YYYYMMDDhhmmss
            YYMMDDhhmmss
<span class="token keyword">date</span>        YYYY<span class="token operator">-</span>MM<span class="token operator">-</span>DD
            YY<span class="token operator">-</span>MM<span class="token operator">-</span>DD
            YYYYMMDD
            YYMMDD
            YYYYMMDD
            YYMMDD
<span class="token keyword">time</span>        hh:mm:ss
            hhmmss
            hhmmss
<span class="token keyword">year</span>        YYYY
            YY
            YYYY
            YY
<span class="token number">4.</span> 枚举和集合
<span class="token comment">-- 枚举(enum) ----------</span>
<span class="token keyword">enum</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">,</span> val3<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    在已知的值中进行单选。最大数量为<span class="token number">65535.</span>
    枚举值在保存时，以<span class="token number">2</span>个字节的整型<span class="token punctuation">(</span><span class="token keyword">smallint</span><span class="token punctuation">)</span>保存。每个枚举值，按保存的位置顺序，从<span class="token number">1</span>开始逐一递增。
    表现为字符串类型，存储却是整型。
    <span class="token boolean">NULL</span>值的索引是<span class="token boolean">NULL</span>。
    空字符串错误值的索引值是<span class="token number">0</span>。
<span class="token comment">-- 集合（set） ----------</span>
<span class="token keyword">set</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">,</span> val3<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    <span class="token keyword">create</span> <span class="token keyword">table</span> tab <span class="token punctuation">(</span> gender <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;无&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">insert</span> <span class="token keyword">into</span> tab <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;男, 女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    最多可以有<span class="token number">64</span>个不同的成员。以<span class="token keyword">bigint</span>存储，共<span class="token number">8</span>个字节。采取位运算的形式。
    当创建表时，<span class="token keyword">SET</span>成员值的尾部空格将自动被删除。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列属性-列约束" tabindex="-1"><a class="header-anchor" href="#列属性-列约束" aria-hidden="true">#</a> 列属性(列约束)</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 列属性（列约束） */</span> <span class="token comment">------------------</span>
<span class="token number">1.</span> <span class="token keyword">PRIMARY</span> 主键
    <span class="token operator">-</span> 能唯一标识记录的字段，可以作为主键。
    <span class="token operator">-</span> 一个表只能有一个主键。
    <span class="token operator">-</span> 主键具有唯一性。
    <span class="token operator">-</span> 声明字段时，用 <span class="token keyword">primary</span> <span class="token keyword">key</span> 标识。
        也可以在字段列表之后声明
            例：<span class="token keyword">create</span> <span class="token keyword">table</span> tab <span class="token punctuation">(</span> id <span class="token keyword">int</span><span class="token punctuation">,</span> stu <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">-</span> 主键字段的值不能为<span class="token boolean">null</span>。
    <span class="token operator">-</span> 主键可以由多个字段共同组成。此时需要在字段列表后声明的方法。
        例：<span class="token keyword">create</span> <span class="token keyword">table</span> tab <span class="token punctuation">(</span> id <span class="token keyword">int</span><span class="token punctuation">,</span> stu <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> age <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>stu<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2.</span> <span class="token keyword">UNIQUE</span> 唯一索引（唯一约束）
    使得某字段的值也不能重复。
<span class="token number">3.</span> <span class="token boolean">NULL</span> 约束
    <span class="token boolean">null</span>不是数据类型，是列的一个属性。
    表示当前列是否可以为<span class="token boolean">null</span>，表示什么都没有。
    <span class="token boolean">null</span><span class="token punctuation">,</span> 允许为空。默认。
    <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span> 不允许为空。
    <span class="token keyword">insert</span> <span class="token keyword">into</span> tab <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;val&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">-- 此时表示将第一个字段的值设为null, 取决于该字段是否允许为null</span>
<span class="token number">4.</span> <span class="token keyword">DEFAULT</span> 默认值属性
    当前字段的默认值。
    <span class="token keyword">insert</span> <span class="token keyword">into</span> tab <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token keyword">default</span><span class="token punctuation">,</span> <span class="token string">&#39;val&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">-- 此时表示强制使用默认值。</span>
    <span class="token keyword">create</span> <span class="token keyword">table</span> tab <span class="token punctuation">(</span> add_time <span class="token keyword">timestamp</span> <span class="token keyword">default</span> <span class="token keyword">current_timestamp</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">-- 表示将当前时间的时间戳设为默认值。</span>
        <span class="token keyword">current_date</span><span class="token punctuation">,</span> <span class="token keyword">current_time</span>
<span class="token number">5.</span> <span class="token keyword">AUTO_INCREMENT</span> 自动增长约束
    自动增长必须为索引（主键或<span class="token keyword">unique</span>）
    只能存在一个字段为自动增长。
    默认为<span class="token number">1</span>开始自动增长。可以通过表属性 <span class="token keyword">auto_increment</span> <span class="token operator">=</span> x进行设置，或 <span class="token keyword">alter</span> <span class="token keyword">table</span> tbl <span class="token keyword">auto_increment</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token number">6.</span> <span class="token keyword">COMMENT</span> 注释
    例：<span class="token keyword">create</span> <span class="token keyword">table</span> tab <span class="token punctuation">(</span> id <span class="token keyword">int</span> <span class="token punctuation">)</span> <span class="token keyword">comment</span> <span class="token string">&#39;注释内容&#39;</span><span class="token punctuation">;</span>
<span class="token number">7.</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> 外键约束
    用于限制主表与从表数据完整性。
    <span class="token keyword">alter</span> <span class="token keyword">table</span> t1 <span class="token keyword">add</span> <span class="token keyword">constraint</span> <span class="token identifier"><span class="token punctuation">\`</span>t1_t2_fk<span class="token punctuation">\`</span></span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>t1_id<span class="token punctuation">)</span> <span class="token keyword">references</span> t2<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">-- 将表t1的t1_id外键关联到表t2的id字段。</span>
        <span class="token comment">-- 每个外键都有一个名字，可以通过 constraint 指定</span>
    存在外键的表，称之为从表（子表），外键指向的表，称之为主表（父表）。
    作用：保持数据一致性，完整性，主要目的是控制存储在外键表（从表）中的数据。
    MySQL中，可以对<span class="token keyword">InnoDB</span>引擎使用外键约束：
    语法：
    <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>外键字段） <span class="token keyword">references</span> 主表名 <span class="token punctuation">(</span>关联字段<span class="token punctuation">)</span> <span class="token punctuation">[</span>主表记录删除时的动作<span class="token punctuation">]</span> <span class="token punctuation">[</span>主表记录更新时的动作<span class="token punctuation">]</span>
    此时需要检测一个从表的外键需要约束为主表的已存在的值。外键在没有关联的情况下，可以设置为<span class="token boolean">null</span><span class="token punctuation">.</span>前提是该外键列，没有<span class="token operator">not</span> <span class="token boolean">null</span>。
    可以不指定主表记录更改或更新时的动作，那么此时主表的操作被拒绝。
    如果指定了 <span class="token keyword">on</span> <span class="token keyword">update</span> 或 <span class="token keyword">on</span> <span class="token keyword">delete</span>：在删除或更新时，有如下几个操作可以选择：
    <span class="token number">1.</span> <span class="token keyword">cascade</span>，级联操作。主表数据被更新（主键值更新），从表也被更新（外键值更新）。主表记录被删除，从表相关记录也被删除。
    <span class="token number">2.</span> <span class="token keyword">set</span> <span class="token boolean">null</span>，设置为<span class="token boolean">null</span>。主表数据被更新（主键值更新），从表的外键被设置为<span class="token boolean">null</span>。主表记录被删除，从表相关记录外键被设置成<span class="token boolean">null</span>。但注意，要求该外键列，没有<span class="token operator">not</span> <span class="token boolean">null</span>属性约束。
    <span class="token number">3.</span> <span class="token keyword">restrict</span>，拒绝父表删除和更新。
    注意，外键只被<span class="token keyword">InnoDB</span>存储引擎所支持。其他引擎是不支持的。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建表规范" tabindex="-1"><a class="header-anchor" href="#建表规范" aria-hidden="true">#</a> 建表规范</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 建表规范 */</span> <span class="token comment">------------------</span>
    <span class="token comment">-- Normal Format, NF</span>
        <span class="token operator">-</span> 每个表保存一个实体信息
        <span class="token operator">-</span> 每个具有一个ID字段作为主键
        <span class="token operator">-</span> ID主键 <span class="token operator">+</span> 原子表
    <span class="token comment">-- 1NF, 第一范式</span>
        字段不能再分，就满足第一范式。
    <span class="token comment">-- 2NF, 第二范式</span>
        满足第一范式的前提下，不能出现部分依赖。
        消除复合主键就可以避免部分依赖。增加单列关键字。
    <span class="token comment">-- 3NF, 第三范式</span>
        满足第二范式的前提下，不能出现传递依赖。
        某个字段依赖于主键，而有其他字段依赖于该字段。这就是传递依赖。
        将一个实体信息的数据放在一个表内实现。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* SELECT */</span> <span class="token comment">------------------</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">[</span><span class="token keyword">ALL</span><span class="token operator">|</span><span class="token keyword">DISTINCT</span><span class="token punctuation">]</span> select_expr <span class="token keyword">FROM</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">WHERE</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">[</span>合计函数<span class="token punctuation">]</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">HAVING</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">LIMIT</span>
a<span class="token punctuation">.</span> select_expr
    <span class="token comment">-- 可以用 * 表示所有字段。</span>
        <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb<span class="token punctuation">;</span>
    <span class="token comment">-- 可以使用表达式（计算公式、函数调用、字段也是个表达式）</span>
        <span class="token keyword">select</span> stu<span class="token punctuation">,</span> <span class="token number">29</span><span class="token operator">+</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">from</span> tb<span class="token punctuation">;</span>
    <span class="token comment">-- 可以为每个列使用别名。适用于简化列标识，避免多个列标识符重复。</span>
        <span class="token operator">-</span> 使用 <span class="token keyword">as</span> 关键字，也可省略 <span class="token keyword">as</span><span class="token punctuation">.</span>
        <span class="token keyword">select</span> stu<span class="token operator">+</span><span class="token number">10</span> <span class="token keyword">as</span> add10 <span class="token keyword">from</span> tb<span class="token punctuation">;</span>
b<span class="token punctuation">.</span> <span class="token keyword">FROM</span> 子句
    用于标识查询来源。
    <span class="token comment">-- 可以为表起别名。使用as关键字。</span>
        <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tb1 <span class="token keyword">AS</span> tt<span class="token punctuation">,</span> tb2 <span class="token keyword">AS</span> bb<span class="token punctuation">;</span>
    <span class="token comment">-- from子句后，可以同时出现多个表。</span>
        <span class="token comment">-- 多个表会横向叠加到一起，而数据会形成一个笛卡尔积。</span>
        <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tb1<span class="token punctuation">,</span> tb2<span class="token punctuation">;</span>
    <span class="token comment">-- 向优化符提示如何选择索引</span>
        <span class="token keyword">USE</span> <span class="token keyword">INDEX</span>、<span class="token keyword">IGNORE</span> <span class="token keyword">INDEX</span>、<span class="token keyword">FORCE</span> <span class="token keyword">INDEX</span>
        <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table1 <span class="token keyword">USE</span> <span class="token keyword">INDEX</span> <span class="token punctuation">(</span>key1<span class="token punctuation">,</span>key2<span class="token punctuation">)</span> <span class="token keyword">WHERE</span> key1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">AND</span> key2<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">AND</span> key3<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table1 <span class="token keyword">IGNORE</span> <span class="token keyword">INDEX</span> <span class="token punctuation">(</span>key3<span class="token punctuation">)</span> <span class="token keyword">WHERE</span> key1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">AND</span> key2<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">AND</span> key3<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span> <span class="token keyword">WHERE</span> 子句
    <span class="token comment">-- 从from获得的数据源中进行筛选。</span>
    <span class="token comment">-- 整型1表示真，0表示假。</span>
    <span class="token comment">-- 表达式由运算符和运算数组成。</span>
        <span class="token comment">-- 运算数：变量（字段）、值、函数返回值</span>
        <span class="token comment">-- 运算符：</span>
            <span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">&lt;=&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;&gt;</span><span class="token punctuation">,</span> <span class="token operator">!=</span><span class="token punctuation">,</span> <span class="token operator">&lt;=</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token punctuation">,</span> <span class="token operator">&gt;=</span><span class="token punctuation">,</span> <span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">!</span><span class="token punctuation">,</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">,</span> <span class="token operator">||</span><span class="token punctuation">,</span>
            <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token operator">not</span><span class="token punctuation">)</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">not</span><span class="token punctuation">)</span> <span class="token operator">like</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">not</span><span class="token punctuation">)</span> <span class="token operator">in</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">not</span><span class="token punctuation">)</span> <span class="token operator">between</span> <span class="token operator">and</span><span class="token punctuation">,</span> <span class="token operator">is</span> <span class="token punctuation">(</span><span class="token operator">not</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">and</span><span class="token punctuation">,</span> <span class="token operator">or</span><span class="token punctuation">,</span> <span class="token operator">not</span><span class="token punctuation">,</span> <span class="token operator">xor</span>
            <span class="token operator">is</span><span class="token operator">/</span><span class="token operator">is</span> <span class="token operator">not</span> 加上ture<span class="token operator">/</span><span class="token boolean">false</span><span class="token operator">/</span>unknown，检验某个值的真假
            <span class="token operator">&lt;=&gt;</span>与<span class="token operator">&lt;&gt;</span>功能相同，<span class="token operator">&lt;=&gt;</span>可用于<span class="token boolean">null</span>比较
d<span class="token punctuation">.</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 子句<span class="token punctuation">,</span> 分组子句
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 字段<span class="token operator">/</span>别名 <span class="token punctuation">[</span>排序方式<span class="token punctuation">]</span>
    分组后会进行排序。升序：<span class="token keyword">ASC</span>，降序：<span class="token keyword">DESC</span>
    以下<span class="token punctuation">[</span>合计函数<span class="token punctuation">]</span>需配合 <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 使用：
    count 返回不同的非<span class="token boolean">NULL</span>值数目  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>、<span class="token function">count</span><span class="token punctuation">(</span>字段<span class="token punctuation">)</span>
    sum 求和
    max 求最大值
    min 求最小值
    avg 求平均值
    group_concat 返回带有来自一个组的连接的非<span class="token boolean">NULL</span>值的字符串结果。组内字符串连接。
e<span class="token punctuation">.</span> <span class="token keyword">HAVING</span> 子句，条件子句
    与 <span class="token keyword">where</span> 功能、用法相同，执行时机不同。
    <span class="token keyword">where</span> 在开始时执行检测数据，对原数据进行过滤。
    <span class="token keyword">having</span> 对筛选出的结果再次进行过滤。
    <span class="token keyword">having</span> 字段必须是查询出来的，<span class="token keyword">where</span> 字段必须是数据表存在的。
    <span class="token keyword">where</span> 不可以使用字段的别名，<span class="token keyword">having</span> 可以。因为执行<span class="token keyword">WHERE</span>代码时，可能尚未确定列值。
    <span class="token keyword">where</span> 不可以使用合计函数。一般需用合计函数才会用 <span class="token keyword">having</span>
    <span class="token keyword">SQL</span>标准要求<span class="token keyword">HAVING</span>必须引用<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>子句中的列或用于合计函数中的列。
f<span class="token punctuation">.</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 子句，排序子句
    <span class="token keyword">order</span> <span class="token keyword">by</span> 排序字段<span class="token operator">/</span>别名 排序方式 <span class="token punctuation">[</span><span class="token punctuation">,</span>排序字段<span class="token operator">/</span>别名 排序方式<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    升序：<span class="token keyword">ASC</span>，降序：<span class="token keyword">DESC</span>
    支持多个字段的排序。
g<span class="token punctuation">.</span> <span class="token keyword">LIMIT</span> 子句，限制结果数量子句
    仅对处理好的结果进行数量限制。将处理好的结果的看作是一个集合，按照记录出现的顺序，索引从<span class="token number">0</span>开始。
    <span class="token keyword">limit</span> 起始位置<span class="token punctuation">,</span> 获取条数
    省略第一个参数，表示从索引<span class="token number">0</span>开始。<span class="token keyword">limit</span> 获取条数
h<span class="token punctuation">.</span> <span class="token keyword">DISTINCT</span><span class="token punctuation">,</span> <span class="token keyword">ALL</span> 选项
    <span class="token keyword">distinct</span> 去除重复记录
    默认为 <span class="token keyword">all</span><span class="token punctuation">,</span> 全部记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> UNION</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* UNION */</span> <span class="token comment">------------------</span>
      将多个<span class="token keyword">select</span>查询的结果组合成一个结果集合。
      <span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">UNION</span> <span class="token punctuation">[</span><span class="token keyword">ALL</span><span class="token operator">|</span><span class="token keyword">DISTINCT</span><span class="token punctuation">]</span> <span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
      默认 <span class="token keyword">DISTINCT</span> 方式，即所有返回的行都是唯一的
      建议，对每个<span class="token keyword">SELECT</span>查询加上小括号包裹。
      <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 排序时，需加上 <span class="token keyword">LIMIT</span> 进行结合。
      需要各<span class="token keyword">select</span>查询的字段数量一样。
      每个<span class="token keyword">select</span>查询的字段列表<span class="token punctuation">(</span>数量、类型<span class="token punctuation">)</span>应一致，因为结果中的字段名以第一条<span class="token keyword">select</span>语句为准。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 子查询 */</span> <span class="token comment">------------------</span>
    <span class="token operator">-</span> 子查询需用括号包裹。
<span class="token comment">-- from型</span>
    <span class="token keyword">from</span>后要求是一个表，必须给子查询结果取个别名。
    <span class="token operator">-</span> 简化每个查询内的条件。
    <span class="token operator">-</span> <span class="token keyword">from</span>型需将结果生成一个临时表格，可用以原表的锁定的释放。
    <span class="token operator">-</span> 子查询返回一个表，表型子查询。
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb <span class="token keyword">where</span> id<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">as</span> subfrom <span class="token keyword">where</span> id<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">-- where型</span>
    <span class="token operator">-</span> 子查询返回一个值，标量子查询。
    <span class="token operator">-</span> 不需要给子查询取别名。
    <span class="token operator">-</span> <span class="token keyword">where</span>子查询内的表，不能直接用以更新。
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb <span class="token keyword">where</span> money <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span> <span class="token keyword">from</span> tb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 列子查询</span>
        如果子查询结果返回的是一列。
        使用 <span class="token operator">in</span> 或 <span class="token operator">not</span> <span class="token operator">in</span> 完成查询
        <span class="token keyword">exists</span> 和 <span class="token operator">not</span> <span class="token keyword">exists</span> 条件
            如果子查询返回数据，则返回<span class="token number">1</span>或<span class="token number">0</span>。常用于判断条件。
            <span class="token keyword">select</span> column1 <span class="token keyword">from</span> t1 <span class="token keyword">where</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 行子查询</span>
        查询条件是一个行。
        <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t1 <span class="token keyword">where</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> gender<span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id<span class="token punctuation">,</span> gender <span class="token keyword">from</span> t2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        行构造符：<span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> 或 <span class="token keyword">ROW</span><span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
        行构造符通常用于与对能返回两个或两个以上列的子查询进行比较。
    <span class="token comment">-- 特殊运算符</span>
    <span class="token operator">!=</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    相当于 <span class="token operator">not</span> <span class="token operator">in</span>
    <span class="token operator">=</span> <span class="token keyword">some</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    相当于 <span class="token operator">in</span>。<span class="token keyword">any</span> 是 <span class="token keyword">some</span> 的别名
    <span class="token operator">!=</span> <span class="token keyword">some</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   不等同于 <span class="token operator">not</span> <span class="token operator">in</span>，不等于其中某一个。
    <span class="token keyword">all</span><span class="token punctuation">,</span> <span class="token keyword">some</span> 可以配合其他运算符一起使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接查询-join" tabindex="-1"><a class="header-anchor" href="#连接查询-join" aria-hidden="true">#</a> 连接查询(join)</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 连接查询(join) */</span> <span class="token comment">------------------</span>
    将多个表的字段进行连接，可以指定连接条件。
<span class="token comment">-- 内连接(inner join)</span>
    <span class="token operator">-</span> 默认就是内连接，可省略<span class="token keyword">inner</span>。
    <span class="token operator">-</span> 只有数据存在时才能发送连接。即连接结果不能出现空行。
    <span class="token keyword">on</span> 表示连接条件。其条件表达式与<span class="token keyword">where</span>类似。也可以省略条件（表示条件永远为真）
    也可用<span class="token keyword">where</span>表示连接条件。
    还有 <span class="token keyword">using</span><span class="token punctuation">,</span> 但需字段名相同。 <span class="token keyword">using</span><span class="token punctuation">(</span>字段名<span class="token punctuation">)</span>
    <span class="token comment">-- 交叉连接 cross join</span>
        即，没有条件的内连接。
        <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb1 <span class="token keyword">cross</span> <span class="token keyword">join</span> tb2<span class="token punctuation">;</span>
<span class="token comment">-- 外连接(outer join)</span>
    <span class="token operator">-</span> 如果数据不存在，也会出现在连接结果中。
    <span class="token comment">-- 左外连接 left join</span>
        如果数据不存在，左表记录会出现，而右表为<span class="token boolean">null</span>填充
    <span class="token comment">-- 右外连接 right join</span>
        如果数据不存在，右表记录会出现，而左表为<span class="token boolean">null</span>填充
<span class="token comment">-- 自然连接(natural join)</span>
    自动判断连接条件完成连接。
    相当于省略了<span class="token keyword">using</span>，会自动查找相同字段名。
    <span class="token keyword">natural</span> <span class="token keyword">join</span>
    <span class="token keyword">natural</span> <span class="token keyword">left</span> <span class="token keyword">join</span>
    <span class="token keyword">natural</span> <span class="token keyword">right</span> <span class="token keyword">join</span>
<span class="token keyword">select</span> info<span class="token punctuation">.</span>id<span class="token punctuation">,</span> info<span class="token punctuation">.</span>name<span class="token punctuation">,</span> info<span class="token punctuation">.</span>stu_num<span class="token punctuation">,</span> extra_info<span class="token punctuation">.</span>hobby<span class="token punctuation">,</span> extra_info<span class="token punctuation">.</span>sex <span class="token keyword">from</span> info<span class="token punctuation">,</span> extra_info <span class="token keyword">where</span> info<span class="token punctuation">.</span>stu_num <span class="token operator">=</span> extra_info<span class="token punctuation">.</span>stu_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="truncate" tabindex="-1"><a class="header-anchor" href="#truncate" aria-hidden="true">#</a> TRUNCATE</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* TRUNCATE */</span> <span class="token comment">------------------</span>
<span class="token keyword">TRUNCATE</span> <span class="token punctuation">[</span><span class="token keyword">TABLE</span><span class="token punctuation">]</span> tbl_name
清空数据
删除重建表
区别：
<span class="token number">1</span>，<span class="token keyword">truncate</span> 是删除表再创建，<span class="token keyword">delete</span> 是逐条删除
<span class="token number">2</span>，<span class="token keyword">truncate</span> 重置<span class="token keyword">auto_increment</span>的值。而<span class="token keyword">delete</span>不会
<span class="token number">3</span>，<span class="token keyword">truncate</span> 不知道删除了几条，而<span class="token keyword">delete</span>知道。
<span class="token number">4</span>，当被用于带分区的表时，<span class="token keyword">truncate</span> 会保留分区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="备份与还原" tabindex="-1"><a class="header-anchor" href="#备份与还原" aria-hidden="true">#</a> 备份与还原</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 备份与还原 */</span> <span class="token comment">------------------</span>
备份，将数据的结构与表内数据保存起来。
利用 mysqldump 指令完成。
<span class="token comment">-- 导出</span>
mysqldump <span class="token punctuation">[</span>options<span class="token punctuation">]</span> db_name <span class="token punctuation">[</span><span class="token keyword">tables</span><span class="token punctuation">]</span>
mysqldump <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token comment">---database DB1 [DB2 DB3...]</span>
mysqldump <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token comment">--all--database</span>
<span class="token number">1.</span> 导出一张表
　　mysqldump <span class="token operator">-</span>u用户名 <span class="token operator">-</span>p密码 库名 表名 <span class="token operator">&gt;</span> 文件名<span class="token punctuation">(</span>D:<span class="token operator">/</span>a<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
<span class="token number">2.</span> 导出多张表
　　mysqldump <span class="token operator">-</span>u用户名 <span class="token operator">-</span>p密码 库名 表<span class="token number">1</span> 表<span class="token number">2</span> 表<span class="token number">3</span> <span class="token operator">&gt;</span> 文件名<span class="token punctuation">(</span>D:<span class="token operator">/</span>a<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
<span class="token number">3.</span> 导出所有表
　　mysqldump <span class="token operator">-</span>u用户名 <span class="token operator">-</span>p密码 库名 <span class="token operator">&gt;</span> 文件名<span class="token punctuation">(</span>D:<span class="token operator">/</span>a<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
<span class="token number">4.</span> 导出一个库
　　mysqldump <span class="token operator">-</span>u用户名 <span class="token operator">-</span>p密码 <span class="token comment">--lock-all-tables --database 库名 &gt; 文件名(D:/a.sql)</span>
可以<span class="token operator">-</span>w携带<span class="token keyword">WHERE</span>条件
<span class="token comment">-- 导入</span>
<span class="token number">1.</span> 在登录mysql的情况下：
　　source  备份文件
<span class="token number">2.</span> 在不登录的情况下
　　mysql <span class="token operator">-</span>u用户名 <span class="token operator">-</span>p密码 库名 <span class="token operator">&lt;</span> 备份文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>什么是视图：
    视图是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含一系列带有名称的列和行数据。但是，视图并不在数据库中以存储的数据值集形式存在。行和列数据来自由定义视图的查询所引用的表，并且在引用视图时动态生成。
    视图具有表结构文件，但不存在数据文件。
    对其中所引用的基础表来说，视图的作用类似于筛选。定义视图的筛选可以来自当前或其它数据库的一个或多个表，或者其它视图。通过视图进行查询没有任何限制，通过它们进行数据修改时的限制也很少。
    视图是存储在数据库中的查询的<span class="token keyword">sql</span>语句，它主要出于两种原因：安全原因，视图可以隐藏一些数据，如：社会保险基金表，可以用视图只显示姓名，地址，而不显示社会保险号和工资数等，另一原因是可使复杂的查询易于理解和使用。
<span class="token comment">-- 创建视图</span>
<span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token operator">OR</span> <span class="token keyword">REPLACE</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">ALGORITHM</span> <span class="token operator">=</span> {<span class="token keyword">UNDEFINED</span> <span class="token operator">|</span> <span class="token keyword">MERGE</span> <span class="token operator">|</span> <span class="token keyword">TEMPTABLE</span>}<span class="token punctuation">]</span> <span class="token keyword">VIEW</span> view_name <span class="token punctuation">[</span><span class="token punctuation">(</span>column_list<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">AS</span> select_statement
    <span class="token operator">-</span> 视图名必须唯一，同时不能与表重名。
    <span class="token operator">-</span> 视图可以使用<span class="token keyword">select</span>语句查询到的列名，也可以自己指定相应的列名。
    <span class="token operator">-</span> 可以指定视图执行的算法，通过<span class="token keyword">ALGORITHM</span>指定。
    <span class="token operator">-</span> column_list如果存在，则数目必须等于<span class="token keyword">SELECT</span>语句检索的列数
<span class="token comment">-- 查看结构</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> view_name
<span class="token comment">-- 删除视图</span>
    <span class="token operator">-</span> 删除视图后，数据依然存在。
    <span class="token operator">-</span> 可同时删除多个视图。
    <span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> view_name <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 修改视图结构</span>
    <span class="token operator">-</span> 一般不修改视图，因为不是所有的更新视图都会映射到表上。
    <span class="token keyword">ALTER</span> <span class="token keyword">VIEW</span> view_name <span class="token punctuation">[</span><span class="token punctuation">(</span>column_list<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">AS</span> select_statement
<span class="token comment">-- 视图作用</span>
    <span class="token number">1.</span> 简化业务逻辑
    <span class="token number">2.</span> 对客户端隐藏真实的表结构
<span class="token comment">-- 视图算法(ALGORITHM)</span>
    <span class="token keyword">MERGE</span>       合并
        将视图的查询语句，与外部查询需要先合并再执行！
    <span class="token keyword">TEMPTABLE</span>   临时表
        将视图执行完毕后，形成临时表，再做外层查询！
    <span class="token keyword">UNDEFINED</span>   未定义<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>，指的是MySQL自主去选择相应的算法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务-transaction" tabindex="-1"><a class="header-anchor" href="#事务-transaction" aria-hidden="true">#</a> 事务(transaction)</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>事务是指逻辑上的一组操作，组成这组操作的各个单元，要不全成功要不全失败。
    <span class="token operator">-</span> 支持连续<span class="token keyword">SQL</span>的集体成功或集体撤销。
    <span class="token operator">-</span> 事务是数据库在数据完整性方面的一个功能。
    <span class="token operator">-</span> 需要利用 <span class="token keyword">InnoDB</span> 或 <span class="token keyword">BDB</span> 存储引擎，对自动提交的特性支持完成。
    <span class="token operator">-</span> <span class="token keyword">InnoDB</span>被称为事务安全型引擎。
<span class="token comment">-- 事务开启</span>
    <span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span> 或者 <span class="token keyword">BEGIN</span><span class="token punctuation">;</span>
    开启事务后，所有被执行的<span class="token keyword">SQL</span>语句均被认作当前事务内的<span class="token keyword">SQL</span>语句。
<span class="token comment">-- 事务提交</span>
    <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
<span class="token comment">-- 事务回滚</span>
    <span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
    如果部分操作发生问题，映射到事务开启前。
<span class="token comment">-- 事务的特性</span>
    <span class="token number">1.</span> 原子性（Atomicity）
        事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。
    <span class="token number">2.</span> 一致性（Consistency）
        事务前后数据的完整性必须保持一致。
        <span class="token operator">-</span> 事务开始和结束时，外部数据一致
        <span class="token operator">-</span> 在整个事务过程中，操作是连续的
    <span class="token number">3.</span> 隔离性（<span class="token keyword">Isolation</span>）
        多个用户并发访问数据库时，一个用户的事务不能被其它用户的事务所干扰，多个并发事务之间的数据要相互隔离。
    <span class="token number">4.</span> 持久性（Durability）
        一个事务一旦被提交，它对数据库中的数据改变就是永久性的。
<span class="token comment">-- 事务的实现</span>
    <span class="token number">1.</span> 要求是事务支持的表类型
    <span class="token number">2.</span> 执行一组相关的操作前开启事务
    <span class="token number">3.</span> 整组操作完成后，都成功，则提交；如果存在失败，选择回滚，则会回到事务开始的备份点。
<span class="token comment">-- 事务的原理</span>
    利用<span class="token keyword">InnoDB</span>的自动提交<span class="token punctuation">(</span>autocommit<span class="token punctuation">)</span>特性完成。
    普通的MySQL执行语句后，当前的数据提交操作均可被其他客户端可见。
    而事务是暂时关闭“自动提交”机制，需要<span class="token keyword">commit</span>提交持久化数据操作。
<span class="token comment">-- 注意</span>
    <span class="token number">1.</span> 数据定义语言（DDL）语句不能被回滚，比如创建或取消数据库的语句，和创建、取消或更改表或存储的子程序的语句。
    <span class="token number">2.</span> 事务不能被嵌套
<span class="token comment">-- 保存点</span>
    <span class="token keyword">SAVEPOINT</span> 保存点名称 <span class="token comment">-- 设置一个事务保存点</span>
    <span class="token keyword">ROLLBACK</span> <span class="token keyword">TO</span> <span class="token keyword">SAVEPOINT</span> 保存点名称 <span class="token comment">-- 回滚到保存点</span>
    <span class="token keyword">RELEASE</span> <span class="token keyword">SAVEPOINT</span> 保存点名称 <span class="token comment">-- 删除保存点</span>
<span class="token comment">-- InnoDB自动提交特性设置</span>
    <span class="token keyword">SET</span> autocommit <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">;</span>   <span class="token number">0</span>表示关闭自动提交，<span class="token number">1</span>表示开启自动提交。
    <span class="token operator">-</span> 如果关闭了，那普通操作的结果对其他客户端也不可见，需要<span class="token keyword">commit</span>提交后才能持久化数据操作。
    <span class="token operator">-</span> 也可以关闭自动提交来开启事务。但与<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span>不同的是，
        <span class="token keyword">SET</span> autocommit是永久改变服务器的设置，直到下次再次修改该设置。<span class="token punctuation">(</span>针对当前连接<span class="token punctuation">)</span>
        而<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span>记录开启前的状态，而一旦事务提交或回滚后就需要再次开启事务。<span class="token punctuation">(</span>针对当前事务<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="锁表" tabindex="-1"><a class="header-anchor" href="#锁表" aria-hidden="true">#</a> 锁表</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 锁表 */
表锁定只用于防止其它客户端进行不正当地读取和写入
MyISAM 支持表锁，InnoDB 支持行锁
-- 锁定
    LOCK TABLES tbl_name [AS alias]
-- 解锁
    UNLOCK TABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 触发器 */ ------------------
    触发程序是与表有关的命名数据库对象，当该表出现特定事件时，将激活该对象
    监听：记录的增加、修改、删除。
-- 创建触发器
CREATE TRIGGER trigger_name trigger_time trigger_event ON tbl_name FOR EACH ROW trigger_stmt
    参数：
    trigger_time是触发程序的动作时间。它可以是 before 或 after，以指明触发程序是在激活它的语句之前或之后触发。
    trigger_event指明了激活触发程序的语句的类型
        INSERT：将新行插入表时激活触发程序
        UPDATE：更改某一行时激活触发程序
        DELETE：从表中删除某一行时激活触发程序
    tbl_name：监听的表，必须是永久性的表，不能将触发程序与TEMPORARY表或视图关联起来。
    trigger_stmt：当触发程序激活时执行的语句。执行多个语句，可使用BEGIN...END复合语句结构
-- 删除
DROP TRIGGER [schema_name.]trigger_name
可以使用old和new代替旧的和新的数据
    更新操作，更新前是old，更新后是new.
    删除操作，只有old.
    增加操作，只有new.
-- 注意
    1. 对于具有相同触发程序动作时间和事件的给定表，不能有两个触发程序。
-- 字符连接函数
concat(str1,str2,...])
concat_ws(separator,str1,str2,...)
-- 分支语句
if 条件 then
    执行语句
elseif 条件 then
    执行语句
else
    执行语句
end if;
-- 修改最外层语句结束符
delimiter 自定义结束符号
    SQL语句
自定义结束符号
delimiter ;     -- 修改回原来的分号
-- 语句块包裹
begin
    语句块
end
-- 特殊的执行
1. 只要添加记录，就会触发程序。
2. Insert into on duplicate key update 语法会触发：
    如果没有重复记录，会触发 before insert, after insert;
    如果有重复记录并更新，会触发 before insert, before update, after update;
    如果有重复记录但是没有发生更新，则触发 before insert, before update
3. Replace 语法 如果有记录，则执行 before insert, before delete, after delete, after insert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-编程" tabindex="-1"><a class="header-anchor" href="#sql-编程" aria-hidden="true">#</a> SQL 编程</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* SQL编程 */ ------------------
--// 局部变量 ----------
-- 变量声明
    declare var_name[,...] type [default value]
    这个语句被用来声明局部变量。要给变量提供一个默认值，请包含一个default子句。值可以被指定为一个表达式，不需要为一个常数。如果没有default子句，初始值为null。
-- 赋值
    使用 set 和 select into 语句为变量赋值。
    - 注意：在函数内是可以使用全局变量（用户自定义的变量）
--// 全局变量 ----------
-- 定义、赋值
set 语句可以定义并为变量赋值。
set @var = value;
也可以使用select into语句为变量初始化并赋值。这样要求select语句只能返回一行，但是可以是多个字段，就意味着同时为多个变量进行赋值，变量的数量需要与查询的列数一致。
还可以把赋值语句看作一个表达式，通过select执行完成。此时为了避免=被当作关系运算符看待，使用:=代替。（set语句可以使用= 和 :=）。
select @var:=20;
select @v1:=id, @v2=name from t1 limit 1;
select * from tbl_name where @var:=30;
select into 可以将表中查询获得的数据赋给变量。
    -| select max(height) into @max_height from tb;
-- 自定义变量名
为了避免select语句中，用户自定义的变量与系统标识符（通常是字段名）冲突，用户自定义变量在变量名前使用@作为开始符号。
@var=10;
    - 变量被定义后，在整个会话周期都有效（登录到退出）
--// 控制结构 ----------
-- if语句
if search_condition then
    statement_list
[elseif search_condition then
    statement_list]
...
[else
    statement_list]
end if;
-- case语句
CASE value WHEN [compare-value] THEN result
[WHEN [compare-value] THEN result ...]
[ELSE result]
END
-- while循环
[begin_label:] while search_condition do
    statement_list
end while [end_label];
- 如果需要在循环内提前终止 while循环，则需要使用标签；标签需要成对出现。
    -- 退出循环
        退出整个循环 leave
        退出当前循环 iterate
        通过退出的标签决定退出哪个循环
--// 内置函数 ----------
-- 数值函数
abs(x)          -- 绝对值 abs(-10.9) = 10
format(x, d)    -- 格式化千分位数值 format(1234567.456, 2) = 1,234,567.46
ceil(x)         -- 向上取整 ceil(10.1) = 11
floor(x)        -- 向下取整 floor (10.1) = 10
round(x)        -- 四舍五入去整
mod(m, n)       -- m%n m mod n 求余 10%3=1
pi()            -- 获得圆周率
pow(m, n)       -- m^n
sqrt(x)         -- 算术平方根
rand()          -- 随机数
truncate(x, d)  -- 截取d位小数
-- 时间日期函数
now(), current_timestamp();     -- 当前日期时间
current_date();                 -- 当前日期
current_time();                 -- 当前时间
date(&#39;yyyy-mm-dd hh:ii:ss&#39;);    -- 获取日期部分
time(&#39;yyyy-mm-dd hh:ii:ss&#39;);    -- 获取时间部分
date_format(&#39;yyyy-mm-dd hh:ii:ss&#39;, &#39;%d %y %a %d %m %b %j&#39;); -- 格式化时间
unix_timestamp();               -- 获得unix时间戳
from_unixtime();                -- 从时间戳获得时间
-- 字符串函数
length(string)          -- string长度，字节
char_length(string)     -- string的字符个数
substring(str, position [,length])      -- 从str的position开始,取length个字符
replace(str ,search_str ,replace_str)   -- 在str中用replace_str替换search_str
instr(string ,substring)    -- 返回substring首次在string中出现的位置
concat(string [,...])   -- 连接字串
charset(str)            -- 返回字串字符集
lcase(string)           -- 转换成小写
left(string, length)    -- 从string2中的左边起取length个字符
load_file(file_name)    -- 从文件读取内容
locate(substring, string [,start_position]) -- 同instr,但可指定开始位置
lpad(string, length, pad)   -- 重复用pad加在string开头,直到字串长度为length
ltrim(string)           -- 去除前端空格
repeat(string, count)   -- 重复count次
rpad(string, length, pad)   --在str后用pad补充,直到长度为length
rtrim(string)           -- 去除后端空格
strcmp(string1 ,string2)    -- 逐字符比较两字串大小
-- 流程函数
case when [condition] then result [when [condition] then result ...] [else result] end   多分支
if(expr1,expr2,expr3)  双分支。
-- 聚合函数
count()
sum();
max();
min();
avg();
group_concat()
-- 其他常用函数
md5();
default();
--// 存储函数，自定义函数 ----------
-- 新建
    CREATE FUNCTION function_name (参数列表) RETURNS 返回值类型
        函数体
    - 函数名，应该合法的标识符，并且不应该与已有的关键字冲突。
    - 一个函数应该属于某个数据库，可以使用db_name.funciton_name的形式执行当前函数所属数据库，否则为当前数据库。
    - 参数部分，由&quot;参数名&quot;和&quot;参数类型&quot;组成。多个参数用逗号隔开。
    - 函数体由多条可用的mysql语句，流程控制，变量声明等语句构成。
    - 多条语句应该使用 begin...end 语句块包含。
    - 一定要有 return 返回值语句。
-- 删除
    DROP FUNCTION [IF EXISTS] function_name;
-- 查看
    SHOW FUNCTION STATUS LIKE &#39;partten&#39;
    SHOW CREATE FUNCTION function_name;
-- 修改
    ALTER FUNCTION function_name 函数选项
--// 存储过程，自定义功能 ----------
-- 定义
存储存储过程 是一段代码（过程），存储在数据库中的sql组成。
一个存储过程通常用于完成一段业务逻辑，例如报名，交班费，订单入库等。
而一个函数通常专注与某个功能，视为其他程序服务的，需要在其他语句中调用函数才可以，而存储过程不能被其他调用，是自己执行 通过call执行。
-- 创建
CREATE PROCEDURE sp_name (参数列表)
    过程体
参数列表：不同于函数的参数列表，需要指明参数类型
IN，表示输入型
OUT，表示输出型
INOUT，表示混合型
注意，没有返回值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 存储过程 */ ------------------
存储过程是一段可执行性代码的集合。相比函数，更偏向于业务逻辑。
调用：CALL 过程名
-- 注意
- 没有返回值。
- 只能单独调用，不可夹杂在其他语句中
-- 参数
IN|OUT|INOUT 参数名 数据类型
IN      输入：在调用过程中，将数据输入到过程体内部的参数
OUT     输出：在调用过程中，将过程体处理完的结果返回到客户端
INOUT   输入输出：既可输入，也可输出
-- 语法
CREATE PROCEDURE 过程名 (参数列表)
BEGIN
    过程体
END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户和权限管理" tabindex="-1"><a class="header-anchor" href="#用户和权限管理" aria-hidden="true">#</a> 用户和权限管理</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 用户和权限管理 */ ------------------
-- root密码重置
1. 停止MySQL服务
2.  [Linux] /usr/local/mysql/bin/safe_mysqld --skip-grant-tables &amp;
    [Windows] mysqld --skip-grant-tables
3. use mysql;
4. UPDATE \`user\` SET PASSWORD=PASSWORD(&quot;密码&quot;) WHERE \`user\` = &quot;root&quot;;
5. FLUSH PRIVILEGES;
用户信息表：mysql.user
-- 刷新权限
FLUSH PRIVILEGES;
-- 增加用户
CREATE USER 用户名 IDENTIFIED BY [PASSWORD] 密码(字符串)
    - 必须拥有mysql数据库的全局CREATE USER权限，或拥有INSERT权限。
    - 只能创建用户，不能赋予权限。
    - 用户名，注意引号：如 &#39;user_name&#39;@&#39;192.168.1.1&#39;
    - 密码也需引号，纯数字密码也要加引号
    - 要在纯文本中指定密码，需忽略PASSWORD关键词。要把密码指定为由PASSWORD()函数返回的混编值，需包含关键字PASSWORD
-- 重命名用户
RENAME USER old_user TO new_user
-- 设置密码
SET PASSWORD = PASSWORD(&#39;密码&#39;)  -- 为当前用户设置密码
SET PASSWORD FOR 用户名 = PASSWORD(&#39;密码&#39;) -- 为指定用户设置密码
-- 删除用户
DROP USER 用户名
-- 分配权限/添加用户
GRANT 权限列表 ON 表名 TO 用户名 [IDENTIFIED BY [PASSWORD] &#39;password&#39;]
    - all privileges 表示所有权限
    - *.* 表示所有库的所有表
    - 库名.表名 表示某库下面的某表
    GRANT ALL PRIVILEGES ON \`pms\`.* TO &#39;pms&#39;@&#39;%&#39; IDENTIFIED BY &#39;pms0817&#39;;
-- 查看权限
SHOW GRANTS FOR 用户名
    -- 查看当前用户权限
    SHOW GRANTS; 或 SHOW GRANTS FOR CURRENT_USER; 或 SHOW GRANTS FOR CURRENT_USER();
-- 撤消权限
REVOKE 权限列表 ON 表名 FROM 用户名
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 用户名   -- 撤销所有权限
-- 权限层级
-- 要使用GRANT或REVOKE，您必须拥有GRANT OPTION权限，并且您必须用于您正在授予或撤销的权限。
全局层级：全局权限适用于一个给定服务器中的所有数据库，mysql.user
    GRANT ALL ON *.*和 REVOKE ALL ON *.*只授予和撤销全局权限。
数据库层级：数据库权限适用于一个给定数据库中的所有目标，mysql.db, mysql.host
    GRANT ALL ON db_name.*和REVOKE ALL ON db_name.*只授予和撤销数据库权限。
表层级：表权限适用于一个给定表中的所有列，mysql.talbes_priv
    GRANT ALL ON db_name.tbl_name和REVOKE ALL ON db_name.tbl_name只授予和撤销表权限。
列层级：列权限适用于一个给定表中的单一列，mysql.columns_priv
    当使用REVOKE时，您必须指定与被授权列相同的列。
-- 权限列表
ALL [PRIVILEGES]    -- 设置除GRANT OPTION之外的所有简单权限
ALTER   -- 允许使用ALTER TABLE
ALTER ROUTINE   -- 更改或取消已存储的子程序
CREATE  -- 允许使用CREATE TABLE
CREATE ROUTINE  -- 创建已存储的子程序
CREATE TEMPORARY TABLES     -- 允许使用CREATE TEMPORARY TABLE
CREATE USER     -- 允许使用CREATE USER, DROP USER, RENAME USER和REVOKE ALL PRIVILEGES。
CREATE VIEW     -- 允许使用CREATE VIEW
DELETE  -- 允许使用DELETE
DROP    -- 允许使用DROP TABLE
EXECUTE     -- 允许用户运行已存储的子程序
FILE    -- 允许使用SELECT...INTO OUTFILE和LOAD DATA INFILE
INDEX   -- 允许使用CREATE INDEX和DROP INDEX
INSERT  -- 允许使用INSERT
LOCK TABLES     -- 允许对您拥有SELECT权限的表使用LOCK TABLES
PROCESS     -- 允许使用SHOW FULL PROCESSLIST
REFERENCES  -- 未被实施
RELOAD  -- 允许使用FLUSH
REPLICATION CLIENT  -- 允许用户询问从属服务器或主服务器的地址
REPLICATION SLAVE   -- 用于复制型从属服务器（从主服务器中读取二进制日志事件）
SELECT  -- 允许使用SELECT
SHOW DATABASES  -- 显示所有数据库
SHOW VIEW   -- 允许使用SHOW CREATE VIEW
SHUTDOWN    -- 允许使用mysqladmin shutdown
SUPER   -- 允许使用CHANGE MASTER, KILL, PURGE MASTER LOGS和SET GLOBAL语句，mysqladmin debug命令；允许您连接（一次），即使已达到max_connections。
UPDATE  -- 允许使用UPDATE
USAGE   -- “无权限”的同义词
GRANT OPTION    -- 允许授予权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表维护" tabindex="-1"><a class="header-anchor" href="#表维护" aria-hidden="true">#</a> 表维护</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 表维护 */
-- 分析和存储表的关键字分布
ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE 表名 ...
-- 检查一个或多个表是否有错误
CHECK TABLE tbl_name [, tbl_name] ... [option] ...
option = {QUICK | FAST | MEDIUM | EXTENDED | CHANGED}
-- 整理数据文件的碎片
OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 杂项 */ ------------------
1. 可用反引号（\`）为标识符（库名、表名、字段名、索引、别名）包裹，以避免与关键字重名！中文也可以作为标识符！
2. 每个库目录存在一个保存当前数据库的选项文件db.opt。
3. 注释：
    单行注释 # 注释内容
    多行注释 /* 注释内容 */
    单行注释 -- 注释内容     (标准SQL注释风格，要求双破折号后加一空格符（空格、TAB、换行等）)
4. 模式通配符：
    _   任意单个字符
    %   任意多个字符，甚至包括零字符
    单引号需要进行转义 \\&#39;
5. CMD命令行内的语句结束符可以为 &quot;;&quot;, &quot;\\G&quot;, &quot;\\g&quot;，仅影响显示结果。其他地方还是用分号结束。delimiter 可修改当前对话的语句结束符。
6. SQL对大小写不敏感
7. 清除已有语句：\\c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function u(k,v){const a=p("ExternalLinkIcon");return l(),t("div",null,[n("blockquote",null,[n("p",null,[s("原文地址："),n("a",d,[s("https://shockerli.net/post/1000-line-mysql-note/"),o(a)]),s(" ，JavaGuide 对本文进行了简答排版，新增了目录。")])]),r])}const y=e(c,[["render",u],["__file","a-thousand-lines-of-mysql-study-notes.html.vue"]]);export{y as default};
