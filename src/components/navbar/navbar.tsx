"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, AppBarProps, Avatar, Menu, MenuItem, styled } from '@mui/material';
import { logout } from '@/app/logout/logout.action';
import { AvatarMenu } from './avatar-menu';

export interface NavbarProps{
    setOpenMenu: (isOpen: boolean) => void
    isOpenMenu: boolean
}

const drawerWidth = 250;

interface CustomAppBarProps extends AppBarProps {
    open?: boolean;
  }

const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<CustomAppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export default function Navbar(props: NavbarProps) {

  return (
    <CustomAppBar position="fixed" open={props.isOpenMenu} sx={{
        backgroundColor: '#f5f5f5',
        color: '#11285c'
    }}
        elevation={0}
    >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ () => props.setOpenMenu(!props.isOpenMenu)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Customer Service
          </Typography>
          <div className='mr-4'>Name</div>
          <AvatarMenu/>
        </Toolbar>
      </CustomAppBar>
  );
}