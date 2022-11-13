<template>
  <div>
    <h1>점심 메뉴</h1>
    <button @click="Pick">Pick One</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'LunchMenu',
  data() {
    return {
      menus : ['국밥', '짜장', '햄버거'],
      menu : null
    }
  },
  methods: {
    Pick() {
      this.menu = _.sample(this.menus)
      this.$emit('pick', this.menu)
    }
  }

}
</script>

<style>

</style>