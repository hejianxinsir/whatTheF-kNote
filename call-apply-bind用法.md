# apply()
apply() 方法传入两个参数，作为函数上下文的对象，以及作为函数参数所组成的数组。
```
var obj = {
	name: 'janson'
}

function f1(first,last){
	console.log(first + ' ' + this.name + ' ' + last)
}

f1.apply(obj,['A','B']);	// A janson B
```

# call()
call() 与 apply() 基本一样，只是后面传入的参数不是数组，而是参数列表，用逗号隔开。
```
var obj = {
	name: 'obama'
}

function f2(first,last){
	console.log(first + ' ' + this.name + ' ' + last)
}

f2.call(obj,'C','D')	//C obama D
```

# call() 可以用来改变 this 的指向
```
var obj = {
	color: 'red'
}

function f3(){
	console.log(this.color)
}

f3.call(obj)	// red

相当于：

function f3(){
	console.log(obj.color)
}

上面的 this 指的就是 obj
```

# bind() 和 call() 相似
一样是接收两个参数，一个是作为函数上下文的对象，另一个是参数列表。不同之处在于，bind 返回值是函数，以及参数的返回结果不同。
```
var obj = {
	name: 'janson'
}

function f1(){
	console.log(this.name)
}

var f2 = f1.bind(obj)
f2()	// janson

// bing 方法返回的是一个改变了上下文 this 后的函数。上例中，返回的函数赋给了 f2 ，bind 绑定了对象 obj，所以 f2 返回的是 janson。而原函数 f1 中 this 的指向依然是 window 没变。
```

**另一个区别是参数的使用**
```
function func(a,b,c){
	console.log(a,b,c)
}

var func2 = func.bind(null,'janson')

func('a','b','c')	// a b c
func2('a','b','c')	// janson a b
func2('b','c')		// janson b c
func.call(null,'janson')	// janson undefined undefined

call 是把第二个及之后的参数传进去了，而 func2 则是在 bind 中参数的基础上往后排。
```
