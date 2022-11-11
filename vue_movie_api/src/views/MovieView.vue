<template>
  <div>
    <!-- <button @click="getTopRateMovies">가져와~</button> -->
    <div class="view">
      <MovieCard 
      v-for="movie of movies"
      :key="movie.id"
      :movie="movie"
      />
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue'

const API_KEY = process.env.VUE_APP_TMDB_API_KEY


export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: Array,
    }
  },
  methods: {
    getTopRateMovies() {
      const movieUrl = 'https://api.themoviedb.org/3/movie/top_rated/'
      console.log(API_KEY)
      axios({
        method: 'get',
        url: movieUrl,
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
        }
      })
      .then((response) => {
        console.log(response)
        this.movies = response.data.results
        console.log(this.movies)
        this.$store.commit('GET_MOVIES', this.movies)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getTopRateMovies()
  }
}
</script>

<style>
  .view {
    display: flex;
    flex-wrap: wrap;
  }
</style>