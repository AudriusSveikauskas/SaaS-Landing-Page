import React from 'react';
import { Typography } from '@mui/material';

type HeadingLightSecondaryH16Props = {
  text: string;
};

const HeadingLightSecondaryH16: React.FC<HeadingLightSecondaryH16Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.4px',
      color: 'rgba(255,255,255,0.65)',
    }}
  >
    {text}
  </Typography>
);

export default HeadingLightSecondaryH16;
