import React from 'react';
import { Typography } from '@mui/material';
import { darkPrimary } from '../../variables/colors';

type HeadingDarkPrimaryH32Props = {
  text: string;
};

const HeadingDarkPrimaryH32: React.FC<HeadingDarkPrimaryH32Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '36px',
      letterSpacing: '-1px',
      color: darkPrimary,
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH32;
