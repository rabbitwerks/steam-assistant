import Vue from 'vue';
import { plugin } from 'vue-function-api';
import App from './App.vue';
import store from './store';

Vue.use(plugin);

require('dotenv').config();

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
