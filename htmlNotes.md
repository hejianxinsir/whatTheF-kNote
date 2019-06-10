### 零碎笔记

1. <div></div><span></span>, 这两个标签是没有语义的，没有任何意义。所以一般要加一个 class 。

2. HTML5 兼容 HTML 4.01 和 XHTML。我们学的就是 HTML5 。

3. head,body 标签都可以省略，具体原因查看文档。

4. 常见标签有:a form input button h1 p ul ol small div span kbd video audio svg . 除了 div 和 span 标签，其他标签都有默认样式。

5. html 标签没有块级元素和内联元素的区分；在 css 里才有这种区分。html 只管内容，不管样式。css 才管样式。

6. main 标签，网页的主要内容用 main 标签。

7. 
ul: unordered list
ol: ordered list
li: list item
dd: definition description
dt: definition term
dl: definition list
hr: horizontal rule
href: hypertext reference

8. 可替换标签：比如 img 标签，里面有 src=‘xxx.png’ , 浏览器就会下载这个 png 去替换这个标签。同时，这个 png 本身就有宽高，不一定需要 CSS 来控制宽高。// img 标签可以用属性来覆盖本身的宽高，在这个基础上再用 css ，css 又会覆盖属性里的宽高。也就是说 css 的优先级高于属性。

9. <div comtenteditable='true'>你好</div> contenteditable 属性，顾名思义，表示可修改内容。

10. iframe 是在页面里嵌套其他页面的，比如可以这样写：
> <iframe src='http://qq.com' frameborder=0></iframe> 在 css 里可以给宽度 100% ，但高度不能给 100% 。css 里宽度和高度很不一样。

> iframe 很慢，因为它是新开一个窗口，一个窗口要做的事它都要做。另，iframe 和 a 标签一起使用：

```
<iframe name=xxx src=# frameborder=0></iframe>
<a target=xxx href='http://baidu.com'>百度</a>
<a target=xxx href='http://qq.com'>QQ</a>
意思是，iframe 是一个窗口，百度和qq两个网站都在 iframe 里打开，这就是 target=xxx 的作用。

```

11. 伪协议：实现功能是，点击 a 标签，没有任何变化。
```
<a href='javascript:;'>你好</a>
```
12. a 标签的 href 可以接很多东西，比如:
> 1. //qq.com 2. #xxx   ?name=qqq   ./xxx.html  3. javascript:alert(1)    javascript:;  

13. iframe 经常跟 a 标签一起使用：
```
<iframe name='xxx' src='一个链接' frameborder=0></iframe>
<a href='' target='xxx'>hello</a>
```

14. 关于 a 标签
```
<a href='#' target='_blank _self _parent _top'>hello</a>
<a href='#' download>hehe</a>
```

a 标签可以下载，可以跳转链接。那怎么确定是下载还是跳链接呢？第一种根据 http 里的 comtent-type，第二种根据这个download。

15. a 标签和 form 标签都可以跳转页面，他们的区别是，a 标签发起 get 请求，form 标签发起 post 请求。

16. form 标签里必须有 input 提交按钮，否则无法提交。

17. 如果一个 form 里只有一个按钮（button），<button></button> ，它会自动升级为 submit(提交) 按钮。如果<button type="button"></button>，它就是个普通按钮，不是提交按钮。提交按钮可以是<input type='submit' value='button'>。



