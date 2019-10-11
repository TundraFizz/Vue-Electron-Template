// // import {app, protocol, BrowserWindow, ipcMain, ipcRenderer, shell, dialog, clipboard} from "electron";
// import {app, dialog, shell} from "electron";
// import {win, obj} from "./main";

// export default {
//   GetFirstInstance: (data: any) => {
//     return obj["firstInstance"];
//   },

//   TestFunc1: (data: any) => {
//     console.log(data);
//     return "pong";
//   },

//   Minimize: (data: any) => {
//     win.minimize();
//     console.log("Minimize");
//   },

//   Restore: (data: any) => {
//     win.unmaximize();
//     console.log("Restore");
//   },

//   Maximize: (data: any) => {
//     win.maximize();
//     console.log("Maximize");
//   },

//   Quit: (data: any) => {
//     app.quit();
//   },

//   OpenProjectInBrowser: (data: any) => {
//     shell.openExternal("https://github.com/TundraFizz/Vue-Electron-Template");
//   },

//   YoloSwag: (data: any) => {
//     return dialog.showMessageBoxSync({
//       type: "warning", // "none", "info", "error", "question" or "warning". On Windows, "question" displays the same icon as "info", unless you set an icon using the "icon" option. On macOS, both "warning" and "error" display the same warning icon
//       buttons: ["Left", "Middle", "Right"],
//       title: "Muh Title",
//       message: "Muh message",
//       detail: "This is the detail",
//       checkboxLabel: "checkboxLabel",
//       checkboxChecked: true,
//       // icon: ,
//     });
//   }
// };
