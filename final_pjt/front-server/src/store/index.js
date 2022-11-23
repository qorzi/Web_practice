import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
// import router from '@/router'
import VueGeolocation from 'vue-geolocation-api'

Vue.use(VueGeolocation)
Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'
const YOUTUBE_KEY = process.env.VUE_APP_YOUTUBE_API

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    movies : [],
    movies2 : [],
    movies3 : [],
    articles: [],
    youtubeVideos: [],
    token: null,
    isModalLogin: false,
    isSearch: false,
    searchText: null,
    searchMovies: null,
    positionObj: {},
    notSign: true,
    genreMovies: [],
    badwordFilter: false,
    username: null,
  },
  
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    GET_MOVIES2(state, movies2) {
      state.movies2 = movies2
    },
    GET_MOVIES3(state, movies3) {
      state.movies3 = movies3
    },
    GET_ARTICLES(state, articles) {
      state.articles = articles.reverse()
    },
    // 회원가입 && 로그인
      // 세션 스토리지에 토큰 저장
    SAVE_TOKEN(state, token) {
      // sessionStorage.setItem('token', token)
      state.isModalLogin = false
      state.token = token
      // router.push({ name: 'Testhome'})
      // this.dispatch('getUserPro')
      
    },
    DELETE_TOKEN(state) {
      // 세션 스토리지에 토큰 삭제 
      // sessionStorage.removeItem('token')
      state.token = null
      // router.push({ name: 'LogInView'})
    },
    CLOSE_MODAL(state) {
      state.isModalLogin = false
    },
    OPEN_LOGIN(state) {
      state.isModalLogin = true
      state.notSign = true
    },
    OPEN_SIGNUP(state) {
      state.isModalLogin = true
      state.notSign = false
    },
    OPEN_SEARCH(state, searchedMovies) {
      state.searchMovies = searchedMovies
      state.isSearch = true
    },
    CLOSE_SEARCH(state) {
      state.isSearch = false
      state.searchMovies = null
    },
    GETCURRENTSITE(state, position) {
      state.positionObj = position
      // console.log(state.positionObj)
    },
    SEARCH_YOUTUBE: function (state, res) {
      state.youtubeVideos = res.data.items
    },
    GET_GENRE_MOVIE(state, movies) {
      state.genreMovies = movies
    },
    BADWORD_FILTER(state) {
      state.badwordFilter = !state.badwordFilter
    }
  },
  actions: {
    getMovies(context, movies) {
      context.commit('GET_MOVIES', movies)
    },
    getMovies2(context, movies2) {
      context.commit('GET_MOVIES2', movies2)
    },
    getMovies3(context, movies3) {
      context.commit('GET_MOVIES3', movies3)
    },
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          // console.log(res, context)
          // console.log(res.data)
          context.commit('GET_ARTICLES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signUp(context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: `${API_URL}/account/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
          nickname: payload.nickname
        }
      })
        .then((res) => {
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          alert('잘못 입력했다!')
          console.log(err)
        })
    },
    logIn(context, payload) {
      const username = payload.username
      axios({
        method: 'post',
        url: `${API_URL}/account/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          console.log(res)
          context.state.username = username 
          context.commit('SAVE_TOKEN', res.data.key)
        })
    },
    getUserPro(context){
      axios({
        method: 'get',
        url: `${API_URL}/account/user/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          // console.log(res, context)
          console.log(res.data)
          
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getUser(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          // console.log(res, context)
          // console.log(res.data)
          context.commit('GET_ARTICLES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    searchMovie(context, searchText) {
      const API_KEY = process.env.VUE_APP_TMDB_API_KEY
      const URL = 'https://api.themoviedb.org/3/search/movie'

      axios({
        method: "get",
        url: URL,
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          query: searchText,
          // page: '1',
        }
      })
        .then((res) => {
          // console.log(res.data.results)
          context.state.searchText = searchText
          const searchedMovies = res.data.results
          context.commit("OPEN_SEARCH", searchedMovies)
        })
        .catch((err) => {
          console.log(err)
        })


      // 가라용
      // context.state.searchText = searchText
      // context.commit("OPEN_SEARCH", searchText)
      },
      searchYoutube: function ({ commit }, searchText) {
        const params = {
          q: searchText+'movie',
          key: YOUTUBE_KEY,
          part: 'snippet',
          type: 'video'
        }
        axios({
          method: 'get',
          url: YOUTUBE_URL,
          params,
        })
        .then(res => {
          // console.log(res.data.items)
          commit('SEARCH_YOUTUBE', res)
        })
        .catch(err => console.log(err))
      },  
      // articleLike(context, articles) {
      //   axios({
      //     method: 'post',
      //     url: `${API_URL}/api/v1/${articles.pk}/like/`,
      //     headers: {
      //       Authorization: `Token ${context.state.token}`
      //     }
      //   })
      // }
    },
  modules: {
  }
})
