import axios from 'axios';
import awk from 'refractor/lang/awk';

type TokenInfo = {
  access_token: string;
};

type Token = {
  client_id: string;
  client_secret?: string;
  grant_type: string;
  code: string;
  state?: string;
  provider?: string;
};

type SignInData = {
  code: string;
  social: string;
  sid: string;
};
export function getNaverToken(body: Token) {
  console.log(body, 'body');
  return axios.post('http://localhost:8080/auth/signin', body).then((resp) => resp.data);
}

// export function signIn(body: SignInData) {
//   return axios.post('https://api.tilewidget.app/account/signinweb', body);
// }

export function getKaKaoToken(body: Token) {
  return axios
    .post<TokenInfo>('https://kauth.kakao.com/oauth/token', body, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
    .then((resp) => resp.data);
}

export async function getKaKaoMyInfo(token: string) {
  return axios.post('https://kapi.kakao.com/v2/user/me', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
