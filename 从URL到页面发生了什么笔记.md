1. URL 统一资源定位符，就是我们常说的网址，用于你访问一个网页；HTTP 让你能下载这个页面; HTML 能让你看懂这个页面。

2. URI 分成 URL URN . 比如书号就是一个 URN ，能确定唯一的东西。URL 因为是统一资源定位符，是能定位的，能找到某个东西的位置，虽然这个东西的内容会变，但我们能找到他，所以 URL 用得更广泛。

3. .com 就是顶级域名，也叫一级域名；t.tt 是锤子的官网，.tt 也是顶级域名。又比如 www.baidu.com, .com 是一级域名，baidu 是二级域名，www 是三级域名。但是工程师会说 baidu 是一级域名，虽然是错的，但可能都会这么说。

4. www.baidu.com 是一个三级域名，baidu.com 是一个二级域名。所以，这两者是有区别的。

5. https://www.baidu.com/s?wd=hello&rsv_spt=1#5 具体分析一下这个网址。https:// 是协议；www.baidu.com 是域名；/s 是路径,注意，路径不是文件；?...=1 这一串是查询参数，你要查什么，就把内容放到查询参数里面；#5 是锚点，比如百度搜索的搜索结果，就对于某个锚点。某个元素的 id 是多少，这个锚点就能让你跳转到他。

6. DNS--Domain name system 域名系统。就是输入域名，输出 IP 用的.

7. 如何绕过 DNS 自己指定一个 IP ? 终端里面输入 sudo vim /etc/hosts , 再在里面输入 127.0.0.1 baidu.com 即可。 

8. 21 是 FTP 端口；1080 是代理服务器端口，比如你的科学上网工具就是 1080 端口；443 是 https 端口;80 端口用来服务 http 协议。

9. 你在浏览器输入baidu.com, 问电信 baidu.com 的 IP 是多少？电信告诉你是多少，于是你发送一个请求到服务器，服务器用 80 端口接收（因为是 http 协议），同时，服务器也用 80 端口响应, 响应给你，你的电脑就要下载这个网页. 于是可以收发东西了。HTTP 在这儿的作用是，指导浏览器和服务器如何沟通的。

10. 一个请求：
```
GET / HTTP/1.1  // 这里的 / 指根目录
Host: www.baidu.com
User-Agent: curl/7.54.0  // User-Agent 指我用的是什么软件发起的响应
Accept: */*		// 这里 Accept 你响应我的所有内容，* 是通配符嘛。
Frank: xxx
空行

```

11. 用 curl 访问
```
curl -x POST -s -v -H -- "https://www.baidu.com"	//这时 post 请求

curl -s -v -- "https://www.baidu.com" 

curl -X POST -d "1234567" -s -v -- "https://www.baidu.com"	// -d "1234567" data 的意思，我要上传1234567这些数据	// 此时的 POST 请求里有 Content-Length: 7 就是我上传数据的长度。
```

12. 请求和响应中，get post 就是字面意思的区别，一个是获取，一个是上传，其他没区别了。

13. 请求和响应中，动词有 get post put patch delete head options。put 是整体更新，五行话替换成一行话；patch 是局部更新，更新五行话中的一行。head options 暂时不用理解。

14. http 一定要接受以 / 开头的路径，在请求头中 / 没什么特殊含义,就是指路径。请求中，第三部分是个回车，必须有，不能删除。永远是个回车。第三部分的目的是区分第二和第四部分。第二部分是 key : value 。第四部分是要上传的数据。

15. 请求最多包含 4 部分，最少有三部分，也就是说，第四部分可以省略。如果你不遵守协议，服务器就理解不了你。

16. 请求中的路径，包含查询字符串，但是不包含锚点。锚点是浏览器看的，服务器不看。如果你没写路径，路径默认为 / 。第二部分中的 Content-type 标注了第四部分的格式。

17. Content-type: application/x-www-form-urlencoded 解释一下，application-应用数据;x- 指没有写入规范的格式；www 就是万维网；form 表单；urlencoded 指用 urlencoded 的形式压缩。

18. 响应的格式
```
协议/版本号 状态码 状态解释
key:value
key:value
Content-Length: 19832
Content-Type: text/html

要下载的内容
```
状态码：200-普通成功 204-创建成功 301-永久搬走了 302-外出了，过几天回来，临时不在 304-滚，我这次说的话和上次一样，你直接用上次下载的内容就行了 404-你错了 5xx-我服务器错了

19. Content-Type 遵循 MIME 规范。Connection 设置为 Keep-alive 用于告诉客户端本次 HTTP 请求结束之后不需要关闭 TCP 连接。这样可以使下次 HTTP 请求使用相同的 TCP 通道，节省 TCP 连接建立的时间。
