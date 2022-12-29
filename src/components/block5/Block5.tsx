import React from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadingDarkPrimaryH16 from '../typography/HeadingDarkPrimaryH16';
import HeadingDarkPrimaryH40 from '../typography/HeadingDarkPrimaryH40';
import TextButton from '../basics/TextButton';
import CircleButton from '../basics/CircleButton';
import Block5Box from '../basics/Block5Box';
import OutlinedButton from '../basics/OutlinedButton';

const Block5 = () => (
  <Box sx={{ mt: { xs: '36px', md: '64px' } }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: { xs: '100%', md: '690px' },
        }}
      >
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ mb: { xs: '16px', md: '8px' } }}>
            <HeadingDarkPrimaryH16 text="Clients Success" />
          </Box>

          <HeadingDarkPrimaryH40 text="See how brands are leveraging our demand side platform" />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mr: '20px', width: '90px' }}>
          <TextButton title="VIEW ALL" />
        </Box>

        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Box>
            <CircleButton isLight={false}>
              <ArrowBackIcon />
            </CircleButton>
          </Box>

          <Box>
            <CircleButton isLight={false}>
              <ArrowForwardIcon />
            </CircleButton>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: '24px',
        mt: '36px',
      }}
    >
      <Block5Box
        text="MPL improves lead quality and lowers CPA by 45%"
        alt="Img 1"
        link="images/img-1.jpg"
      />

      <Block5Box
        text="MPL improves lead quality and lowers CPA by 45%"
        alt="Img 2"
        link="images/img-2.jpg"
      />

      <Block5Box
        text="MPL improves lead quality and lowers CPA by 45%"
        alt="Img 3"
        link="images/img-3.jpg"
      />
    </Box>

    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        mt: '40px',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <OutlinedButton title="View All" arrow={false} dark={false} />
    </Box>
  </Box>
);

export default Block5;
