import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkPrimaryH40Props = {
  text: string;
};

const HeadingDarkPrimaryH40: React.FC<HeadingDarkPrimaryH40Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: { xs: '32px', md: '40px' },
      fontWeight: 600,
      lineHeight: { xs: '36px', md: '44px' },
      letterSpacing: { xs: '-1px', md: '-1.5px' },
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH40;
