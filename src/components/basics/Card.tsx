import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import OutlinedButton from './OutlinedButton';

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
}) => {
  console.log('Card');

  return (
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
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '-1px',
            textAlign: 'center',
            color: '#272937',
          }}
        >
          <span style={{ color: '#366BD3' }}>{title1}</span>
          {' '}
          {title2}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.4px',
            textAlign: 'center',
            color: '#272937',
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <OutlinedButton title={buttonTitle} />
      </Box>
    </Box>
  );
};

export default Card;
