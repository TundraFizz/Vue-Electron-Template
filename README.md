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

### TODO
https://electronjs.org/docs/all

app.requestSingleInstanceLock()
Get auto-updates to work
new BrowserWindow([options])
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

clipboard.readText()
clipboard.writeText()
clipboard.readImage()
clipboard.writeImage()
clipboard.availableFormats()
clipboard.has()
clipboard.read()
clipboard.readBuffer()
clipboard.writeBuffer()
clipboard.write()

Code signing is a security technology that you use to certify that

dialog.showOpenDialogSync()
dialog.showOpenDialog()
dialog.showSaveDialogSync()
dialog.showSaveDialog()
dialog.showMessageBoxSync()
dialog.showMessageBox()
dialog.showErrorBox()
dialog.showCertificateTrustDialog()

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

globalShortcut.register()

ipcRenderer.on()
ipcRenderer.once()
ipcRenderer.removeListener()
ipcRenderer.removeAllListeners()
ipcRenderer.send()
ipcRenderer.sendSync()
ipcRenderer.sendTo()
ipcRenderer.sendToHost()

nativeImage.createEmpty()
nativeImage.createFromPath()
nativeImage.createFromBitmap()
nativeImage.createFromBuffer()
nativeImage.createFromDataURL()
nativeImage.createFromNamedImage()

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

Notification.isSupported()
new Notification()
notification.show()
notification.close()

screen.getCursorScreenPoint()
screen.getPrimaryDisplay()
screen.getAllDisplays()
screen.getDisplayNearestPoint()
screen.getDisplayMatching()
screen.screenToDipPoint()
screen.dipToScreenPoint()
screen.screenToDipRect()
screen.dipToScreenRect()

shell.showItemInFolder()
shell.openItem()
shell.openExternalSync()
shell.openExternal()
shell.moveItemToTrash()
shell.beep()
shell.writeShortcutLink()
shell.readShortcutLink()

contents.openDevTools()
contents.closeDevTools()
contents.isDevToolsOpened()
contents.isDevToolsFocused()
contents.toggleDevTools()

Make a button to toggle devtools.
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
