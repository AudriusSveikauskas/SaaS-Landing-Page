import React from 'react';
import { Typography } from '@mui/material';
import { darkSecondary } from '../../variables/colors';

type HeadingDarkSecondaryH16Props = {
  text: string;
};

const HeadingDarkSecondaryH16: React.FC<HeadingDarkSecondaryH16Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: { xs: '14px', sm: '16px' },
      fontWeight: 600,
      lineHeight: { xs: '20px', sm: '24px' },
      letterSpacing: { xs: '-0.1px', sm: '-0.4px' },
      color: darkSecondary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkSecondaryH16;
