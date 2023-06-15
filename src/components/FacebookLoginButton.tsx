'use client';

import FacebookLogin from '@greatsumini/react-facebook-login';

export default function FacebookLoginButton() {
  return (
    <FacebookLogin
      appId="1718365365286127"
      onSuccess={(response: any) => {
        console.log('Login Success!');
        console.log('id: ', response.id);
      }}
      onFail={(error) => {
        console.log('Login Failed!');
        console.log('status: ', error.status);
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!', response);
        console.log('name: ', response.name);
      }}
    />
  );
}
