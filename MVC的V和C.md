# MVC 三个对象分别有哪些属性和方法
1. MVC 中的 V 
- V 就是 view ，用户看得见的页面区域。每个单独的区域都可以给一个 view 。JS 操作页面都可以通过 view 找到具体的元素.
```
!function(){
	var view = document.querySelector('#mySlides')	// 这就是 view
	view.style.border = '1px solid red'

	var controller = {
		view: null,
		init: function(view){
			this.view = view
			this.bindEvents()
		}
		bindEvents: function(view){
 			var view = this.view
			window.addEventListener('scroll', function(x){
				if(window.scrollY > 0){	
					view.classList.add('sticky')
				}else{
					view.classList.remove('sticky')
				}
			})

	}
	controller.init(view)
	// 声明一个 controller，里面有一个 view，初始化为 null。还有个 init 方法，需要传一个 view。后面调用的时候就用 controller.init(view), 需要传 view。
}
```
