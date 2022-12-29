import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkPrimaryH14Props = {
  text: string;
};

const HeadingDarkPrimaryH14: React.FC<HeadingDarkPrimaryH14Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.1px',
      color: '#272937',
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkPrimaryH14;
