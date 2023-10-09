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
import cn.ujava.common.text.StrUtil;

import java.util.Locale;

/**
 *
 * {@link Locale}对象转换器<br>
 * 只提供String转换支持
 *
 * @author ujava
 * @since 4.5.2
 */
public class LocaleConverter extends AbstractConverter {
	private static final long serialVersionUID = 1L;

	@Override
	protected Locale convertInternal(final Class<?> targetClass, final Object value) {
		try {
			final String str = convertToStr(value);
			if (StrUtil.isEmpty(str)) {
				return null;
			}

			final String[] items = str.split("_");
			if (items.length == 1) {
				return new Locale(items[0]);
			}
			if (items.length == 2) {
				return new Locale(items[0], items[1]);
			}
			return new Locale(items[0], items[1], items[2]);
		} catch (final Exception e) {
			// Ignore Exception
		}
		return null;
	}

}
