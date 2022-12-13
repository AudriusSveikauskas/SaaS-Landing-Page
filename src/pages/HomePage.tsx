import React from 'react';
import { Container } from '@mui/material';

import Block1 from '../components/block1/Block1';
import Block2 from '../components/block2/Block2';

const HomePage = () => {
  console.log('HomePage');

  return (
    <Container>
      <Block1 />
      <Block2 />
    </Container>
  );
};

export default HomePage;
