# JSONP 方案
- 前端代码
```
button.addEventListener('click', function(){
	// 动态创建 script, 创建临时functionName，写 functionName 函数。再设置 script 的 src 。
	let script = document.createElment(script)
	let functionName = 'frank' + parseInt(Math.random()*100000,10)	
	window[functionName] = function(){
		amount.innerText = amount.innerText - 0 - 1
	}
	script.src = '/pay?callback=' + functionName
	document.body.appendChild(script)
	script.onload = function(e){  // 删除 script ，再删除 window 下的 function 函数。
		e.currentTarget.remove()
		delete window[function]
	}
	script.onerror = function(e){
		e.currentTarget.remove()
		delete window[function]
	}
})
```

- 后端代码
```
if(path === '/pay'){
	let amount = fs.readFileSync('./db',utf8)
	amount -= 1
	fs.writeFileSync('./db',utf8)
	let callbackName = query.callback
	response.setHeader('Content-Type','application/javascript')
	response.write(`
		${callbackName}.call(undefined, 'success')
	`)
	response.end()	
}
```

jQuery 写法
```
$.ajax({
	url: "http://jack.com:8002/pay",
	dataType: "jsonp",
	success: function( response ){
		if(response === 'success'){
			amount.innerText = amount.innerText - 1
		}
	}	
})

$.jsonp()
```
