# Electron Vue Template

```
npm install -g @vue/cli
vue create .

vue add electron-builder
npm run electron:serve
npm run electron:build
```

Documentation on various features:
PWA: todo
Router: todo
Vuex: https://vuex.vuejs.org/
CSS Pre-processors: Sass/SCSS (with dart-sass)
Linter / Formatter: TSLint, Lint on save

`npm install` Install packages after cloning

`npm run serve` Compiles and hot-reloads for development
`npm run build` Compiles and minifies for production

`npm run electron:serve` Electron
`npm run electron:build` Electron

`npm run lint` Lints and fixes files

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Done       | Done
Todo       | Still need to do this
Maybe      | Might do this, because it's kind of useful
Not useful | Won't do this because it's not useful

### TODO

https://electronjs.org/docs/all
https://electronjs.org/docs/api

app.requestSingleInstanceLock()

globalShortcut.register()

image.toPNG()
image.toJPEG()
image.toBitmap()
image.getNativeHandle()
image.isEmpty()
image.getSize()
image.setTemplateImage()
image.isTemplateImage()
image.crop()
image.resize()
image.getAspectRatio()
image.addRepresentation()

nativeImage.createEmpty()
nativeImage.createFromPath()
nativeImage.createFromBitmap()
nativeImage.createFromBuffer()
nativeImage.createFromDataURL()
nativeImage.createFromNamedImage()

downloadItem.setSavePath()
downloadItem.getSavePath()
downloadItem.setSaveDialogOptions()
downloadItem.getSaveDialogOptions()
downloadItem.pause()
downloadItem.isPaused()
downloadItem.resume()
downloadItem.canResume()
downloadItem.cancel()
downloadItem.getURL()
downloadItem.getMimeType()
downloadItem.hasUserGesture()
downloadItem.getFilename()
downloadItem.getTotalBytes()
downloadItem.getReceivedBytes()
downloadItem.getContentDisposition()
downloadItem.getState()
downloadItem.getURLChain()
downloadItem.getLastModifiedTime()
downloadItem.getETag()
downloadItem.getStartTime()

win.maximize()
win.unmaximize()
win.minimize()
win.restore()
win.setSize()
win.setContentSize()
win.setMinimumSize()
win.setMaximumSize()
win.setResizable()
win.flashFrame()
win.setSkipTaskbar()
win.setKiosk()
win.setProgressBar()
win.setOverlayIcon()
win.setHasShadow()
win.setOpacity()
win.setThumbarButtons()

Get auto-updates to work.
My app's window/tray disappeared after a few minutes.
The font looks blurry, what is this and what can I do?
Native File Drag & Drop
nativeImage
JumpListCategory Object
JumpListItem Object
KeyboardEvent Object extends Event
Class: Tray
Online/Offline Event Detection
Checklist: Security Recommendations
Code signing is a security technology that you use to certify that

### DONE
clipboard.readText()                | Done
clipboard.writeText()               | Done
clipboard.readImage()               | Done
clipboard.writeImage()              | Todo
clipboard.availableFormats()        | Done
clipboard.has()                     | Not useful
clipboard.read()                    | Not useful
clipboard.readBuffer()              | Not useful
clipboard.writeBuffer()             | Not useful
clipboard.write()                   | Maybe
webContents.openDevTools()          | Done
webContents.closeDevTools()         | Done
webContents.toggleDevTools()        | Done
webContents.isDevToolsOpened()      | Done
webContents.isDevToolsFocused()     | Done
dialog.showOpenDialog()             | Done
dialog.showSaveDialog()             | Done
dialog.showMessageBox()             | Done
dialog.showErrorBox()               | Done
dialog.showCertificateTrustDialog() | Not useful
ipcRenderer.on()                    | Done
ipcRenderer.once()                  | Done
ipcRenderer.send()                  | Done
ipcRenderer.sendSync()              | Not useful
ipcRenderer.removeListener()        | Not useful
ipcRenderer.removeAllListeners()    | Not useful
ipcRenderer.sendTo()                | Not useful
ipcRenderer.sendToHost()            | Not useful
notification.isSupported()          | Done
notification.show()                 | Done
notification.close()                | Done
screen.getCursorScreenPoint()       | Done
screen.getPrimaryDisplay()          | Done
screen.getAllDisplays()             | Done
screen.getDisplayNearestPoint()     | Done
screen.getDisplayMatching()         | Done
screen.screenToDipPoint()           | Not useful
screen.dipToScreenPoint()           | Not useful
screen.screenToDipRect()            | Not useful
screen.dipToScreenRect()            | Not useful
shell.beep()                        | Done
shell.showItemInFolder()            | Done
shell.openItem()                    | Todo
shell.openExternalSync()            | Not useful
shell.openExternal()                | Not useful
shell.moveItemToTrash()             | Todo
shell.writeShortcutLink()           | Not useful
shell.readShortcutLink()            | Not useful

===========================================================================================
app                             | Main |
autoUpdater                     | Main |
BrowserWindow                   | Main |
contentTracing                  | Main |
dialog                          | Main |
globalShortcut                  | Main |
inAppPurchase                   | Main |
ipcMain                         | Main |
net                             | Main |
netLog                          | Main |
Notification                    | Main |
powerMonitor                    | Main |
powerSaveBlocker                | Main |
protocol                        | Main |
screen                          | Main |
session                         | Main |
systemPreferences               | Main |
webContents                     | Main |
clipboard                       | Main | Renderer
crashReporter                   | Main | Renderer
nativeImage                     | Main | Renderer
process                         | Main | Renderer
shell                           | Main | Renderer
desktopCapturer                 |      | Renderer
ipcRenderer                     |      | Renderer
remote                          |      | Renderer
webFrame                        |      | Renderer
Overview                        |      | Renderer
Class: BrowserView              | Main |
Class: BrowserWindow            | Main |
Class: ClientRequest            | Main |
Class: Cookies                  | Main |
Class: Debugger                 | Main |
Class: DownloadItem             | Main |
Class: IncomingMessage          | Main |
Class: Menu                     | Main |
Class: MenuItem                 | Main |
Class: Notification             | Main |
Class: Session                  | Main |
Class: TouchBar                 | Main |
Class: TouchBarButton           | Main |
Class: TouchBarColorPicker      | Main |
Class: TouchBarGroup            | Main |
Class: TouchBarLabel            | Main |
Class: TouchBarPopover          | Main |
Class: TouchBarScrubber         | Main |
Class: TouchBarSegmentedControl | Main |
Class: TouchBarSlider           | Main |
Class: TouchBarSpacer           | Main |
Class: Tray                     | Main |
Class: WebContents              | Main |
Class: WebRequest               | Main |
Class: NativeImage              | Main | Renderer
Class: BrowserWindowProxy       |      | Renderer
