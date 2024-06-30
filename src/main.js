import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n

import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/permission'; // permission control
import loadsh from 'loadsh';
import moment from 'moment';

// 引入全局过滤器
import '@/filters';

// mock数据
import { mockData } from './mock';
if (import.meta.env.VITE_BASE_API === '/mock') {
  mockData();
}

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale,
  size: 'mini'
});

Vue.config.productionTip = false;

// 公共方法引入
Vue.prototype._ = loadsh;
Vue.prototype.moment = moment;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
});
