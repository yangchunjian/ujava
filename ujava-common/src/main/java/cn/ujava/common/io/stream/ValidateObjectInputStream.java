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

package cn.ujava.common.io.stream;

import cn.ujava.common.collection.CollUtil;

import java.io.*;
import java.util.HashSet;
import java.util.Set;

/**
 * 带有类验证的对象流，用于避免反序列化漏洞<br>
 * 详细见：https://xz.aliyun.com/t/41/
 *
 * @author ujava
 * @since 5.2.6
 */
public class ValidateObjectInputStream extends ObjectInputStream {

	private Set<String> whiteClassSet;
	private Set<String> blackClassSet;

	/**
	 * 构造
	 *
	 * @param inputStream 流
	 * @param acceptClasses 白名单的类
	 * @throws IOException IO异常
	 */
	public ValidateObjectInputStream(final InputStream inputStream, final Class<?>... acceptClasses) throws IOException {
		super(inputStream);
		accept(acceptClasses);
	}

	/**
	 * 禁止反序列化的类，用于反序列化验证
	 *
	 * @param refuseClasses 禁止反序列化的类
	 * @since 5.3.5
	 */
	public void refuse(final Class<?>... refuseClasses) {
		if(null == this.blackClassSet){
			this.blackClassSet = new HashSet<>();
		}
		for (final Class<?> acceptClass : refuseClasses) {
			this.blackClassSet.add(acceptClass.getName());
		}
	}

	/**
	 * 接受反序列化的类，用于反序列化验证
	 *
	 * @param acceptClasses 接受反序列化的类
	 */
	public void accept(final Class<?>... acceptClasses) {
		if(null == this.whiteClassSet){
			this.whiteClassSet = new HashSet<>();
		}
		for (final Class<?> acceptClass : acceptClasses) {
			this.whiteClassSet.add(acceptClass.getName());
		}
	}

	/**
	 * 只允许反序列化SerialObject class
	 */
	@Override
	protected Class<?> resolveClass(final ObjectStreamClass desc) throws IOException, ClassNotFoundException {
		validateClassName(desc.getName());
		return super.resolveClass(desc);
	}

	/**
	 * 验证反序列化的类是否合法
	 * @param className 类名
	 * @throws InvalidClassException 非法类
	 */
	private void validateClassName(final String className) throws InvalidClassException {
		// 黑名单
		if(CollUtil.isNotEmpty(this.blackClassSet)){
			if(this.blackClassSet.contains(className)){
				throw new InvalidClassException("Unauthorized deserialization attempt by black list", className);
			}
		}

		if(CollUtil.isEmpty(this.whiteClassSet)){
			return;
		}
		if(className.startsWith("java.")){
			// java中的类默认在白名单中
			return;
		}
		if(this.whiteClassSet.contains(className)){
			return;
		}

		throw new InvalidClassException("Unauthorized deserialization attempt", className);
	}
}
