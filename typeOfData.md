# 数据类型

1. JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型有六种。（ES6 有第七种 Symbol 类型的值，此处按下不表）。
- 数值 number 包括整数和小数：1  3.14
- 字符串 string Hello
- 布尔值 boolean ,表示真伪的两种值，true 和 false
以上三种称为原始类型的值 primitive type ,他们是最基本的数据类型，不能再往下细分了。
- undefined 未定义的，我理解是表示一个不存在的东西，没有任何定义。
- null 跟 undefined 联系在一起比较就容易记住。null 表示空的，此处的值为空。这说明 null 是存在的！但它的值为空而已，而 undefined 表示不存在。
- 对象，是各种值的集合。对象称为合成类型的值，把它当做一个存放各种值的容器即可。对象又分成三个子类型：狭义的对象object、数组array、函数function
undefined 和 null 是两个特殊值。

2. typeof 运算符
typeof 运算符返回一个值的数据类型。可以用来检测一个未声明的变量而不报错，通常用在判断语句。

- typeof undefined //undefined
- function f(){}  typeof f  //function
- typeof v //undefined  因为 v 未声明

对象返回 object
- typeof window //object
- typeof {}  //object
- typeof []  //object
- typeof null //object  
JavaScript 语言第一版只设计了五种数据类型的值，没考虑 null ，只把 null 当做特殊的 object 值。为了兼容以前的代码，typeof null 就返回 object 一直没法改变了。

3. if 语句中 undefined 和 null 都自动转为 false 。null 转为数值时是 0 ，Number(null)  //0 。undefined 转为数字就是 NaN 。

4. ! 是前置逻辑运算符

5. JavaScript 预期某个位置的值是布尔值，那么以下六个值都转为 false ，其他为 true 。undefined null false 0 NaN ""或‘’(空字符串)。注意，空数组 [] 和 空对象 {} 转化为布尔值都是 true 。

6. parseInt('1000',2)方法，全写是 parse（解析、从句法上分析）integer（整数），用来将字符串转化为数字。转换结果只有两种，整数 或者 NaN 。
- parseInt('1000',2) 将二进制的字符串 ‘1000’，转化为十进制整数。第二个参数是值原字符串对应的数字的进制。第二个参数的范围是 2-36 之间，超出范围则返回 undefined；如果是 0 undefined null 则直接忽略。
- parseInt(‘1000’) 如果不写第二个参数，第二个参数默认为 10 。
- parseInt('1a')  //1  parseInt 方法会先转化前面的，再转化后面的，当发现转化不了了，就把已转化的返回出去。所以这个是返回 1 。
- parseInt('00001')  字符串以 0 开头，按十进制解析。
- parseInt('asd1111')  字符串的开头不是数字，转化不了，所以 parseInt 直接停摆了，不转了。返回 NaN .
- parseInt('546'，2) 如果字符串包含对制定进制无意义的字符，则直接返回 NaN 。此例中，对二进制来说，5，4，6 都是无意义的字符。