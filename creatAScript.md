# Create a script
cd ~/Destktop
mkdir local
cd local
touch demo.txt
vim demo.txt

	mkdir $1
	cd $1
	mkdir css js
	touch index.html css/style.css js/main.js
	echo 'hi html' > index.html
	echo 'hi css' > css/style.css
	echo 'hi js' > js/main.js
	exit
	:wq

sh demo.txt xxx
