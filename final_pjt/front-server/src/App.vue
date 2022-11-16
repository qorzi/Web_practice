<template>
  <div id="app">
    <div style="height: 100px;">
    <NavBar/>
    </div>
    <router-view/>
    <ModalComp 
    v-if="isModalLogin"
    />
  </div>
</template>

<script>
import "./assets/css/index.scss"

import ModalComp from "./components/ModalComp.vue"
import NavBar from "./components/NavBar.vue"

export default {
  name: 'app',
  components: {
    ModalComp,
    NavBar,
  },
  data() {
    return {
    }
  },
  computed: {
    isModalLogin() {
      return this.$store.state.isModalLogin
    }
  },
}
</script>
<style>

</style>
