import React from 'react';
import { Typography } from '@mui/material';

type HeadingLightPrimaryH32Props = {
  text: string;
};

const HeadingLightPrimaryH32: React.FC<HeadingLightPrimaryH32Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '36px',
      letterSpacing: '-1px',
      color: 'rgba(255,255,255,0.93)',
    }}
  >
    {text}
  </Typography>
);

export default HeadingLightPrimaryH32;
