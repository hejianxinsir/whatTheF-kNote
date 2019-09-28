# The content below are from MDN [this]

> A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

> In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

多数情况下，this 取决于你怎么 call 的。ES5 有 bind() 方法来设置 this 的值，无论你怎么 call 都能设置。ES2015 有了箭头函数，而箭头函数是不管 this 的，也就是说箭头函数内外的 this 值一样。

```
var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

// 等价于
console.log(test.func.call(){})		// this 就是 func 前面的东西，也就是 test。所以打出来的是42 
```

## Global context
> In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

```
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"

- 在全局环境下，无论是否为严格模式，this 指向的都是 window 。
- 在浏览器里，window 对象就是全局对象。
``` 

## Function context
> Inside a function, the value of this depends on how the function is called.

Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.
即，非严格模式下且不是 call 调用的，在浏览器中 this 就默认是 window。你打印出来的就是 window。

```
function f1() {
  return this;
}

// In a browser:
f1() === window; // true 

// In Node:
f1() === global; // true
```

In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:
即，严格模式下，你没设置 this ，那 this 默认就是 undefined 。
```
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true
```

> note: In the second example, this should be undefined, because f2 was called directly and not as a method or property of an object (e.g. window.f2()). This feature wasn't implemented in some browsers when they first started to support strict mode. As a result, they incorrectly returned the window object. 上例中，本来 this 是 undefined，但有些浏览器刚支持严格模式，所以可能还是会错误地返回 window。

To set the value of this to a particular value when calling a function, use call(), or apply() as in the following examples. 如果你要设置 this 的值，就用 call() 或者 apply(). 如下代码:

```
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global' 直接调用，没用 call apply ，所以 this 指向 window。所以返回的是 window.a 的值。
whatsThis.call(obj);  // 'Custom' 用了 call ，那么 this 就是 call 的第一个参数。英文说得很显然，用了 call ，this 就绑定 call 的第一个参数。
whatsThis.apply(obj); // 'Custom' 此情况同 call().

另一例：
```
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34

Note that in non–strict mode, with call and apply, if the value passed as this is not an object, an attempt will be made to convert it to an object using the internal ToObject operation. So if the value passed is a primitive like 7 or 'foo', it will be converted to an Object using the related constructor, so the primitive number 7 is converted to an object as if by new Number(7) and the string 'foo' to an object as if by new String('foo'), e.g.

```
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]
```

- MDN 的 this 暂时看到这里。
