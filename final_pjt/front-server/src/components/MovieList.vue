<template>
  <div>
    <div class="movie_img_mom">
      <div class="movie_img">
        <img :src="getImage" :alt="movie.title" width="330px" height="450px"> 
      </div>
    </div>
    <div class="context">
      <h3>{{ movie.title }}</h3>
      <p class="vote_average">평균★{{ vote_average }}</p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movie: Object,
  },
  computed: {
    getImage() {
      return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
    },
    vote_average() {
      return this.movie.vote_average
    }
  }
}
</script>

<style>
  .movie_img {
    vertical-align: top;
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
  }
  .movie_img_mom {
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .context {
    /* margin: 0rem 1rem;
    display: flex;
    justify-content: left; */
  }
  .vote_average {
    /* line-height: 0px; */
  }
</style>