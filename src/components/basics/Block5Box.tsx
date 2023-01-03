import React from 'react';
import { Box, Typography } from '@mui/material';
import { darkPrimary } from '../../variables/colors';

type Block5BoxProps = {
  link: string;
  text: string;
  alt: string;
};

const Block5Box: React.FC<Block5BoxProps> = ({ link, text, alt }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        width: { xs: '100%', sm: '70%', md: '100%' },
      }}
    >
      <img style={{ width: '100%' }} src={link} alt={alt} />
    </Box>
    <Box
      sx={{
        maxWidth: { xs: '98%', md: '347px' },
        mt: { xs: '10px', md: '15px' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '28px',
          letterSpacing: '-0.8px',
          color: darkPrimary,
        }}
      >
        {text}
      </Typography>
    </Box>
  </Box>
);

export default Block5Box;
