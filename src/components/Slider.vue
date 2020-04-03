<template>
  <div class="slider-wrapper">
    <button @click="prev()" type="button" class="slider-btn slider-prev">
      <i class="fas fa-chevron-right"></i>
    </button>
    <button @click="next()" type="button" class="slider-btn slider-next">
      <i class="fas fa-chevron-left"></i>
    </button>
    <transition-group name="fade" mode="out-in" tag="div">
      <div
        v-if="visible"
        class="slider-bg"
        key="slider-new"
        :style="`background-image: url(${prevSelected.src})`"
      >
        <p class="slider-text">{{ prevSelected.name }}</p>
      </div>
      <div
        v-else
        class="slider-bg"
        key="slider-old"
        :style="`background-image: url(${selected.src})`"
      >
        <p class="slider-text">{{ selected.name }}</p>
      </div>
    </transition-group>

    <div class="slider-dots">
      <span
        v-for="(n, index) in last"
        :key="`slider-dot-${index}`"
        class="slider-dot"
        @click="select(n)"
      >
        <i v-if="current == n" class="fas fa-circle"></i>
        <i v-else class="far fa-circle"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
  @Prop() private items!: Array<object>;

  selected: object = {
    name: null,
    src: null
  };
  prevSelected: object = {
    name: null,
    src: null
  };
  current = 1;
  last = 1;
  visible = false;
  loading = false;

  @Watch("items")
  onPropertyChanged(collection: Array<object>) {
    this.setup(collection);
  }

  public setup(collection: Array<object>) {
    this.last = collection.length;
    if (collection.length > 0) {
      this.selected = collection[0];
    }
  }

  public next() {
    if (this.loading) return;
    this.loading = true;
    this.current = this.current - 1;

    if (this.current < 1) {
      this.current = this.last;
    }

    this.change();
  }

  public prev() {
    if (this.loading) return;
    this.loading = true;
    this.current = this.current + 1;

    if (this.current > this.last) {
      this.current = 1;
    }

    this.change();
  }

  public change() {
    this.prevSelected = this.selected;
    this.visible = true;

    this.$nextTick(() => {
      this.selected = this.items[this.current - 1];

      this.visible = false;
      this.loading = false;
    });
  }

  public select(n: number) {
    this.current = n;
    this.change();
  }

  mounted() {
    this.setup(this.items);
  }
}
</script>
