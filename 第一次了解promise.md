1. promise 是确定函数形式的规范。成功了做什么，失败了做什么，不同的库有不同的写法。如果不看文档是不知道的。所以有没有一种统一的规范？这就是 promise.

2. then
```
function success(responseText){
	console.log(responseText)
}

function fail(request){
	console.log(request)
}

myButton.addEventListener('click', (e)=>{
	$.ajax({
		url: '/frank',
		method: 'get',
	}).then(success, fail)
})	//成功调用 then 的 success，失败调用 fail

// then 了可以再 then
```
又如：

```
myButton.addEventListener('click', (e)=>{
	$.ajax({
		url: '/xxx',
		method: 'get',
	}).then(
		(responseText)=>{
			console.log(responseText);
			return responseText
		},
		(request)=>{console.log('error1'); reuturn '已经处理'}
	).then(
		(上一次的处理结果)=>{
			console.log(上一次的处理结果)
		}，
		(request)=>{console.log('error2')}
	)
})
```

3. ajax 返回一个 promise 实例，这个实例有一个 then 属性。then 也会返回一个 promise 对象，所以 then 了可以再 then.

4. ajax 要符合 promise 写法，就 return new promise function(resolve, reject). promise 暴露一个 then API, then 带两个函数。成功了调第一个函数，失败了调第二个函数。promise 
