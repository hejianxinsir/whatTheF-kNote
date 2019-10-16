1. 登录注册的时候，要翻译一下才能拿到 @ 符号。
```
hash[key] = decodeURIComponent(value)
```

2. 给 body 高度可以这样写：
```
// 其一
html{
	height: 100%;
}
body{
	min-height: 100%;
}

// 其二
body{
	height: 100vh;  // 不兼容 IE
}
``` 

3. 居中套路以及垂直排列。这个是对子元素的操作。
```
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
```

4. 默认 inline 元素给宽度没用，这时候要给它 display: inline-block

5. 宽度可以用 em 作单位，如：min-width: 4em;

6. --
```
$('#signUpForm').find(`[name=${name}]`).val()

// 在 #signUpForm 里面查找 name 等于 name 的值，再取他的 value
```
