<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <a href="#">这会回到顶部</a>
    <a href="http://www.baidu.com">这是a标签，用来跳转链接；也可用来在页面内跳转</a>
    <span class="character">这是一个span。span 和 div 这两个标签没有任何语义，所以一般要加 class </span><br>
    <p> p 标签表示一个段落</p>

    <hr>

    <iframe src="http://www.baidu.com" frameborder="0"></iframe><br>
    <a href="http://www.qq.com" target="_blank">空</a><br>
    <a href="http://www.qq.com" target="_parent">父</a><br>
    <a href="http://www.qq.com" target="_top">顶级</a><br>
    <a href="http://www.qq.com" target="_self">自己</a><br>
    <iframe src="./index.09.html" frameborder="0">iframe就是网页里面嵌套一个网页</iframe>
    <hr>

    <table border="1">
        <thead>
            <tr>
                <th>项目</th>
                <td>品类</td>
                <td>数量</td>
                <td>价格</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>仓库1</th>
                <td>苹果</td>
                <td>200吨</td>
                <td>10元</td>
            </tr>
            <tr>
                <th>仓库2</th>
                <td>水晶梨</td>
                <td>150吨</td>
                <td>9.8元</td>
            </tr>
            <tr>
                <th>仓库3</th>
                <td>樱桃</td>
                <td>400吨</td>
                <td>69元</td>
            </tr>
        </tbody>
        <tfoot>
            <th>总计</th>
            <td>自己算</td>
            <td>自己算</td>
            <td>别问我</td>
        </tfoot>
    </table>

    <hr>

    <form action="#" method="get">
        <label>userName: <input type="text" value="user" name="username"></label><br>
        <label>userPassword: <input type="password" value="password" name="password"></label><br>

        <label for="username01">用户名：</label><input id="username01" type="text" value="user" ><br>
        <label for="password01">密码：</label><input type="password" value="password" id="password01"><br>
        <button>提交</button>

        <textarea rows="20" cols="50"></textarea>

    </form>

</body>
</html>