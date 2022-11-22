<template>
  <div class="article-box">
    <div class="header-box">
      <h2 class="header-box_text">영화게시판</h2>
      <div style="text-align: right;">
        <span @click.prevent="canCreate" class="material-symbols-outlined">edit</span>
      </div>
    </div>
    <hr class="hr">
    <ArticleList/>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'


export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      if (this.isLogin === true) { 
        this.$store.dispatch('getArticles')
      } 
      // else {
      //   alert('로그인이 필요한 서비스 입니다.')
      //   this.$router.push({ name: 'LogInView'})
      // }
    },
    canCreate() {
      if (this.isLogin === true) { 
        this.$router.push({ name: "CreateView" })
      } else {
        this.$store.commit('OPEN_LOGIN')
      }
    }
  }
}
</script>

<style>

</style>
