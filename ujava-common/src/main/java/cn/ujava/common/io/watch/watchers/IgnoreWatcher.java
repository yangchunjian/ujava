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

package cn.ujava.common.io.watch.watchers;

import cn.ujava.common.io.watch.Watcher;

import java.nio.file.Path;
import java.nio.file.WatchEvent;

/**
 * 跳过所有事件处理Watcher<br>
 * 用户继承此类后实现需要监听的方法
 *
 * @author ujava
 * @since 3.1.0
 */
public class IgnoreWatcher implements Watcher {

	@Override
	public void onCreate(final WatchEvent<?> event, final Path currentPath) {
	}

	@Override
	public void onModify(final WatchEvent<?> event, final Path currentPath) {
	}

	@Override
	public void onDelete(final WatchEvent<?> event, final Path currentPath) {
	}

	@Override
	public void onOverflow(final WatchEvent<?> event, final Path currentPath) {
	}
}
