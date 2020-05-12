import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA (state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
        },
        CLEAR_USER_DATA () {
            localStorage.removeItem('user')
            location.reload()
        }
    },
    actions: {
        register ({ commit }, credentials) {
            return axios
                .post('register', credentials)
                .then(({ data }) => {
                    commit('SET_USER_DATA', data)
                })
        },
        login ({ commit }, credentials) {
            return axios
                .post('login', credentials)
                .then(({ data }) => {
                    commit('SET_USER_DATA', data)
                })
        },
        logout ({ commit }) {
            commit('CLEAR_USER_DATA')
        },
        uploadFile( {commit}, infoFile) {
            console.log(infoFile);
            return axios.post('upload', infoFile)
                .then((data) => {commit('CLEAR_USER_DATA',data)})
        }
    },
    getters: {
        loggedIn (state) {
            return !!state.user
        }
    }
})