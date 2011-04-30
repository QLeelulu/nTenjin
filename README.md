## What is this?

基于[jsTenjin](http://www.kuwata-lab.com/tenjin/jstenjin-users-guide.html)修改的高性能的支持node.js的模板解析引擎
(A template engine base on [jsTenjin's](http://www.kuwata-lab.com/tenjin/jstenjin-users-guide.html) and more fase and support node.js )

## Change from jsTenjin

+ jsTenjin是使用`eval`来解析的，而nTenjin是使用 `new Function` 来解析的(速度差别之一)。
+ jsTenjin是使用`Array.push`来构造字符串的，而nTenjin是使用 `String += str` 来构造字符串的(速度差别之二)。
+ nTenjin中变量必须由`it`来指定，例如`#{param}`要修改为`#{it.param}`,其他和jsTenjin完全一致。

## Benchmarks

at [here](http://jsperf.com/dom-vs-innerhtml-based-templating/142)

## Install 

    $ sudo npm install tenjin

## User's Guide
	
	var tenjin = require('tenjin');
	tenjin.render('Hello #{it.name}!', {name:'nTenjin'});

note that the `it`

more detail at [jsTenjin User's Guide](http://www.kuwata-lab.com/tenjin/jstenjin-users-guide.html)

## Use in express

    app.register(".html", require('tenjin'));
