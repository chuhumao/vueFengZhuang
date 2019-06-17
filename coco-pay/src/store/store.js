import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)

const state = {
  token: null
}

const mutations = {
  token (state, data) {
    state.token = state
  }
}

export default new Vuex.Store({
  state,
  mutations
})
