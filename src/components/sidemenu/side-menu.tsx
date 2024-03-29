"use client"

import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, ListItemButton } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { MenuGQL } from '@/services/portal-service/menu.type';
import { useRouter } from 'next/navigation';
import { Constants } from '@/constants/constants';


export interface SideMenuProps{
    isOpenMenu: boolean
    setOpenMenu: (isClose: boolean) => void
    menu?: MenuGQL[]
}

const drawerWidth = 250;
const projectApp = Constants.AppCode

const SideMenu = (props: SideMenuProps) => {

  const router = useRouter()

  const [menuCode, setMenuCode] = useState<string>('');

  const handleMenuClick = (menuItem, url, rootLv = 0) => {
    setMenuCode(menuItem);
    if( rootLv && url ){
      //console.log(``)
      router.push(`${url}`)
    }
  };

  const renderMenu = (menus: MenuGQL[], deepLv = 0, parentMenuCode = '') => { 
    //console.log(`render menu `, menus.length, deepLv, (16 * deepLv) + 'px')
    return (
      menus.map( (m, idx) => {
        console.log(m?.url)
        let subMenus: any = null
        if( m.subMenus?.length > 0 ){
          subMenus = renderMenu(m.subMenus, deepLv + 1, m.code + '|' )
        }        
        return (
          <span key={`menu_${idx}`}>
            <ListItemButton 
              onClick={() => {
                handleMenuClick(parentMenuCode +'|'+ m.menuName, m?.url, deepLv);
              }}
              sx={{
                borderLeft: `5px solid ${ menuCode.includes(m.menuName) ? '#43ad9e' :'#808183' }`,
                background: menuCode.includes(m.menuName) ? '#007594' : '',
                marginTop: '2px',
                marginBottom: '2px'
              }}
            >
              <ListItemText primary={m.menuName} />
              {subMenus ? (
                    menuCode.includes(m.menuName) ? (
                      <ExpandMore />
                    ) : (
                      <ArrowBackIosIcon sx={{ fontSize: '16px' }}/>                  )
                  ) : null}
            </ListItemButton>
              {subMenus !== null ? 
                <Collapse in={menuCode.includes(m.menuName)} timeout="auto" unmountOnExit 
                  sx={{
                    marginLeft: `${((deepLv + 1) * 16)}px !important`
                  }}
                >
                  <List
                    sx={{
                      paddingTop: '0px',
                      paddingBottom: '0px',
                    }}
                    key={`submenu_${idx}`}
                  >
                    {subMenus}
                  </List> 
                </Collapse>
              : null 
              }
          </span>
        )
      } )
    )
  }

  return (
      <Drawer
        variant="persistent"
        anchor="left" open={props.isOpenMenu} onClose={() => props.setOpenMenu(false)}
        sx={{
            width: props.isOpenMenu ? drawerWidth : 0,
            height: '100vh',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              height: '100vh',
              backgroundColor: '#11285c',
              color: '#ffffff',
            },
            transition: `margin 167ms cubic-bezier(0.4, 0, 0.6, 1), width 167ms cubic-bezier(0.4, 0, 0.6, 1)`,
          }}
    >
      <img src={`/logo-light.png`} className='w-[95%] -mt-1 ml-1' />
      <List
        sx={{
          marginLeft: `16px !important`
        }}
      >
        {renderMenu(props.menu || [])}
      </List>
    </Drawer>
  );
};

export default SideMenu;