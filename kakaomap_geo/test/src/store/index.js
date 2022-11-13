import Vue from 'vue'
import Vuex from 'vuex'
import VueGeolocation from 'vue-geolocation-api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(VueGeolocation)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    positionObj: {},
  },
  getters: {
  },
  mutations: {
    GETCURRENTSITE(state, position) {
      state.positionObj = position
      console.log(state.positionObj)
    }
  },
  actions: {
  },
  modules: {
  }
})
