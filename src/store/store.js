import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    userId: '',
  },
  mutations: {
    SET_USERID(state, id) {
      state.userId = id;
    }
  },
  actions: {

  },
  getters: {

  }
})
export default store
