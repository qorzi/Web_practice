<template>
  <div>
    <iframe id="ytplayer" type="text/html" width="400" height="270"
      :src="`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`"
      frameborder="0" allowfullscreen/>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    item: Object
  },
  // computed: {
  //   Url() {
  //     console.log('hi')
  //     const videoId = this.item.id.videoId
  //     return `https://www.youtube.com/embed/${videoId}`
  //   },
  // }
}
</script>

<style>

</style>