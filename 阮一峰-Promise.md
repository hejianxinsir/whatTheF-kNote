1. Promise 是构造函数
```
var promise = new Promise(function(resolve, reject){
	//...

	if(/* 异步操作成功 */){
		resolve(value);
	}else{
		reject(new Error());
	}
});

/* 分隔 */

var p1 = new Promise(function(resolve, reject){
	resolve('成功')
})
p1.then(console.log, console.erro);
// "成功"

var p2 = new Promise(function(){
	reject(new Error('失败'));
});
p2.then(console.log, console.error);

/* 分隔 */

p1
	.then(step1)
	.then(step2)
	.then(step3)
	.then(
		console.log,
		console.error
	);

// 如果 step1 的状态变为 rejected，那么 step2 step3 都不会执行，因为那是 resolve 的函数。于是，最后的 console.error 会往上找第一个为 rejected 的回调函数。也就是说，Promise 对象的报错具有传递性。
```

2. then 的用法
- 简单说，就是使用 then 方法添加回调函数。

