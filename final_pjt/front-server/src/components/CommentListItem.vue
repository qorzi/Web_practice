<template>
  <div class="comment-content-box">
    <div class="del-btn-box">
      <span @click="deleteComment" class="material-symbols-outlined btn-d_icon del-btn">delete</span>
    </div>
    <div class="com-con-box">
      <div class="comment-user">
        <img src="@/assets/profile.png" alt="">
        <p>익명</p>
      </div>
      <p class="com-con-box_content">{{comment.content}}</p>
      <p class="com-con-box_time">{{displayedAt(comment.created_at)}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'CommentListItem',
  props: {
    comment: Object,
  },
  methods: {
    displayedAt(at) {
      let createAt = new Date(at)
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
    },
    deleteComment() {
      axios({
        method: 'delete',
        url: `${API_URL}/api/v1/comments/${this.comment.id}/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
        .then(() => {
          location.reload()
        })
    }
  }
}
</script>

<style>

</style>