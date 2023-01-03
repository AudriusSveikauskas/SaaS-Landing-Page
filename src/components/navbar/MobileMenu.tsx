import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

const links = ['Products', 'Solutions', 'Company', 'Resource'];

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup
        onClick={handleClick}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {links.map((link, index) => (
          <MenuItem key={`${index * 2}`} onClick={handleClose}>
            {link}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileMenu;
