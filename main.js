const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Keep reference of main window because of GC
var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function() {
    app.quit();
});

// When application is ready, create application window
app.on('ready', function() {

    // Create main window
    // Other options available at:
    // http://electron.atom.io/docs/latest/api/browser-window/#new-browserwindow-options
    mainWindow = new BrowserWindow({
        "name": "ea-todo",
        "width": 1000,
        "height": 900,
        "toolbar": false,
        "minHeight" : 500,
        "minWidth" : 600
    });

    // Target HTML file which will be opened in window
    mainWindow.loadURL('file://' + __dirname + "/app/layout.html");

    // Uncomment to use Chrome developer tools
    // mainWindow.webContents.openDevTools({detach:true});

    // Cleanup when window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
    });

});
