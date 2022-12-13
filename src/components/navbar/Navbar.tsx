import React from 'react';
import { Container } from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  console.log('Navbar');

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: { xs: '12px', md: '40px' },
        height: '40px',
      }}
    >
      <Logo />
      <Navigation />
      <ProfileMenu />
    </Container>
  );
};

export default Navbar;
