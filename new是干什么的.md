```
function 士兵(id){
	// var temp = {}  // 1
	// this = temp  // 2
	// 士兵.prototype = { constructor: 士兵}  // 这是默认有的由于下面写了 士兵.prototype 函数，所以会覆盖原有的 constructor ，所以我们要把 constructor 添加到自己写的 士兵.prototype 函数里面。
	// this.__proto__ = 士兵.prototype  // 3
	this.ID = id,	// ID
	this.生命值 = 42  // 自由属性
	// return this //4
	// 语法糖
}

士兵.prototype.兵种 = "美国大兵"
士兵.prototype.攻击力 = 5
士兵.prototype = {
	// 共有属性
	constructor: 士兵,
	兵种: "美国大兵",
	攻击力: 5,
	行走: function(){},
	奔走: function(){},
	死亡: function(){},
	攻击: function(){},
	防御: function(){}
}
```
1. new 帮你做的就是 1 2 3 4.
2. 比如游戏中你要造兵，不可能每造一个兵就生成新的属性和函数(如兵种、行走等)。所以只生成一个 士兵.prototype , 然后每生成新士兵，new 就会自动把 士兵.prototype 赋给 this.__proto__ , 这样每生成新的士兵就都有行走奔跑等函数了，省内存。
