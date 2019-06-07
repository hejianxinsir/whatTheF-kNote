### 用 server 接收请求

1. 找个地方新建目录
> mkdir local

2. 进入目录
> cd local

3. 在 local 里新建一个 server.js
> touch server.js

4. 编辑并写入内容
> vim server.js

写入如下：

var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/



  console.log('方方说：得到 HTTP 路径\n' + path)
  console.log('方方说：查询字符串为\n' + query)
  console.log('方方说：不含查询字符串的路径为\n' + pathNoQuery)





  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

5. 保存并推出 server.js

6. 此时 node server.js 一下，会报错：
> 请指定端口号好不啦？
> node server.js 8888 这样不会吗？

7. 所以正确写法是：node server.js 8888 (8888 指的是端口，你可以使用 1023 以后的任意端口。因为 0-1023 是给管理员用的，默认用户不能用)

监听 7878 成功
请用在空中转体720度然后用电饭煲打开 http://localhost:7878

8. 此时，监听 8888 端口成功

9. 用 command D ,新建另一个终端命令行，在这里用 curl "http://localhost:7878?neme=hejianxin"

10. 原终端窗口就能打印路径了。










