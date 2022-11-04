<template>
  <div id="app">
    <h2>My first youtube project</h2>
    <br>
    <TheSearchBar @items="getItem"/>
    <br>
    <VideoDetail :item="item"/>
    <VideoList :all-items="allItems" @select-item="selectItem"/>
  </div>
</template>

<script>
import TheSearchBar from '@/components/TheSearchBar'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  data() {
    return {
      item: null,
      allItems: null,
    }
  },
  methods: {
    getItem(items) {
      console.log(items)
      this.allItems = items
    },
    selectItem(item) {
      console.log(item)
      this.item = item
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
