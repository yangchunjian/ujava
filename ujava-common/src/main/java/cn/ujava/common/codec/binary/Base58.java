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

package cn.ujava.common.codec.binary;

import cn.ujava.common.exception.HutoolException;
import cn.ujava.common.exception.ValidateException;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;


/**
 * Base58工具类，提供Base58的编码和解码方案<br>
 * 参考： <a href="https://github.com/Anujraval24/Base58Encoding">https://github.com/Anujraval24/Base58Encoding</a><br>
 * 规范见：<a href="https://en.bitcoin.it/wiki/Base58Check_encoding">https://en.bitcoin.it/wiki/Base58Check_encoding</a>
 *
 * @author lin， ujava
 * @since 5.7.22
 */
public class Base58 {

	private static final int CHECKSUM_SIZE = 4;

	// -------------------------------------------------------------------- encode

	/**
	 * Base58编码<br>
	 * 包含版本位和校验位
	 *
	 * @param version 编码版本，{@code null}表示不包含版本位
	 * @param data    被编码的数组，添加校验和。
	 * @return 编码后的字符串
	 */
	public static String encodeChecked(final Integer version, final byte[] data) {
		return encode(addChecksum(version, data));
	}

	/**
	 * Base58编码
	 *
	 * @param data 被编码的数据，不带校验和。
	 * @return 编码后的字符串
	 */
	public static String encode(final byte[] data) {
		return Base58Codec.INSTANCE.encode(data);
	}
	// -------------------------------------------------------------------- decode

	/**
	 * Base58解码<br>
	 * 解码包含标志位验证和版本呢位去除
	 *
	 * @param encoded 被解码的base58字符串
	 * @return 解码后的bytes
	 * @throws ValidateException 标志位验证错误抛出此异常
	 */
	public static byte[] decodeChecked(final CharSequence encoded) throws ValidateException {
		try {
			return decodeChecked(encoded, true);
		} catch (final ValidateException ignore) {
			return decodeChecked(encoded, false);
		}
	}

	/**
	 * Base58解码<br>
	 * 解码包含标志位验证和版本呢位去除
	 *
	 * @param encoded     被解码的base58字符串
	 * @param withVersion 是否包含版本位
	 * @return 解码后的bytes
	 * @throws ValidateException 标志位验证错误抛出此异常
	 */
	public static byte[] decodeChecked(final CharSequence encoded, final boolean withVersion) throws ValidateException {
		final byte[] valueWithChecksum = decode(encoded);
		return verifyAndRemoveChecksum(valueWithChecksum, withVersion);
	}

	/**
	 * Base58解码
	 *
	 * @param encoded 被编码的base58字符串
	 * @return 解码后的bytes
	 */
	public static byte[] decode(final CharSequence encoded) {
		return Base58Codec.INSTANCE.decode(encoded);
	}

	/**
	 * 验证并去除验证位和版本位
	 *
	 * @param data        编码的数据
	 * @param withVersion 是否包含版本位
	 * @return 载荷数据
	 */
	private static byte[] verifyAndRemoveChecksum(final byte[] data, final boolean withVersion) {
		final byte[] payload = Arrays.copyOfRange(data, withVersion ? 1 : 0, data.length - CHECKSUM_SIZE);
		final byte[] checksum = Arrays.copyOfRange(data, data.length - CHECKSUM_SIZE, data.length);
		final byte[] expectedChecksum = checksum(payload);
		if (!Arrays.equals(checksum, expectedChecksum)) {
			throw new ValidateException("Base58 checksum is invalid");
		}
		return payload;
	}

	/**
	 * 数据 + 校验码
	 *
	 * @param version 版本，{@code null}表示不添加版本位
	 * @param payload Base58数据（不含校验码）
	 * @return Base58数据
	 */
	private static byte[] addChecksum(final Integer version, final byte[] payload) {
		final byte[] addressBytes;
		if (null != version) {
			addressBytes = new byte[1 + payload.length + CHECKSUM_SIZE];
			addressBytes[0] = (byte) version.intValue();
			System.arraycopy(payload, 0, addressBytes, 1, payload.length);
		} else {
			addressBytes = new byte[payload.length + CHECKSUM_SIZE];
			System.arraycopy(payload, 0, addressBytes, 0, payload.length);
		}
		final byte[] checksum = checksum(payload);
		System.arraycopy(checksum, 0, addressBytes, addressBytes.length - CHECKSUM_SIZE, CHECKSUM_SIZE);
		return addressBytes;
	}

	/**
	 * 获取校验码<br>
	 * 计算规则为对数据进行两次sha256计算，然后取{@link #CHECKSUM_SIZE}长度
	 *
	 * @param data 数据
	 * @return 校验码
	 */
	private static byte[] checksum(final byte[] data) {
		final byte[] hash = hash256(hash256(data));
		return Arrays.copyOfRange(hash, 0, CHECKSUM_SIZE);
	}

	/**
	 * 计算数据的SHA-256值
	 *
	 * @param data 数据
	 * @return sha-256值
	 */
	private static byte[] hash256(final byte[] data) {
		try {
			return MessageDigest.getInstance("SHA-256").digest(data);
		} catch (final NoSuchAlgorithmException e) {
			throw new HutoolException(e);
		}
	}
}
