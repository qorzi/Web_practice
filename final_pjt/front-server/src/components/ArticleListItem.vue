<template>
  <div class="article-item" @click="goDetail">
    <p class="article-item_title">{{ article.title }}</p>
    <p class="article-item_content">{{ article.content }}</p>
    <p class="article-item_time">{{ displayedAt }}</p>
    <p class="article-item_username">익명</p>
    <div class="article-item_icon">
      <span class="material-symbols-outlined thumb">thumb_up</span>
      <span class="thumb">0</span>
      <span class="material-symbols-outlined chat">chat_bubble</span>
      <span class="chat">0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  },
  methods: {
    goDetail() {
      this.$router.push({ name: 'DetailView', params: { id: this.article.id } })
    }
  },
  computed: {
    displayedAt() {
      let createAt = new Date(this.article.created_at)
      const milliSeconds = new Date() - createAt
      const seconds = milliSeconds / 1000
      if (seconds < 60) return `방금 전`
      const minutes = seconds / 60
      if (minutes < 60) return `${Math.floor(minutes)}분 전`
      const hours = minutes / 60
      if (hours < 24) return `${Math.floor(hours)}시간 전`
      const days = hours / 24
      if (days < 7) return `${Math.floor(days)}일 전`
      const weeks = days / 7
      if (weeks < 5) return `${Math.floor(weeks)}주 전`
      const months = days / 30
      if (months < 12) return `${Math.floor(months)}개월 전`
      const years = days / 365
      return `${Math.floor(years)}년 전`
}
  }
}
</script>

<style>

</style>
