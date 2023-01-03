import React from 'react';
import { Typography } from '@mui/material';
import { darkBlack, darkPrimary } from '../../variables/colors';

type HeadingDarkBlackH56Props = {
  text: string;
};

const HeadingDarkBlackH56: React.FC<HeadingDarkBlackH56Props> = ({ text }) => (
  <Typography
    sx={{
      fontSize: { xs: '40px', md: '56px' },
      fontWeight: 600,
      lineHeight: { xs: '44px', md: '60px' },
      letterSpacing: { xs: '-1.5px', md: '-2px' },
      color: { xs: darkPrimary, md: darkBlack },
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkBlackH56;
