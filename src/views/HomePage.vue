<template>
  <div>
    <slider :items="sliders"></slider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "../components/Slider.vue";

export default Vue.extend({
  components: {
    Slider
  },

  computed: {
    sliders() {
      return this.$store.state.content.sliders;
    }
  }
});
</script>
