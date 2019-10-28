index.html
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
index.js  服务器
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
