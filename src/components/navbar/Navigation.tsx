import React from 'react';
import { Box } from '@mui/material';
import BasicMenuLink from '../basics/BasicMenuLink';

const links = ['Products', 'Solutions', 'Company', 'Resource'];
const Navigation = () => (
  <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px' }}>
    {links.map((link, index) => (
      <BasicMenuLink key={`${index * 2}`} title={link} />
    ))}
  </Box>
);

export default Navigation;
