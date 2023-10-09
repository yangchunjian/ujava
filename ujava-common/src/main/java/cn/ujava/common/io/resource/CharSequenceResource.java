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
import cn.ujava.common.io.IoUtil;
import cn.ujava.common.text.StrUtil;
import cn.ujava.common.util.ByteUtil;
import cn.ujava.common.util.CharsetUtil;

import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;

/**
 * {@link CharSequence}资源，字符串做为资源
 *
 * @author ujava
 * @since 5.5.2
 */
public class CharSequenceResource implements Resource, Serializable {
	private static final long serialVersionUID = 1L;

	private final CharSequence data;
	private final CharSequence name;
	private final Charset charset;

	/**
	 * 构造，使用UTF8编码
	 *
	 * @param data 资源数据
	 */
	public CharSequenceResource(final CharSequence data) {
		this(data, null);
	}

	/**
	 * 构造，使用UTF8编码
	 *
	 * @param data 资源数据
	 * @param name 资源名称
	 */
	public CharSequenceResource(final CharSequence data, final String name) {
		this(data, name, CharsetUtil.UTF_8);
	}

	/**
	 * 构造
	 *
	 * @param data 资源数据
	 * @param name 资源名称
	 * @param charset 编码
	 */
	public CharSequenceResource(final CharSequence data, final CharSequence name, final Charset charset) {
		this.data = data;
		this.name = name;
		this.charset = charset;
	}

	@Override
	public String getName() {
		return StrUtil.str(this.name);
	}

	@Override
	public URL getUrl() {
		return null;
	}

	@Override
	public long size() {
		return data.length();
	}

	@Override
	public InputStream getStream() {
		return new ByteArrayInputStream(readBytes());
	}

	@Override
	public BufferedReader getReader(final Charset charset) {
		return IoUtil.toBuffered(new StringReader(this.data.toString()));
	}

	@Override
	public String readStr(final Charset charset) throws IORuntimeException {
		return this.data.toString();
	}

	@Override
	public byte[] readBytes() throws IORuntimeException {
		return ByteUtil.toBytes(this.data, this.charset);
	}

}
