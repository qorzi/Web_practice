<template>
  <div>
    <h1>짜장면 먹고 로또</h1>
    <button @click="getLuckyNums">Get Lucky Numbers</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'AfterLotto',
  data() {
    return {
      lottoNums : []
    }
  },
  methods: {
    getLuckyNums() {
      const num = _.range(1, 46)
      this.lottoNums = _.sampleSize(num, 6)
      // console.log(this.lottoNums)
      this.$emit('getLuckyNums', this.lottoNums)
    },
  },
}
</script>

<style>

</style>