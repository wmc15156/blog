export const isProduction = process.env.NODE_ENV === 'production';
const DEFAULT_SERVER_URL = isProduction ? '' : 'http://localhost:8080';

const fetchWithDefault = (url: string, options: RequestInit) => {
  const serverUrl = DEFAULT_SERVER_URL + url;
  console.log(serverUrl, '123123');
  return fetch(serverUrl, options);
};
