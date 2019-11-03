1. JSON 的类型与格式
- 复合类型只能是数组或对象
- 原始类型只能是字符串、布尔值、数值（十进制的）、null
- 数组或对象的最后一个成员后面，不能加逗号
- 字符串必须用双引号，不能用单引号
- 对象的键名必须放在双引号里面

2. JSON 对象是 JavaScript 原生对象，用来处理 JSON 格式数据。它有两个静态方法：JSON.stringify() / JSON.parse()

**JSON.stringify()**
用来将一个值转为 JSON 字符串，该字符串符合 JSON 格式，并且可以被 JSON.parse 还原。
```
JSON.stringify([])	//"[]"
JSON.stringify(1)		//"1"
JSON.stringify({name: "张三"})		// '{"name": "张三"}'
```

对于原始类型的字符串，转换结果会带双引号。

```
JSON.stringify('foo')		"\"foo\""

// 上面代码被转成了 "\"foo\"" , 用于将来还原的时候，内层双引号可以让 JavaScript 引擎知道，这是一个字符串，而不是其他类型的值。
```

如果对象的属性是 undefined、函数或 XML 对象，这些属性会被 JSON.stringify 过滤。
```
var obj = {
	a: undefined,
	b: function x(){}
}

JSON.stringify(obj)		// "{}"
```

如果数组成员是 undefined、函数或 XML 对象，这些值会被 JSON.stringify() 转成 null
```
var arr = [undefined, function(){}];

JSON.stringify(arr)		// "[null, null]"
```
