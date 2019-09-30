<template>
  <div id="settings">

    <h1>Settings</h1>

    <hr>

    <div>Todo stuff here</div>
  </div>
</template>

<script lang="ts">
export default {
  setup(props: any, {root}: any) {
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
      YoloSwag,
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
