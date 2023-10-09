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

package cn.ujava.common.lang.builder;

import java.io.Serializable;

/**
 * 建造者模式接口定义
 *
 * @param <T> 建造对象类型
 * @author ujava
 * @since 4.2.2
 */
public interface Builder<T> extends Serializable{
	/**
	 * 构建
	 *
	 * @return 被构建的对象
	 */
	T build();
}
