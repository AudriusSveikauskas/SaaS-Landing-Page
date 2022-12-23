import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkPrimaryH20Props = {
  text: string;
};

const HeadingDarkPrimaryH20: React.FC<HeadingDarkPrimaryH20Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: { xs: '16px', md: '20px' },
      fontWeight: 600,
      lineHeight: { xs: '24px', md: '28px' },
      letterSpacing: { xs: '-0.4px', md: '-0.8px' },
      color: '#272937',
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH20;
