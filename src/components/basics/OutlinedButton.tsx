import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type OutlinedButtonProps = {
  title: string;
};

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ title }) => (
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
      }}
      endIcon={<ArrowForwardIcon />}
    >
      {title}
    </Button>
  </Box>
);

export default OutlinedButton;
