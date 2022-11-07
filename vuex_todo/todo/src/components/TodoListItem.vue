<template>
  <div>
    <span @click="updateTodoStatus" :class="{'is-completed': todo.isCompleted}">{{ todo.title }}    </span>
    <input type="submit" @click="deleteTodo" value="삭제">
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      this.$store.commit('DELETETODO', this.todo)
    },
    updateTodoStatus() {
      this.$store.commit('UPDATETODOSTATUS', this.todo)
    },
  }
}
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
</style>