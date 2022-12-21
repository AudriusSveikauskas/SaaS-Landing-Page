import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HeadingDarkPrimaryH16 from '../typography/HeadingDarkPrimaryH16';
import HeadingDarkPrimaryH40 from '../typography/HeadingDarkPrimaryH40';
import HeadingDarkSecondaryH16 from '../typography/HeadingDarkSecondaryH16';
import OutlinedButton from '../basics/OutlinedButton';

const Block4 = () => {
  const listItems = [
    'AI based high-value user targeting and acquisition',
    'Global Scale',
    'CPI & CPA optimisation',
    'Creative Optimization',
    'Fraud Prevention',
    '100% Transparency with dashboard access',
    'Real-time tracking and performance reports',
    'Agile Machine Learning and DSP developments',
    'Integration with 40+ major ad exchanges providing with the best inventories',
    'Specialised campaigns for all your goals - acquisition, retention, retargeting and more',
  ];

  return (
    <Box
      sx={{
        mt: { xs: '36px', md: '64px' },
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <img style={{ width: '100%' }} src="images/hero-2.jpg" alt="Hero" />
      </Box>

      <Box sx={{ maxWidth: '486px' }}>
        <Box sx={{ mb: '9px' }}>
          <HeadingDarkPrimaryH16 text="Your go-to programmatic media buyer" />
        </Box>

        <HeadingDarkPrimaryH40 text="All you need in an ideal DSP" />

        <Box sx={{ mt: { xs: '12px', md: '15px' } }}>
          <HeadingDarkSecondaryH16 text="Radian has it." />
        </Box>

        <Box sx={{ mt: { xs: '13px', md: '20px' } }}>
          <List>
            {listItems.map((item, index) => (
              <ListItem
                key={`item-${index + 1}`}
                sx={{ padding: 0, mb: { xs: '4px', md: 0 } }}
              >
                <ListItemIcon sx={{ minWidth: '24px', pr: '8px' }}>
                  <CheckIcon sx={{ color: '#1A8037' }} />
                </ListItemIcon>
                <ListItemText>
                  <HeadingDarkPrimaryH16 text={item} />
                </ListItemText>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: '20px' }}>
            <OutlinedButton title="Know More" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Block4;
