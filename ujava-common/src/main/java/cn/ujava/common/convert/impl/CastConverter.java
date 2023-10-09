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
import cn.ujava.common.convert.ConvertException;

/**
 * 强转转换器
 *
 * @author ujava
 * @param <T> 强制转换到的类型
 * @since 4.0.2
 */
public class CastConverter<T> extends AbstractConverter {
	private static final long serialVersionUID = 1L;

	@Override
	protected T convertInternal(final Class<?> targetClass, final Object value) {
		// 由于在AbstractConverter中已经有类型判断并强制转换，因此当在上一步强制转换失败时直接抛出异常
		throw new ConvertException("Can not cast value to [{}]", targetClass);
	}

}
