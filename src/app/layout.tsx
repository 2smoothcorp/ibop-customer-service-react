import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iBOP - Customer Service",
  description: "ASP iBOP - Customer Service",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
  const UserDataSession = await cookies().get('user')?.value
  const headersList = headers();
  const referer = headersList.get("referer");
  
  if( !UserDataSession && !(referer||'').includes('/login') ){
    redirect('/login')
  }
  */

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
