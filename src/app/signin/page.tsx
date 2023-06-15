import { isProduction } from '@/utils/fetchWithDefaultURL';
import { useRouter } from 'next/router';

const NAVER_CALLBACK_URI = isProduction ? '' : 'http://localhost:3000/naver/callback';
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&state=12345&redirect_uri=${NAVER_CALLBACK_URI}`;
const KAKAO_CALLBACK_URI = isProduction ? '' : 'http://localhost:3000/kakao/callback';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=42866cd987dc5a7514c98dbcaea95dd4&redirect_uri=${KAKAO_CALLBACK_URI}&response_type=code`;

export default function SignInPage() {
  return (
    <div>
      <button>
        <a href={NAVER_AUTH_URL}>네이버로 로그인 </a>
      </button>
      <button>
        <a href={KAKAO_AUTH_URL}>카카오로 로그인</a>
      </button>
    </div>
  );
}
