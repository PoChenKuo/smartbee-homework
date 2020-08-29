import Vue from "vue";
import App from "./App.vue";

import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
