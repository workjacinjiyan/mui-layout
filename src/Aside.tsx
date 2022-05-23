import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import image01 from './img/hero-img.jpg';

const Aside = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  // const medium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component="section"
      sx={{
        background: '#222c2a',
        color: '#fff',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: '4em 2em!important',
        }}
      >
        <Box
          sx={{
            display: small ? 'flex' : 'block',
            columnGap: small ? '2em' : 0,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box component={'h2'}>Made custom for you </Box>
            <Box component={'p'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
              felis. Sociis natoque penatibus et magnis dis.
            </Box>
          </Box>
          <Box sx={{ flex: 1, marginTop: small ? 0 : '2em' }}>
            <Box component={'img'} src={image01} sx={{ objectFit: 'cover' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Aside;
