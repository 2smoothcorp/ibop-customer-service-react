import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "@/components/sidemenu/side-menu";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { Appbar } from "@/components/appbar/appbar";
import { Constants } from "@/constants/constants";
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
  console.log(`========================= getMenuData`)
  console.log(`cookies().toString() `, cookies().toString() )
  const menus = (await fetch(`${Constants.APIUrl}/api/auth/menu`, {
    headers: { Cookie: cookies().toString() },
    cache: 'no-cache'
  }))
  return await menus.json()
}