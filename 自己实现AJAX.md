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
