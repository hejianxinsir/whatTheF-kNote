1. MySQL MY是指作者女儿名字的缩写，SQL 是结构化查询语言。

2. 能长久地存数据，就是数据库。

3. 用 image 创建请求。
```
<button id="button">打钱</button>

<script>
	button.addEventListener('click',(e)=>{
		let image = document.createElement('img')
		image.src = '/pay'
	})
</script>
```

4. SRJ 是 Server rendered javascript ，服务器返回的 JavaScript . 以前无刷新局部更新页面的方案。

5. 重要的，比如打钱，都是用 post ，以及其他防范。因为 get 容易伪造。

6. 设置端口，命令行输入 PORT=8001 node index.js

7. 耦合：关系太紧密了。比如后端要了解前端的细节，这就没必要，这样的关系就太紧密，不好==> jack.com 的后端程序员要对 fang.com 页面细节了解很清楚，这就是耦合，要有很多关注。这时候就要解耦。

8. 解耦，比如给我一个函数名，我调用一下就行，不关心函数的内容是什么。

9. 关键语句
```
${query.callbackName}.call(undefined,'success')
```

10. JSONP 是什么？用 script 标签解决网站之间的交流问题。

11. JSONP 为什么不支持 post ？一，jsonp 是动态创建 script 实现的;二，动态创建 script 只能用 get，无法用 post。

12. form 表单提交会刷新页面。

13. script 加 callback 参数就是 jsonp 了，这是简略说法。

14. // SRJ server rendered javascript 无刷新局部更新页面方案

// JSONP 精髓
${query.callbackName}.call(undefined,'success')

// json 的语法一定要加双引号

// 响应方根据查询参数 callbackName ，构造形如：
1. xxx.call(undefined,'你要的数据') // 专业写法
2. xxx('你要的数据') //小白写法

// jsonp 跟 ajax 没关系，jsonp 是动态 script

// jsonp 是动态创建 scritpt 实现的，动态创建 script 只能用 get
// 没办法用 post


JSONP 中有两个角色，一个是请求方（ A 网站的前端工程师 / 浏览器 ），另一个是响应方（ B 网站的后端工程师 / 服务器 ）。

1. 请求方动态创建 script ，script 指向响应方，并传一个查询参数 ?callback=ddd。
2. 响应方根据查询参数，构造如 ddd.call( undefined , "请求方要的数据" )  / ddd( "请求方要的数据" ) 这样的响应
3. 请求方接收到响应，并执行 ddd.call( undefined , "请求方要的数据" )。
4. 于是请求方就得到了他要的数据。

这种解决两个网站沟通的方案，就是 JSONP 。
