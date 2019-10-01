"use strict";

import {app, protocol, BrowserWindow, ipcMain, shell, dialog, clipboard} from "electron";
import {createProtocol, installVueDevtools} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object. If you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null;

const singleInstanceLock = app.requestSingleInstanceLock();
console.log("===============================================");
console.log(singleInstanceLock);
console.log("===============================================");

/*
  if (!singleInstanceLock) {
    app.quit();
  } else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      // Someone tried to run a second instance, we should focus our window.
      if (myWindow) {
        if (myWindow.isMinimized()) myWindow.restore()
        myWindow.focus()
      }
    })

    // Create myWindow, load the rest of the app, etc...
    app.on('ready', () => {
    })
  }
*/

// event.sender.send("SingleInstanceLock", "singleInstanceLock");

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: "app", privileges: {secure: true, standard: true}}]);

function CreateWindow() {
  const windowConfig = {
    width: 600,
    height: 500,
    frame: false,
    resizable: true,
    webPreferences: {nodeIntegration: true}
  };

  win = new BrowserWindow(windowConfig);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string); // Load the url of the dev server if in development mode

    if (!process.env.IS_TEST) {
      win.webContents.openDevTools();
    }
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html"); // Load the index.html when not in development
  }

  win.on("closed", () => {
    win = null;
  });
}

app.on("window-all-closed", () => {
  // Quit when all windows are closed. On macOS it is common for applications and
  // their menu bar to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when
  // the dock icon is clicked and there are no other windows open
  if (win === null) {
    CreateWindow();
  }
});

// app.isReady()
app.on("ready", async () => {
  // This method will be called when Electron has finished initialization and is ready
  // to create browser windows. Some APIs can only be used after this event occurs
  if (isDevelopment && !process.env.IS_TEST) {
    /* Install Vue Devtools
     * Devtools extensions are broken in Electron 6.0.0 and greater
     * See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
     * Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
     * If you are not using Windows 10 dark mode, you may uncomment these lines
     * In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines */

    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error("Vue Devtools failed to install:", e.toString())
    // }
  }
  CreateWindow();
});

if (isDevelopment) {
  // Exit cleanly on request from parent process in development mode
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

const IPC: {[key: string]: any} = {
  Initialize: (event: any, data: any) => {
    const initializationData = {
      singleInstanceLock: singleInstanceLock
    };

    event.sender.send("Initialize", initializationData);
  },

  TestFunc1: (event: any, data: any) => {
    console.log("===========================================");
    console.log(event);
    console.log("===========================================");
    event.sender.send("TestFunc1", "pong");
  },

  Quit: (event: any, data: any) => {
    app.quit();
  },

  OpenProjectInBrowser: (event: any, data: any) => {
    shell.openExternal("https://github.com/TundraFizz/Vue-Electron-Template");
  },

  YoloSwag: (event: any, data: any) => {
    const result = dialog.showMessageBoxSync({
      type: "warning", // "none", "info", "error", "question" or "warning". On Windows, "question" displays the same icon as "info", unless you set an icon using the "icon" option. On macOS, both "warning" and "error" display the same warning icon
      buttons: ["Left", "Middle", "Right"],
      title: "Muh Title",
      message: "Muh message",
      detail: "This is the detail",
      checkboxLabel: "checkboxLabel",
      checkboxChecked: true,
      // icon: ,
    });

    console.log(result);
  }
};

ipcMain.on("ipc", (event, args) => {
  try {
    IPC[args.method](event, args.data);
  } catch (error) {
    console.log(error);
    console.log(`${args.method}() is not a function`);
  }
});
