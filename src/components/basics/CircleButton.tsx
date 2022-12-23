import React from 'react';
import { Fab } from '@mui/material';
import {
  darkBackground,
  darkQuaternary,
  darkSecondary,
} from '../../variables/colors';

type CircleButtonProps = {
  children: React.ReactNode;
};
const CircleButton: React.FC<CircleButtonProps> = ({ children }) => (
  <Fab
    sx={{
      height: '48px',
      width: '48px',
      backgroundColor: darkBackground,
      color: darkSecondary,
      border: `1px solid ${darkQuaternary}`,
      boxShadow: 'none',
    }}
  >
    {children}
  </Fab>
);

export default CircleButton;
