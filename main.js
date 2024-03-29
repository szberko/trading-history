const {app, BrowserWindow} = require('electron');
const path = require('path');
const csv = require('csvtojson');
const csvFilePath='/Users/szberko/history.csv';
const Datastore = require('nedb');

let trades = new Datastore({autoload: true});

global.database = trades;

function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
        nodeIntegration: true
    }
  });
  
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
  mainWindow.webContents.openDevTools();
}

function createDB() {
  csv()
    .fromFile(csvFilePath)
    .then((json) => {
      trades.insert(json, (err, doc) => {
        err === null ?
          console.log("All records inserted successfully.") :
          console.log('Error during data insertion: ', err) ;
      })
    });
}

app.whenReady().then(createDB);
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
   app.quit(); 
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

app.commandLine.appendSwitch('remote-debugging-port', '9222')