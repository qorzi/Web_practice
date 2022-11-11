<template>
  <div>
    <form @submit.prevent="addMovie">
      <input 
        type="text"
        v-model.trim="movieTitle"
      >
      <input type="submit" value="add">
    </form>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      movieTitle: '',
    }
  },
  methods: {
    addMovie() {
      if (this.movieTitle) {
        this.$store.commit('ADD_MOVIE', this.movieTitle)
        // this.$store.dispatch('addMovie', this.movieTitle)
        this.movieTitle = ''
      }
    },
  }
}
</script>

<style>

</style>