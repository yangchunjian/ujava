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

package cn.ujava.common.convert.impl.stringer;

import cn.ujava.common.convert.ConvertException;
import cn.ujava.common.io.IoUtil;
import cn.ujava.common.util.CharsetUtil;

import java.io.InputStream;
import java.sql.Blob;
import java.util.function.Function;

/**
 * Blob转String
 *
 * @author ujava
 * @since 6.0.0
 */
public class BlobStringer implements Function<Object, String> {

	/**
	 * 单例
	 */
	public static ClobStringer INSTANCE = new ClobStringer();


	@Override
	public String apply(final Object o) {
		return blobToStr((Blob) o);
	}

	/**
	 * Blob字段值转字符串
	 *
	 * @param blob    {@link Blob}
	 * @return 字符串
	 * @since 5.4.5
	 */
	private static String blobToStr(final Blob blob) {
		InputStream in = null;
		try {
			in = blob.getBinaryStream();
			return IoUtil.read(in, CharsetUtil.UTF_8);
		} catch (final java.sql.SQLException e) {
			throw new ConvertException(e);
		} finally {
			IoUtil.closeQuietly(in);
		}
	}
}
