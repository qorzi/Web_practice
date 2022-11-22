<template>
  <div class="moive_first">
    <div class= "movie_subject">
      <p class= "movie_subject_name">박스오피스 순위</p>
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
</template>

<script>
import MovieList from '@/components/MovieList'
import axios from 'axios'
// import carousel from 'vue-owl-carousel'
// import 'swiper/dist/css/swiper.css'
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
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
  name: 'MovieView', 
  components: {
    MovieList, 
    Swiper,
    SwiperSlide
  },
  computed: {
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
  }
}
</script>

<style>
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
  /* .moive_left {
    display: none;
    position: absolute;
    top: 0;
    z-index: 1;
    left: 0;
    width: 0;
    height: 100%;
  }
  .left_button {
    align-items: flex-start;
    opacity: 1 !important;
    display: none;
    position: absolute;
    top: 0px;
    z-index: 2;
    left: -11px;
    -webkit-box-align: center;
    height: 100%;
  }
  .left_button_detail {
    margin-top: calc((100vw - 60px) * 157 / 108 / 2 / 4 - 17px);
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=) 12px center / 12px no-repeat rgb(255, 255, 255);
    box-sizing: border-box;
    border: 1px solid rgb(249, 249, 249);
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;
    width: 34px;
    height: 34px;
    cursor: pointer;
  }
  .moive_right {
    display: none;
    position: absolute;
    top: 0;
    z-index: 1;
    right: 0;
    width: 0;
    height: 100%;
  }
  .right button {
    align-items: flex-start;
    opacity: 1 !important;
    display: flex;
    position: absolute;
    top: 0px;
    z-index: 2;
    right: -11px;
    -webkit-box-align: center;
    height: 100%;
  }
  .right_button_detail {
    margin-top: calc((100vw - 60px) * 157 / 108 / 2 / 4 - 17px);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    border: 1px solid rgb(249, 249, 249);
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;
    background-size: 12px;
    width: 34px;
    height: 34px;
    cursor: pointer;
  } */
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