import vue from 'vue';
import vuex from 'vuex';
import getters from './getters';

import app from './modules/app';
import permission from './modules/permission';
import tagsView from './modules/tagsView';
import user from './modules/user';

vue.use(vuex);

const store = new vuex.Store({
  modules: {
    app,
    permission,
    tagsView,
    user
  },
  getters
});

export default store;
