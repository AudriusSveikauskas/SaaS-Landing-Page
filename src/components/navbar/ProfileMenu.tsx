import React from 'react';
import { Box, Link } from '@mui/material';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { accentPrimary } from '../../variables/colors';

const ProfileMenu = () => (
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Link
      sx={{
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '24px',
        color: accentPrimary,
        mr: '24px',
        textDecoration: 'none',
      }}
      href="/"
    >
      Log in
    </Link>
    <Button
      sx={{
        textTransform: 'none',
        paddingX: '29px',
        height: '40px',
        boxShadow: 'none',
        backgroundColor: accentPrimary,
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
      }}
      variant="contained"
      endIcon={<ChevronRightIcon />}
    >
      Get Start
    </Button>
  </Box>
);

export default ProfileMenu;
