var fs=require('fs')
window.onload= function () {
    var btn = this.document.querySelector('#btn')
    var name = this.document.querySelector('#name')
    btn.onclick= function () {
        fs.readFile('name.txt',(err,data)=>{
            name.innerHTML = data
        })
    }
}