import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function GoogleButton2() {
  // 소셜 로그인 시, access_token, authuser, expires_in, scope, token_type 이 담겨있음.
  const [ user, setUser ] = useState(null);
  // 정보 요청 성공 시, email, family_name, given_name, id(고유숫자코드인듯), local(가입지역), name, picture(프로필이미지), verrified_email
  const [ profile, setProfile ] = useState(null);

  // 로그인 성공시
  const onSuccess = (response) => {
    console.log('구글 로그인 성공!')
    setUser(response);
    console.log(response);
  };
  // 로그인 실패시
  const onError = (error) => {
    console.log('Login Failed: ', error);
  };
  // 로그인 함수
  const login = useGoogleLogin({
      onSuccess: onSuccess,
      onError: onError
  });

  useEffect(() => {
    if (user) {
      axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
          }
      })
      .then((res) => {
          console.log('고객 정보 요청!')
          console.log(res)
          setProfile(res.data);
      })
      .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
            <img src={profile.picture} alt="user image" />
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>구글아이디로 로그인하기</button>
      )}
    </div>
  );
}