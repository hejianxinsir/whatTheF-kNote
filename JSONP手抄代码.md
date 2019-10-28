## index.html
```
button.addEventListener('click', (e)=>{
	let script = document.createElement('script')
	let functionName = 'frank'+parseInt(Math.random()*100000,10)
	// 这是随机数名字，用完了就会删掉。保证名字不重复。
	window[functionName] = function(result){
		if(result === 'success'){
			amount.innerText = amount.innerText - 1
		}else{}
	}

	script.src = 'http://jack.com:8002/pay?callback='+functionName
	document.body.appendChild(script)
	script.onload = function(e){
		e.currentTarget.remove()
	}
	script.onerror = function(){
		alert('fail')
		e.currentTarget.remove()
	}
})
```

## index.js  服务器
```
else if(path === '/pay'){
	var amount = fs.readFileSync('./db','utf8')
	var newAmount = amount - 1
	fs.writeFileSync('./db',newAmount)
	response.setHeader('Content-Type', 'application/javascript')
	response.statusCode = 200
	response.write(`
		${query.callback}.call(undefined, 'success')
	`)
}
```
注意两点行业约定：
1. 本来叫 callbackName 但约定为 callback
2. callback 的名字是一个随机数，这样就不会污染全局变量了。
3. 用 jQuery 的时候，jQuery 会自动帮你加 callback（随机数）。

## jQuery 写法
```
button.addEventListener('click', (e)=>{
	$.ajax({
		url: "http://jack.com:8002/pay",
		dataType: "jsonp",
		success: function(response){
			amount.innerText = amount.innerText - 1
		}
	})
})
// 这个跟 ajax 没关系，虽然代码里有 ajax 这个单词。
```
面试题：jsonp 为什么不支持 ajax？
答: jsonp 是动态创建 script 实现的，动态创建 script 只能用 get 不能用 post。

// script 加 callback 参数，就是 jsonp 了。

## img 发请求：
```
<script>
	var image = document.createElement('img')
	image.src='/xxx'
	image.onload = function(){ console.log('success') }
	image.onerror = function(){ console.log('fail') }
</script>
```

## form 发请求：
```
<form action="/xxx" method=post>
	<input type="password" name="password">
	<input type="submit">
</form>
```

## a 标签发请求：
```
<a id="x" href="/xxx">click</a>
<script>
	setTimeout(function(){
		x.click()
	}, 3000)
</script>
```

## link 发请求
```
<script>
	var link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = '/xxx'
	document.head.appendChild(link)
</script>
```

- http 第四部分永远是字符串。你才返回对象，你全家都返回对象。
- JSONP 用 json 来返回东西
- window.JSON.parse(string) 把符合 JSON 语法的字符串转成 JS 对应的值。

