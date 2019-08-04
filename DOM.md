# DOM 
*定义：DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。*

*浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。*

*DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。*


1. 节点的类型有七种。
Document：整个文档树的顶层节点
DocumentType：doctype标签（比如<!DOCTYPE html>）
Element：网页的各种HTML标签（比如<body>、<a>等）
Attribute：网页元素的属性（比如class="right"）
Text：标签之间或标签包含的文本
Comment：注释
DocumentFragment：文档的片段

**浏览器提供一个原生的节点对象Node，上面这七种节点都继承了Node，因此具有一些共同的属性和方法。**

2. 不同节点的nodeType属性值和对应的常量如下。

文档节点（document）：9，对应常量Node.DOCUMENT_NODE
元素节点（element）：1，对应常量Node.ELEMENT_NODE
属性节点（attr）：2，对应常量Node.ATTRIBUTE_NODE
文本节点（text）：3，对应常量Node.TEXT_NODE
文档片断节点（DocumentFragment）：11，对应常量Node.DOCUMENT_FRAGMENT_NODE
文档类型节点（DocumentType）：10，对应常量Node.DOCUMENT_TYPE_NODE
注释节点（Comment）：8，对应常量Node.COMMENT_NODE

## Node 接口
**属性**
- nodeType属性返回一个整数值，表示节点的类型。
- nodeName属性返回节点的名称。


## 插入节点的方法有？

## 删除节点的方法有？

## 哪些方法可以操作元素节点？
1. replaceWith方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。
```
var span = document.createElement('span');
el.replaceWidth(span);
```

## 哪些方法不能操作文本节点？

## 关于只读的 属性/方法
- document.domain基本上是一个只读属性，只有一种情况除外。次级域名的网页，可以把document.domain设为对应的上级域名。

## 关于 可写/写入 的 属性/方法
- document.body   document.head
- document.title属性返回当前文档的标题。默认情况下，返回<title>节点的值。但是该属性是可写的，一旦被修改，就返回修改后的值。
- document.open方法清除当前文档所有内容，使得文档处于可写状态，供document.write方法写入内容。
- nodeValue属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。

## 返回 HTMLCollection 实例

```
document.links instanceof HTMLCollection // true
document.images instanceof HTMLCollection // true
document.forms instanceof HTMLCollection // true
document.embeds instanceof HTMLCollection // true
document.scripts instanceof HTMLCollection // true
document.getElementsByClassName()
document.getElementsByTagName()
```

## 动态的、实时反应的方法、属性

```
- document.getElementsByClassName()
- NodeList 实例可能是动态集合，也可能是静态集合。
- 目前，只有Node.childNodes返回的是一个动态集合，其他的 NodeList 都是静态集合。
```

## 考题
```
var allDiv = document.querySelectorAll('div')
allDiv.length // 假设是 2
document.body.appendChild(  document.createElement('div')  )
allDiv.length // 请问现在 length 的值是多少？？？
```

** 这个考题考的是 querySelectorAll() 这个方法是否是动态的。注意，它不是动态的。 **

## 其他
- 浏览器原生提供document节点，代表整个文档。
- 所有 DOM 节点对象都继承了 Node 接口，拥有一些共同的属性和方法。这是 DOM 操作的基础。
- nodeValue属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。只有文本节点（text）、注释节点（comment）和属性节点（attr）有文本值，因此这三类节点的nodeValue可以返回结果，其他类型的节点一律返回null。
- arguments 和 DOM API 获取的 elements 都是伪数组。原型链中没有 array.prototype
- innerText 就是全文本的，即便用户写了一个标签，也会把标签当文本代码解析；而 innerHTML 会解析 html 代码，千万不要使用。