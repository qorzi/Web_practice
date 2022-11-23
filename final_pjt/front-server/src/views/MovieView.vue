<template>
  <div>
    <div class="moive_first">
      <div class= "movie_subject">
        <p class= "movie_subject_name">박스오피스 순위</p>
      </div>
      <div class="movie_second">
        <div class="movie_third">
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
    <div class="moive_first">
      <div class= "movie_subject">
        <p class= "movie_subject_name">주간 트렌드 순위</p>
      </div>
      <div class="movie_second">
        <div class="movie_third">
          <ul class="movie_list">
            <swiper :options="swiperOption">
              <swiper-slide
                v-for="movie2 in movies2" 
                :key="movie2.id">
                <MovieList2 :movie2="movie2"/>
              </swiper-slide>
            </swiper>
          </ul>
        </div>
      </div> 
    </div>
    <div class="moive_first">
      <div class= "movie_subject">
        <p class= "movie_subject_name">장르 추천</p>
      </div>
      <div class="movie_second">
        <div class="movie_third">
          <ul class="movie_list">
            <swiper :options="swiperOption">
              <swiper-slide
                v-for="movie3 in genreMovies" 
                :key="movie3.id">
                <MovieList3 :movie3="movie3"/>
              </swiper-slide>
            </swiper>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'
import MovieList2 from '@/components/MovieList2'
import MovieList3 from '@/components/MovieList3'
import axios from 'axios'
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
      return {
        swiperOption: {
          autoHeight: true,
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
          loop: false, 
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
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          '@1.20': {
            slidesPerView: 6,
            slidesPerGroup: 6,
          }
        },
      }
    }
  },
  name: 'MovieView', 
  components: {
    MovieList, 
    MovieList2,   
    MovieList3,   
    Swiper,
    SwiperSlide
  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
    movies2() {
      return this.$store.state.movies2
    },
    movies3() {
      return this.$store.state.movies3
    },
    genreMovies() {
      return this.$store.state.genreMovies
    }
  },
  created() {
    const API_KEY = process.env.VUE_APP_TMDB_API_KEY
    const URL = 'https://api.themoviedb.org/3/movie/popular'
    const URL2 = 'https://api.themoviedb.org/3/trending/movie/week'
    const URL3 = 'https://api.themoviedb.org/3/trending/movie/top_rated'

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
      }),

      axios({
      method: "get",
      url: URL2,
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
      }
    })
      .then((response) => {
          this.$store.dispatch('getMovies2', response.data.results)
      })
      .catch((error) => {
        console.log(error)
      }),

      axios({
      method: "get",
      url: URL3,
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
      }
      })
      .then((response) => {
          this.$store.dispatch('getMovies3', response.data.results)
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
    margin-right: auto;
    margin-left: auto;
  }
  .movie_third {
    position: relative;
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
    margin-right: auto;
    margin-left: auto;
    margin: 0 60px;
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0 14px;
    max-height: 60px;
    line-height: 30px;
  }
  .movie_subject_name {
    color: #292a32;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 30px;
    margin: 0px;
  }
</style>