<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

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
      <button @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
      </button>
    </div>

    <div id="example-2">
      <button @click="YoloSwag">Click this to see what happens</button>
    </div>

    <div id="example-3">
      <button @click="ElectronTest">Electron test</button>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, computed} from "@vue/composition-api";

export default {
  setup(props: any, {root}: any) {
    const state: any = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    function YoloSwag() {
      alert("Yolo swag!");
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
      increment,
      YoloSwag,
      ElectronTest
    };
  }
};
</script>
