### 用 server 发出响应

1. 在 server.js 里添加两句话：
> response.write('Hi')
> response.end()

2. node server.js 8888

3. 在另一个终端窗口中 curl http://127.0.0.1:8888?name=janson

4. 就会响应一个 Hi 了

5. 同时 response.write('Hi')  response.end() 可以更复杂，比如写成这样：
> if(path == '/'){
	response.write('Hi')
	response.end()
}else if(path == '/index'){
	response.setHeader(Content-Type, text/html)
	response.write('<doctype html><html><head></head><body><h1>Hello node.js</h1></body></html>')
	response.end()
}else{
	response.statusCode = 404
	response.end()
}