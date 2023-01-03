import React from 'react';
import { Box, Container } from '@mui/material';
import { darkPrimary } from '../../variables/colors';
import HeadingLightSecondaryH16 from '../typography/HeadingLightSecondaryH16';

const Block10 = () => (
  <Box sx={{ backgroundColor: darkPrimary, pt: '60px', pb: '32px' }}>
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        rowGap: '24px',
      }}
    >
      <Box sx={{ alignItems: 'center' }}>
        <img src="images/logos/pi_logo.png" alt="Pi logo" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <HeadingLightSecondaryH16 text="©2022 3dot14&nbsp;" isPrimary />
        <HeadingLightSecondaryH16
          text="— All Rights Reserved"
          isPrimary={false}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        <img src="images/icons/facebook.png" alt="Facebook" />
        <img src="images/icons/linkedin.png" alt="Linkedin" />
        <img src="images/icons/mail.png" alt="Mail" />
      </Box>
    </Container>
  </Box>
);

export default Block10;
