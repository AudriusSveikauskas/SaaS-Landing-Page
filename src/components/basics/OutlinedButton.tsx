import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { accentOpacity10, darkBackground } from '../../variables/colors';

type OutlinedButtonProps = {
  title: string;
  arrow: boolean;
  dark: boolean;
};

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  title,
  arrow,
  dark,
}) => (
  <Box>
    <Button
      variant="outlined"
      sx={{
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        letterSpacing: '-0.1px',
        color: '#0066FF',
        border: 'solid 1px #0066FF',
        height: '40px',
        backgroundColor: dark ? darkBackground : accentOpacity10,
      }}
      endIcon={arrow ? <ArrowForwardIcon /> : ''}
    >
      {title}
    </Button>
  </Box>
);

export default OutlinedButton;
