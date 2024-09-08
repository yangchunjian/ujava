import{_ as n,o as a,c as e,a as t}from"./app-n5UnoUpV.js";const p={};function o(r,s){return a(),e("div",null,s[0]||(s[0]=[t(`<p>在MySQL中，死锁通常发生在多个事务相互占用对方需要的资源，导致每个事务都在等待其他事务释放资源时无法向前推进。</p><p>解决死锁问题通常需要调整事务的隔离级别、保持事务尽可能短、避免事务中的锁竞争、使用索引来加快查询速度，并确保应用程序能够处理事务回滚。</p><p>以下是一个简单的例子，演示如何通过索引来减少死锁的可能性：</p><p>假设有两个表 <code>orders</code> 和 <code>inventory</code>，以下SQL可能导致死锁：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 事务A</span>
<span class="token keyword">BEGIN</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> orders <span class="token keyword">SET</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token string">&#39;shipped&#39;</span> <span class="token keyword">WHERE</span> order_id <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> inventory <span class="token keyword">SET</span> quantity <span class="token operator">=</span> quantity <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">WHERE</span> product_id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 事务B</span>
<span class="token keyword">BEGIN</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> inventory <span class="token keyword">SET</span> quantity <span class="token operator">=</span> quantity <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">WHERE</span> product_id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> orders <span class="token keyword">SET</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token string">&#39;shipped&#39;</span> <span class="token keyword">WHERE</span> order_id <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了减少死锁的风险，可以确保对于经常出现在一起的操作的字段建立索引：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 对order_id字段在orders表上建立索引</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> orders <span class="token keyword">ADD</span> <span class="token keyword">INDEX</span> <span class="token punctuation">(</span>order_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 对product_id字段在inventory表上建立索引</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> inventory <span class="token keyword">ADD</span> <span class="token keyword">INDEX</span> <span class="token punctuation">(</span>product_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引可以帮助数据库优化查询，并且通常按顺序存储数据，减少了不同事务之间互相锁定对方所需资源的可能性。</p><p>此外，确保事务尽可能小，并尽快提交，也有助于减少死锁的发生。</p>`,9)]))}const l=n(p,[["render",o],["__file","mysqllocksql.html.vue"]]),i=JSON.parse(`{"path":"/synthesis/mysqllocksql.html","title":"MySQL死锁SQL","lang":"zh-CN","frontmatter":{"title":"MySQL死锁SQL","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"在MySQL中，死锁通常发生在多个事务相互占用对方需要的资源，导致每个事务都在等待其他事务释放资源时无法向前推进。 解决死锁问题通常需要调整事务的隔离级别、保持事务尽可能短、避免事务中的锁竞争、使用索引来加快查询速度，并确保应用程序能够处理事务回滚。 以下是一个简单的例子，演示如何通过索引来减少死锁的可能性： 假设有两个表 orders 和 inven...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/synthesis/mysqllocksql.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"MySQL死锁SQL"}],["meta",{"property":"og:description","content":"在MySQL中，死锁通常发生在多个事务相互占用对方需要的资源，导致每个事务都在等待其他事务释放资源时无法向前推进。 解决死锁问题通常需要调整事务的隔离级别、保持事务尽可能短、避免事务中的锁竞争、使用索引来加快查询速度，并确保应用程序能够处理事务回滚。 以下是一个简单的例子，演示如何通过索引来减少死锁的可能性： 假设有两个表 orders 和 inven..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-24T02:36:00.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-04-24T02:36:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL死锁SQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-24T02:36:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1713926160000,"updatedTime":1713926160000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":1.2,"words":360},"filePathRelative":"synthesis/mysqllocksql.md","localizedDate":"2024年4月24日","excerpt":"<p>在MySQL中，死锁通常发生在多个事务相互占用对方需要的资源，导致每个事务都在等待其他事务释放资源时无法向前推进。</p>\\n<p>解决死锁问题通常需要调整事务的隔离级别、保持事务尽可能短、避免事务中的锁竞争、使用索引来加快查询速度，并确保应用程序能够处理事务回滚。</p>\\n<p>以下是一个简单的例子，演示如何通过索引来减少死锁的可能性：</p>\\n<p>假设有两个表&nbsp;<code>orders</code>&nbsp;和&nbsp;<code>inventory</code>，以下SQL可能导致死锁：</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 事务A</span>\\n<span class=\\"token keyword\\">BEGIN</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">UPDATE</span> orders <span class=\\"token keyword\\">SET</span> <span class=\\"token keyword\\">status</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'shipped'</span> <span class=\\"token keyword\\">WHERE</span> order_id <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">UPDATE</span> inventory <span class=\\"token keyword\\">SET</span> quantity <span class=\\"token operator\\">=</span> quantity <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span> <span class=\\"token keyword\\">WHERE</span> product_id <span class=\\"token operator\\">=</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">COMMIT</span><span class=\\"token punctuation\\">;</span>\\n \\n<span class=\\"token comment\\">-- 事务B</span>\\n<span class=\\"token keyword\\">BEGIN</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">UPDATE</span> inventory <span class=\\"token keyword\\">SET</span> quantity <span class=\\"token operator\\">=</span> quantity <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span> <span class=\\"token keyword\\">WHERE</span> product_id <span class=\\"token operator\\">=</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">UPDATE</span> orders <span class=\\"token keyword\\">SET</span> <span class=\\"token keyword\\">status</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'shipped'</span> <span class=\\"token keyword\\">WHERE</span> order_id <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">COMMIT</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{l as comp,i as data};