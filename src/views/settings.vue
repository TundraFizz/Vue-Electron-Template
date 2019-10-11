<template>
  <div id="settings">
    hi2
  </div>
</template>

<script lang="ts">
import {reactive, computed, onMounted, inject, ref} from "@vue/composition-api";

export default {
  setup(props: any, {root}: any) {
    const state: any = reactive({
      a: "a"
    });

    return {
      state
    };
  }
};
</script>

<style lang="scss" scoped>
#settings {
  text-align: center;
}
</style>
