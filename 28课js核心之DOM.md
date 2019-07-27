1. nodeType // 1  返回1，就是指 ELEMENT; nodeType // 3  返回3就是文本。

2. 面试前务必 google DocumentFragment 优化，这是必考考点。

3. nextSibling previousSibling 会获取到回车、空格节点。

4. 面试会问 innerText 和 textContent 的区别是什么？

5. cloneNode()  分深拷贝和浅拷贝，cloneNode(true) 就是深拷贝，cloneNode() 括号填 false 或不填，就是浅拷贝。

6. isEqualNode() 是指相等的，比如我有个苹果8手机，你也有一个，我们的手机是相等的；isSameNode 指的是同一个，我有个苹果8手机，你手里没有，你把我的手机拿走了，那么就说 isSameNode。

7. nomalize() MDN 查！