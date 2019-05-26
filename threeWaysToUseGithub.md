# 方式一：本地使用

- 新建一个目录(比如在桌面) git-demo-1 

```
$ mkdir git-demo-1
```

- 进入 git-demo-1

```
$ cd git-demo-1
```

- 创建一个 .git 目录，用 git init

```
$ git init
```

- 新建文件，如：

```
$ touch index.html
$ mkdir css
$ touch css/stylt.css
```

- git status -sb 查看一下

```
$ git staus -sb
```

会出现：

```
## No commits yet on master
?? css/
?? index.html/
```

问号表示 git 不知道你要对你新建的文件干什么。接下来我们添加文件。

- 使用 git add xxx 添加文件

```
$ git add index.html
$ git add css/style.css
```

- 再 git status -sb 查看一下

```
$ git status -sb
```

会出现：

```
## No commits yet on master
A css/style.css
A index.html
```

- A 表示已经添加成功了，接下来我们用 git commit xxx -m '备注信息' 提交

```
$ git commit index.html -m 'commit index.html'
$ git commit css/style.css -m 'commit css/style.css'
```

- 再用 git status -sb 查看一下

```
$ git status -sb
```

会出现：

```
## master
```

变动已记录在仓库（repository）里了，大功告成。

### 另，改动文件如何做？

- windows 用 start css/style.css , Mac 用 open css/style.css

```
$ open css/style.css
```

- 比如在 css 里添加：

```
body{background:red}  (保存退出)
```

- git status -sb 查看一下文件状态：

```
$ git status -sb
```

- 会出现：

```
## master
M css/style.css
```

- M 意思是有文件被修改了。此时 M 是红色字体，表示被修改了但未被保存；M 为绿色时指被修改了且已被保存。
- 接着，git add css/style.css

```
$ git add css/style.css

```

- 然后，git commit css/style.css -m 'commit css/style.css'

```
$ git commit css/style.css -m 'commit css/style.css'

```

- git status -sb 查看一下文件状态：

```
$ git status -sb

```

```
## master

```

这就是保存提交修改文件的整个过程。



# 方式二：将本地仓库上传到github

- 在 github 上新建一个空仓，什么都不要选。
- 确保 SSH 选项是已选中状态。

![屏幕快照 2019-05-26 09.34.52](/Users/jonson/Desktop/屏幕快照 2019-05-26 09.34.52.png)

- 看第二段 …or push an existing repository from the command line. 在对应的目录下，分别运行下面两行代码即可。刷新 github 页面，就能看到本地的目录已上传到 github 上。

![屏幕快照 2019-05-26 09.38.19](/Users/jonson/Desktop/屏幕快照 2019-05-26 09.38.19.png)



# 方式三：将 github 上的仓库下载到本地

- 新建一个 repository ，这次不是空仓，而是选择三个选项：Initialize this repository with a README / Node / MIT Licence

![屏幕快照 2019-05-26 09.45.10](/Users/jonson/Desktop/屏幕快照 2019-05-26 09.45.10.png)

- 点击该页面上唯一一个绿色按钮 clone and download ，中间的地址必须为 git@github 开头。如果不是，点击 Use SSH 即可。

![屏幕快照 2019-05-26 09.47.16](/Users/jonson/Desktop/屏幕快照 2019-05-26 09.47.16.png)

- 复制图中的地址：git@github.com:hejianxinsir/git-demo-945

- 在命令行中使用 git clone 命令，回车

- ```
  $ git clone git@github.com:hejianxinsir/git-demo-945
  
  ```

- 此时，桌面上(对应目录下)会多出一个文件，此时已成功把 github 上的仓库下载到本地了

# 如何上传更新
- cd typoraNew01
- touch A.md
- git add A.md
- git commit A.md
- git pull
- git push 
