# 左右布局
用 float ，给父元素加清除浮动 class="clearfix"。如下代码，给两个 div 分别 float left 和 float right ，并给父元素添加清楚浮动。
```
  <style type="text/css">
    .clearfix::after{
        content:'';
        display: block;
        clear: both;
    }
    .father{
    width: 300px;
    border: 1px solid black;
    }
    div{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    }
    .one{
    float: left;
    }
    .two{
    border-color: green;
    float: right;
    }
  </style>  
</head>
<body>
  <div class="father clearfix">
    <div class="one"></div>
    <div class="two"></div>
  </div>
</body>
```

# 左中右布局
同样可以用浮动 float: left; 这中间一个 div margin: 50px;
```
<style type="text/css">
    .father{
      max-width: 600px;
      border: 1px solid black;
    }
    .one,.two,.three{
      width: 100px;
      height: 100px;
      border: 1px solid red;
      float: left;
    }
    .two{
      border-color: green;
      margin: 0 100px;
    }
    .three{
      border-color: pink;
    }
  </style>  
</head>
<body>
  <div class="father clearfix">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div> 
  </div>
</body>
```

# 水平居中
1. 如果 div 有宽度，可以给 div margin: 0 auto; 实现水平居中。
```
<style type="text/css">
    .father{
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 0 auto;
    }
  </style>  
</head>
<body>
  <div class="father clearfix">
  </div>
</body>
```

2. 如果是让文字水平居中。
用 text-align: center;
```
<style type="text/css">
    .father{
      text-align:center;
      border: 1px solid black;
      margin: 0 auto;
    }
  </style>  
</head>
<body>
  <div class="father clearfix">
    哈哈啊哈哈哈
  </div>
</body>
```

# 垂直居中
子元素加一个 margin-top ，高度为（父元素的高度-子元素的高度）* 1/2
```
<style type="text/css">
    .father{
      height: 500px;
      width: 500px;
      border: 1px solid black;
    }
    .one{
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 200px auto;
    }
  </style>  
</head>
<body>
  <div class="father">
    <div class="one"></div>
  </div>
</body>
```

# 其他
1. 加 display: inline-block ，一般后面要加 vertical-align: top;
2. 如果父元素的宽度有限制，不能给 padding 。可以给父元素加一个子元素，通过给这个子元素 padding ，来达到生成距离的目的且不撑大父元素。
3. 绝对定位。给子元素加 position: absolute; 给父元素加 position: relative; 再给子元素 top left right bottom 值。
4. 检查里可以点击 hover ，勾选一下就能强制 hover ，这样查看、获取 hover 状态后的信息。
5. transition: 5s; 过渡的时间，让过度不那么僵硬。
6. 在父元素上加 text-align: center; 使文字居中。