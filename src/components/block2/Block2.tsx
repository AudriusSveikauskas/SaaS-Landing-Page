import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../basics/Card';

const Block2 = () => (
  <Box
    sx={{
      mt: { xs: '34px', md: '64px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Box sx={{ marginX: 'auto' }}>
      <Typography
        sx={{
          fontSize: { xs: '32px', md: '40px' },
          fontWeight: 600,
          lineHeight: { xs: '36px', md: '44px' },
          letterSpacing: { xs: '-1px', md: '-1.5px' },
          textAlign: 'center',
          color: '#272937',
        }}
      >
        The all-in-one platform to grow your app
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '16px', md: '20px' },
          fontWeight: 400,
          lineHeight: { xs: '24px', md: '30px' },
          letterSpacing: { xs: '-0.4px', md: '-0.8px' },
          textAlign: 'center',
          color: 'rgba(39,41,55,0.75)',
          maxWidth: '588px',
          marginX: 'auto',
          mt: '16px',
        }}
      >
        Launch more powerful, data-driven, custom-built campaigns to achieve
        global growth with 3dot14
      </Typography>
    </Box>
    <Box
      sx={{
        marginX: 'auto',
        mt: '48px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '16px',
        alignItems: 'stretch',
      }}
    >
      <Card
        title1="Reach"
        title2="a high-value, fraud-free user base for your app"
        description="Filter out fraudulent traffic and target the most relevant audiences with optimized creatives run post A/B testing to ensure real conversions"
      />
      <Card
        title1="Retain"
        title2="users with machine learning and optimized creatives"
        description="Create extensive look-alike audiences, measure user interest and estimate likelihood of actions to retarget previously active and loyal users with our predictive machine learning"
      />
      <Card
        title1="Optimize"
        title2="your user LTV goals with the apt model"
        description="Analyse post-install behaviour of users and reduce customer acquisitions costs with a focus on higher user LTVs"
      />
    </Box>
  </Box>
);

export default Block2;
