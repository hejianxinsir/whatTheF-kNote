1. 手抄代码
```
axios.interceptors.response.usr(function(response){
		// let config = response.config
		// let {method, url, data} = config
		
		// 大技巧：这一行等价于上面注释的两行，写法不同而已。
		let {config: {method, url, data}} = response 	// 这一行的 data 是请求的 data

		if(url === '/book/1' && method === 'get'){
			response.data = {		// 这个 data 是响应的 data
				name: 'javascript 高级程序设计',
				number: 2,
				id: 1
			}
		}

		return response
})
```
------------
```
axios.interceptors.response.use(function(response){

	// 根据这个例子 mock 其他数据怎么弄？拿到 config
	let config = response.config
	console.log(config)

	response.data = {
		'name': 'frank'
	}

	return response
})

axios.get('/books/1')
	.then((response)=>{
		console.log(response)
	})

	// 不做服务器，直接用 axios.interceptors.response.use 在前端写入 response 的数据。
	// 这就是所谓的 mock 数据。
	
```
---------
```
axios.get('/books/1')
	.then(({data})=>{
	let originalHtml = $('#app').html()
	let newHtml = originalHtml.replace('__name__', data.name)
		.replace('__number__', data.number)
	$('#app').html(newHtml)
})

// 里面的 button 可能被替换了，所以要做一个委托，如下

$('#app').on('click', '#plusOne', function(){
	// 上一行意思是，在 #app 里面，如果点击的是 #plusOne, 那么就执行接下来的代码
	var oldNumber = $('#number').text()
	var newNumber = oldNumber -0 +1
	$('#number').text(newNumber)
})
```


## Object.assign 怎么用？
```
var book = {name: 'frank', number: 1, id:2 }
Object.assign(book, {name: 'jack', number: 2})

Object.assign(book, {name: 'jack'}, {number: 2})

// 如果有重复的赋值，以后者为准。
Object.assign(book, {name: 'jack'}, {name: 'hejianxin'})
```

- 以上的代码太麻烦了，俗称意大利面条式代码。因为美国人只知道意大利面条。
