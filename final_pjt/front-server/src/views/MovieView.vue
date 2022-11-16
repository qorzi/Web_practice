<template>
  <div class = "mom">
    <div id="movies">  
      <MovieList 
        v-for="movie in movies" 
        :key="movie.id"
        :movie="movie"
        class="movie-list"
        />
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'
import axios from 'axios'

export default {
  name: 'MovieView',
  components: {
    MovieList
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
  .mom {
    
  }
  #movies {
    padding: 0;
    white-space: nowrap;

  }
  .movie-list {
    /* align-content: normal;
    align-items: normal;
    align-self: auto;
    flex-basis: auto;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    left: auto;
    margin-bottom: 20px;
    position: static;
    resize: none;
    right: auto;
    top : auto;
    visibility: visible;
    z-index: auto; */
  }
</style>