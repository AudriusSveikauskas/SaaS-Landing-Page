import React from 'react';
import { Box, Container } from '@mui/material';

import Block1 from '../components/block1/Block1';
import Block2 from '../components/block2/Block2';
import Block3 from '../components/block3/Block3';
import Block4 from '../components/block4/Block4';
import Block5 from '../components/block5/Block5';
import Block6 from '../components/block6/Block6';
import Block7 from '../components/block7/Block7';
import Block8 from '../components/block8/Block8';
import Block9 from '../components/block9/Block9';
import Block10 from '../components/block10/Block10';

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
      </Container>
      <Block3 />
      <Container>
        <Block4 />
        <Block5 />
      </Container>
      <Block6 />
      <Container>
        <Block7 />
      </Container>
      <Block8 />
      <Block9 />
      <Block10 />
    </>
  );
};

export default HomePage;
