/*
 * Copyright (c) 2023 ujava
 * Hutool is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          https://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

package cn.ujava.common.tree.parser;

import cn.ujava.common.map.MapUtil;
import cn.ujava.common.tree.MapTree;
import cn.ujava.common.tree.TreeNode;

import java.util.Map;

/**
 * 默认的简单转换器
 *
 * @param <T> ID类型
 * @author liangbaikai
 */
public class DefaultNodeParser<T> implements NodeParser<TreeNode<T>, T> {

	@Override
	public void parse(final TreeNode<T> treeNode, final MapTree<T> tree) {
		tree.setId(treeNode.getId());
		tree.setParentId(treeNode.getParentId());
		tree.setWeight(treeNode.getWeight());
		tree.setName(treeNode.getName());

		//扩展字段
		final Map<String, Object> extra = treeNode.getExtra();
		if(MapUtil.isNotEmpty(extra)){
			extra.forEach(tree::putExtra);
		}
	}
}
