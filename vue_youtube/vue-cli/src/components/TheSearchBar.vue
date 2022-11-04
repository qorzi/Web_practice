<template>
  <div class="form-floating d-flex justify-content-center">
    <input type="text" @keyup.enter="search" class="form-control col-4" placeholder="검색어를 입력해라">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TheSearchBar',
  data() {
    return {
      currentUrl: 'jfKfPfyJRdk',
    }
  },
  methods: {
    search(event) {
      const word = event.target.value
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
        key: 'AIzaSyBLBoxqrzmrl46iY6xRCriDL597jFIni_Y',
        part: 'snippet',
        type: 'video',
        q: word,
        }
      })
        .then((response) => {
          const items = response.data.items
          this.$emit('items', items)
        })
    },
  },
}
</script>

<style>

</style>