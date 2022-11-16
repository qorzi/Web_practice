<template>
  <nav class="nav">
    <div class="nav__left">
      <div class="nav__left__logo">로고</div>
      <div class="nav__left__menu">
        <router-link class="nav__left__menu__link" v-for="item in menu" :key="item.name" :to="item.link">
          <div class="nav__left__menu__item">
            <div class="nav__left__menu__item__name">{{ item.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="nav__right">
      <!-- <!— search input -> -->
      <div class="nav__right__search">
        <input type="text" placeholder="검색" />
      </div>
      <div v-if="!isLogin" class="nav__right__login" @click="openModal">로그인</div>
      <div v-else class="nav__right__login" @click="logOut">로그아웃</div>
      <div v-if="!isLogin" class="nav__right__signup" @click="signUp">회원가입</div>
      <div v-else class="nav__right__signup" @click="profile">프로필</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menu: [
        {
          name: "홈",
          link: "/home",
        },
        {
          name: "커뮤니티",
          link: "/community",
        },
        {
          name: "영화관 찾기",
          link: "/",
        },
        // {
        //   name: "메뉴",
        //   link: "/",
        // },
      ],
    }
  },
  methods: {
    signUp() {
      this.$router.push({ name: 'SignUpView' })
    },
    openModal() {
      this.$store.commit('OPEN_MODAL')
    },
    logOut() {
      this.$store.commit('DELETE_TOKEN')
    },
    profile() {
      this.$router.push({ name: 'UserView' })
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

}
</script>

<style>

</style>