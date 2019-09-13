# 局部刷新
方案一:用图片构造 get 请求
```
button.addEventListener( 'click',(e)=>{
	let image = document.createElement('img')
	image.src = '/pay'
	image.onload = function(){
		alert('成功')
	}
	image.onerror = function(){
		alert('失败')
	}
} )
```

方案二：用script 构造 get 请求
```
// 前端代码
button.addEventListener('click',(e)=>{
	let script = document.createElement('script')
	script.src = '/pay'
	document.body.appendChild(script)
	script.onload = function(e){
		e.currentTarget.remove()
	}
	script.onerror = function(e){
		e.currentTarget.remove()
	}	
})
```

```
// 后端代码
if( path === './pay' ){
	let amount = fs.readFileSync('./db','utf8')
	amount -= 1
	fs.writeFileSync('./db',amount)
	response.setHeader('Content-Type','application/javascript')
	response.write('amount.innerText = ' + amount)
	response.end()
}
```

方案三：JSONP
```
button.addEventListener('click',(e)=>{
	let script = document.createElement('script')
	let functionName = 'frank' + parseInt(Math.random()*100000, 10)
	window[functionName] = function(){
		// 每次请求之前弄一个随机的函数
		amount.innerText = amount.innerText - 0 - 1
	}
	script.src = '/pay?callback=' + functionName
	document.body.appendChild(script)
	script.onload = function(e){
		e.currentTarget.remove()
		delete window[functionName]
	}
	script.onerror = function(e){
		// 干掉动态创建的 script 和随机函数——避免污染全局变量。
		e.currentTarget.remove
		delete window[functionName]
	}
})
```


```
// 后端代码
···
if(path === '/pay'){
	let amount = fs.readFileSync('./db','utf8')
	amount -= 1
	fs.writeFileSync('./db', amount)
	let callbackName = query.callback
	response.setHeader('Content-Type','application/javascript')
	response.write(`
		${callbackName}.call(undefined, 'success')
	`)
	response.end()
}
```


