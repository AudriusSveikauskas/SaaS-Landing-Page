import React from 'react';
import { Typography } from '@mui/material';

type HeadingDarkSecondaryH16Props = {
  text: string;
};

const HeadingDarkSecondaryH16: React.FC<HeadingDarkSecondaryH16Props> = ({
  text,
}) => (
  <Typography
    sx={{
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '-0.4px',
      textAlign: 'center',
      color: 'rgba(39,41,55,0.75)',
    }}
  >
    {text}
  </Typography>
);

export default HeadingDarkSecondaryH16;
