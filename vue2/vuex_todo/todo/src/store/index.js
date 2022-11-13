import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: []
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      const completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted === true
      })
      return completedTodos.length
    },
    unCompletedTodosCount(state, getters) {
      return getters.allTodosCount - getters.completedTodosCount
    }
  },
  mutations: {
    CREATETODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETETODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
      // this.$store.dispatch('saveTodosToLocalStorage')
    },
    UPDATETODOSTATUS(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos[index].isCompleted = !state.todos[index].isCompleted
      // this.$store.dispatch('saveTodosToLocalStorage')

      // state.todos.map((todo) => {
      //   if (todo === todoItem) {
      //     todo.isCompleted = !todo.isCompleted
      //   }
      // })
    },
    // LOADTODOS(state) {
    //   const localStorageTodos = localStorage.getItem('todos')
    //   const parsedTodos = JSON.parse(localStorageTodos)
    //   state.todos = parsedTodos
    // },
  },
  actions: {
    createTodo(context, todoTitle) {
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      context.commit('CREATETODO', todoItem)
      // context.dispatch('saveTodosToLocalStorage')
    },
    // saveTodosToLocalStorage(context) {
    //   const jsonTodos = JSON.stringify(context.state.todos)
    //   localStorage.setItem('todos', jsonTodos)
    // },
    // loadTodos(context) {
    //   context.commit('LOADTODOS')
    // }
  },
  modules: {
  }
})
