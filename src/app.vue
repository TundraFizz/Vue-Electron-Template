<template>
  <!-- <div id="app" onload="Initialize()"> -->
  <div id="app" onload="console.log('sdfhsdjkfhs')">
    <div id="titlebar">
      <router-link tag="div" class="button" draggable="false" to="/">Main</router-link>
      <router-link tag="div" class="button" draggable="false" to="/settings">Settings</router-link>
      <router-link tag="div" class="button" draggable="false" to="/about">About</router-link>
      <div class="quit" @click="Quit"><div class="x">X</div></div>
    </div>

    <div>??? {{ state.singleInstanceLock }}</div>
    <div @click="DoSomething">CLICK ME!</div>

    <router-view/>
  </div>
</template>

<script lang="ts">
import {ref, reactive, onMounted, toRefs, provide, inject} from "@vue/composition-api";

export default {
  setup(props: any, {root}: any) {
    const that = this;

    // root.$store.subscribe((mutation: any) => {
    //   console.log("========================= mutation =========================");
    //   console.log(mutation);
    // });

    provide("ThemeSymbol", "dark");

    // setTimeout(ghsdjfdf, 2000);
    // setTimeout(ghsdjfdf(that), 2000);

    const state: any = reactive({
      singleInstanceLock: null,
    });

    const asd: any = ref("Hello world!");
    const stateAsRefs = toRefs(state);

    onMounted(() => {
      // root.Send("Initialize");
    });

    function DoSomething() {
      // provide["ThemeSymbol"] = "zzzzzzzzzzzz";
      // alert("sdfjksdk");
    }

    // function Okay() {
    //   return "Okay";
    // }

    function Quit() {
      root.Send("Quit");
    }

    // root.On("Initialize", (res: any) => {
    //   console.log("app.vue has been initialized");
    //   console.log(res);
    //   state.singleInstanceLock = res.singleInstanceLock;

    //   console.log(root.Read("a"));
    //   console.log(root.Read("b"));
    //   console.log(root.Read("singleInstanceLock"));
    //   root.Write("data", state.singleInstanceLock);
    //   console.log(root.Read("singleInstanceLock"));
    // });

    return {
      state,
      DoSomething,
      stateAsRefs,
      asd,
      // qwe: Okay(),
      // Something,
      Quit
    };
  },
  provide: {
    ThemeSymbol: "fjkksddff"
  }
};

// export function Something() {
//   return "hi";
// }
</script>

<style lang="scss">
body {
  // Prevent dragging of images, links, and text selection
  margin: 0;
  cursor: default;
  font-family: sans-serif;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
}

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
</style>
