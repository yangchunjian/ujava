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

package cn.ujava.common.reflect.method;

import cn.ujava.common.exception.ExceptionUtil;
import cn.ujava.common.exception.HutoolException;
import cn.ujava.common.lang.Assert;
import cn.ujava.common.reflect.lookup.LookupUtil;

import java.lang.invoke.MethodHandle;
import java.lang.reflect.Method;

/**
 * 方法句柄{@link MethodHandle}封装工具类<br>
 * 方法句柄是一个有类型的，可以直接执行的指向底层方法、构造器、field等的引用，可以简单理解为函数指针，它是一种更加底层的查找、调整和调用方法的机制。
 *
 * <p>
 * {@link MethodHandle}类似于C/C++的函数指针，用于模拟在字节码层次的方法调用，且可以采用字节码优化，优于反射。
 * </p>
 * <p>
 * 参考：
 * <ul>
 *     <li><a href="https://stackoverflow.com/questions/22614746/how-do-i-invoke-java-8-default-methods-reflectively">
 *         https://stackoverflow.com/questions/22614746/how-do-i-invoke-java-8-default-methods-reflectively</a></li>
 * </ul>
 *
 * @author ujava
 * @since 5.7.7
 */
public class MethodHandleUtil {

	/**
	 * 执行方法句柄，{@link MethodHandle#invoke(Object...)}包装<br>
	 *
	 * @param methodHandle {@link MethodHandle}
	 * @param args         方法参数值，支持子类转换和自动拆装箱
	 * @param <T>          返回值类型
	 * @return 方法返回值
	 */
	@SuppressWarnings("unchecked")
	public static <T> T invokeHandle(final MethodHandle methodHandle, final Object... args) {
		try {
			return (T) methodHandle.invokeWithArguments(args);
		} catch (final Throwable e) {
			throw ExceptionUtil.wrapRuntime(e);
		}
	}

	/**
	 * 执行接口或对象中的方法<br>
	 *
	 * <pre class="code">
	 *     interface Duck {
	 *         default String quack() {
	 *             return "Quack";
	 *         }
	 *     }
	 *     Duck duck = (Duck) Proxy.newProxyInstance(
	 *         ClassLoaderUtil.getClassLoader(),
	 *         new Class[] { Duck.class },
	 *         MethodHandleUtil::invoke);
	 * </pre>
	 *
	 * @param <T>       返回结果类型
	 * @param obj       接口的子对象或代理对象
	 * @param method    方法
	 * @param args      参数，自动根据{@link Method}定义类型转换
	 * @return 结果
	 * @throws HutoolException 执行异常包装
	 */
	public static <T> T invoke(final Object obj, final Method method, final Object... args) throws HutoolException{
		Assert.notNull(method, "Method must be not null!");
		return invokeExact(obj, method, MethodUtil.actualArgs(method, args));
	}

	/**
	 * 执行接口或对象中的方法，参数类型不做转换，必须与方法参数类型完全匹配<br>
	 *
	 * <pre class="code">
	 *     interface Duck {
	 *         default String quack() {
	 *             return "Quack";
	 *         }
	 *     }
	 *     Duck duck = (Duck) Proxy.newProxyInstance(
	 *         ClassLoaderUtil.getClassLoader(),
	 *         new Class[] { Duck.class },
	 *         MethodHandleUtil::invoke);
	 * </pre>
	 *
	 * @param <T>       返回结果类型
	 * @param obj       接口的子对象或代理对象
	 * @param method    方法
	 * @param args      参数
	 * @return 结果
	 * @throws HutoolException 执行异常包装
	 */
	@SuppressWarnings("unchecked")
	public static <T> T invokeExact(final Object obj, final Method method, final Object... args) throws HutoolException{
		Assert.notNull(method, "Method must be not null!");
		try {
			MethodHandle handle = LookupUtil.unreflectMethod(method);
			if (null != obj) {
				handle = handle.bindTo(obj);
			}
			return (T) handle.invokeWithArguments(args);
		} catch (final Throwable e) {
			throw ExceptionUtil.wrapRuntime(e);
		}
	}
}
