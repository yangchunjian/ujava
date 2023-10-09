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

import cn.ujava.common.convert.AbstractConverter;
import cn.ujava.common.convert.CompositeConverter;
import cn.ujava.common.reflect.TypeUtil;
import cn.ujava.common.text.StrUtil;

import java.lang.ref.Reference;
import java.lang.ref.SoftReference;
import java.lang.ref.WeakReference;
import java.lang.reflect.Type;

/**
 * {@link Reference}转换器
 *
 * @author ujava
 * @since 3.0.8
 */
@SuppressWarnings("rawtypes")
public class ReferenceConverter extends AbstractConverter {
	private static final long serialVersionUID = 1L;

	public static ReferenceConverter INSTANCE = new ReferenceConverter();

	@SuppressWarnings("unchecked")
	@Override
	protected Reference<?> convertInternal(final Class<?> targetClass, final Object value) {

		//尝试将值转换为Reference泛型的类型
		Object targetValue = null;
		final Type paramType = TypeUtil.getTypeArgument(targetClass);
		if(!TypeUtil.isUnknown(paramType)){
			targetValue = CompositeConverter.getInstance().convert(paramType, value);
		}
		if(null == targetValue){
			targetValue = value;
		}

		if(targetClass == WeakReference.class){
			return new WeakReference(targetValue);
		}else if(targetClass == SoftReference.class){
			return new SoftReference(targetValue);
		}

		throw new UnsupportedOperationException(StrUtil.format("Unsupport Reference type: {}", targetClass.getName()));
	}

}
