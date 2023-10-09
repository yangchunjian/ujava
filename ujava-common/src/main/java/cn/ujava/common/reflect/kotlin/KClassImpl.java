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

package cn.ujava.common.reflect.kotlin;

import cn.ujava.common.classloader.ClassLoaderUtil;
import cn.ujava.common.reflect.ConstructorUtil;
import cn.ujava.common.reflect.method.MethodUtil;

import java.lang.reflect.Method;
import java.util.List;

/**
 * kotlin.reflect.jvm.internal.KClassImpl包装
 *
 * @author VampireAchao, ujava
 */
public class KClassImpl {
	private static final Class<?> KCLASS_IMPL_CLASS;
	private static final Method METHOD_GET_CONSTRUCTORS;

	static {
		KCLASS_IMPL_CLASS = ClassLoaderUtil.loadClass("kotlin.reflect.jvm.internal.KClassImpl");
		METHOD_GET_CONSTRUCTORS = MethodUtil.getMethod(KCLASS_IMPL_CLASS, "getConstructors");
	}

	/**
	 * 获取Kotlin类的所有构造方法
	 *
	 * @param targetType kotlin类
	 * @return 构造列表
	 */
	public static List<?> getConstructors(final Class<?> targetType) {
		final Object kClassImpl = ConstructorUtil.newInstance(KCLASS_IMPL_CLASS, targetType);
		return MethodUtil.invoke(kClassImpl, METHOD_GET_CONSTRUCTORS);
	}
}
