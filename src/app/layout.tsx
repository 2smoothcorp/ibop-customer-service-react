

import ReactQueryProviders from '@/libs/react-query';
import { mainTheme } from '@/libs/theme';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import './globals.css';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  /*
  const UserDataSession = await cookies().get('user')?.value
  const headersList = headers();
  const referer = headersList.get('referer');
  
  if( !UserDataSession && !(referer||'').includes('/login') ){
    redirect('/login')
  }
  */

  return (
    <html lang={'en'}>
      <body>
        <ReactQueryProviders>
          <ThemeProvider theme={mainTheme}>
            {children}
          </ThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "iBOP - Customer Service",
  description: "ASP iBOP - Customer Service",
}