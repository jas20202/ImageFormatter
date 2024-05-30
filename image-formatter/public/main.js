const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true //actually best practice to not enable this...
        }
    })
        const template = [
            {
                label: 'File',
                submenu:[
                    {role:'load'},
                    {role:'save'},
                    {type:'separator'}, // creates a divider between two options
                    {role:'close'},
                ]
            },
            {
                label: 'Edit',
                submenu:[
                    {role:'undo'},
                    {role:'redo'},
                    {type:'separator'},
                    {role:'cut'},
                    {role:'copy'},
                    {role:'paste'},
                    {role:'delete'},
                    {type:'separator'},
                    {role:'selectall'},
                ]
            },
            {
                label: 'Image',
                submenu:[
                    {
                        label: 'Menu Item 1',
                        click: () => {  } // ,
                        //userAccelerator: 'Strg + L'
                    },
                      
                    {role:'add multiple'},
                    {type:'separator'}, // creates a divider between two options
                    {role:'load image'},
                    {role:'remove image'},
                    {type:'separator'}, // creates a divider between two options
                    {role:'delete image'},
                ]
            },
            {
                label: 'View',
                submenu: [
                  { role: 'reload' },
                  { role: 'forceReload' },
                  { role: 'toggleDevTools' },
                  { type: 'separator' },
                  { role: 'resetZoom' },
                  { role: 'zoomIn' },
                  { role: 'zoomOut' },
                  { type: 'separator' },
                  { role: 'togglefullscreen' }
                ]
            },
            {
                label:'Settings',
                click: function(){
                        // open Settings Window
                }
            }
        ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})