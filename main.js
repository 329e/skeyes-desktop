const { app, BrowserWindow, Menu } = require('electron');

const SKEYES_URL = 'https://skeyes.netlify.app';

function createWindow() {
  Menu.setApplicationMenu(null); // pas de barre de menu classique, cohérent avec le style épuré

  const win = new BrowserWindow({
    width: 480,
    height: 860,
    minWidth: 380,
    minHeight: 600,
    title: 'SKEYES',
    backgroundColor: '#05080a',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadURL(SKEYES_URL);

  // ouvrir les liens externes éventuels dans le navigateur système plutôt que dans l'appli
  win.webContents.setWindowOpenHandler(({ url }) => {
    require('electron').shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
