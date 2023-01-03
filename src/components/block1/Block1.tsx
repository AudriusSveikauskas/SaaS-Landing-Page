import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadingDarkBlackH56 from '../typography/HeadingDarkBlackH56';
import HeadingDarkPrimaryH20 from '../typography/HeadingDarkPrimaryH20';
import HeadingDarkSecondaryH16 from '../typography/HeadingDarkSecondaryH16';

const Block1 = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      height: { md: '581px' },
      mt: { xs: '29px', sm: '53px' },
    }}
  >
    <Box sx={{ maxWidth: { xs: '100%', md: '584px' } }}>
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: '12px', md: '52px' },
        }}
      >
        <HeadingDarkPrimaryH20
          text="Drive user acquisition, retention and revenue growth"
          isSmaller
          isLighter={false}
        />
      </Box>

      <Box
        sx={{
          mt: { xs: '9px', sm: '16px' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <HeadingDarkBlackH56 text="Scale your app growth with high-value users" />
      </Box>

      <Box
        sx={{
          mt: { xs: '12px', sm: '24px' },
          maxWidth: { xs: '100%', md: '516px' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <HeadingDarkPrimaryH20
          text="Level up your mobile app user acquisition, retention and brand
        performance with predictive algorithms and machine learning"
          isSmaller={false}
          isLighter
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'left' },
        }}
      >
        <Button
          sx={{
            mt: { xs: '24px', sm: '36px' },
            mb: { xs: '16px', sm: '36px' },
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            letterSpacing: '-0.4px',
            textTransform: 'none',
            backgroundColor: '#0066FF',
            paddingX: '44px',
            paddingY: '12px',
          }}
          variant="contained"
          endIcon={(
            <ArrowForwardIcon
              sx={{
                height: { xs: 0, md: '24px' },
                width: { xs: 0, md: '24px' },
              }}
            />
          )}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <HeadingDarkSecondaryH16 text="Trusted by" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '12px',
          height: { xs: '22px', sm: '38px' },
        }}
      >
        <img src="images/logos/yotta_logo.png" alt="Yotta" />
        <img src="images/logos/coindcx_logo.png" alt="Coindcx" />
        <img src="images/logos/gojek_logo.png" alt="Gojek" />
        <img src="images/logos/coinswitch_logo.png" alt="Coinswitch" />
      </Box>
    </Box>
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '453px' },
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        mt: { xs: '22px', md: 0 },
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: '70%', md: '100%' } }}>
        <img style={{ width: '100%' }} src="images/hero-1.png" alt="Hero" />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '130px',
          right: '-40px',
          display: { xs: 'none', xl: 'block' },
        }}
      >
        <img src="images/dots.png" alt="Dots" />
      </Box>
    </Box>
  </Box>
);

export default Block1;
