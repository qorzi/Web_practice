<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" @keyup.enter="push" v-model="text">
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    push() {
      this.$router.push({ name:'hello', params: {userName: this.text}})
    }
  }
}
</script>
