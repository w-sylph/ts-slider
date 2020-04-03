<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "./views/HomePage.vue";

import fb from "./firebaseConfig";

@Component({
  components: {
    HomePage
  }
})
export default class App extends Vue {
  mounted() {
    fb.sliderCollection
      .orderBy("order", "asc")
      .get()
      .then(response => {
        const collection: Array<object> = [];
        response.forEach(doc => {
          collection.push(doc.data());
        });

        this.$store.commit("content/set", collection);
      });
  }
}
</script>
