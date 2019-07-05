//方形
// canvas.onmousedown = function(){
//   context.fillStyle = 'green'
//   context.fillRect(10,10,100,100)
//   context.clearRect(50,50,5,5)
// }
//画圆形
// context.fillStyle = 'black'
// context.beginPath()
// context.arc(10,10,5,0,Math.PI*2)
// context.fill()

//画直线
// context.beginPath()
// context.strokeStyle = 'black'
// context.moveTo(10,10)
// context.lineWidth = 5
// context.lineTo(20,20)
// context.stroke()
// context.clothPath()

autoSetCanvasSize(canvas)
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var using = false
var lastPoint = {x:undefined, y:undefined}
var eraserEnabled = false

eraser.onclick = function(){
  eraserEnabled = !eraserEnabled
}

function listenToUserMouse(){

}

/*************/
//点击事件
//点击出现圆
canvas.onmousedown = function(aaa){
  var x = aaa.clientX
  var y = aaa.clientY
  if(eraserEnabled){
    using = true
    context.clearRect(x-5,y-5,10,10) //因为清除使用方形的，鼠标在方形的左上角，所以 x y 都要减去一半，鼠标才在圆心。
  }else{
    using = true
    lastPoint = {'x':x, 'y':y}
    //   drawCircle(x,y,1) 没有这个圆圈是一样的，可以删除
  }
}

//移动画圆
canvas.onmousemove = function(aaa){
  var x = aaa.clientX
  var y = aaa.clientY
  if(eraserEnabled){
    if(using){
      context.clearRect(x-5,y-5,10,10)
    }
  }else{
    if(using){
      var newPoint = {'x':x, 'y':y}
      //drawCircle(x,y,1) 没有这个圆圈是一样的，可以删除
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
      lastPoint = newPoint
    }
  }

}

//松鼠标，停止画圆
canvas.onmouseup = function(aaa){
  using = false
}

/*************/

//画圆 的封装函数
function drawCircle(x,y,radius){
  context.fillStyle = 'black'
  context.beginPath()
  context.arc(x,y,radius,0,Math.PI*2)
  context.fill()
}

//点与点连线 的封装函数
function drawLine(x1,y1,x2,y2){
  context.beginPath()
  context.strokeStyle = 'black'
  context.moveTo(x1,y1)
  context.lineWidth = 5
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}

//获取宽高 的封装函数
function autoSetCanvasSize(){

  setCanvasSize(canvas)
  //如果用户重新移动页面，位置就不对了，所以要监听一下，重新获取宽高就行了
  //但重新移动页面内容会消失，这个问题暂留。

  window.onresize = function(){
    setCanvasSize()
  }
  //有重复代码，所以优化一下
  function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}


























