0. 登录注册的过程是怎样的？首先，新用户登录网站注册账户，写入帐号密码等个人信息，服务器存入新用户的信息到数据库；其次，过了几天用户登录账户，输入帐号密码，服务器在数据库里面找有没有匹配的帐号。找到了，就补充完这个用户的个人信息，再更新 html 返回给用户，并且给用户设置了 cookie 标记一下，在某个时间段内，该用户再次登录就不用输入账户密码了。

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
