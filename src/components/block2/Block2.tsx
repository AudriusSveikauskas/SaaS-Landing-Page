import React from 'react';
import { Box } from '@mui/material';
import Card from '../basics/Card';
import HeadingDarkPrimaryH40 from '../typography/HeadingDarkPrimaryH40';
import HeadingDarkSecondaryH20 from '../typography/HeadingDarkSecondaryH20';

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
      <Box sx={{ textAlign: 'center' }}>
        <HeadingDarkPrimaryH40 text="The all-in-one platform to grow your app" />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: '588px',
          marginX: 'auto',
          mt: '16px',
        }}
      >
        <HeadingDarkSecondaryH20
          text="Launch more powerful, data-driven, custom-built campaigns to achieve
        global growth with 3dot14"
          isLighter
        />
      </Box>
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
        buttonTitle="Read more"
      />
      <Card
        title1="Retain"
        title2="users with machine learning and optimized creatives"
        description="Create extensive look-alike audiences, measure user interest and estimate likelihood of actions to retarget previously active and loyal users with our predictive machine learning"
        buttonTitle="Read more"
      />
      <Card
        title1="Optimize"
        title2="your user LTV goals with the apt model"
        description="Analyse post-install behaviour of users and reduce customer acquisitions costs with a focus on higher user LTVs"
        buttonTitle="Read more"
      />
    </Box>
  </Box>
);

export default Block2;
