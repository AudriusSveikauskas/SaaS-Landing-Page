import React from 'react';
import { Box, Grid } from '@mui/material';
import HeadingDarkSecondaryH20 from '../typography/HeadingDarkSecondaryH20';

const logoArr = [
  'vantage_logo.png',
  'phonepe_logo.png',
  'dostavista_logo.png',
  'hakuna_logo.png',
  'lazada_logo.png',
  'amazon_logo.png',
];

const Block7 = () => (
  <Box sx={{ marginY: { xs: '36px', md: '64px' } }}>
    <Box sx={{ textAlign: 'center' }}>
      <HeadingDarkSecondaryH20 text="Our Extensive client base" />
    </Box>

    <Box
      sx={{ paddingX: { xs: '30px', md: 0 }, mt: { xs: '16px', md: '24px' } }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
      >
        {logoArr.map((item, index) => (
          <Grid
            key={`item-${index + 1}`}
            item
            xs={6}
            sm={4}
            md={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src={`images/logos/${item}`} alt={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default Block7;
