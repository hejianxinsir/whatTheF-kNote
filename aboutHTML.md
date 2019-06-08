## 关于 HTML

### W3C 简介
> The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web (abbreviated WWW or W3).

> Founded and currently led by Tim Berners-Lee, the consortium is made up of member organizations which maintain full-time staff for the purpose of working together in the development of standards for the World Wide Web. As of 29 May 2019, the World Wide Web Consortium (W3C) has 444 members.

> https://en.wikipedia.org/wiki/World_Wide_Web_Consortium

### MDN web 简介
> MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center, is the official Mozilla website for development documentation of web standards and Mozilla projects.

> https://en.wikipedia.org/wiki/MDN_Web_Docs

### HTML5 标签
> https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list

	根元素节
	Element	Description
	<html>	代表 HTML 或 XHTML 文档的根。其他所有元素必须是这个元素的子节点。
	文档元数据节
	Element	Description
	<head>	代表关于文档元数据的一个集合，包括脚本或样式表的链接或内容。
	<title>	定义文档的标题，将显示在浏览器的标题栏或标签页上。该元素只能包含文本，包含的标签不会被解释。
	<base>	定义页面上相对 URL 的基准 URL。
	<link>	用于链接外部的 CSS 到该文档。
	<meta>	定义其他 HTML 元素无法描述的元数据。
	<style>	用于内联 CSS。

	脚本节
	Element	Description
	<script>	定义一个内联脚本或链接到外部脚本。脚本语言是 JavaScript。
	<noscript>	定义当浏览器不支持脚本时显示的替代文字。
	<template>这个元素在 HTML5 中加入	通过 JavaScript 在运行时实例化内容的容器。

	章节节
	Element	Description
	<body>	
	代表 HTML 文档的内容。在文档中只能有一个 <body> 元素。
	<section> 这个元素在 HTML5 中加入	定义文档中的一个章节。
	<nav> 这个元素在 HTML5 中加入	定义只包含导航链接的章节。
	<article> 这个元素在 HTML5 中加入	定义可以独立于内容其余部分的完整独立内容块。
	<aside> 这个元素在 HTML5 中加入	定义和页面内容关联度较低的内容——如果被删除，剩下的内容仍然很合理。
	<h1>,<h2>,<h3>,<h4>,<h5>,<h6>	标题元素实现了六层文档标题，<h1> 是最大的标题，<h6> 是最小的标题。标题元素简要地描述章节的主题。
	<header> 这个元素在 HTML5 中加入	定义页面或章节的头部。它经常包含 logo、页面标题和导航性的目录。
	<footer> 这个元素在 HTML5 中加入	定义页面或章节的尾部。它经常包含版权信息、法律信息链接和反馈建议用的地址。
	<address>	定义包含联系信息的一个章节。
	<main>这个元素在 HTML5 中加入	定义文档中主要或重要的内容。

	组织内容节
	Element	Description
	<p>	定义一个段落。
	<hr>	代表章节、文章或其他长内容中段落之间的分隔符。
	<pre>	代表其内容已经预先排版过，格式应当保留 。
	<blockquote>	代表引用自其他来源的内容。
	<ol>	定义一个有序列表。
	<ul>	定义一个无序列表。
	<li>	定义列表中的一个列表项。
	<dl>	定义一个定义列表（一系列术语和其定义）。
	<dt>	代表一个由下一个 <dd> 定义的术语。
	<dd>	代表出现在它之前术语的定义。
	<figure> 这个元素在 HTML5 中加入	代表一个和文档有关的图例。
	<figcaption> 这个元素在 HTML5 中加入	代表一个图例的说明。
	<div>	代表一个通用的容器，没有特殊含义。

	文字形式节
	Element	Description
	<a>	代表一个链接到其他资源的超链接 。
	<em>	代表强调 文字。
	<strong>	代表特别重要 文字。
	<small>	代表注释 ，如免责声明、版权声明等，对理解文档不重要。
	<s>	代表不准确或不相关 的内容。
	<cite>	代表作品标题 。
	<q>	代表内联的引用 。
	<dfn>	代表一个术语包含在其最近祖先内容中的定义 。
	<abbr>	代表省略 或缩写 ，其完整内容在 title 属性中。
	<data> 这个元素在 HTML5 中加入	关联一个内容的机器可读的等价形式 （该元素只在 WHATWG 版本的 HTML 标准中，不在 W3C 版本的 HTML5 标准中）。
	<time> 这个元素在 HTML5 中加入	代表日期 和时间 值；机器可读的等价形式通过 datetime 属性指定。
	<code>	代表计算机代码 。
	<var>	代表代码中的变量 。
	<samp>	代表程序或电脑的输出 。
	<kbd>	代表用户输入 ，一般从键盘输出，但也可以代表其他输入，如语音输入。
	<sub>,<sup>	分别代表下标 和上标 。
	<i>	代表一段不同性质 的文字，如技术术语、外文短语等。
	<b>	代表一段需要被关注 的文字。
	<u>	代表一段需要下划线呈现的文本注释，如标记出拼写错误的文字等。
	<mark> 这个元素在 HTML5 中加入	代表一段需要被高亮的引用 文字。
	<ruby> 这个元素在 HTML5 中加入	代表被ruby 注释 标记的文本，如中文汉字和它的拼音。
	<rt> 这个元素在 HTML5 中加入	代表ruby 注释 ，如中文拼音。
	<rp> 这个元素在 HTML5 中加入	代表 ruby 注释两边的额外插入文本 ，用于在不支持 ruby 注释显示的浏览器中提供友好的注释显示。
	<bdi> 这个元素在 HTML5 中加入	代表需要脱离 父元素文本方向的一段文本。它允许嵌入一段不同或未知文本方向格式的文本。
	<bdo>	指定子元素的文本方向 ，显式地覆盖默认的文本方向。
	<span>	代表一段没有特殊含义的文本，当其他语义元素都不适合文本时候可以使用该元素。
	<br>	代表换行 。
	<wbr> 这个元素在 HTML5 中加入	代表建议换行 (Word Break Opportunity) ，当文本太长需要换行时将会在此处添加换行符。

	编辑节
	Element	Description
	<ins>	定义增加 到文档的内容。
	<del>	定义从文档移除 的内容。

	嵌入内容节
	Element	Description
	<img>	代表一张图片 。
	<iframe>	代表一个内联的框架 。
	<embed> 这个元素在 HTML5 中加入	代表一个嵌入 的外部资源，如应用程序或交互内容。
	<object>	代表一个外部资源 ，如图片、HTML 子文档、插件等。
	<param>	代表 <object> 元素所指定的插件的参数 。
	<video> 这个元素在 HTML5 中加入	代表一段视频 及其视频文件和字幕，并提供了播放视频的用户界面。
	<audio> 这个元素在 HTML5 中加入	代表一段声音 ，或音频流 。
	<source> 这个元素在 HTML5 中加入	为 <video> 或 <audio> 这类媒体元素指定媒体源 。
	<track> 这个元素在 HTML5 中加入	为 <video> 或 <audio> 这类媒体元素指定文本轨道（字幕） 。
	<canvas> 这个元素在 HTML5 中加入	代表位图区域 ，可以通过脚本在它上面实时呈现图形，如图表、游戏绘图等。
	<map>	与 <area> 元素共同定义图像映射 区域。
	<area>	与 <map> 元素共同定义图像映射 区域。
	<svg> 这个元素在 HTML5 中加入	定义一个嵌入式矢量图 。
	<math> 这个元素在 HTML5 中加入	定义一段数学公式 。

	表格节
	Element	Description
	<table>	定义多维数据 。
	<caption>	代表表格的标题 。
	<colgroup>	代表表格中一组单列或多列 。
	<col>	代表表格中的列 。
	<tbody>	代表表格中一块具体数据 （表格主体）。
	<thead>	代表表格中一块列标签 （表头）。
	<tfoot>	代表表格中一块列摘要 （表尾）。
	<tr>	代表表格中的行 。
	<td>	代表表格中的单元格 。
	<th>	代表表格中的头部单元格 。

	表单节
	Element	Description
	<form>	代表一个表单 ，由控件组成。
	<fieldset>	代表控件组 。
	<legend>	代表 <fieldset> 控件组的标题 。
	<label>	代表表单控件的标题 。
	<input>	代表允许用户编辑数据的数据区 （文本框、单选框、复选框等）。
	<button>	代表按钮 。
	<select>	代表下拉框 。
	<datalist> 这个元素在 HTML5 中加入	代表提供给其他控件的一组预定义选项 。
	<optgroup>	代表一个选项分组 。
	<option>	代表一个 <select> 元素或 <datalist> 元素中的一个选项
	<textarea>	代表多行文本框 。
	<keygen> 这个元素在 HTML5 中加入	代表一个密钥对生成器 控件。
	<output> 这个元素在 HTML5 中加入	代表计算值 。
	<progress> 这个元素在 HTML5 中加入	代表进度条 。
	<meter> 这个元素在 HTML5 中加入	代表滑动条 。

	交互元素节
	Element	Description
	<details> 这个元素在 HTML5 中加入	代表一个用户可以(点击)获取额外信息或控件的小部件 。
	<summary> 这个元素在 HTML5 中加入	代表 <details> 元素的综述 或标题 。
	<menuitem> 这个元素在 HTML5 中加入	代表一个用户可以点击的菜单项。
	<menu> 这个元素在 HTML5 中加入	代表菜单。

	另请参阅节
	一系列 HTML5 文档。
	所有 HTML 标签的参考，包括 HTML5 中不再有效的元素。

### 空标签/空元素
> https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%A9%BA%E5%85%83%E7%B4%A0

> 定义：一个空元素（empty element）可能是 HTML，SVG，或者 MathML 里的一个不可能存在子节点（例如内嵌的元素或者元素内的文本）的element。//简单理解：没有闭合的标签称为空标签。

> 常见的空元素有：
<area>
<base>
<br>
<col>
<colgroup> when the span is present
<command>
<embed>
<hr>
<img>
<input>
<keygen>
<link>
<meta>
<param>
<source>
<track>
<wbr>

### 可替换元素 replaced element
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element

> 在 CSS 中，可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <iframe> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。

CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。有关详细信息，请参阅本文下面的控制内容框中的对象位置。

典型的可替换元素有：

<iframe>
<video>
<embed>
<img>

有些元素仅在特定情况下被作为可替换元素处理，例如：

<option>
<audio>
<canvas>
<object>
<applet>
