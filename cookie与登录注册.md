0. 登录注册的过程是怎样的？首先，新用户登录网站注册账户，写入帐号密码等个人信息，服务器存入新用户的信息到数据库；其次，过了几天,用户输入帐号密码登录，服务器给用户设置 cookie ; 客户端会保存这个 cookie 一段时间。客户端在这个时间段内进入网站，会带上这个 cookie，服务器会根据 cookie 补全用户的个人账户信息，然后更新 html 页面返回给客户端。

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
