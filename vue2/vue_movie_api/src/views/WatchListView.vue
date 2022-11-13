<template>
  <div>
    <h3>보고 싶은 영화</h3>
    <WatchListForm/>
    <WatchListItem
      v-for="(item, index) of movies"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
    WatchListItem,
  },
  computed:{
    movies() {
      console.log(this.$store.state.wannaMovies)
      return this.$store.state.wannaMovies
    }
  }
}
</script>

<style>

</style>