import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    UserToken (state, data) {
      state.token = state
    }
  },
  actions: {

  }
})

export default store
