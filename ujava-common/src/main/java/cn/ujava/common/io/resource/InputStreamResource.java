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

package cn.ujava.common.io.resource;

import cn.ujava.common.io.IORuntimeException;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.net.URL;

/**
 * 基于{@link InputStream}的资源获取器<br>
 * 注意：此对象中getUrl方法始终返回null
 *
 * @author ujava
 * @since 4.0.9
 */
public class InputStreamResource implements Resource, Serializable {
	private static final long serialVersionUID = 1L;

	private final InputStream in;
	private final String name;

	/**
	 * 构造
	 *
	 * @param in {@link InputStream}
	 */
	public InputStreamResource(final InputStream in) {
		this(in, null);
	}

	/**
	 * 构造
	 *
	 * @param in {@link InputStream}
	 * @param name 资源名称
	 */
	public InputStreamResource(final InputStream in, final String name) {
		this.in = in;
		this.name = name;
	}

	@Override
	public String getName() {
		return this.name;
	}

	@Override
	public URL getUrl() {
		return null;
	}

	@Override
	public long size() {
		try {
			return this.in.available();
		} catch (final IOException e) {
			throw new IORuntimeException(e);
		}
	}

	@Override
	public InputStream getStream() {
		return this.in;
	}
}
