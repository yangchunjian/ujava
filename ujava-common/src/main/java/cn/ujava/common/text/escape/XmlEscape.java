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

package cn.ujava.common.text.escape;

import cn.ujava.common.text.replacer.LookupReplacer;
import cn.ujava.common.text.replacer.ReplacerChain;

/**
 * XML特殊字符转义<br>
 * 见：<a href="https://stackoverflow.com/questions/1091945/what-characters-do-i-need-to-escape-in-xml-documents">
 *     https://stackoverflow.com/questions/1091945/what-characters-do-i-need-to-escape-in-xml-documents</a><br>
 *
 * <pre>
 * 	 &amp; (ampersand) 替换为 &amp;amp;
 * 	 &lt; (less than) 替换为 &amp;lt;
 * 	 &gt; (greater than) 替换为 &amp;gt;
 * 	 &quot; (double quote) 替换为 &amp;quot;
 * 	 ' (single quote / apostrophe) 替换为 &amp;apos;
 * </pre>
 *
 * @author ujava
 * @since 5.7.2
 */
public class XmlEscape extends ReplacerChain {
	private static final long serialVersionUID = 1L;

	protected static final String[][] BASIC_ESCAPE = { //
//			{"'", "&apos;"}, // " - single-quote
			{"\"", "&quot;"}, // " - double-quote
			{"&", "&amp;"}, // & - ampersand
			{"<", "&lt;"}, // < - less-than
			{">", "&gt;"}, // > - greater-than
	};

	/**
	 * 构造
	 */
	public XmlEscape() {
		addChain(new LookupReplacer(BASIC_ESCAPE));
	}
}
