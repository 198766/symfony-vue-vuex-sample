import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-localstorage';

Vue.use(VueResource);
Vue.use(VueLocalStorage);
Vue.use(VueLocalStorage, {
  name: 'ls',
  createComputed: true
});

import App from './DepositStation.vue';
import store from './store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
