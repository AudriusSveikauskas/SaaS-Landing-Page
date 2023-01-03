import React from 'react';
import { Box, Container } from '@mui/material';
import FormatQuoteTwoToneIcon from '@mui/icons-material/FormatQuoteTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { accentOpacity50, darkBackground } from '../../variables/colors';
import HeadingDarkPrimaryH24 from '../typography/HeadingDarkPrimaryH24';
import HeadingDarkPrimaryH20 from '../typography/HeadingDarkPrimaryH20';
import HeadingDarkPrimaryH14 from '../typography/HeadingDarkPrimaryH14';
import DotButton from '../basics/DotButton';
import CircleButton from '../basics/CircleButton';

const navArr = [
  { link: '#', active: true },
  { link: '#', active: false },
  { link: '#', active: false },
];
const Block6 = () => (
  <Box
    sx={{
      backgroundColor: darkBackground,
      mt: { xs: '36px', md: '64px' },
      pt: { xs: '36px', md: '64px' },
      pb: { xs: '36px', md: '40px' },
    }}
  >
    <Container
      sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{ minWidth: { xs: '100%', md: '486px' }, position: 'relative' }}
        >
          <img
            style={{ width: '100%', zIndex: -1 }}
            src="images/hero-3.png"
            alt="Hero 3"
          />
          <img
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-39px',
              zIndex: 100,
            }}
            src="images/dots.png"
            alt="Hero 3"
          />
        </Box>
        <Box sx={{ maxWidth: { xs: '100%', md: '586px' }, mt: '42px' }}>
          <FormatQuoteTwoToneIcon
            sx={{
              color: accentOpacity50,
              fontSize: '48px',
              display: { xs: 'none', md: 'block' },
            }}
          />

          <Box sx={{ mt: '3px', textAlign: { xs: 'center', md: 'left' } }}>
            <HeadingDarkPrimaryH24 text="Amongst our top performing partners, 3dot14 has delivered quality traffic for us while maintaining the scale whenever needed making them one of the most dependable and trustable partners" />
          </Box>

          <Box sx={{ mt: '31px', textAlign: { xs: 'center', md: 'left' } }}>
            <HeadingDarkPrimaryH20
              text="Elvis Wang"
              isSmaller={false}
              isLighter={false}
            />
          </Box>

          <Box sx={{ mt: '8px', textAlign: { xs: 'center', md: 'left' } }}>
            <HeadingDarkPrimaryH14 text="Digital Marketing Specialist, Vantage" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          gap: '13px',
          mt: '9px',
        }}
      >
        {navArr.map((item, index) => (
          <DotButton
            key={`nav-${index - 1}`}
            link={item.link}
            active={item.active}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          mt: '24px',
        }}
      >
        <Box
          sx={{
            position: { xs: '', md: 'absolute' },
            top: { xs: '', md: '50%' },
            left: { xs: '', md: '8px' },
            transform: { xs: '', md: 'translateY(-24px)' },
          }}
        >
          <CircleButton isLight>
            <ArrowBackIcon />
          </CircleButton>
        </Box>

        <Box
          sx={{
            position: { xs: '', md: 'absolute' },
            top: { xs: '', md: '50%' },
            right: { xs: '', md: '8px' },
            transform: { xs: '', md: 'translateY(-24px)' },
          }}
        >
          <CircleButton isLight>
            <ArrowForwardIcon />
          </CircleButton>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Block6;
