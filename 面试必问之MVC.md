1. 在一个 js 文件里，用 var 声明的变量是全局变量。这样容易污染全局变量，容易被别人覆盖。所以不准用全局变量！

2. 在 js 里，用大括号包起一段代码，也不能把 var 声明的变量变成局部变量，var 声明的变量依然是全局变量。在 c++ java 里是可以的，在 js 里就不行。所以你要把 var 声明的全局变量变成局部变量，就用 function xxx(){} 包起来。请问，调用 xxx() 之后，你是不是没有用到全局变量了？不是！xxx 就是全局变量啊！所以，你用匿名函数就行了，不给名字呗。

3. 接上。形如 function (){}.call() , 这样就把 function 里面的 var 声明的变量变成了局部变量，并且这是个匿名函数，也没有声明全局函数。又但是，这种形式 function(){}.call()  Chrome 会报错。所以我没要给它加！, 变成 !function(){}.call()。虽然加！会改变函数的返回值，但我们不关心这个返回值。或者另一种写法也可以：
```
(function(){}).call()

// 但是如果有人在前面加东西，比如：
xxx
(function(){}).call

// 这是什么意思？就是 xxx(function(){}).call() 的意思，那就麻烦了。所以不推荐这样写。

// 最好的方式是加!
!function(){}.call()
```

4. 两个 js 文件如何交流。在大家都用立即执行函数的时候，相互之间没法访问对方的变量。有 window 啊！window 是老大！
```
// 某个文件
!function(){
	var person = window.person = {
		name: 'frank'
	}
}.call()

// 另一文件
!function(){
	var person = window.person
	console.log(person)
}.call()
```

5. 那如果只允许别人看到某个信息，而不是函数的整个信息呢？用闭包啊。所以，闭包是用来隐藏信息的。

- 立即执行函数是用来隔离作用域的。
```
// 某个文件
!function(){
	var person = window.person = {
		name: 'frank',
		age: '18'
	}

	window.frankGrowUp = function(){
		person.age += 1
		return person.age 
	}
}.call()

// 另一文件

!function(){
	var frankGrowUp = window.frankGrowUp
	var newAge = frankGrowUp()
	console.log(newAge)
}.call()
```

6. 返回一个匿名函数的函数
```
window.a = function(){
	var person = {
		name: 'frank',
		age: 18
	}
	return function(){
		person.age += 1
		return person.age
	}
}
```

7. MVC  指的是 html view controller . 所有的代码都能给个 view 给个 controller，controller 操作 view。这就简化了。

8. 箭头函数，没有 this. 箭头函数内外，this 不变。

9. MVC 是什么？
- Model View Ctroller ，所有数据相关的东西放在 Model 里；View 是视图，用户看得见的区域；Ctroller 是控制器，是逻辑（其他）相关。
- 整个过程是这样的：model 去请求服务器，服务器响应给 model。controller 调用 model , model 返回数据给 controller；view 通知 controller ，controller 监听并更新 view。  
