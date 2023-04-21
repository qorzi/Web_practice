import React from "react";
import { GoogleLogin } from '@react-oauth/google';

// 무슨 기능인지 모르겟음. 쓸모없는 것.
export default function GoogleButton() {

  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div style={{width: '300px', margin: 'auto'}} >
      <GoogleLogin
        buttonText="구글아이디로 로그인하기"
        onSuccess={onSuccess}
        onFailure={onFailure}  
      />
    </div>
  );
};