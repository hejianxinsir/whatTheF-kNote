1. new XMLHttpRequest
```
let request = new XMLHttpRequest()
request.open('GET','/xxx')	// open 是初始化，括号接方法和路径。
request.send()

// 请求可以随便设置 get post delete 等等
```

2. readyState 中 4 代表整个请求过程完毕。另外，响应头、响应状态是分步返回的，不是一次性返回。因为要下载的东西可能很大，要分步返回。

3. request.onreadystatechange = ()=>{} 全小写，readystate 一变，我就能做点什么。如果把 onreadystatechange 放在代码后面，改变可能捕捉不到，因为前面的代码已经走完了才走到这里，已经变化了你才问有没有变化，就晚了。所以要尽量往上面放这个代码。

4. 用 DOM 可以操作页面，也可以操作服务器返回给你的 XML .

5. JSON 是一门新的语言，是一门轻量级的数据交换语言。与 JavaScript 是两码事。但是JSON 抄袭了部分 JavaScript。

6. JSON 语法
- string 字符串必须用双引号包起来 "frank"
- object 这样写 {"frank": 18}

7. JS VS JSON
- undefined  没有
- null       null
- ['a','b']    ["a","b"]
- function fn(){}	没有
- {name: 'frank'}	{"name":"frank"}
- var a = {} a.self = a		搞不定，没有变量
- {__proto__}		没有原型链
- 他们是两门语言，JSON 抄袭 JS 

8. AJAX 中,把符合 JSON 语法的字符串转成符合 JS 的值
```
let string = request.responseText
let object = window.JSON.parse(string)
console.log(typeof object)
console.log(object)
```

9. 同源策略
例如，如果你的 js 不是 www.baidu.com 页面里的，就不能向百度发送 AJAX 请求。只有域名、协议、端口完全一样才允许发 AJAX 请求。

http://baidu.com 可以向 http://www.baidu.com 发 AJAX 请求吗？当然不行，这两者不是完全一样的。

http://baidu.com:80 可以向 http://baidu.com:81 发 AJAX 请求吗？当然不行，端口又不一样。

10. CORS 可以告诉浏览器，我俩一家的，别阻止访问。jack 后台加一句
```
response.setHeader('Access-Control-Allow-Origin','http://frank.com:8001')
``` 
意思是，frank.com 是我朋友，浏览器你别阻止他访问。这是后台加的一个响应头。

11. JSONP 不能 post , 最好用 CORS , 因为 CORS 什么请求都能发，post delet put ... 另一个网站的后台应该要一个接口就加一个接口，不能在全网站加 CORS 头，你允许全网站加，那不是很危险？

12. CORS 全称 Cross-Origin Resource Sharing  跨源资源共享、跨站资源共享

13. 什么是 AJAX Async javascript and XML . 简单说，用 js 发请求，用 js 处理响应就是 AJAX. AJAX 很安全，因为有同源策略。要突破同源策略那就是跨域，告诉浏览器这是我兄弟，不要阻止他。
- 使用了 XMLHttpRequest
- 服务器返回 XML 格式的字符串（后来用 JSON 代替了 XML）
- JS 解析 XML , 并更新局部页面
- 使用了以上三个技术就是 AJAX


14. 面试题： 手写 AJAX
```
myButton.addEventListener('click', (e)=>{
	let request = new XMLHttpRequest()
	request.open('get','http://jack.com:8002/xxx')
	request.send()
	request.onreadystatechange = ()=>{
		if(request.readystate === 4){
			if(request.status >= 200 && request.status < 300){
				let string = request.responseText
				let object = window.JSON.parse(string)
			}	
		}
	}
})
```
