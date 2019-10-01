<template>
  <div id="main">

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

    <img alt="Vue logo" src="~@/assets/logo.png">
  </div>
</template>

<script lang="ts">
import {reactive, computed, onMounted, inject, ref} from "@vue/composition-api";
// import {Something} from "../app.vue";
// import {ThemeSymbol} from "@/app.vue";

export default {
  setup(props: any, {root}: any) {
    // const theme = inject("ThemeSymbol");
    console.log("setup in main.vue has begun");

    // setInterval(() => {
    //   console.log(theme);
    // }, 500);

    const state: any = reactive({
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

    function InputRange(value: number) {
      console.log(value);
    }

    function Increment() {
      state.count++;
    }

    function YoloSwag() {
      root.Send("YoloSwag");
    }

    function ElectronTest() {
      const sendToElecton = "ping";
      root.Send("TestFunc1", sendToElecton);
    }

    root.On("TestFunc1", (res: any) => {
      console.log(res);
    });

    return {
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
