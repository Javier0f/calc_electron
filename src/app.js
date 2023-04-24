const {app, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname,{
        Electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

app.on('ready', ()=>{MainWindow()});

function MainWindow(){
    let mainWindow = new BrowserWindow({
        width: 375,
        height: 550,
        resizable: false
    })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/views/mainview.html'),
        protocol: 'File',
        slashes: true
    }))
    mainWindow.setMenu(null)
}