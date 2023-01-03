import React from 'react';
import { Typography } from '@mui/material';
import { darkPrimary } from '../../variables/colors';

type HeadingDarkPrimaryH20Props = {
  text: string;
  isSmaller: boolean;
  isLighter: boolean;
};

const HeadingDarkPrimaryH20: React.FC<HeadingDarkPrimaryH20Props> = ({
  text,
  isSmaller,
  isLighter,
}) => (
  <Typography
    sx={{
      fontSize: { xs: isSmaller ? '14px' : '16px', md: '20px' },
      fontWeight: isLighter ? 400 : 600,
      lineHeight: { xs: '24px', md: '28px' },
      letterSpacing: { xs: '-0.4px', md: '-0.8px' },
      color: darkPrimary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH20;
