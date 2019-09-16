# 请用原生 JS 写一个 AJAX 请求
```
let request = new XMLHttpRequest
request.open('get','http://jack.com:8002/xxx')
request.send()

request.onreadystatechange = ()=>{
	if(request.readystate === 4){
		if(request.status >= 200 && request.status < 300){
			let string = request.responstText
			let object = window.JSON.parse(string)
		}
	}
}

// 另外，后端代码加一句:

response.setHeader('Access-Control-Allow-Origin','http://frank.com:8001')

```
