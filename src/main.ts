import {app, BrowserWindow} from "electron";
import * as path from "path";
// import {app, protocol, BrowserWindow, ipcMain, ipcRenderer, shell, dialog, clipboard} from "electron";
// import {createProtocol} from "vue-cli-plugin-electron-builder/lib";
// import IPC from "./ipc";

// const isDevelopment = (process.env.NODE_ENV !== "production");
// export let obj = {}; // A data object to share variables with custom imported files
export let win: any; // Global reference of BrowserWindow to prevent an automatic close when the JS object is garbage collected

// Scheme must be registered before the app is ready
// protocol.registerSchemesAsPrivileged([{scheme: "app", privileges: {secure: true, standard: true}}]);

function CreateWindow() {
  console.log(app.getAppPath());
  const windowConfig: Electron.BrowserWindowConstructorOptions = {
    width: 600,
    height: 500,
    show: false,
    frame: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: false,
      enableRemoteModule: false,
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false
    }
  };

  win = new BrowserWindow(windowConfig);
  win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string); // Load the url of the dev server if in development mode
  win.webContents.openDevTools();

  win.once("ready-to-show", () => {
    win.show();
  });
}

app.on("ready", async () => {
  console.log("READY");
  CreateWindow();
});

// app.on('web-contents-created', (event, contents) => {
//   contents.on('will-navigate', (event, navigationUrl) => {
//     const parsedUrl = new URL(navigationUrl)

//     if (parsedUrl.origin !== 'https://example.com') {
//       event.preventDefault()
//     }
//   })
// });

// app.on('web-contents-created', (event, contents) => {
//   contents.on('new-window', async (event, navigationUrl) => {
//     // In this example, we'll ask the operating system
//     // to open this event's url in the default browser.
//     event.preventDefault()

//     await shell.openExternal(navigationUrl)
//   })
// });


  // if (process.env.WEBPACK_DEV_SERVER_URL) {
  //   win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string); // Load the url of the dev server if in development mode
  //   // win.webContents.openDevTools();
  //   // process.env.IS_TEST
  // }
  // else {
  //   createProtocol("app");
  //   win.loadURL("app://./index.html"); // Load the index.html when not in development
  // }

  // win.once("ready-to-show", () => {
  //   win.show();
  //   win.focus();
  //   win.focusOnWebView();
  //   win.setAlwaysOnTop(true);
  //   win.setAlwaysOnTop(false);
  //   win.webContents.openDevTools();
  // });

  // win.on("resize", () => {
  //   win.send("IsMaximized", win.isMaximized());
  // });

  // win.on("closed", () => {
  //   win = null;
  // });
// }

// app.on("window-all-closed", () => {
//   // Quit when all windows are closed. On macOS it is common for applications and
//   // their menu bar to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   // On macOS it's common to re-create a window in the app when
//   // the dock icon is clicked and there are no other windows open
//   if (win === null) {
//     CreateWindow();
//   }
// });

// app.on("second-instance", (event, commandLine, workingDirectory) => {
//   // Someone tried to run a second instance, we should focus our window.
//   if (win) {
//     if (win.isMinimized()) {
//       win.restore();
//     }

//     win.focus();
//   }
// });

// app.on("ready", async () => {
//   // This method will be called when Electron has finished initialization and is ready
//   // to create browser windows. Some APIs can only be used after this event occurs
//   // obj["firstInstance"] = app.requestSingleInstanceLock();

//   CreateWindow();

//   // if (obj["firstInstance"]) {
//   //   CreateWindow();
//   // } else {
//   //   app.quit();
//   // }
// });

// if (isDevelopment) {
//   // Exit cleanly on request from parent process in development mode
//   if (process.platform === "win32") {
//     process.on("message", (status) => {
//       if (status === "graceful-exit") {
//         app.quit();
//       }
//     });
//   } else {
//     process.on("SIGTERM", () => {
//       app.quit();
//     });
//   }
// }

// ipcMain.on("ipc", (event, args: any) => {
//   try {
//     const result = IPC[args.method](args.data) || 0;
//     win.send(args.method, result);
//   } catch (error) {
//     console.log(`Error in function: ${args.method}`);
//     console.log(error);
//   }
// });
