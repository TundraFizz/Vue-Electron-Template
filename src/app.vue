<template>
  <div id="app">
    <div id="titlebar">
      <router-link tag="div" class="button" draggable="false" to="/">Main</router-link>
      <router-link tag="div" class="button" draggable="false" to="/settings">Settings</router-link>
      <router-link tag="div" class="button" draggable="false" to="/about">About</router-link>
      <div class="quit" @click="Quit"><div class="x">X</div></div>
    </div>

    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
  setup(props: any, {root}: any) {
    function Quit() {
      root.Send("Quit");
    }

    root.On("TestFunc1", (res: any) => {
      console.log(res);
    });

    return {
      Quit
    };
  }
};
</script>

<style lang="scss">
#app {
  #titlebar {
    display: flex;
    justify-content: flex-start;
    background-color: rgb(215, 250, 255);
    border-bottom: solid black 1px;
    height: 20px;
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

    .quit {
      -webkit-app-region: no-drag;
      border-left: solid black 1px;
      background-color: rgb(255, 91, 91);
      width: 20px;
      height: 20px;
      margin-left: auto;
      cursor: pointer;

      &:hover {background-color: rgb(255, 121, 121);}
      &:active {background-color: rgb(255, 64, 64);}

      .x {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
}

body {
  margin: 0;
  font-family: sans-serif;
}

* {
  // Prevent dragging of images, links, and text selection
	-webkit-user-select: none;
	-webkit-user-drag: none;
	-webkit-app-region: no-drag;
	cursor: default;
}
</style>
