<template>
  <li class="movie_card">
    <a href="">
      <div class ="movie_border" @click="goMovieDetail"> 
        <div class="movie_img">
          <a class ="moviegood"> ♥</a>
          <img :src="getTrend" :alt="movie2.title" class= "movie">  
        </div>
      </div>
      <div class="context">
        <div class = "movie_title">{{ movie2.title }}</div>
        <div class= "context_detail">{{createdYear}} 평균 ★{{movie2.vote_average.toFixed(1)}}</div>
        <div class= "context_detail">{{genres.join(' ')}}</div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'MovieList2',
  props: {
    movie2: Object,
  },
  data() {
    return {
      genres: null,
      genre: {28: "액션", 12: "모험", 16: "애니메이션", 35: "코미디", 80: "범죄", 99: "다큐멘터리", 18: "드라마", 10751: "가족", 14: "판타지", 36: "역사", 27: "공포", 10402: "음악", 9648: "미스터리", 10749: "로맨스", 878: "SF", 10770: "TV 영화", 53: "스릴러", 10752: "전쟁", 37: "서부"}
    }
  },
  created() {
    this.convertGenre()
  },
  computed: {
    getTrend() {
      return `https://image.tmdb.org/t/p/original/${this.movie2.poster_path}`
    },
    createdYear() {
      let release_date = this.movie2.release_date
      release_date = release_date.substr(0, 4)
      return release_date
    },

  },
  methods: {
    convertGenre() {
      const moviegenre_nums = this.movie2.genre_ids
      const genres = moviegenre_nums.reduce((acc, genre_num) => {
        acc.push(this.genre[genre_num])
          return acc
      }, [])
      this.genres = genres
    },
    goMovieDetail() {
        this.$router.push({ name: 'MovieDetailView', params: { id: this.movie2.id } })
    },
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
    /* line-height: 18px; */
    white-space: normal;
    max-height: 36px;
    margin-bottom: 4px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #292a32;
  }
  .context_detail {
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
    /* width: 33.333333333333336%; */
    margin-bottom: 0px;
    padding: 0 4px !important;
    /* display: inline-block; */
    /* vertical-align: top; */
    box-sizing: border-box;
    margin: 0 0 24px;
  }
</style>