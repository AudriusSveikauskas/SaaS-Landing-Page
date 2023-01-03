import React from 'react';
import { Typography } from '@mui/material';
import { darkPrimary } from '../../variables/colors';

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
      color: darkPrimary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH40;
