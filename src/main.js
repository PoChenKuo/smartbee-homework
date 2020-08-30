import Vue from "vue";
import App from "./App.vue";

// import { rtdbPlugin } from "vuefire";
// import { rtdbPlugin as VueFire } from 'vuefire'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Vue.use(VueFire);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
