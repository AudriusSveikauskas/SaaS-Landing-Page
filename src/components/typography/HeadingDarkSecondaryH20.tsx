import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkSecondaryH20Props = {
  text: string;
};

const HeadingDarkSecondaryH20: React.FC<HeadingDarkSecondaryH20Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '-0.8px',
      color: 'rgba(39,41,55,0.75)',
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkSecondaryH20;
