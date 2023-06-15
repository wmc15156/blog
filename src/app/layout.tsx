import './globals.css';
import { Inter } from 'next/font/google';
import SWRConfigContext from '@/context/SWRConfigContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SWRConfigContext>
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </SWRConfigContext>
    </html>
  );
}
