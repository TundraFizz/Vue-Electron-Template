<template>
  <div id="settings">

    <h1>Settings</h1>

    <hr>

    <div>
      <button @click="Increase">Main: Increase</button> {{ state.a }}
    </div>

    <hr>

    <div>Todo stuff here</div>
  </div>
</template>

<script lang="ts">
import {reactive, computed, onMounted, inject, ref} from "@vue/composition-api";

export default {
  setup(props: any, {root}: any) {
    const state: any = reactive({
      a: root.Read("a")
    });

    async function Increase() {
      root.Write("a", ++state.a);
    }

    root.$store.subscribe((mutation: any) => {
      state[mutation.type] = mutation.payload;
    });

    function SwagYolo() {
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
      Increase,
      SwagYolo,
      ElectronTest
    };
  }
};
</script>

<style lang="scss" scoped>
#settings {
  text-align: center;
}
</style>
