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

import cn.ujava.common.bean.BeanUtil;
import cn.ujava.common.bean.copier.ValueProvider;
import cn.ujava.common.bean.copier.provider.BeanValueProvider;
import cn.ujava.common.bean.copier.provider.MapValueProvider;
import cn.ujava.common.convert.ConvertException;
import cn.ujava.common.convert.Converter;
import cn.ujava.common.lang.Assert;
import cn.ujava.common.reflect.TypeUtil;
import cn.ujava.common.reflect.kotlin.KClassUtil;

import java.io.Serializable;
import java.lang.reflect.Type;
import java.util.Map;

/**
 * Kotlin Bean转换器，支持：
 * <pre>
 * Map =》 Bean
 * Bean =》 Bean
 * ValueProvider =》 Bean
 * </pre>
 *
 * @author ujava
 */
public class KBeanConverter implements Converter, Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 单例对象
	 */
	public static KBeanConverter INSTANCE = new KBeanConverter();

	@Override
	public Object convert(final Type targetType, final Object value) throws ConvertException {
		Assert.notNull(targetType);
		if (null == value) {
			return null;
		}

		// value本身实现了Converter接口，直接调用
		if(value instanceof Converter){
			return ((Converter) value).convert(targetType, value);
		}

		final Class<?> targetClass = TypeUtil.getClass(targetType);
		Assert.notNull(targetClass, "Target type is not a class!");

		return convertInternal(targetType, targetClass, value);
	}

	@SuppressWarnings("unchecked")
	private Object convertInternal(final Type targetType, final Class<?> targetClass, final Object value) {
		ValueProvider<String> valueProvider = null;
		if(value instanceof ValueProvider){
			valueProvider = (ValueProvider<String>) value;
		} else if(value instanceof Map){
			valueProvider = new MapValueProvider((Map<String, ?>) value);
		} else if(BeanUtil.isWritableBean(value.getClass())){
			valueProvider = new BeanValueProvider(value);
		}

		if(null != valueProvider){
			return KClassUtil.newInstance(targetClass, valueProvider);
		}

		throw new ConvertException("Unsupported source type: [{}] to [{}]", value.getClass(), targetType);
	}
}
