1. 服务器通过 cookie 给用户一个 sessionId ，sessionId 对应服务器里的一小块内存。每次用户访问服务器的时候，服务器通过 sessionId 读对应的 session 就知道用户的隐私信息了。

2. LocalStorage 和 Cookie 有什么区别: LocalStorage 本质上是一个哈希表，session 是服务器上的哈希表，LocalStorage 是浏览器上的哈希表.

3. localStorage 只能存 string 字符串.

4. localStorage 是 html5 提供的 API
```
localStorage.setItem('a', '1')

localStorage.getItem( ' a ' )  // '1'

localStorage.clear()  // 清空了

```

5. 一个变量，刷新页面后就会消失。那么，如何让这个变量刷新后也存在呢？用 localStorage.对 window 来说，localStorage 存在 C 盘的一个文件里.这就是持久化存储，因为能存到 C 盘里。有 localStorage 之后，前端就有记忆力了.

6. 怎么用 localStorage ？
```
let already = localStorage.getItem( '已经提示了' )

if( !already ){
 alert(' 你好，我们的网站已经改版了，有这些新功能：... ')
 localStorage.setItem(' 已经提示了 ' , 'true')
} else {

}
```

7. Cookie 是 HTTP 的头；localStorage 和 HTTP 没有关系. 2. HTTP 不会带上 localStorage 的值. 3. 只有相同域名的页面才能互相读取 localStorage. 4. 4. 每个域名 localStorage 最大存储量为 5M 左右，视浏览器不同而不同. 5. 面试问，常用场景是什么？记录有没有提示过用户（没有用的信息，不能记录密码）. 

8. 6. localStorage 永久有效，除非用户自己清除.SessionStorage  1234 向同上。用户关闭页面的时候就过期了，失效了。这是与 localStorage 的区别。

9. 面试题： Cookie 和 Session 什么关系？答：一般来说，Session 是基于 Cookie 实现的。session 把随机的 sessionId 放到 cookie 上发给客户端。session 依赖于 cookie ，cookie 是 session 的基石。那 cookie 和 localStorage 的区别是什么？ cookie 每次请求都会带给服务器，localstorage 不会被带到服务器上。cookie 一般来说是 4k，localstorage 5M 左右。那么，localstorage 和 SessionStorage( 会话存储 ) 的区别是什么？ SessionStorage 在用户关闭页面后就失效。

10. 另，cookie 默认在用户关闭页面后就失效。但后台代码可以设置 cookie 的有效时间。Session 不翻译。SessionStorage 翻译为 会话存储。这两个没有关系，记住，没有关系。

11. 首页可能不能做缓存。你想哪一个请求做缓存，就在后端给 "cache-control"，max-age=30

12. 那么在你设置的时间内刷新页面，就会从能存里面那缓存好的东西给你。过了你设置的时间服务器才会重新响应给你内容。

13. 为什么首页不能缓存？因为用户在你设置的时间内，不能得到你最新网页了，这就是风险。所以，一般来说，尤其html是不设置缓存的。

14. 有时候设置的时间可能是十年，但如果更新了 js ，用户怎么能拿到最新的东西呢？解释是，只有相同的 url 才用旧的缓存。只要 url 有一丁点变动，就不会使用以前的缓存，所以改变一下url就行了。比如url后面加?v=2 . 所以一般尽量把缓存设置很长时间，设置十年。前端为什么会搞些奇奇怪怪的数字？就是版本号的意思，版本号可以是随机数。

15. cache-control 可以设置一段时间内不访问服务器，直接用本地硬盘或内存作为响应。那用户如何更新你的页面呢？只要让url稍微变一下，就不会使用你的本地硬盘的缓存，浏览器就去下载最新版。

16. 如果你设置了cache-control ，那么 expires 会被忽略。

17. expires 是设置什么时间点过期，cache-control 是多长时间后过期。比如前者设置明天9点整过期，后者设置9小时过期。这就是区别。

18. 为什么使用cache-control. 因为这是设置用户的现在时间点后，多长时间过期，即便用户把自己的时间设置错了也没事儿。如果两者都设置了呢，那就优先使用 cache-xontrol.因为这个是最新版. 

19. ETag 是用来给文件版本号的. 

20. MD5 是信息摘要演算法，简称摘要算法. 比如你下载Linux.iso，400M ，但你怎么知道你下载的对不对呢？你下载的 Linux 会给你一个 MD5 值，你自己下载的也可以算一个 MD5，理论上跟前者一样的，对上了你就下载对了。MD5 就是把一个文件变成一个字符串，如果文件变了，变了之后的字符串也会跟着变。文件变化越小，字符串差异越大，会把微小的差异放大。

21. 用 cache-control 是直接不请求；用 ETag 是直接不下载，但还是会请求。比较而言，cache-control 好写，直接不请求了。
