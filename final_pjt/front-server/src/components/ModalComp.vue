<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <LoginView/>
    </div>
  </div>
</template>

<script>
import LoginView from "@/views/LogInView"

export default {
  name: 'ModalComp',
  components: {
    LoginView,
  },
  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL')
    }
  }
}
</script>

<style>

</style>
