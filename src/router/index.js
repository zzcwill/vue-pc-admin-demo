import Vue from 'vue';
import Router from 'vue-router';

// 同个路由跳转报错,重写push方法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

/* modules */
// 模块按一级菜单来区分  例如 系统管理（一级菜单）-一些详情页路由添加方式-添加在/router/modules/xtgl/index.js里，里面有demo
import app from '@/router/app';
// 平台管理
import ptgl from '@/router/modules/ptgl';
// 我的任务
import wdrw from '@/router/modules/wdrw';

export const constantRoutes = app.concat(ptgl, wdrw);

const createRouter = () => {
  return new Router({
    mode: 'history',
    base: import.meta.env.VITE_BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });
};

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
