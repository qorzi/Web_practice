<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <LoginView v-if="notSign"/>
      <SignUpView v-if="!notSign"/>
    </div>
  </div>
</template>

<script>
import LoginView from "@/views/LogInView"
import SignUpView from "@/views/SignUpView"

export default {
  name: 'ModalComp',
  components: {
    LoginView,
    SignUpView,
  },
  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL')
    }
  },
  computed: {
    notSign() {
      return this.$store.state.notSign
    }
  }
}
</script>

<style>

</style>
