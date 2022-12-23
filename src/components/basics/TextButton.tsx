import React from 'react';
import { Button } from '@mui/material';

type TextButtonProps = {
  title: string;
};

const TextButton: React.FC<TextButtonProps> = ({ title }) => (
  <Button
    sx={{
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '-0.4px',
      color: '#0066FF',
    }}
    variant="text"
  >
    {title}
  </Button>
);

export default TextButton;
