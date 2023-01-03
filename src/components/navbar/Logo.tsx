import React from 'react';
import { Box, Typography } from '@mui/material';
import { accentPrimary, specialInfo } from '../../variables/colors';

const Logo = () => (
  <Box sx={{ display: 'flex' }}>
    <Box
      sx={{
        backgroundColor: specialInfo,
        borderRadius: '4px',
        width: 32,
        height: 32,
        mr: '16px',
      }}
    />
    <Typography
      sx={{
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '32px',
        letterSpacing: -1,
        color: accentPrimary,
      }}
    >
      Faster UI
    </Typography>
  </Box>
);

export default Logo;
