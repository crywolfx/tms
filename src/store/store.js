import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        userId: '',
        token: localStorage.getItem('token') || '',
        isAdmin: localStorage.getItem('isAdmin') || false,
        userInfo: localStorage.getItem('userInfo')&&JSON.parse(localStorage.getItem('userInfo')) || {},
    },
    mutations: {
        SET_USERID(state, id) {
            state.userId = id;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_IS_ADMIN(state, bool) {
            state.isAdmin = bool;
        },
        SET_USER_INFO(state, obj) {
            state.userInfo = obj;
        }
    },
    actions: {

    },
    getters: {

    }
})
export default store