<template>
  <div id="about">
    <h1>Vue Electron Template</h1>
    <div>Created by: Tundra Fizz</div>
    <span class="link" @click="OpenProjectInBrowser">GitHub link to this project</span>
  </div>
</template>

<script lang="ts">
export default {
  setup(props: any, {root}: any) {
    function OpenProjectInBrowser() {
      root.Send("OpenProjectInBrowser");
    }

    return {
      OpenProjectInBrowser
    };
  }
};
</script>

<style lang="scss" scoped>
#about {
  text-align: center;

  .link {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
