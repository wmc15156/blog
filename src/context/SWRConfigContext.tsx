'use client';

import React from 'react';
import { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  const isProduction = process.env.NODE_ENV;
  const serverDomain = isProduction ? '' : 'http://localhost:8080';
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(`${serverDomain}${url}`).then((res) => res.json()) }}
    >
      {children}
    </SWRConfig>
  );
}
