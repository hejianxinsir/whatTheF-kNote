# 介绍 HTTP，主要内容有
1. HTTP 请求包括哪些部分，如何用Chrome开发者工具查看 HTTP 请求内容
2. HTTP 响应包括哪些部分，如何用Chrome开发者工具查看 HTTP 响应内容
3. 如何使用 curl 命令?

## 定义
HTTP (HyperText Transfer Protocol 超文本传输协议) 。
> 是一种用于分布式、协作式和超媒体信息系统的应用层协议[1]。HTTP是万维网的数据通信的基础。

## HTTP 请求最多包括四个部分，最少三个部分，第四部分可以为空。
第一部分：
> GET / HTTP/1.1  //GET即获取；/ 即路径，没写路径时，默认为 / ;1.1 是 HTTP 的版本号

第二部分：
1. key $1 : value $1
2. Host: www.google.com 
3. User-Agent: curl/7.54.0
4. Accept: */*
5. Content-length: xxx
6. Content-Type: xxx //Content-Type 标注了第四部分的格式。

第三部分：永远是空行。用于区分第二部分和第四部分。

第四部分：要上传的数据。可以为空。

## 如何用Chrome开发者工具查看 HTTP 请求内容

1. 右键选择检查，点击 Network
2. 进入某网站，如 www.google.com
3. 点击第一个 （www.google.com）
4. 点击 Request Headers
5. 点击右侧的 view resource

## HTTP 响应包括哪些部分?

第一部分：
协议/版本号状态码状态解释，如 HTTP/1.1 200 OK

第二部分：
Key1: value1
Key2: value2
Content-Length: 17931  //内容长度
Content-Type: text/html  //Content-Type 标注了第四部分的格式。

第三部分：为空行。

第四部分：
要下载的内容。

## 如何用Chrome开发者工具查看 HTTP 响应内容？

1. 右键选择检查，点击 Network
2. 进入某网站，如 www.google.com
3. 点击第一个 （www.google.com）
4. 点击 Response Headers
5. 点击右侧的 view resource