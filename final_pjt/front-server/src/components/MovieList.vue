<template>
  <li class="movie_card">
    <a href="">
      <div class ="movie_border"> 
        <div class="movie_img">
          <a class ="moviegood"> ♥</a>
          <img :src="getImage" :alt="movie.title" class= "movie">  
        </div>
      </div>
      <div class="context">
        <div class = "movie_title">{{ movie.title }}</div>
        <div class= "vote_average">평균 ★{{ movie.vote_average }}</div>
        <div class= "vote_average">{{ movie.release_date }}</div>
      </div>
    </a>
  </li>
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
    // vote_average() {
    //   return this.movie.vote_average
    // }
  }
}
</script>

<style>
  .movie {
    vertical-align: top;
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
  }
  .movie_img {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid #eae9e8;
    border-radius: 5px;
    background: #f8f8f8;
  }
  .movie_border {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 145.37037037037038%;
  }
  .movie_title {
    display: -webkit-box;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 18px;
    white-space: normal;
    max-height: 36px;
    margin-bottom: 4px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #292a32;
  }
  .vote_average {
    color: #555765;
    display: flex;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 14px;
    height: 20px;
  }
  .context {
    margin: 6px 5px 0 0;
    text-align: left;
    width: calc(100% - 10px);
  }
  a {
    display: inline-block;
    text-decoration: none;
    width: 100%;
  }
  .moviegood {
    position: absolute;
    bottom: 3px;
    left: 3px;
    background-color: rgba(0, 0, 0, 0.77);
    color: rgb(255, 255, 255);
    font-weight: 700;
    letter-spacing: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    opacity: 1;
  }
  .movie_card {
    /* width: 33.333333333333336%;
    margin-bottom: 0px;
    padding: 0 4px !important;
    display: inline-block;
    vertical-align: top; */
    /* box-sizing: border-box; */
    margin: 0 0 24px;
  }
</style>