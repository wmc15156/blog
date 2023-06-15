'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getKaKaoMyInfo, getKaKaoToken } from '@/services/auth';

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  async function bootstrap() {
    if (code) {
      const body = {
        grant_type: 'authorization_code',
        client_id: '42866cd987dc5a7514c98dbcaea95dd4',
        code,
        redirect_uri: 'http://localhost:3000/kakao/callback',
      };
      const getToken = await getKaKaoToken(body);
      const myInfo = await getKaKaoMyInfo(getToken.access_token);
      console.log(getToken);
    }
  }

  useEffect(() => {
    bootstrap();
  }, [code]);

  return <div>잠시만 기다려주세요.</div>;
}
