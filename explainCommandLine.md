## 新建文件

> echo ‘1’ > 文件路径  ( 创建文件 )
>
> echo ‘1’ >!文件路径    ( 就算该文件已存在，我也强制覆盖文件 )
>
> echo ‘1’ >> 文件路径   ( 不重新创建文件，只是在后一行追加内容 )

```
echo 'hahaha' > 1.txt
echo 'xixixxi' >! 1.txt
echo 'lalala' >> 1.txt
```

ps：windows 里只记住前一种就够了。

> touch xxx  
>
> touch 其实是改变文件更新时间的，但如果没有文件，它会生成一个文件。所以也能用来新建文件。

ps：touch 无法指定内容，echo 可以指定内容。



## 复制文件/目录

> cp test text
>
> cp -r test text  
>
> ( -r 是递归去复制的意思。这条命令会把 test 里所有文件都复制到 text 里，因为这是递归复制。)



## 重命名文件

> mv 1.txt hi.txt  重命名



## 删除文件/目录

```
$ rm 1.txt      删除文件
$ rm -f 1.txt   强制删除文件且别提示我
$ rm -r test    递归地删除目录(就是把目录和目录里面的目录都删除掉的意思)
$ rm -rf text   递归的删除目录且别提示我真的删除吗？？？
```



### 建立软链接：

> ln s 真实文件 链接

比如： ln s demo demo-link 如果你在真实文件有所改动，比如添加文件，那么链接的文件也会同步改动。建立软链接相当于制作一个替身，像火影里的复制忍术。



### 下载文件

> curl -L https://www.baidu.com > baidu.html



## 其他

```
$ tree  查看目录结构
$ wget -p -H -e robots=off https://www.baidu.com 拷贝网页所有内容( 该命令不支持 Windows )
$ df -kh 磁盘占用
$ du -sh . 当前目录大小
$ du -h 各文件大小

ps：h 是 human 的意思，s 是 summary ，d 是 disk ，u 是 usage
```