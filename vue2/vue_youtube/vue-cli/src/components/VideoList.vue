<template>
  <div>
    <ul>
      <p v-for="item in allItems" :key="item.id.videoId">
        <VideoListItem
          :item="item"
          @select-item="selectItem" 
          :selected-item="selectedItem"
        />
      </p>
    </ul>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    allItems: Array
  },
  methods: {
    selectItem(item) {
      this.$emit('select-item', item)
    }
  },
}
</script>

<style>

</style>