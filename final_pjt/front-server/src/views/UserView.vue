<template>
  <div>
    <h1>유저 정보 페이지</h1>
    <h3>유저가 좋아요를 누른 영화 목록이 나올 곳이다</h3>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  data() {
    return {

    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    getUser() {
      if (this.isLogin === true) { 
        this.$store.dispatch('getUser')
      } else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    },
  },
  created() {
    // getUser()
  }
}
</script>

<style>

</style>