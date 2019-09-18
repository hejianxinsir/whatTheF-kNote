1. 设置请求的第四部分，在 request.send() 里面. 但是 chrome 不会展示,chorme 认为
get 请求理论上不会有 request body ，所以就不展示。这是约定俗成的。用 post 就行了，会展示 request payload 这就是请求体。请求的四个部分都能设置，当然，第三部分是个回车。 
```
request.send('我偏要设置 request 第四部分')
```

2. 这个要背下来：
```
request.setRequestHeader('Content-Type','x-www-form-urlencoded')
```

3. JS 设置请求的三个部分
```
let request = new XMLHttpRequest()
request.open('post','/xxx')	//这是配置 request。也是设置第一部分。
request.setRequestHeader('frank','18')
request.setRequestHeader('Content-Type','x-www-form-urlencoded')	//这两项设置第二部分

// 第三部分是个回车。

request.send('我在设置第四部分')	// 设置第四部分
```

4. JS 可以获取响应 header .

5. 重复：JS 设置任意请求 header 
```
// 第一部分
request.open('get','/xxx')

// 第二部分
request.setHeader('content-type','x-www-form-urlencoded')

// 第四部分
request.sed('a=1&b=2')
```

6. 重复：JS 获取响应 header 
```
// 第一部分
request.status / request.statusText(这是获取那个ok)

// 第二部分
request.getResponseHeader() / request.getAllResponseHeaders()

// 第四部分
request.responseText
```

7. 把四行请求代码用 AJAX 变成一行代码

8. 技巧：把参数结构化，对象才有结构，所以也就是用对象存下来。再给参数命名。
```
window.jQuery.ajax = function(options){
	let url = options.url
	let method = iptions.method
	let body = options.body
	let successFn = options.successFn
	let failFn = options.failFn

	let request = new XMLHttpRequest()
	request.open(method,url)	//配置 request
	request.onreadystatechange = ()=>{
		if(request.readyState === 4){
			if(request.status >= 200 && request.status < 300){
				successFn.call(undefined,request.responseText)
			}else if(request.status >= 400){
				failFn.call(undefined,request)
			}
		}
	}
	request.send(body)
}

myButton.addEventListener('click',(e)=>{
	let obj = {
		url: '/xxx',
		method: 'get',
		successFn: ()=>{},
		failFn: ()=>{}
	}
	window.jQuery.ajax(obj)	
})
```

9. 箭头函数没有 arguments

10. .then(successFn,failFn)
```
myButton.addEventListener('click',(e)=>{
	$.ajax({
		url: '/frank',
		method: 'get',
	}).then(
		(responseText)=>{console.log(responseText)},
		(request)=>{console.log('error')}	
	)
})
```

11. 如果要对上一次的结果再处理一下，那就再 .then(success,fail) 一下。

12. 返回的是一个对象，因为开发者工具可以看到是 text/json ，发现有 json 就会自动 parse 一下，于是变成对象了。

13. 这个要背下来：
```
window.jQuery.ajax = function({url,method,body,successFn,failFn,headers}){
	return new Promise(function(resolve,reject){
		
	})
}

// 如果成功了，就调 resolve，如果失败了就调 reject，然后把结果放到第一个参数里面。

resolve.call(undefined, request.responseText)

reject.call(undefined,request)
```


