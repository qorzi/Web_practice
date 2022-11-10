<template>
  <div>
    <h2>점심메뉴</h2>
    <br>
    <button @click="getLunch">Pick Lunch</button>
    <br>
    <p>{{lunch}}</p>
    <br>
    <br>
    <h3>로또를 뽑아보자</h3>
    <button @click="goLotto">Pick Lotto</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'LunchView',
  data() {
    return {
      lunches: ['짜장면', '탕수육', '볶음밥', '짬뽕'],
      lunch: null
    }
  },
  methods: {
    goLotto() {
      this.$router.push({name: 'lotto'})
    },
    getLunch() {
      const lunch = _.sample(this.lunches)
      this.lunch = lunch
    }
  }
}
</script>

<style>

</style>