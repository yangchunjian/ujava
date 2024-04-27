const e=JSON.parse('{"key":"v-34ffb580","path":"/synthesis/linear.html","title":"线性规划","lang":"zh-CN","frontmatter":{"title":"线性规划","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"1、线性规划 1.1 线性规划的定义 线性规划的标准形式： 其中的 c 和 x 均为 n 维列向量，A、 Aeq 为适当维数的矩阵，b 、beq 为适当维数的列向量。 例如：x1 和 x2 称为决策变量，整个式子分为了目标函数和约束条件 总之， 线性规划问题是在一组线性约束条件的限制下， 求一线性目标函数最大或最小的问题。 1.2 线性规划的解 线性规划问题的标准数学形式： 满足（4）并使（3）达到最大值的可行解称为最优解；可行解构成的域称为可行域。","head":[["meta",{"property":"og:url","content":"https://ujava.cn/synthesis/linear.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"线性规划"}],["meta",{"property":"og:description","content":"1、线性规划 1.1 线性规划的定义 线性规划的标准形式： 其中的 c 和 x 均为 n 维列向量，A、 Aeq 为适当维数的矩阵，b 、beq 为适当维数的列向量。 例如：x1 和 x2 称为决策变量，整个式子分为了目标函数和约束条件 总之， 线性规划问题是在一组线性约束条件的限制下， 求一线性目标函数最大或最小的问题。 1.2 线性规划的解 线性规划问题的标准数学形式： 满足（4）并使（3）达到最大值的可行解称为最优解；可行解构成的域称为可行域。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T14:45:18.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-04-27T14:45:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线性规划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T14:45:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1.1 线性规划的定义","slug":"_1-1-线性规划的定义","link":"#_1-1-线性规划的定义","children":[]},{"level":2,"title":"1.2 线性规划的解","slug":"_1-2-线性规划的解","link":"#_1-2-线性规划的解","children":[{"level":3,"title":"1.2.1 图解法","slug":"_1-2-1-图解法","link":"#_1-2-1-图解法","children":[]},{"level":3,"title":"1.2.2 MATLAB 解法","slug":"_1-2-2-matlab-解法","link":"#_1-2-2-matlab-解法","children":[]}]},{"level":2,"title":"1.3 可转换为线性规划的问题","slug":"_1-3-可转换为线性规划的问题","link":"#_1-3-可转换为线性规划的问题","children":[]},{"level":2,"title":"1.4 运输问题","slug":"_1-4-运输问题","link":"#_1-4-运输问题","children":[]},{"level":2,"title":"1.5 指派问题","slug":"_1-5-指派问题","link":"#_1-5-指派问题","children":[{"level":3,"title":"1.5.1 指派问题的匈牙利算法","slug":"_1-5-1-指派问题的匈牙利算法","link":"#_1-5-1-指派问题的匈牙利算法","children":[]}]},{"level":2,"title":"1.6 对偶理论与灵敏度分析","slug":"_1-6-对偶理论与灵敏度分析","link":"#_1-6-对偶理论与灵敏度分析","children":[{"level":3,"title":"1.6.1 原始问题和对偶问题","slug":"_1-6-1-原始问题和对偶问题","link":"#_1-6-1-原始问题和对偶问题","children":[]},{"level":3,"title":"4.2 灵敏度分析","slug":"_4-2-灵敏度分析","link":"#_4-2-灵敏度分析","children":[]}]},{"level":2,"title":"1.7 投资的收益和风险","slug":"_1-7-投资的收益和风险","link":"#_1-7-投资的收益和风险","children":[{"level":3,"title":"1.7.1 问题描述","slug":"_1-7-1-问题描述","link":"#_1-7-1-问题描述","children":[]},{"level":3,"title":"1.7.2 符号规定","slug":"_1-7-2-符号规定","link":"#_1-7-2-符号规定","children":[]},{"level":3,"title":"1.7.3 建模与分析","slug":"_1-7-3-建模与分析","link":"#_1-7-3-建模与分析","children":[]},{"level":3,"title":"1.7.4 模型简化","slug":"_1-7-4-模型简化","link":"#_1-7-4-模型简化","children":[]},{"level":3,"title":"1.7.5 模型的求解","slug":"_1-7-5-模型的求解","link":"#_1-7-5-模型的求解","children":[]},{"level":3,"title":"1.7.6 结果分析","slug":"_1-7-6-结果分析","link":"#_1-7-6-结果分析","children":[]}]}],"git":{"createdTime":1714229118000,"updatedTime":1714229118000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":6.13,"words":1838},"filePathRelative":"synthesis/linear.md","localizedDate":"2024年4月27日","excerpt":"<h1> 1、线性规划</h1>\\n<h2> 1.1 线性规划的定义</h2>\\n<p>线性规划的标准形式：<br>\\n</p>\\n<p>其中的 c 和 x 均为 n 维列向量，A、 Aeq 为适当维数的矩阵，b 、beq 为适当维数的列向量。</p>\\n<p>例如：x1 和 x2 称为决策变量，整个式子分为了目标函数和约束条件<br>\\n</p>\\n<p>总之， 线性规划问题是在一组<strong>线性约束条件</strong>的限制下， 求一线性目标函数最大或最小的问题。</p>\\n<h2> 1.2 线性规划的解</h2>\\n<p>线性规划问题的标准数学形式：<br>\\n</p>\\n<p>满足（4）并使（3）达到最大值的可行解称为最优解；可行解构成的域称为可行域。</p>","copyright":{"author":"UJava(ujava.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
