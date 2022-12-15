import React from 'react';
import { Box, Container } from '@mui/material';

import Block1 from '../components/block1/Block1';
import Block2 from '../components/block2/Block2';

const HomePage = () => {
  console.log('HomePage');

  return (
    <>
      <Box
        sx={{
          backgroundColor: { xs: '', md: 'rgba(39, 41, 55, 0.05)' },
          width: '100%',
          height: 714,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Container>
        <Block1 />
        <Block2 />
        <Box sx={{ height: '50px' }} />
      </Container>
    </>
  );
};

export default HomePage;
