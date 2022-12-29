import React from 'react';

import LensIcon from '@mui/icons-material/Lens';
import { Link } from '@mui/material';

type DotButtonProps = {
  link: string;
  active: boolean;
};

const DotButton: React.FC<DotButtonProps> = ({ link, active }) => (
  <Link href={link}>
    <LensIcon
      sx={{
        color: active ? '#0066FF' : 'rgba(39,41,55,0.35)',
        fontSize: '14.40px',
      }}
    />
  </Link>
);

export default DotButton;
