<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LunchMenu @pick="getMenu"/>
    <p>{{ menu }}</p>
    <hr>
    <AfterLotto @getLuckyNums="getNums"/>
    <div>
      <br>
      <span v-for="num in nums" :key="num.id" style="padding: 10px;">{{ num }}</span>
    </div>
    
  </div>
</template>

<script>
import LunchMenu from '@/components/LunchMenu'
import AfterLotto from './components/AfterLotto.vue'

export default {
  name: 'App',
  components: {
    LunchMenu,
    AfterLotto,
  },
  data() {
    return {
      menu : '',
      nums : []
    }
  },
  methods: {
    getMenu(menu) {
      this.menu = menu
    },
    getNums(nums) {
      this.nums = nums
    },
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
