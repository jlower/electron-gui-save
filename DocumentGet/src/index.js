const { app, BrowserWindow, ipcMain, dialog, net } = require('electron');
const path = require('path');





// //监听渲染进程发送过来的lowo-message事件
// ipcMain.on('lowo-message',(event,arg)=>{
//     event.reply('lowo-reply',"这是主进程的答复");
//     console.log(arg);
// })
//
// //监听渲染进程发送过来的openNewWindow事件,要求打开新窗口
// ipcMain.on('openNewWindow',(event,arg)=>{
//   cWindow('https://www.taobao.com');
// })
//
// const cWindow = (url) => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     //========================================================
//     //初始设置必用此
//     //========================================================
//     width: 1280,
//     height: 720,
//     webPreferences:{
//       nodeIntegration:true,
//       contextIsolation:false,
//       webviewTag:true
//     }
//
//   });
//
//   // and load the index.html of the app.
//   mainWindow.loadURL(url);
//
//   // Open the DevTools.
//   mainWindow.webContents.openDevTools();
//
// };


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    //========================================================
    //初始设置必用此
    //========================================================
    width: 1280,
    height: 720,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false,
      webviewTag:true
    }

  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // let request = net.request('https://www.taobao.com');
  // request.on("response", (response) =>{
  //   console.log(response.statusCode);
  //   console.log(JSON.stringify(response.headers));
  //   response.on("data", chunk => {
  //     console.log(chunk.toString());
  //   })
  // })
  // request.end();

  // mainWindow.on("close", (e)=>{
  //   e.preventDefault();
  //   dialog.showMessageBox(mainWindow,{
  //     type:'warning',
  //     title:'关闭',
  //     message:'是否关闭窗口',
  //     buttons:["取消","忍痛关闭"]
  //   }).then((index)=>{
  //     // console.log(index);
  //     if(index.response==1){
  //       app.exit();
  //     }
  //   });
  // })

  // setTimeout(()=>{
  //     dialog.showOpenDialog({
  //         properties:["openFile","multiSelections"]//"openFile"选择文件    "multiSelections"多选
  //         //==========================================注意不加引号才有提示
  //         //"showHiddenFiles"显示隐藏文件
  //         //"createDirectory"允许创建文件夹
  //         //"openDirectory"选择文件夹
  //     }).then((result)=>{
  //         console.log(result.filePaths);
  //         console.log(result.canceled);
  //     })
  // },2000);

  // setTimeout(()=>{
  //     //主动的发消息给渲染进程
  //     mainWindow.webContents.send('lowo-active',"创建窗口之后主进程主动的发消息给渲染进程");
  // },2000);


};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
