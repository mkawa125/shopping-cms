import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import Header from './components/layouts/header';
import SideBar from './components/layouts/sidebar';
import Home from './components/home';

Vue.config.productionTip = false;


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
const header = new Vue(Vue.util.extend({ router }, Header)).$mount('#header');
new Vue({
  render: h => h(App),
}).$mount('#app');
