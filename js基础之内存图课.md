1. 变成字符串的方法，一种是 s.toString();另一种是 1 + ‘’ ，指的是在后面添加加号和一个空引号;第三种是 window.String(1)  //'1'
```
第一种：
var n = 1
n.toString()  //'1'

var n = 1
n.toString()  //'1'

第二种：
1 + ‘’  //'1'
'' + 1 //'1'  加号写前面也可以

注意：加号可以把任何东西变成字符串，比 toString 的功能更强大。甚至可以把 undefined 和 null 也变成字符串。
'' + null  //'null'  //''+ null
'' + undefined //'undefined'

null.toString()  //Uncaught TypeError: Cannot read property 'toString' of null
undefined.toString //Uncaught TypeError: Cannot read property 'toString' of null

第三种：String 的全局方法。跟加号的功能一样强大。
window.String(1)  //'1'
window.String(null)  //'null'
window.String(undefined) //'undefined'
window.String(true)  //'true'

window.String(1)
window.String(null)
window.String(true)
```

2. 不同类型的东西是不能相加的。
- 比如 1 + '1'，这是数字跟字符串相加，类型不同不能加。但实际上，会先把数字变成字符串，再相加。所以结果是 ‘11’ 。

3. Boolean()  变成布尔值的方法。
- Boolean(1) //true
- Boolean('')  //false
- Boolean({})  //true
- Boolean('34432')  //true
- Boolean([])  //true
- Boolean(null)  //false
- Boolean(undefined) //false

但这种方法打字太多，效率慢，所以省事的办法是给两个感叹号，取反再取反的意思。比如：
- !!(1)  //true
- !!('123') //true
- !!({}) //true
- !!null //false
- !!undefined //false
- !!0  //false

4. 转为 number 的方法如下。
- Number('1')  //1

- parseInt('1')  //1
- parseInt('011')  //11  这个方法是考试的重点！
- parseInt('s')  //NaN
- parseInt('11s')  //11

- parseFloat('1.23')  //1.23

- *'1' - 0  //1  任意字符减 0 就行。这一种是最常用的，明显最简单嘛。*

- + ‘1’  //加号是取正的意思。在字符串前面加个加号就能转为数字了。减号也可以用。
- + ('-1')  //-1  结果还是 -1 ，加号是取原本数字值的意思。
- - ('-1') //1
- --('-1')  //注意，两个减号连在一起是不能用的。但是，用括号把两个减号分开就能用。
- -(-('-1'))  //-1

5. 简单的数据类型，直接存在 stack 里；复杂的数据类型(对象)，存的是 heap 地址，这个地址存在 stack 里。(字符串存在哪?随你怎么说都对，暂时这么记着再说）。

6. 只有在对象的时候，我们说引用。变量和对象是引用关系。

7. = 等于号只做一件事，就是把左边的东西赋给右边。
```
var a = {1:'hi'}
var b = a
b = {2: 'hey'}

请问，a 的值是什么？
答案是，还是原来那个。b = {2: 'hey'} 这句话，其实重新在 heap 里生成了一个 {2: 'hey'} 的地址，然后把这个新地址赋给了 b 。所以，a 还是原来的地址，不变。
```

8. 一个题
```
var a = {name: 'hi'}
var b = a
b = null
a = ?

先去浏览器试一下。
答案是，a 不变。因为 null 是简单数据类型，直接存在 stack 里。b = null 并不会变 heap 里的对象。

```

9. 垃圾回收
如果一个对象没有被引用，它就是垃圾，将被回收。这是重点，记住。

一般情况下，关闭网页的话，那么里面的引用对象之类的，都成了垃圾。但在 IE6 浏览器这里，IE6 识别不出这些是垃圾。那怎么解决这个 bug 呢？
写这句话：
window.onunload = function(){
    document.body.onclick = null  //把监听的所有东西都设置为 null ，是所有的。
}

这就是内存泄露。意思是，由于浏览器 bug ，该被标记为垃圾的没被标记为垃圾。于是被占用了。

10. 深拷贝和浅拷
```
深拷贝：
var a = 1;
var b = a;
b = 2
a = 1(b变了但不影响a的值，这就是深拷贝。基本类型（除了对象）的赋值，也就是有等于号，这就是深拷贝)

浅拷贝：赋值后，我变了，你也变了，这就是浅拷贝。如下例：
var a = {name: '1'};
var b = a
b.name = 'b'
a.name = 'b'  //注意，b 变了后，a 也变了，因为引用的是同一个地址，而 b 修改了地址的内容，这就是浅拷贝。
```

