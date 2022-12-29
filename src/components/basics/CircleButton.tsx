import React from 'react';
import { Fab } from '@mui/material';
import {
  darkBackground,
  darkQuaternary,
  darkSecondary,
} from '../../variables/colors';

type CircleButtonProps = {
  children: React.ReactNode;
  isLight: boolean;
};
const CircleButton: React.FC<CircleButtonProps> = ({ children, isLight }) => (
  <Fab
    sx={{
      height: '48px',
      width: '48px',
      backgroundColor: isLight ? '#FFFFFF' : darkBackground,
      color: darkSecondary,
      border: `1px solid ${darkQuaternary}`,
      boxShadow: isLight ? '' : 'none',
    }}
  >
    {children}
  </Fab>
);

export default CircleButton;
