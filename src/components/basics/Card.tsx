import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import OutlinedButton from './OutlinedButton';
import { darkPrimary } from '../../variables/colors';

type CardProps = {
  title1: string;
  title2: string;
  description: string;
  buttonTitle: string;
};

const Card: React.FC<CardProps> = ({
  title1,
  title2,
  description,
  buttonTitle,
}) => (
  <Box
    sx={{
      backgroundColor: '#2729370D',
      padding: '16px',
      borderRadius: '4px',
      width: { xs: '100%', md: 'calc((100% - 32px) / 3)' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '16px',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Avatar
        sx={{ alignSelf: 'center' }}
        alt="Avatar"
        src="images/avatar.png"
      />
      <Typography
        sx={{
          fontSize: { xs: '20px', md: '24px' },
          fontWeight: 600,
          lineHeight: { xs: '28px', md: '32px' },
          letterSpacing: { xs: '-0.8px', md: '-1px' },
          textAlign: 'center',
          color: '#272937',
        }}
      >
        <span style={{ color: '#366BD3' }}>{title1}</span>
        {' '}
        <span style={{ color: '#000000' }}>{title2}</span>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '14px', md: '16px' },
          fontWeight: 400,
          lineHeight: { xs: '20px', md: '24px' },
          letterSpacing: { xs: '-0.1px', md: '-0.4px' },
          textAlign: 'center',
          color: darkPrimary,
        }}
      >
        {description}
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <OutlinedButton title={buttonTitle} arrow dark />
    </Box>
  </Box>
);

export default Card;
