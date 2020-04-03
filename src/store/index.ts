import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    content: {
      namespaced: true,
      state: {
        sliders: []
      },

      mutations: {
        set(state, value) {
          state.sliders = value;
        }
      }
    }
  }
});
