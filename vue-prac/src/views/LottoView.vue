<template>
  <div>
    <h2>로또</h2>
    <br>
    <button @click="getNums">Get Lucky Numbers</button>
    <br>
    <p>{{nums? nums: null}}</p>
    <br>
    <button @click="lunch">점심 추첨 받기</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'LottoView',
  data() {
    return {
      nums: null
    }
  },
  methods: {
    getNums() {
      const numbers = _.range(1, 46)
      this.nums = _.sampleSize(numbers, 6)
    },
    lunch() {
      this.$router.push({name: 'lunch'})
    }
  }
}
</script>

<style>

</style>