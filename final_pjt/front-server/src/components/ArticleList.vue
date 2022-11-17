<template>
  <div>
    <ArticleListItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem
  },
  computed: {
    articles() {
      // let articles = this.$store.state.articles
      // articles = articles.reverse()
      return this.$store.state.articles
    }
  }
}
</script>

<style>
.article-list {
  text-align: start;
}
</style>
