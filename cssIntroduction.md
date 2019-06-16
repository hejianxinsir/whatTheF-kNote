## CSS
**Cascading Style Sheets** (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
https://en.wikipedia.org/wiki/Cascading_Style_Sheets

## 清楚浮动带来的 bug
```
在所有子元素上加 float: left/right;在其父元素上加一个 class="clearfix"，css 这样写：
.clearfix::after{
    content:'';
    display: block;
    clear: both;
}
```

## 相对于浏览器窗口定位 position: fixed
```
比如页面的导航栏可能会固定在浏览器窗口的上方
element{
    positon: fixed;
    top: 0;
    left: 0;
    width: 100px;
}   
```

## 添加背景图片
```
.topBanner{
    border: 1px solid red;
    height: 515px;
    background-position: center center;
    background-size: cover;
    background-image: url("../img/topbanner.jpg");
}
/*
background-image: url("../img/topbanner.jpg")
background-position: center center;
background-size: cover;
*/
重点记住
另外，一般不给元素宽高，但可以给 max-width: xxpx; 表示最大宽度。
```

## 相对父元素定位
>在子元素上加 position: absolute; 父元素上加 position: relative;再给子元素添加 top left right bottom属性
