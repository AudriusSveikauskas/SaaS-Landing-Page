import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkPrimaryH16Props = {
  text: string;
};

const HeadingDarkPrimaryH16: React.FC<HeadingDarkPrimaryH16Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: { xs: '14px', md: '16px' },
      fontWeight: 600,
      lineHeight: { xs: '20px', md: '24px' },
      letterSpacing: { xs: '-0.1px', md: '-0.4px' },
      color: '#272937',
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH16;
