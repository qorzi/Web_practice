import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    wannaMovies: [
      {
        title: '스파이더맨',
        isWatch: false,
      },
      {
        title: '스타워즈',
        isWatch: true,
      },
    ],
    movies: [],
  },
  getters: {
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
      // console.log(state.movies)
    },
    ADD_MOVIE(state, movieTitle) {
      const movie = {
        title: movieTitle, 
        isWatch: false
      }
      state.wannaMovies.push(movie)
    },
    DELETE(state, item) {
      const index = state.wannaMovies.indexOf(item)
      state.wannaMovies.splice(index, 1)
    },
    UPDATESTATUS(state, item) {
      const index = state.wannaMovies.indexOf(item)
      state.wannaMovies[index].isWatch = !state.wannaMovies[index].isWatch
    }
  },
  actions: {
    // addMovie(context, title) {
    //   const movie = {
    //     title: title, 
    //     isWatch: false
    //   }
    //   context.commit('ADD_MOVIE', movie)
    // }
  },
  modules: {
  }
})
