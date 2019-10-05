<template>
  <div id="main">

    <!-- <hr> -->

    <div>
      <div>
        <button @click="GetFirstInstance">GetFirstInstance</button><br>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <button @click="AppQuit">app.quit()</button><br>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <button @click="ShellBeep">shell.beep()</button><br>
        <button @click="ShellShowItemInFolder">shell.showItemInFolder()</button><br>
        <button @click="ShellOpenItem">shell.openItem</button><br>
        <button @click="ShellMoveItemToTrash">shell.moveItemToTrash</button><br>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <div>Mouse X: {{ state.mouseX }} Mouse Y: {{ state.mouseY }}<br></div>
        <button @click="ScreenGetPrimaryDisplay">screen.getPrimaryDisplay()</button><br>
        <button @click="ScreenGetAllDisplays">screen.getAllDisplays()</button><br>
        <button @click="ScreenGetDisplayNearestPoint">screen.getDisplayNearestPoint()</button><br>
        <button @click="ScreenGetDisplayMatching">screen.getDisplayMatching()</button><br>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <button @click="Notification1">Notification 1</button><br>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <button @click="ShowOpenDialog">Show Open Dialog</button><br>
        <button @click="ShowSaveDialog">Show Save Dialog</button><br>
        <button @click="ShowMessageBox">Show Message Box</button><br>
        <button @click="ShowErrorBox">Show ErrorBox</button>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <button @click="WebContentsOpenDevTools">webContents.openDevTools()</button><br>
        <button @click="WebContentsCloseDevTools">webContents.closeDevTools()</button><br>
        <button @click="WebContentsToggleDevTools">webContents.toggleDevTools()</button>
        <div>isDevToolsOpened: {{ state.isDevToolsOpened }}</div>
        <div>isDevToolsFocused: {{ state.isDevToolsFocused }}</div>
      </div>
    </div>

    <hr>

    <div>
      <div>
        <button @click="ClipboardReadText">clipboard.readText()</button>
        <span>{{ state.clipboardReadText }}</span>
      </div>
      <div>
        <button @click="ClipboardWriteText">clipboard.writeText()</button>
        <input v-model="state.clipboardWriteText" placeholder="Text to copy to the clipboard">
      </div>
      <div>
        <button @click="ClipboardAvailableFormats">clipboard.availableFormats()</button>
        <span>{{ state.clipboardAvailableFormats }}</span>
      </div>
      <div>
        <button @click="ClipboardReadImage">clipboard.readImage()</button>
        <input v-model="state.clipboardReadImage">
        <img :src="state.clipboardReadImage"/>
      </div>
      <div>
        <button @click="ClipboardWriteImage">clipboard.writeImage()</button>
        <!-- TODO -->
      </div>
    </div>

    <hr>

    <div>
      singleInstanceLock: {{ state.singleInstanceLock }}
    </div>

    <div id="example-1">
      <button @click="Increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
      </button>
    </div>

    <div id="example-2">
      <button @click="YoloSwag">Click this to see what happens</button>
    </div>

    <div id="example-3">
      <button @click="ElectronTest">Electron test</button>
    </div>

    <div class="range-container">
      <input type="range" min="1" max="100" value="50" v-model="state.sliderValue" @input="InputRange($event.target.value)">
      <input type="range" min="1" max="100" value="50" v-model="state.sliderValue" class="slider">
      <input type="range" min="1" max="100" value="50" v-model="state.sliderValue" class="slider round">
      <input type="range" min="1" max="100" value="50" v-model="state.sliderValue" class="slider image">
      <div>{{ state.sliderValue }}</div>
    </div>

    <hr>

    <!-- <img alt="Vue logo" src="~@/assets/logo.png"> -->
  </div>
</template>

<script lang="ts">
import {reactive, computed, onMounted, inject, ref} from "@vue/composition-api";
// import {clipboard, webContents} from "electron";
// import {clipboard, webContents, dialog, downloadItem, globalShortcut, /* image, */ ipcRenderer, nativeImage, notification, screen, shell} from "electron";
import {clipboard, webContents, dialog, DownloadItem, globalShortcut, /* image, */ ipcRenderer, nativeImage, Notification, screen, shell} from "electron";
import {remote} from "electron";
// Can't use these remotely: webContents
// import {app, protocol, BrowserWindow, ipcMain} from "electron";
// import {Something} from "../app.vue";
// import {ThemeSymbol} from "@/app.vue";
import * as fs from "fs";

export default {
  setup(props: any, {root}: any) {

    async function GetFirstInstance() {
      root.Send("GetFirstInstance");
      root.Once("GetFirstInstance", (res: any) => {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(res);
      });
    }

    /*
      fs.writeFile("/Users/leifcoleman/Desktop/a.txt", "This is from the renderer", (err) => {
        console.log(err);
      }); */

    async function AppQuit() {
      console.log("Testing");
    }

    async function ShellBeep() {
      remote.shell.beep();
    }

    async function ShellShowItemInFolder() {
      remote.shell.showItemInFolder("..");
    }

    async function ShellOpenItem() {
      const opened = remote.shell.openItem("../package.json");
      console.log("File was opened:", opened);
    }

    async function ShellMoveItemToTrash() {
      remote.shell.moveItemToTrash("");
    }

    setInterval(() => {
      const result = remote.screen.getCursorScreenPoint();
      state.mouseX = result["x"];
      state.mouseY = result["y"];
    }, 10);

    async function ScreenGetPrimaryDisplay() {
      const result = remote.screen.getPrimaryDisplay();
      console.log(result);
    }

    async function ScreenGetAllDisplays() {
      const result = remote.screen.getAllDisplays();
      console.log(result);
    }

    async function ScreenGetDisplayNearestPoint() {
      const result = remote.screen.getDisplayNearestPoint({x: 0, y: 0});
      console.log(result);
    }

    async function ScreenGetDisplayMatching() {
      const result = remote.screen.getDisplayMatching({x: 0, y: 0, width: 100, height: 100});
      console.log(result);
    }

    async function Notification1() {
      const myNotification = new remote.Notification({
        title: "Title",
        body: "Lorem Ipsum Dolor Sit Amet",
        silent: false,
        // icon: ,
      });

      console.log(myNotification);
      myNotification.show();
      myNotification.on("click", () => {
        console.log("You clicked on the notification!");
      });
      myNotification.on("close", () => {
        console.log("The notification was closed!");
      });
    }

    async function ShowSaveDialog() {
      const result = await remote.dialog.showSaveDialog({
        title: "Save a file",
        // defaultPath: ,
        // buttonLabel: ,
        // filters: ,
      });

      if (result["canceled"]) {
        console.log("User canceled saving a file");
      } else {
        console.log("The path is:", result["filePath"]);
      }
    }

    async function ShowOpenDialog() {
      const result = await remote.dialog.showOpenDialog({
        title: "Open a file",
        // defaultPath: ,
        // buttonLabel: ,
        // filters: ,
        properties: ["openFile", "openDirectory", "multiSelections", "showHiddenFiles"]
      });

      if (result["canceled"]) {
        console.log("User canceled opening a file");
      } else {
        console.log("The paths are:", result["filePaths"]);
        // console.log();
      }
    }

    async function ShowMessageBox() {
      const result = await remote.dialog.showMessageBox({
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

    async function ShowErrorBox() {
      remote.dialog.showErrorBox("Title", "This is the content of the error box");
    }

    // const theme = inject("ThemeSymbol");
    // setInterval(() => {
    //   console.log(theme);
    // }, 500);

    const state: any = reactive({
      mouseX: null,
      mouseY: null,
      isDevToolsOpened: null,
      isDevToolsFocused: null,
      clipboardReadText: null,
      clipboardWriteText: "",
      clipboardReadImage: null,
      clipboardWriteImage: null,
      clipboardAvailableFormats: null,
      singleInstanceLock: null,
      sliderValue: 50,
      count: 0,
      double: computed(() => state.count * 2)
    });

    onMounted(() => {
      console.log("onMounted");

      // console.log(asd);
      // console.log(Something());
      // console.log(A.setup.Okay();

      // console.log(root.Read("a"));
      // console.log(root.Read("b"));
      // console.log(root.Read("singleInstanceLock"));
    });

    root.$store.subscribe((mutation: any) => {
      console.log("========================= mutation =========================");
      console.log(mutation);
      state.singleInstanceLock = mutation.payload;
      console.log(state.singleInstanceLock);
      console.log("============================================================");
    });

    setInterval(() => {
      state.isDevToolsOpened  = remote.getCurrentWebContents().isDevToolsOpened();
      state.isDevToolsFocused = remote.getCurrentWebContents().isDevToolsFocused();
    }, 1000);

    function WebContentsOpenDevTools() {
      remote.getCurrentWebContents().openDevTools();
    }

    function WebContentsCloseDevTools() {
      remote.getCurrentWebContents().closeDevTools();
    }

    function WebContentsToggleDevTools() {
      remote.getCurrentWebContents().toggleDevTools();
    }

    function ClipboardReadText() {
      state.clipboardReadText = clipboard.readText();
    }

    function ClipboardWriteText() {
      clipboard.writeText(state.clipboardWriteText);
    }

    function ClipboardReadImage() {
      state.clipboardReadImage = clipboard.readImage().toDataURL();
      console.log(state.clipboardReadImage);
    }

    function ClipboardWriteImage() {
      console.log("Todo");
    }

    function ClipboardAvailableFormats() {
      state.clipboardAvailableFormats = clipboard.availableFormats();
    }

    function InputRange(value: number) {
      console.log(value);
    }

    function Increment() {
      state.count++;
    }

    function YoloSwag() {
      root.Send("YoloSwag");
      root.Once("YoloSwag", (res: any) => {
        console.log(res);
      });
    }

    function ElectronTest() {
      root.Send("TestFunc1", "ping");
      root.Once("TestFunc1", (res: any) => {
        console.log(res);
      });
    }

    root.On("QueryDevToolStatus", (res: any) => {
      state.isDevToolsOpened = res["isDevToolsOpened"];
      state.isDevToolsFocused = res["isDevToolsFocused"];
    });

    return {
      GetFirstInstance,
      AppQuit,
      ShellBeep,
      ShellShowItemInFolder,
      ShellOpenItem,
      ShellMoveItemToTrash,
      ScreenGetPrimaryDisplay,
      ScreenGetAllDisplays,
      ScreenGetDisplayNearestPoint,
      ScreenGetDisplayMatching,
      Notification1,
      ShowSaveDialog,
      ShowOpenDialog,
      ShowMessageBox,
      ShowErrorBox,
      WebContentsOpenDevTools,
      WebContentsCloseDevTools,
      WebContentsToggleDevTools,
      ClipboardReadText,
      ClipboardWriteText,
      ClipboardReadImage,
      ClipboardWriteImage,
      ClipboardAvailableFormats,
      state,
      InputRange,
      Increment,
      YoloSwag,
      ElectronTest
    };
  }
};
</script>

<style lang="scss" scoped>
#main {
  text-align: center;

  .range-container {
    width: 80%;
    margin: 0 auto;

      input {
        margin-bottom: 10px;
      }
  }

  .slider {
    width: 100%;
    height: 25px;
    opacity: 0.7;
    outline: none;
    appearance: none;
    background: #d3d3d3;
    transition: opacity .1s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      width: 25px;
      height: 25px;
      appearance: none;
      background: #4CAF50;
      cursor: pointer;
    }

    &.round {
      height: 12px;
      border-radius: 5px;

      &::-webkit-slider-thumb {
        height: 25px;
        border-radius: 50%;
      }
    }

    &.image {
      height: 10px;

      &::-webkit-slider-thumb {
        width: 22px;
        height: 22px;
        background: url("~@/assets/contrasticon.png");
        background-size: cover;
      }
    }
  }

}
</style>
