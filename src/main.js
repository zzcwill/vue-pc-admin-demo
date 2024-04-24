import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import './styles/element-variables.scss';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n

import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control
import loadsh from 'loadsh';
import moment from 'moment';

// 引入全局过滤器
import '@/filters';

// mock数据
import { mockXHR } from '../mock';
if (import.meta.env.VITE_BASE_API === '/mock') {
  mockXHR();
}

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale,
  size: 'mini',
});

Vue.config.productionTip = false;

// 公共方法引入
Vue.prototype._ = loadsh;
Vue.prototype.moment = moment;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
