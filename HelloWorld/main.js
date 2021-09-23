
var electron=require('electron')
var app=electron.app // 引用app
var BrowserWindow=electron.BrowserWindow //引用窗口
var mainwindow = null  //声明要打开的主窗口

app.on('ready',()=>{
    mainwindow = new BrowserWindow({width:800,height:800})
    mainwindow.loadFile('index.html') // 加载html页面
    mainwindow.on('closed',()=>{
        mainwindow=null
    })
})
