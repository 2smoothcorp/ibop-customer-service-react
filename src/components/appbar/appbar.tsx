"use client"

import { useState } from "react"
import Navbar from "../navbar/navbar"
import SideMenu from "../sidemenu/side-menu"
import { Box } from "@mui/material"
import { MenuGQL } from "@/services/portal-service/menu.type"

export interface AppbarProps{
    children: React.ReactNode
    menu?: MenuGQL[]
}

const drawerWidth = 250;

export const Appbar = (props: AppbarProps) => {
    
    const [isOpenMenu, setOpenMenu] = useState(true)
    const [showMenu, setShowMenu] = useState(false)

    return (
        showMenu ?
        <Box sx={{ display: 'flex' }}>
            <Navbar setOpenMenu={setOpenMenu} isOpenMenu={isOpenMenu}/>
            <SideMenu isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu} menu={props.menu}/>
            <div style={{
                width: isOpenMenu ? `calc(100% - ${drawerWidth}px)` : `100%`,
                marginTop: 64,
                padding: 16
            }}>
                {props.children}
            </div>
        </Box>
        :
        props.children
    )
}