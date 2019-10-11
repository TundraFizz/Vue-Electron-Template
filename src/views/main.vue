<template>
  <div id="main">
    hi
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
