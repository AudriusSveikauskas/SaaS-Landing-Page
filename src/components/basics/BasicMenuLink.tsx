import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type BasicMenuLinkProps = {
  title: string;
};

const BasicMenuLink: React.FC<BasicMenuLinkProps> = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{
          color: 'rgba(39,41,55,0.75)',
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 600,
        }}
        id={`menu-link-${title}`}
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {title}
      </Button>
      <Menu
        id={`positioned-menu-${title}`}
        aria-labelledby={`menu-link-${title}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>{title}</MenuItem>
        <MenuItem onClick={handleClose}>{title}</MenuItem>
        <MenuItem onClick={handleClose}>{title}</MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenuLink;
