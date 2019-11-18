// react 不允许修改传给你的参数
```
var number = 0;

var add = ()=>{
	number += 1
		render()
}

var minus = ()=>{
	number -= 1
		render()
}

function App(){
	return (
		<div>		//注意，这里只有一个根元素
			<Box1/>
			<Box2/>
		</div>

		// 记住，你写的不是 HTML , 而是
	)
}

function Box1 (){
	return (
			<div>
			<span>{number}</span>
			<button onClick={add}>+</button>
			<button onClick={minus}>-</button>
			</div>
	)
}

render()



function render(){
	ReactDom.render(
			<App />,  
			document.querySelector('#root')
	)
}


```
