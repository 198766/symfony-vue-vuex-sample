import Vue from 'vue';
//import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-localstorage';

//Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLocalStorage);
Vue.use(VueLocalStorage, {
    name: 'ls',
    createComputed: true
})

import App from './DepositStation.vue';
//import { routes } from './routes';
import store from './store';

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

new Vue({
  el: '#app',
  //router,
  store,
  render: h => h(App)
})
