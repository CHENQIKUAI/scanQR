/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import VConsole from "vconsole"

Vue.config.productionTip = false;

var vConsole = new VConsole();
console.log('Hello world');

new Vue({
  render: (h) => h(App),
}).$mount("#app");
