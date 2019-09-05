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


