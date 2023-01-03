import React from 'react';
import { Typography } from '@mui/material';
import { darkSecondary } from '../../variables/colors';

type HeadingDarkSecondaryH20Props = {
  text: string;
  isLighter: boolean;
};

const HeadingDarkSecondaryH20: React.FC<HeadingDarkSecondaryH20Props> = ({
  text,
  isLighter,
}) => (
  <Typography
    sx={{
      fontSize: { xs: '16px', md: '20px' },
      fontWeight: isLighter ? 400 : 600,
      lineHeight: { xs: '24px', md: '30px' },
      letterSpacing: { xs: '-0.4px', md: '-0.8px' },
      color: darkSecondary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkSecondaryH20;
