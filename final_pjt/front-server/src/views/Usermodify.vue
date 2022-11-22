<template>
  <div class="settingbox">
    <header class="settingname"> 설정 </header>
    <div>
      <div>
        아이디 변경
        <input class="login_input underline" type="text" v-model="username" placeholder="아이디를 입력하세요">
        비밀번호 변경
        <input class="login_input underline" type="password" v-model="password1" placeholder="비밀번호를 입력하세요">
        <input class="login_input underline" type="password" v-model="password2" placeholder="위와 동일한 비밀번호를 입력하세요">
        닉네임 변경
        <input class="login_input underline" type="text" v-model="nickname" placeholder="닉네임을 입력하세요">
        마케팅 정보

        로그아웃
        <!-- 탈퇴하기  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .settingbox {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
    width: 375px;
    height: auto;
    min-height: 540px;
    border-radius: 6px;
  }
  .settingname {
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    width: 100%;
    padding: 0px 16px;
    border-bottom: 1px solid rgb(227, 227, 227);
    position: absolute;
    top: 0px;
    text-align: left;
    height: auto;
  }
</style>