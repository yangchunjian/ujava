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

package cn.ujava.common.convert.impl;

import cn.ujava.common.collection.CollUtil;
import cn.ujava.common.convert.Converter;
import cn.ujava.common.reflect.TypeReference;
import cn.ujava.common.reflect.TypeUtil;

import java.lang.reflect.Type;
import java.util.Collection;

/**
 * 各种集合类转换器
 *
 * @author ujava
 * @since 3.0.8
 */
public class CollectionConverter implements Converter {

	/**
	 * 单例实体
	 */
	public static CollectionConverter INSTANCE = new CollectionConverter();

	@Override
	public Collection<?> convert(Type targetType, final Object value) {
		if (targetType instanceof TypeReference) {
			targetType = ((TypeReference<?>) targetType).getType();
		}

		return convert(targetType, TypeUtil.getTypeArgument(targetType), value);
	}

	/**
	 * 转换
	 *
	 * @param collectionType 集合类型
	 * @param elementType    集合中元素类型
	 * @param value          被转换的值
	 * @return 转换后的集合对象
	 */
	public Collection<?> convert(final Type collectionType, final Type elementType, final Object value) {
		// pr#2684，兼容EnumSet创建
		final Collection<?> collection = CollUtil.create(TypeUtil.getClass(collectionType), TypeUtil.getClass(elementType));
		return CollUtil.addAll(collection, value, elementType);
	}
}
