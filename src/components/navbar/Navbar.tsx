import React from 'react';
import { Box, Container } from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => (
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
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <MobileMenu />
    </Box>
  </Container>
);

export default Navbar;
