import React from 'react';
import { Box } from '@mui/material';

type Block3BoxProps = {
  children: React.ReactNode;
};

const Block3Box: React.FC<Block3BoxProps> = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Box>
);

export default Block3Box;
