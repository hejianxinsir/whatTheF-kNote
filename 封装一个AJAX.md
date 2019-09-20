```
window.jQuery.ajax = function(url,method,body,successFn,failFn){
	let request = new XMLHttpRequest()
	request.open(method, url)
	request.onreadystatechange = ()=>{
		if(request.readyState === 4){
			if(request.status >= 200 && request.status < 300){
				successFn.call(undefined, request.responseText)
			}else if(request.status >= 400){
				failFn.call(undefined, request)
			}
		}
	}
	request.send(body)
}

myButton.addEventListener('click',(e)=>{
	window.jQuery.ajax({
		url: '/xxx',
		method: 'get',
		success: (x)=>{
	}).then(
		(text)=>{console.log(text)},
		(request)=>{console.log(request)}
	)
})
```
