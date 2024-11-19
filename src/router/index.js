import Vue from 'vue';
import VueRouter from 'vue-router';

import app from '@/router/app';
import wdrw from '@/router/modules/wdrw';

Vue.use(VueRouter);

export const constantRoutes = app.concat(wdrw);

export default new VueRouter({
  mode: 'history',
  // base: '/pc',
  routes: constantRoutes
});
