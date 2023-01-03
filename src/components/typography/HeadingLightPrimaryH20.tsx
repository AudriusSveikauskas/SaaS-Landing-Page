import React from 'react';
import { Typography } from '@mui/material';
import { lightPrimary } from '../../variables/colors';

type HeadingLightPrimaryH20Props = {
  text: string;
};
const HeadingLightPrimaryH20: React.FC<HeadingLightPrimaryH20Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '-0.8px',
      color: lightPrimary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingLightPrimaryH20;
