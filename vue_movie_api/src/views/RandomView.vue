<template>
  <div class="center">
    <button @click="pick">PICK</button>
    
    <div class="box" v-if="movie">
      <img class="poster" :src=posterUrl alt="포스터">
      <h4>{{movie.title}}</h4>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'RandomView',
  data() {
    return {
      movies: null,
      movie: null,
      posterUrl: null
    }
  },
  methods: {
    pick() {
      this.movie = _.sample(this.movies)
      this.posterUrl = 'https://image.tmdb.org/t/p/w185'+this.movie.poster_path
      console.log(this.movie)
    }
  },
  mounted() {
    this.movies = this.$store.state.movies
    console.log(this.movies)
  }
}
</script>

<style>
.center {
  width: 100vw;
  justify-content: center;
  text-align: center;
}
.box {
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 185px;
  height: auto;
  margin: 10px;
}
.poster {
  border-radius: 10px 10px 0px 0px;
}

</style>