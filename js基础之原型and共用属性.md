全局对象，标准是叫 global，浏览器里面叫 window .

var n2 = new Number(1);
undefined
console.log(n2)
VM164:1 Number {1}__proto__: Numberconstructor: ƒ Number()toExponential: ƒ toExponential()toFixed: ƒ toFixed()toLocaleString: ƒ toLocaleString()toPrecision: ƒ toPrecision()toString: ƒ toString()valueOf: ƒ valueOf()__proto__: Object[[PrimitiveValue]]: 0[[PrimitiveValue]]: 1
undefined
n2.valueOf()
1
n2.toString()
"1"
// var n2 = new Number(1) 变成函数后，就有很多方法用了。
// 如果是 var n1 = 1,那 n1 就是个普通值而已。存在 stack 里。而上面的 n2 是一个对象，存在 stack 里的是一个地址；这个对象有很多方法可以用。
// var n2 = new Number(1) 这种声明有很多方法可以用。同时 var n2 = 1 这样声明也可以使用一样多的方法，为什么？因为 Brendan Eich 设计时，要满足像 Java 的要求，又要满足自己的审美需求，所以设计 var n2 = 1 的时候，也设计了 temp = new Number(n) , 这是一个临时的东西，给 var n2 = 1 这种简单声明方式用的，用完就删除了。所以 var n2 = new Number(1) 这种方式几乎没人用。
//所以，一个基本类型，可以去 n.xxx (可以去 .xxx),因为他其实是个临时对象。用完了就被回收掉，没了。
var s = 'wesdfvsdfv';
var n2 = new String(s);
undefined
console.log(ne)
VM2336:1 Uncaught ReferenceError: ne is not defined
    at <anonymous>:1:13
(anonymous) @ VM2336:1
console.log(n2)
VM2378:1 String {"wesdfvsdfv"}0: "w"1: "e"2: "s"3: "d"4: "f"5: "v"6: "s"7: "d"8: "f"9: "v"length: 10__proto__: String[[PrimitiveValue]]: "wesdfvsdfv"
undefined
n2[0]
"w"
'a'.charCodeAt(0)  //这是获取 a 的十进制码点
97
'a'.charCodeAt(0).toString(16)  //这是获取 a 的十六进制的码点
"61"
//去掉字符串前后的空格，的方法是， .trim()
'      username'.trim();
"username"
// 连接两个字符串
undefined
var s1 = 'Hello';
var s2 = 'World';
s1.concat(s2);
"HelloWorld"
s1
"Hello"
s2
"World"
// .slice(0,2) 方法就是切片的意思，比如：
s1.slice(0,2);
"He"
这里的 .slice(0,2) 包前不包后，指的是第 0 个和第 2 个的前面那一个，不包括第 2 个字符。所以打出来的是 "He"
VM3671:1 Uncaught SyntaxError: Unexpected identifier
s2.slice(0,5)
"World"
// .replace('e','o') 替换的方法。比如：
s1
"Hello"
s1.replace('H','X');
"Xello"
s1
"Hello"
// 这些方法只是得到一个新的字符串，并没有改变原来的字符。

//现在看 Boolean
var a = true;
var b = new Boolean(true)
undefined
a
true
b
Boolean {true}
console.log(b)
VM4310:1 Boolean {true}__proto__: Boolean[[PrimitiveValue]]: true
undefined

// window.alert(1)  window 是全局的，可以省略不写。
// 共用属性就是不要重复声明属性，不浪费内存。所有对象都用那一个就行了。

var o1 = new Object();
var o2 = new Object();
undefined
o1 === o2
false
o1.toString === o2.toString
true
// o1 o2 共用了那个共用属性 toString 所以 o1.toString === o2.toString

// object 的共有属性是所有对象的共有属性了，他是最底层的共有属性，自己没有 _ _ proto _ _ 指向别的共有属性了。

// 截图的一连串指向，就是原型链。

// 原型就是共有属性的意思。object 的共有属性是 Object.prototype
undefined
var a = new Object();
a.__prototype === Object.prototype
false
a.__prototype__
undefined
var a = new object();
a.__proto__
VM1723:1 Uncaught ReferenceError: object is not defined
    at <anonymous>:1:9
(anonymous) @ VM1723:1
var a = {};
a.__proto__ === Object.prototype
true
var n1 = new Number(1);
n1.__proto__ === Number.prototype
true
ni.__proto__.__proto__ === Number.prototype
VM2136:1 Uncaught ReferenceError: ni is not defined
    at <anonymous>:1:1
(anonymous) @ VM2136:1
n1.__proto__.__proto__ === Number.prototype

false
n1.__proto__.__proto__ === Object.prototype


true
var z1 = new String('1');
z1.__proto__ ===String.prototype
true
z1.__proto__.__proto__ === Object.prototype
true