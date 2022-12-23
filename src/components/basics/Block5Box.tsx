import React from 'react';
import { Box } from '@mui/material';
import HeadingDarkPrimaryH20 from '../typography/HeadingDarkPrimaryH20';

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
        maxWidth: { xs: '100%', md: '347px' },
        mt: { xs: '10px', md: '15px' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <HeadingDarkPrimaryH20 text={text} />
    </Box>
  </Box>
);

export default Block5Box;
