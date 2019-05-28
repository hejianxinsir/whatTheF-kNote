# 测试：执行一个脚本
1. 在桌面新建一个目录 mkdir local
2. 进入该目录 cd local
3. 新建一个文件 touch demo.txt
4. 编辑该文件 open demo.txt
5. 在该文件内，注意，是在该文件内输入内容
```
mkdir demo
cd demo
mkdir css js
touch index.html css/style.css js/main.js
exit
```
6.用 sh 命令 在桌面执行demo.txt
```
sh local/demo.txt
```
7. 此时，你会看到桌面上多了一个demo目录，目录里有一些文件。这个demo.txt就是写出来的Bash脚本。
