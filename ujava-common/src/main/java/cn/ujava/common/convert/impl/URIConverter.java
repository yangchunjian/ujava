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

import java.io.File;
import java.net.URI;
import java.net.URL;

/**
 * URI对象转换器
 * @author ujava
 *
 */
public class URIConverter extends AbstractConverter{
	private static final long serialVersionUID = 1L;

	@Override
	protected URI convertInternal(final Class<?> targetClass, final Object value) {
		try {
			if(value instanceof File){
				return ((File)value).toURI();
			}

			if(value instanceof URL){
				return ((URL)value).toURI();
			}
			return new URI(convertToStr(value));
		} catch (final Exception e) {
			// Ignore Exception
		}
		return null;
	}

}
