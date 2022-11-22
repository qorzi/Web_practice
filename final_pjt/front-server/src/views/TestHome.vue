<template>
  <div>
    <SearchList
      v-if="isSearch"
    />
    <MovieView/>
  </div>
</template>

<script>
import SearchList from '../components/SearchList.vue'
import MovieView from '../views/MovieView.vue'
import _ from 'lodash'

export default {
  name: 'TestHome',
  components: {
    SearchList,
    MovieView,
  },
  created() {
    this.recommendGenre()
  },
  data() {
    return {
      genres: ['액션', '모험', '애니메이션', '코미디', '범죄', '다큐멘터리', '드라마', '가족', '판타지', '역사', '공포', '음악', '미스터리', '로맨스', 'SF', 'TV 영화', '스릴러', '전쟁', '서부'],
      recommend: null,
    }
  },
  computed: {
    isSearch() {
      return this.$store.state.isSearch
    }
  },
  methods: {
    recommendGenre() {
      const genres = this.genres
      const genre = _.sampleSize(genres, 1)
      console.log(genre)
      this.recommend = genre
    },
  },
  
}
</script>

<style>

</style>