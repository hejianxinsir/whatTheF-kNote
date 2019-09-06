1. DNS 解析
即用户输入网址，得到对应的 IP 地址。通常所说的网址是方便用户记忆输入的，实际上输入网址后，要拿到唯一的 IP 才能找到想要的资源。

2. TCP 连接
即 TCP 的三次握手。用户主机向服务器发送建立连接的请求 —— 服务器同意请求 —— 主机确认服务器同意了并建立连接。

3. 发送 HTTP 请求
请求分为四个部分：一、请求方法/路径/版本号；二、请求正文；三、空行，用来区别第二第三部分；四、要上传的信息。第二部分的 Content-Type 定义了第四部分信息的类型。

以下为拷贝百度官网的请求。
```
GET / HTTP/1.1          
Host: www.baidu.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3

```

4. HTTP 响应
服务器处理请求并发出响应，供客户端处理。
```
HTTP/1.1 200 OK
Bdpagetype: 2
Bdqid: 0xf1820e9e0000e554
Cache-Control: private
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html;charset=utf-8
Date: Fri, 06 Sep 2019 06:02:09 GMT

```

5. 客户端处理响应，解析渲染页面。即，浏览器下载页面。

6. 断开连接
主机向服务器发送断开连接的请求 —— 服务器接收请求 —— 服务器发送断开通知 —— 主机断开并返回一个确认信号，服务器收到确认信号后断开连接。


// DNS 解析
从用户输入的网址，转换为 IP 地址，这个过程就是 DNS 解析。这是个翻译的过程。

(负载均衡。互联网的用户太多，不可能一台服务器就能服务这些用户。所以，实际上有很多服务器服务很多用户... DNS 可以返回合适的机器的 IP 给用户，可以根据每台机器的负载量或机器离用户的地理距离返回。这个过程就是 DNS 负载均衡，也叫 DNS 重定向。)
