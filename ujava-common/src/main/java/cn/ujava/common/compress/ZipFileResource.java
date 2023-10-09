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

package cn.ujava.common.compress;

import cn.ujava.common.io.IoUtil;

import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.function.Consumer;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

/**
 * {@link ZipFile} 资源包装
 *
 * @author ujava
 * @since 6.0.0
 */
public class ZipFileResource implements ZipResource {

	private final ZipFile zipFile;

	/**
	 * 构造
	 *
	 * @param zipFile {@link ZipFile}
	 */
	public ZipFileResource(final ZipFile zipFile) {
		this.zipFile = zipFile;
	}

	@Override
	public void read(final Consumer<ZipEntry> consumer, final int maxSizeDiff) {
		final Enumeration<? extends ZipEntry> em = zipFile.entries();
		while (em.hasMoreElements()) {
			consumer.accept(ZipSecurityUtil.checkZipBomb(em.nextElement(), maxSizeDiff));
		}
	}

	@Override
	public InputStream get(final String path){
		final ZipFile zipFile = this.zipFile;
		final ZipEntry entry = zipFile.getEntry(path);
		if (null != entry) {
			return ZipUtil.getStream(zipFile, entry);
		}
		return null;
	}

	@Override
	public InputStream get(final ZipEntry entry) {
		return ZipUtil.getStream(this.zipFile, entry);
	}

	@Override
	public void close() throws IOException {
		IoUtil.closeQuietly(this.zipFile);
	}
}
