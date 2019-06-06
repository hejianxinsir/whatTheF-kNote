### 写&执行一个脚本

1.mkdir local

> 随便找个地方新建一目录，比如在桌面上新建 local 目录。

2. cd local

> 进入目录，务必记得进入目录。

3. touch demo.txt

> 这个demo.txt 就是你的脚本。

4. 编辑 demo.txt ,写入一下内容：

> mkdir demo
> cd demo
> mkdir css js
> touch index.html css/style.css js/main.js
> exit

5. 在任意位置执行该文件。

> sh ~/Desktop/local/demo.txt
>你就会看到有一个 demo 目录，里面有 index.html css js

6. 将 local 添加到 path 里
a. 创建一个 .bashrc 文件：touch .bashrc
b. 添加内容到 .bashrc (可以用 vim、open 操作)：export PATH="local的绝对路径:$PATH" 
c. 运行 .bashrc 使配置生效：source .bashrc

7. 在将 local 添加到 path 里之前，你 sh demo.txt 才能执行脚本。现在，你 demo.txt 就可以执行脚本了。

### 参数
在前面的脚本里，你执行 demo.txt 只会得到一个名为 demo 的文件。因为你的脚本里写的就是：

> mkdir demo
> cd demo
> mkdir css js
> touch index.html css/style.css js/main.js
> exit

所以，你 demo.txt 一下，只能得到名为 demo 的目录。如果你想得到名为 aaa、bbb、ccc 等任意名字的目录怎么办？
**把脚本里的名字改成 $1 就好了**

即，把脚本写成：

> mkdir $1
> cd $1
> mkdir css js
> touch index.html css/style.css js/main.js
> exit

此时，你执行 demo.txt aaa , 就能得到名为 aaa 的目录了。

### PATH 的作用

你每次在 bash 里输入命令时(如 ls)，bash 都会去 PATH 里找对应的文件，找到了就执行。