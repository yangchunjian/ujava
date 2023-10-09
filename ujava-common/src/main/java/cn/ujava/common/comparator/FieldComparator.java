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

package cn.ujava.common.comparator;

import cn.ujava.common.lang.Assert;
import cn.ujava.common.reflect.FieldUtil;
import cn.ujava.common.text.StrUtil;

import java.lang.reflect.Field;

/**
 * Bean字段排序器<br>
 * 参阅feilong-core中的PropertyComparator
 *
 * @param <T> 被比较的Bean
 * @author ujava
 */
public class FieldComparator<T> extends FuncComparator<T> {
	private static final long serialVersionUID = 9157326766723846313L;

	/**
	 * 构造
	 *
	 * @param beanClass Bean类
	 * @param fieldName 字段名
	 */
	public FieldComparator(final Class<T> beanClass, final String fieldName) {
		this(getNonNullField(beanClass, fieldName));
	}

	/**
	 * 构造
	 *
	 * @param field 字段
	 */
	public FieldComparator(final Field field) {
		this(true, true, field);
	}


	/**
	 * 构造
	 *
	 * @param nullGreater 是否{@code null}在后
	 * @param compareSelf 在字段值相同情况下，是否比较对象本身。
	 *                    如果此项为{@code false}，字段值比较后为0会导致对象被认为相同，可能导致被去重。
	 * @param field       字段
	 */
	public FieldComparator(final boolean nullGreater, final boolean compareSelf, final Field field) {
		super(nullGreater, compareSelf, (bean) ->
			(Comparable<?>) FieldUtil.getFieldValue(bean,
				Assert.notNull(field, "Field must be not null!")));
	}

	/**
	 * 获取字段，附带检查字段不存在的问题。
	 *
	 * @param beanClass Bean类
	 * @param fieldName 字段名
	 * @return 非null字段
	 */
	private static Field getNonNullField(final Class<?> beanClass, final String fieldName) {
		final Field field = FieldUtil.getField(beanClass, fieldName);
		if (field == null) {
			throw new IllegalArgumentException(StrUtil.format("Field [{}] not found in Class [{}]", fieldName, beanClass.getName()));
		}
		return field;
	}
}
