import React from 'react';
import { Typography } from '@mui/material';

type HeadingAccentPrimaryH56Props = {
  text: string;
};
const HeadingAccentPrimaryH56: React.FC<HeadingAccentPrimaryH56Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: { xs: '40px', md: '56px' },
      fontWeight: 600,
      lineHeight: { xs: '44px', md: '60px' },
      letterSpacing: { xs: '-1.5px', md: '-2px' },
      color: '#0066FF',
      textAlign: 'center',
    }}
  >
    {text}
  </Typography>
);

export default HeadingAccentPrimaryH56;
