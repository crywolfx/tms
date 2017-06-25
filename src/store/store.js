import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        userId: '',
        token: localStorage.getItem('token') || '',
    },
    mutations: {
        SET_USERID(state, id) {
            state.userId = id;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        }
    },
    actions: {

    },
    getters: {

    }
})
export default store