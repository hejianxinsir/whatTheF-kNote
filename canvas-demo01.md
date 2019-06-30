<body>
    <canvas id="canvas"></canvas>
</body>

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

var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var painting = false
var lastPoint = {x:undefined, y:undefined}

//点击出现圆
canvas.onmousedown = function(aaa){
  painting = true
  var x = aaa.clientX
  var y = aaa.clientY
  lastPoint = {'x':x, 'y':y}
  drawCircle(x,y,1)

}

//移动画圆
canvas.onmousemove = function(aaa){
  if(painting){
    var x = aaa.clientX
    var y = aaa.clientY
    var newPoint = {'x':x, 'y':y}
    drawCircle(x,y,1)
    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
    lastPoint = newPoint
  }
}

//松鼠标，停止画圆
canvas.onmouseup = function(aaa){
  painting = false
}

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


























