<template>
  <div>
    <span @click="updateStatus" :class="{'is-watched': item.isWatch}">{{item.title}}</span>
    <input type="submit" value="delete" @click="deleteItem">
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    item: Object
  },
  methods: {
    deleteItem() {
      this.$store.commit('DELETE', this.item)
    },
    updateStatus() {
      this.$store.commit('UPDATESTATUS', this.item)
    }
  }
}
</script>

<style>
.is-watched {
  text-decoration: line-through;
}
</style>