import Vue from 'vue'
import vuex from 'vuex'
import users from './modules/users'
Vue.use(vuex);

export default new vuex.Store({
  state: {
    demoData: '1111'
  },
  modules: {
    users
  },
});