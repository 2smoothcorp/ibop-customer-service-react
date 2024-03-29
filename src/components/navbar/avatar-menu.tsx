import { logout } from "@/app/logout/logout.action";
import { Avatar, Button, Fade, Menu, MenuItem } from "@mui/material"
import { useState } from "react";

export const AvatarMenu = () => {
    
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    logout()
  }
  
    return (
        <>
            <Button
                id="menu-button"
                aria-controls={open ? 'menu-list' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar src="" />
            </Button>
            <Menu
                id="menu-list"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default AvatarMenu;