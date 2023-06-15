'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { getNaverToken } from '@/services/auth';
export default function NaverCallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  console.log(searchParams.get('code'), 'query');

  useEffect(() => {
    async function getToken() {
      if (code && state && process.env.NAVER_CLIENT_ID) {
        const config = {};
        const body = {
          client_id: process.env.NAVER_CLIENT_ID,
          grant_type: 'authorization_code',
          client_secret: process.env.NAVER_CLIENT_SECRET!,
          code,
          state,
          provider: 'naver',
        };
        const tokenInfo = await getNaverToken(body);
        console.log(tokenInfo, 'tokenInfo');

        // const body = {
        //   code,
        //   sid: 'test',
        //   social: 'naverweb',
        // };

        // const data = await getNaverToken(body);
        // console.log(data);
      }
    }
    getToken();
  }, []);
  console.log(process.env.NAVER_CLIENT_ID);
  return <div>잠시만 기다려주세요......</div>;
}
