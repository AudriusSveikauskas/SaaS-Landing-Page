import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '20px' },
          fontWeight: 600,
          lineHeight: { xs: '20px', sm: '28px' },
          color: '#272937',
          letterSpacing: { xs: '-0.1px', sm: '-0.8px' },
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: '12px', md: 0 },
        }}
      >
        Drive user acquisition, retention and revenue growth
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '40px', sm: '56px' },
          fontWeight: 600,
          lineHeight: { xs: '44px', sm: '60px' },
          letterSpacing: { xs: '-1.5px', sm: '-2px' },
          mt: { xs: '9px', sm: '16px' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Scale your app growth with high-value users
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '20px' },
          fontWeight: 400,
          lineHeight: { xs: '24px', sm: '30px' },
          color: '#272937',
          letterSpacing: { xs: '-0.4px', sm: '-0.8px' },
          mt: { xs: '12px', sm: '24px' },
          maxWidth: { xs: '100%', md: '516px' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Level up your mobile app user acquisition, retention and brand
        performance with predictive algorithms and machine learning
      </Typography>

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

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: 600,
          lineHeight: { xs: '20px', sm: '24px' },
          letterSpacing: { xs: '-0.1px', sm: '-0.4px' },
          color: 'rgba(39,41,55,0.75)',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Trusted by
      </Typography>
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
