import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { accentPrimary, darkPrimary } from '../../variables/colors';
import HeadingLightPrimaryH32 from '../typography/HeadingLightPrimaryH32';

const Block8 = () => (
  <Box
    sx={{
      display: { xs: 'none', sm: 'flex' },
      justifyContent: 'center',
      backgroundColor: darkPrimary,
      mt: '64px',
      position: 'relative',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        display: { sm: 'none', md: 'block' },
      }}
    >
      <img src="images/dots2.png" alt="Dots" />
    </Box>

    <Box
      sx={{
        position: 'absolute',
        bottom: '40px',
        right: '10px',
        display: { sm: 'none', md: 'block' },
        transform: 'rotate(180deg)',
      }}
    >
      <img src="images/dots2.png" alt="Dots" />
    </Box>

    <Box sx={{ paddingY: '64px', textAlign: 'center', zIndex: 100 }}>
      <HeadingLightPrimaryH32 text="See what our platform can do for you" />
      <Button
        variant="contained"
        sx={{
          backgroundColor: accentPrimary,
          textTransform: 'none',
          paddingY: '12px',
          paddingX: '60px',
          mt: '48px',
        }}
      >
        Grow Your Audience
      </Button>
    </Box>
  </Box>
);

export default Block8;
