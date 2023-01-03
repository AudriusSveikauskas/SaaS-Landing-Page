import React from 'react';
import { Typography } from '@mui/material';
import { lightPrimary, lightSecondary } from '../../variables/colors';

type HeadingLightSecondaryH16Props = {
  text: string;
  isPrimary: boolean;
};

const HeadingLightSecondaryH16: React.FC<HeadingLightSecondaryH16Props> = ({
  text,
  isPrimary,
}) => (
  <Typography
    sx={{
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.4px',
      color: isPrimary ? lightPrimary : lightSecondary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingLightSecondaryH16;
