<template>
  <div id="main">
    <img alt="Vue logo" src="~@/assets/logo.png">

    <hr>

    <table border="1">
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
      <tr>
        <td>Row 1 - a</td>
        <td>Row 1 - b</td>
        <td>Row 1 - c</td>
      </tr>
      <tr>
        <td>Row 2 - a</td>
        <td>Row 2 - b</td>
        <td>Row 2 - c</td>
      </tr>
      <tr>
        <td>Row 3 - a</td>
        <td>Row 3 - b</td>
        <td>Row 3 - c</td>
      </tr>
    </table>

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
  </div>
</template>

<script lang="ts">
import {reactive, computed} from "@vue/composition-api";

export default {
  setup(props: any, {root}: any) {
    const state: any = reactive({
      sliderValue: 50,
      count: 0,
      double: computed(() => state.count * 2)
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
