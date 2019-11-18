1. Object.prototype.valueOf()
- 作用是返回一个对象的“值”，默认情况下返回对象本身.主要用途是，JavaScript 自动类型转换时会默认调用这个方法.

```
var obj = new Object();

1 + obj		// "1[object Object]"

// 自定义 valueOf 方法，覆盖 prototype 上的 valueOf 方法
var obj = new Object();

obj.valueOf = function(){
	return 2;
}

1 + obj		//3
```

2. Object.prototype.toString()
- 作用是返回一个对象的字符串形式，默认情况下返回类型字符串。
```
var o1 = new Object();
o1.toString()		//"[object Object]"

var o2 = {a: 1};
o2.toString()		"[object Object]"

// 自定义 toString 方法，覆盖 prototype 上的 toString 方法
var obj = new Object();

obj.toString = function(){
	return 'hello';
}

obj + ' ' + 'world'		// "hello world"

// 常见用途是，判断一个值的类型

var obj = {};
obj.toString()		//"[object Object]" 后一个Object表示该值的构造函数
```

3. 数组、字符串、函数、Date 对象都分别部署了自定义的toString方法，覆盖了Object.prototype.toString方法。

4. Object.prototype.toLocaleString()
- 与toString的返回结果相同，也是返回一个值的字符串形式。这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的toLocaleString，用来返回针对某些地域的特定的值。
```
var person = {
	toString: function(){
		return 'janson';
	},
	toLocaleString: function(){
		return '何建新'；
	}
}

person.toString() // janson
person.toLocaleString()	// 何建新;返回本地的字符串形式, 跟用户设置的地域相关
```

5. Object.prototype.hasOwnProperty()
- 接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

```
var obj = {
	p: 123
};

obj.hasOwnProperty('p')		// true
obj.hasOwnProperty('toString')	false
```

