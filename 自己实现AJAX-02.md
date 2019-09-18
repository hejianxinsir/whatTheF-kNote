1. 封装 ajax
```
window.jQuery.ajax = function(url, method, body, successFn, failFn){
	let request = new XMLHttpRequest()
	request.open(method, url)	// 配置 request
	request.onreadystatechange = ()=>{
		if(request.readystate === 4){
			if(request.status >= 200 && request.status < 300){
				successFn.call(undefined, request.responseText)
			}else if(request.status >= 400){
				failFn.call(undefined, request)	
			}
		}
	}
	request.send(body)
}


myButton.addEventListener('click', (e)=>{
	window.jQuery.ajax(
		'/xxx',
		'post',
		'a=1&b=2',
		(responsetText)=>{ console.log(1) },
		(request)=>{ console.log(2) }
	)
})
```

2. 由于封装的 ajax 不看文档的话，你不知道每个参数的含义，这就很麻烦。所以，我们要传一个有结构的参数。什么类型有结构？只有对象有结构。
```
myButton.addEventListener('click', (e)=>{
	let obj = {
		url: '/xxx',
		method: 'get',
		successFn: ()=>{},
		failFn: ()=>{}
	}
	window.jQuery.ajax(obj)
	
	// 或者这样。因为你只用了一次 obj ，那就不要声明中间变量了，直接用呗。
	window.jQuery.ajax({
		url: '/xxx',
		method: 'get',
		successFn: ()=>{},
		failFn: ()=>{}
	})
})

```
