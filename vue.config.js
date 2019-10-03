module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "src/main.ts", // Filename of the Electron entry point
      mainProcessWatch: ["src/ipc.ts"] // Additional files to watch
    }
  },
  configureWebpack: {
    entry: {
      app: "./src/render.ts" // Filename of the Vue render entry point
      // main: "./src/render.ts", // Filename of the Vue render entry point
      // bundleName: "./src/render.ts" // Filename of the Vue render entry point
    }
  }
};
