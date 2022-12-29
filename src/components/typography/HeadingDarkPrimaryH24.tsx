import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkPrimaryH24Props = {
  text: string;
};
const HeadingDarkPrimaryH24: React.FC<HeadingDarkPrimaryH24Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '32px',
      letterSpacing: '-1px',
      color: '#272937',
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH24;
