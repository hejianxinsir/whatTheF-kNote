# function

## function declaration
```
function print(s){
    console.log(s)
}
函数名、参数、函数体。
调用： print()
```

## name 属性
name 属性返回函数名。
```
function print(){}
print.name  //typ

var type = function(){}
type.name  //type

var type = function xxx(){}
type.name  //xxx
//此种情况下返回的 name 是 xxx ，但真正的函数名仍是 type ，xxx 这个函数名只是在函数内部使用。

```
## length 属性 property
length 属性返回函数所定义的参数个数。注意，是函数定义的参数个数，不是你传入的参数个数，看清楚了。
```

function obj(x,y){
    return x+y
}
obj.length  //2
你看，我定义的 obj 函数只有 x y 两个参数，所以，obj.length 返回 2 。

```

## 函数的作用域 scope
- 函数的作用域就是变量存在的范围。
- JavaScript 一般来说只有两种作用域：全句作用域global variable 和 函数作用域。全局作用域，变量在整个程序中一直存在，所有地方都可以读取；函数作用域只在函数内部存在。
- 函数内部定义的变量，会在该作用域内覆盖同名全局变量。
- 注意，对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。
- 函数的作用域，是该函数所声明时的作用域，而不是该函数运行时的作用域。这点非常重要。

## 闭包
就是能读取爸爸函数以及其他祖辈函数内部变量 的函数。由于外部不能读取函数内部的变量，所以要在函数内部给他一个子函数，在外部调用子函数来读取该函数内部的变量。