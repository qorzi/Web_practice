<template>
  <div>
    <div>
      <button
        @click="getCurrentPosition"
        >위치 좌표 확인</button>
      <div>{{ isPositionReady ? 'yes' : 'no' }}</div>
      <p>{{positionObj}}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'CurrentSite',
  data () {
    return {
      positionObj: {},
      isPositionReady: false
    }
  },
  methods: {
    getCurrentPosition () {
      if (!navigator.geolocation) {
        this.setAlert('위치 정보를 찾을 수 없습니다.1')
      } else {
        navigator.geolocation.getCurrentPosition(this.getPositionValue, this.geolocationError)
      }
    },
    getPositionValue (val) {
      console.log(val)
      this.positionObj.latitude = val.coords.latitude
      this.positionObj.longitude = val.coords.longitude
      this.isPositionReady = true
      this.$store.commit('GETCURRENTSITE', this.positionObj)
      this.setAlert('주소 확인 완료')
    },
    geolocationError () {
      this.setAlert('위치 정보를 찾을 수 없습니다.2')
    },
    setAlert (text) {
      alert(text)
    }
  },
  mounted() {
    // this.getCurrentPosition()
  }
}
</script>
