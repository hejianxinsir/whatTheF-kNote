1. 不要监听 body ，因为 body 的高度由内部文档流撑开，你很可能没撑开。所以你应该监听 document 。

2. 课上的例子中，你点击了一下，明明有个 block 可以执行，但是浮层并没有 block，这是因为 document 上有一个 none 也执行了，所以你看不到。在代码里加一个 debugger 就能在开发者工具里看到了。

3. e.stopPropagation()  //propagation 传播传递的意思，这个语句是说，从此处开始阻止传递。比如点击儿子，在儿子身上加这一句，就会停止往上传递。

4. 点击其他地方，浮层消失
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  
  <style>
    .wrapper{
        position: relative;
        display: inline-block;
    }
    .popover{
        position: absolute;
        top: 0;
        left: 100%;
      
        white-space: nowrap;
        margin-left: 10px;
        border: 1px solid red;
        padding: 10px;
        background: white;
    }
    .popover::before{
      position: absolute;
      top: 0;
      right: 100%;
      
      border: 10px solid transparent;
      border-right-color: red;
      content: '';
    }
    .popover::after{
      position: absolute;
      right: 100%;
      top: 0;
      border: 10px solid transparent;
      border-right-color: white;
      content: '';
      margin-right: -1px;
    }
  </style>
</head>
<body>
  <div id="wrapper" class="wrapper">
    <button id="clickMe">点我</button>
    <div id="popover" class="popover">
       <input type="checkbox">浮层
    </div>
  </div>
</body>
</html>

clickMe.addEventListener('click', function(e){
  popover.style.display = 'block'
})

wrapper.addEventListener('click', function(e){
  e.stopPropagation()
})

document.addEventListener('click', function(){
  popover.style.display = 'none'
})

// 上面的 js 代码可以用jQuery 来写：
$(clickMe).on('click',function(){
	$(popover).show()
})

$(wrapper).on('click',function(e){
	e.stopPropagation()
})

$(document).on('click',function()
	$(popover).hide()
{})

// 阻止默认事件的话，checkbox 就无法选中了。
```

5. 如果在用 one.() 监听一次，点击 clickMe 也不会出先浮层，因为监听一次的时候，他的速度太快了，你点击了一下，依然是点击了 document ，所以还是执行了 display: none。怎么解决？一种是 stopPropagation() ,另一种是用 setTimeout()。在《点击别处关闭浮层》那个视频。
