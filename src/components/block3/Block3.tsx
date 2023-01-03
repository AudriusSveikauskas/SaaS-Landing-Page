import React from 'react';
import { Box, Container } from '@mui/material';
import HeadingAccentPrimaryH56 from '../typography/HeadingAccentPrimaryH56';
import HeadingDarkPrimaryH20 from '../typography/HeadingDarkPrimaryH20';
import HeadingDarkSecondaryH16 from '../typography/HeadingDarkSecondaryH16';
import Block3Box from '../basics/Block3Box';
import { accentOpacity10 } from '../../variables/colors';
import HeadingDarkPrimaryH32 from '../typography/HeadingDarkPrimaryH32';

const Block3 = () => (
  <Box
    sx={{
      mt: { xs: '36px', md: '64px' },
      backgroundColor: accentOpacity10,
      paddingY: { xs: '36px', md: '64px' },
    }}
  >
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <HeadingDarkPrimaryH32 text="3dot14 by the count" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          mt: { xs: '36px', md: '64px' },
          gap: { xs: '32px', md: '64px' },
        }}
      >
        <Block3Box>
          <HeadingAccentPrimaryH56 text="3.5Bn+" />
          <Box sx={{ textAlign: 'center' }}>
            <HeadingDarkPrimaryH20
              text="Users across apps"
              isSmaller={false}
              isLighter={false}
            />
          </Box>
        </Block3Box>

        <Block3Box>
          <HeadingAccentPrimaryH56 text="110+" />
          <Box sx={{ textAlign: 'center' }}>
            <HeadingDarkPrimaryH20
              text="Countries engaged"
              isSmaller={false}
              isLighter={false}
            />
            <HeadingDarkSecondaryH16 text="with ads each month" />
          </Box>
        </Block3Box>

        <Block3Box>
          <HeadingAccentPrimaryH56 text="170+" />
          <Box sx={{ textAlign: 'center' }}>
            <HeadingDarkPrimaryH20
              text="GEOs covered"
              isSmaller={false}
              isLighter={false}
            />
          </Box>
        </Block3Box>

        <Block3Box>
          <HeadingAccentPrimaryH56 text="8+" />
          <Box sx={{ textAlign: 'center' }}>
            <HeadingDarkPrimaryH20
              text="Years of Experience"
              isSmaller={false}
              isLighter={false}
            />
            <HeadingDarkSecondaryH16 text="in the App Industry" />
          </Box>
        </Block3Box>
      </Box>
    </Container>
  </Box>
);

export default Block3;
