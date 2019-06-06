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

