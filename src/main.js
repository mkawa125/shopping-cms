import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
var csrf_token = $('meta[name="csrf-token"]').attr('content');

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import Header from './components/layouts/header';
import SideBar from './components/layouts/sidebar';
import ViewProfile from './components/profile/view-profile';
import Home from './components/home';
import ViewProducts from './components/products/index';
import CreateProduct from './components/products/create';

Vue.config.productionTip = false;


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'profile',
    path: '/profile',
    component: ViewProfile
  },
  {
    name: 'products',
    path: '/products',
    component: ViewProducts
  },
  {
    name: 'add',
    path: '/products/add',
    component: CreateProduct
  }

];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
const header = new Vue(Vue.util.extend({ router }, Header)).$mount('#header');
const sidebar = new Vue(Vue.util.extend({ router }, SideBar)).$mount('#sidebar');
const home = new Vue(Vue.util.extend({ router }, Home)).$mount('#home');
new Vue({
  render: h => h(App),
}).$mount('#app');
