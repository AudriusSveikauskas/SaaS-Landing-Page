import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = () => {
  console.log('Logo');

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{
        backgroundColor: '#366BD3', borderRadius: '4px', width: 32, height: 32, mr: '16px',
      }}
      />
      <Typography sx={{
        fontSize: '24px', fontWeight: 400, lineHeight: '32px', letterSpacing: -1, color: '#0066FF',
      }}
      >
        Faster UI
      </Typography>
    </Box>
  );
};

export default Logo;
