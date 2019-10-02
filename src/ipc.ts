// import {app, protocol, BrowserWindow, ipcMain, ipcRenderer, shell, dialog, clipboard} from "electron";
import {app, dialog, shell} from "electron";

export default {
  Initialize: (data: any) => {
    const initializationData = {
      // singleInstanceLock: singleInstanceLock
    };

    return initializationData;
  },

  TestFunc1: (data: any) => {
    console.log(data);
    return "pong";
  },

  Quit: (data: any) => {
    app.quit();
  },

  OpenProjectInBrowser: (data: any) => {
    shell.openExternal("https://github.com/TundraFizz/Vue-Electron-Template");
  },

  YoloSwag: (data: any) => {
    return dialog.showMessageBoxSync({
      type: "warning", // "none", "info", "error", "question" or "warning". On Windows, "question" displays the same icon as "info", unless you set an icon using the "icon" option. On macOS, both "warning" and "error" display the same warning icon
      buttons: ["Left", "Middle", "Right"],
      title: "Muh Title",
      message: "Muh message",
      detail: "This is the detail",
      checkboxLabel: "checkboxLabel",
      checkboxChecked: true,
      // icon: ,
    });
  }
};
