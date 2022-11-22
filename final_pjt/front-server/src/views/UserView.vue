<template>
  <div>
    <div class="wall">
      <button class="wallbutton"></button>
    </div>
    <header class="userbox">
      <div class="usernamebox"> 
        <h1 class="username"> 주승</h1>
      </div>
    </header>

    <div class="moive_first">
    <div class= "movie_subject">
      <p class= "movie_subject_name">회원님이 좋아요 한 영화</p>
    </div>
    <div class="movie_second">
      <div class="movie_third">
        <div class="movie_fourth">
          <div class="movie_fifth">
            <div class="movie_sixth">
                  <ul class="movie_list">
              <swiper :options="swiperOption">
                <swiper-slide
                  v-for="movie in movies" 
                  :key="movie.id">
                  <MovieList :movie="movie"/>
                </swiper-slide>
              </swiper>
                  </ul>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'
import axios from 'axios'
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'UserView',
  components: {
    MovieList, 
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
          '@0.75': {
            slidesPerView: 4
          },
          '@1.20': {
            slidesPerView: 5
          }
          },
          swiperSlides: [1, 2, 3, 4, 5]
          }
        }
      },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    },
    movies() {
      return this.$store.state.movies
    },
  },
  created() {
    const API_KEY = process.env.VUE_APP_TMDB_API_KEY
    const URL = 'https://api.themoviedb.org/3/movie/popular'

    axios({
      method: "get",
      url: URL,
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
        page: '1',
      }
    })
      .then((response) => {
          this.$store.dispatch('getMovies', response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
    },
  methods: {
    getUser() {
      if (this.isLogin === true) { 
        this.$store.dispatch('getUser')
      } else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    },
  },
  // created() {
  //   const URL = 
  //   axios({
  //     method: "get",
  //     url:
  //   })
  //     .then(response => this.user = response.data)
  //     .catch(error => console.log(error))
  // }
}
</script>

<style>
  .wall {
    position: relative;
    background: url(https://d2rlq84xifqisi.cloudfront.net/images/mypagePatternResize.2e73487f09488acbeb2d.jpg);
    background-size: 180px 177px;
    padding-top: 20%;
    margin: 0 0 -20px;
  }
  .wallbutton {
    padding: 0px;
    border: none;
    margin: 0px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE5LjQzIDEyLjk4Yy4wNC0uMzIuMDctLjY0LjA3LS45OCAwLS4zNC0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwIDAgMTQgMmgtNGMtLjI1IDAtLjQ2LjE4LS40OS40MmwtLjM4IDIuNjVjLS42MS4yNS0xLjE3LjU5LTEuNjkuOThsLTIuNDktMWMtLjIzLS4wOS0uNDkgMC0uNjEuMjJsLTIgMy40NmMtLjEzLjIyLS4wNy40OS4xMi42NGwyLjExIDEuNjVjLS4wNC4zMi0uMDcuNjUtLjA3Ljk4IDAgLjMzLjAzLjY2LjA3Ljk4bC0yLjExIDEuNjVjLS4xOS4xNS0uMjQuNDItLjEyLjY0bDIgMy40NmMuMTIuMjIuMzkuMy42MS4yMmwyLjQ5LTFjLjUyLjQgMS4wOC43MyAxLjY5Ljk4bC4zOCAyLjY1Yy4wMy4yNC4yNC40Mi40OS40Mmg0Yy4yNSAwIC40Ni0uMTguNDktLjQybC4zOC0yLjY1Yy42MS0uMjUgMS4xNy0uNTkgMS42OS0uOThsMi40OSAxYy4yMy4wOS40OSAwIC42MS0uMjJsMi0zLjQ2Yy4xMi0uMjIuMDctLjQ5LS4xMi0uNjRsLTIuMTEtMS42NXpNMTIgMTUuNWMtMS45MyAwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUgMy41LTMuNSAzLjUgMS41NyAzLjUgMy41LTEuNTcgMy41LTMuNSAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=) center center / cover no-repeat;
    width: 40px;
    height: 40px;
  }
  .userbox {
    position: relative;
    padding-bottom: 26px;
  }
  .usernamebox {
    display: flex;
    margin-top: 50px;
  }
  .username {
    color: rgb(0, 0, 0);
    font-size: 350x;
    font-weight: 700;
    letter-spacing: -0.9px;
    line-height: 30px;
    width: 100%;
  }
  .movie_first {
    margin-bottom: 20px;
    /* font-family:  */
  }
  .movie_second {
    max-width: 1320px;
  }
  .movie_third {
    position: relative;
  }
  .movie_fourth {
  }
  .movie_fifth {
    /* transform: translateX(-872px); */
  }
  .movie_sixth {
    margin-right: 20px;
    margin-left: 15px;
  }
  .movie_list {
    list-style: none;
    padding: 0;
    white-space: nowrap;
    margin-right: -4px !important;
    margin-left: -4px !important;
    margin: 0;
  }
  .movie_subject {
    line-height: 29px;
    max-height: 58px;
    padding: 4px 20px 9px 0;
    white-space: nowrap;
    max-width: 1320px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .movie_subject_name {
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>