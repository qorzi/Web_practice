<template>
  <div>
    <p class="title" @click="selectItem"><img :src="youtubeImageSrc" alt="youtube-thumbnail-image">{{item.snippet.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    item: Object,
  },
  data() {
    return {
      isClicked: false
    }
  },
  methods: {
    selectItem() {
      this.$emit('select-item', this.item)
    },
  },
  computed: {
    youtubeImageSrc: function () {
      return this.item.snippet.thumbnails.default.url
    },
  }
}
</script>

<style>
.title:hover {
  cursor: pointer;
  font-weight: bold;
  background: #e3e3e3;
}
</style>