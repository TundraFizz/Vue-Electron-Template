<template>
  <div id="app">
    <div id="titlebar">
      <router-link tag="div" class="button" draggable="false" to="/">Main</router-link>
      <router-link tag="div" class="button" draggable="false" to="/settings">Settings</router-link>
      <router-link tag="div" class="button" draggable="false" to="/about">About</router-link>
    </div>

    <div id="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive} from "@vue/composition-api";

export default {
  setup(props: any, {root}: any) {
    const state: any = reactive({
      isMaximized: false
    });

    return {
      state
    };
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  // Prevent dragging of images, links, and text selection
  margin: 0;
  height: 100%;
  cursor: default;
  font-family: sans-serif;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  #titlebar {
    display: flex;
    justify-content: flex-start;
    background-color: rgb(215, 250, 255);
    border-bottom: solid black 1px;
    min-height: 20px;
    font-weight: bold;
    -webkit-user-select: none;
    -webkit-app-region: drag;

    .button {
      display: flex;
      align-items: center;
      padding-left: 6px;
      cursor: pointer;
      -webkit-app-region: no-drag;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

    .right-container {
      display: flex;
      margin-left: auto;

      .minimize {
        -webkit-app-region: no-drag;
        width: 20px;
        border-left: solid black 1px;
        cursor: pointer;
        background-image: url("~@/assets/minimize.png");
        background-size: cover;
        background-color: rgb(91, 94, 255);
        &:hover {background-color: rgb(121, 123, 255);}
        &:active {background-color: rgb(64, 77, 255);}
      }

      .restore {
        -webkit-app-region: no-drag;
        width: 20px;
        border-left: solid black 1px;
        cursor: pointer;
        background-image: url("~@/assets/restore.png");
        background-size: cover;
        background-color: rgb(91, 94, 255);
        &:hover {background-color: rgb(121, 123, 255);}
        &:active {background-color: rgb(64, 77, 255);}
      }

      .maximize {
        -webkit-app-region: no-drag;
        width: 20px;
        border-left: solid black 1px;
        cursor: pointer;
        background-image: url("~@/assets/maximize.png");
        background-size: cover;
        background-color: rgb(91, 94, 255);
        &:hover {background-color: rgb(121, 123, 255);}
        &:active {background-color: rgb(64, 77, 255);}
      }

      .quit {
        -webkit-app-region: no-drag;
        width: 20px;
        border-left: solid black 1px;
        background-image: url("~@/assets/quit.png");
        background-size: cover;
        background-color: rgb(255, 91, 91);
        cursor: pointer;

        &:hover {background-color: rgb(255, 121, 121);}
        &:active {background-color: rgb(255, 64, 64);}
      }
    }
  }

  #router-view {
    display: flex;
    overflow: auto;
    flex-grow: 2;
  }
}
</style>
