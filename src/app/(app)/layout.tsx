import { Constants } from "@/constants/constants";
import { Appbar } from "@/containers/appbar/appbar";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menu = await getMenuData();

  return (
    <Appbar menu={menu}>
        {children}
    </Appbar>
  );
}

async function getMenuData() {
  try{
    const menus = (await fetch(`${Constants.APIUrl}/api/auth/menu`, {
      headers: { Cookie: cookies().toString() },
      cache: 'no-cache'
    }))
    return await menus.json()
    //
  }catch(e){
    //redirect('/logout')
  }
}