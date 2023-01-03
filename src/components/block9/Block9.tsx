import React from 'react';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { darkPrimary } from '../../variables/colors';
import HeadingLightPrimaryH20 from '../typography/HeadingLightPrimaryH20';
import HeadingLightSecondaryH16 from '../typography/HeadingLightSecondaryH16';

const productArr = [
  'User Acquisition',
  'Retention',
  'Retention',
  'Analytics & Fraud Prevention',
  'Creative Optimization',
  'App Monetization',
];

const solutionsArr = [
  'Our Approach',
  'Gaming',
  'Finance',
  'Ecommerce',
  'Operators & OEMs',
  'Self-serving DSP',
];

const companyArr = [
  'About Us',
  'Careers',
  'Contact Us',
  'Privacy Policy',
  'Terms of Service',
];

const resourseArr = ['Blog', 'Case Studies'];

const renderList = (title: string, arr: string[]) => (
  <>
    <Box sx={{ mb: '2px' }}>
      <HeadingLightPrimaryH20 text={title} />
    </Box>

    <List>
      {arr.map((item, index) => (
        <ListItem key={`item-${index + 1}`} disablePadding>
          <ListItemButton sx={{ paddingX: 0, paddingY: '2px' }}>
            <ListItemText>
              <HeadingLightSecondaryH16 text={item} />
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
);

const Block9 = () => (
  <Box sx={{ backgroundColor: darkPrimary, pt: { xs: '32px', md: '95px' } }}>
    <Container>
      <Box
        sx={{
          display: 'flex',
          columnGap: { xs: '60px', md: 0 },
          rowGap: { xs: '32px', md: 0 },
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <Box
          sx={{
            width: { xs: 'calc(50% - 35px)', md: '25%' },
            order: { xs: 2, md: 1 },
          }}
        >
          {renderList('Product', productArr)}
        </Box>
        <Box
          sx={{
            width: { xs: 'calc(50% - 35px)', md: '25%' },
            order: { xs: 1, md: 2 },
            ml: { xs: '10px', md: 0 },
          }}
        >
          {renderList('Solutions', solutionsArr)}
        </Box>
        <Box
          sx={{
            width: { xs: 'calc(50% - 35px)', md: '25%' },
            order: { xs: 3, md: 3 },
          }}
        >
          {renderList('Company', companyArr)}
        </Box>
        <Box
          sx={{
            width: { xs: 'calc(50% - 35px)', md: '25%' },
            order: { xs: 4, md: 4 },
            ml: { xs: '10px', md: 0 },
          }}
        >
          {renderList('Resourse', resourseArr)}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Block9;
