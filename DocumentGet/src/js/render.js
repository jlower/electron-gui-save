// let holder = document.querySelector('#holder');
// let readlist = document.querySelector('#readlist')
// let fs = require('fs');

// holder.addEventListener('drop',(e)=>{//拖动到上面，释放
//     e.preventDefault();//取消默认
//     e.stopPropagation();//阻止冒泡
//     // console.log(e);
//     for(const file of e.dataTransfer.files){
//         // console.log(file);
//         // console.log("文件路径:"+file.path);
//         fs.readFile(file.path,(err,data)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 let newDiv = document.createElement('div');
//                 newDiv.className = 'readfile';
//                 newDiv.innerHTML = `
//                     <h3>${file.name}</h3>
//                     <pre>${data}</pre>
//                 `
//                 // ${变量}
//                 readlist.appendChild(newDiv);
//             }
//         })
//     }
// })
// holder.addEventListener('dragover',(e)=>{//拖动到上面
//     e.preventDefault();//取消默认
//     e.stopPropagation();//阻止冒泡
// })

// const webview = document.querySelector('#wv');
// webview.addEventListener('did-start-loading',()=>{
//     console.log("正在加载中.......");
// })
// webview.addEventListener('did-stop-loading',()=>{
//     console.log("加载完毕.......");
//     console.log([webview]);
//     webview.insertCSS(`#su{background:red!important;}`);
//     webview.executeJavaScript(`
//         setTimeout(()=>{
//             let input = document.querySelector("#kw");
//             input.value = "嘉然今天吃什么";
//             let btn = document.querySelector("#su");
//             btn.click();
//         })
//     `);
//
// })


