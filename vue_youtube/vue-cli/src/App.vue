<template>
  <div id="app">
    <h3>My first youtube project</h3>
    <TheSearchBar/>
    <VideoDetail/>
    <VideoList/>
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
  }
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
