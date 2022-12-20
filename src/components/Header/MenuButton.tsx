import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import Link from "next/link";

const MenuButton = ({ menu }: { menu: any }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const handleOpen = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  }

  return (
    <>
      <Button
        aria-controls={`${menu.name}-menu`}
        aria-haspopup="true"
        onClick={handleOpen}
      >
        {menu.name}
      </Button>
      <Menu
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menu.menuItems.map((item: any) => (
          <>
            <MenuItem onClick={item.onClick} href={item.href}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </MenuItem>
          </>
        ))}
      </Menu>
    </>
  )
}

MenuButton.propTypes = {}

export default MenuButton;