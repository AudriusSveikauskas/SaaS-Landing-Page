import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import HeadingAccentPrimaryH56 from '../typography/HeadingAccentPrimaryH56';
import HeadingDarkPrimaryH20 from '../typography/HeadingDarkPrimaryH20';
import HeadingDarkSecondaryH16 from '../typography/HeadingDarkSecondaryH16';
import Block3Box from '../basics/Block3Box';

const Block3 = () => (
  <Box sx={{ mt: '64px', backgroundColor: '#0066FF1A', paddingY: '64px' }}>
    <Container>
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: '36px',
          letterSpacing: '-1px',
          textAlign: 'center',
          color: '#272937',
        }}
      >
        3dot14 by the count
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          mt: '64px',
          gap: '64px',
        }}
      >
        <Block3Box>
          <HeadingAccentPrimaryH56 text="3.5Bn+" />
          <HeadingDarkPrimaryH20 text="Users across apps" />
        </Block3Box>

        <Block3Box>
          <HeadingAccentPrimaryH56 text="110+" />
          <Box>
            <HeadingDarkPrimaryH20 text="Countries engaged" />
            <HeadingDarkSecondaryH16 text="with ads each month" />
          </Box>
        </Block3Box>

        <Block3Box>
          <HeadingAccentPrimaryH56 text="170+" />
          <HeadingDarkPrimaryH20 text="GEOs covered" />
        </Block3Box>

        <Block3Box>
          <HeadingAccentPrimaryH56 text="8+" />
          <Box>
            <HeadingDarkPrimaryH20 text="Years of Experience" />
            <HeadingDarkSecondaryH16 text="in the App Industry" />
          </Box>
        </Block3Box>
      </Box>
    </Container>
  </Box>
);

export default Block3;
