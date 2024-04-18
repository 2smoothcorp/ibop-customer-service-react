import { Constants } from "@/constants/constants";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menu = await getMenuData();

  return (
    <>
      {children}
    </>
  );
}

async function getMenuData() {
  try{
    const menus = (await fetch(`${Constants.APIUrl}/api/auth/menu`, {
      headers: { Cookie: cookies().toString() },
      cache: 'no-cache'
    }))
    return await menus.json()
  }catch(e){
    
  }
}