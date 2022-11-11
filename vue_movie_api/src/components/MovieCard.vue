<template>
  <div>
    <div class="box">
      <img class="poster" :src=posterUrl alt="포스터">
      <h3>{{movie.title}}</h3>
      <p>{{overview}}  <a @click="viewAll">더보기</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  data() {
    return {
      isFull: false,
      overview: '',
    }
  },
  methods: {
    viewAll() {
      const overview = this.movie.overview
      if (this.isFull) {
        this.isFull = false
        this.overview = overview.substr(0, 90)+'...'
      } else {
        this.isFull = true
        this.overview = this.movie.overview
      }
      console.log(this.isFull)
      console.log(this.overview)
    }
  },
  computed: {
    posterUrl() {
      return 'https://image.tmdb.org/t/p/w185'+this.movie.poster_path
    },
  },
  mounted() {
    const overview = this.movie.overview
    this.overview = overview.substr(0, 90)+'...'
  }
}
</script>

<style>
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
img {
  width: 185px;
  height: 265px;
}
p {
  margin-left: 5px;
  margin-right: 5px;
}
</style>