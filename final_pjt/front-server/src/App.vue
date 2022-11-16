<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'TestHome'}">Home</router-link> |
      <router-link :to="{ name: 'ArticleView' }">Articles</router-link> | 
      <!-- <router-link v-if="!isLogin" :to="{ name: 'LogInView' }">LogIn</router-link>
      <router-link v-else type="button" to="" @click.native="logOut">LogOut</router-link> | -->
      <router-link v-if="isLogin" :to="{ name: 'UserView' }">UserInfo</router-link> |
      <a v-if="!isLogin" @click.prevent="openModal" href="">로그인</a>
      <a v-else @click.prevent="logOut" href="">로그아웃</a>
    </nav>
    <router-view/>
    <ModalComp 
    v-if="isModalLogin"
    @close-modal="closeModal"
    />
  </div>
</template>

<script>
import "./assets/css/index.scss"

import ModalComp from "./components/ModalComp.vue"

export default {
  name: 'app',
  components: {
    ModalComp,
  },
  data() {
    return {

    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    },
    isModalLogin() {
      return this.$store.state.isModalLogin
    }
  },
  methods: {
    logOut() {
      this.$store.commit('DELETE_TOKEN')
    },
    openModal() {
      this.$store.commit('OPEN_MODAL')
    },
  }
}
</script>
<style>

</style>
