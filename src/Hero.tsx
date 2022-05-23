import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  // const medium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box component="section">
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
          component="h2"
          sx={{
            color: `${theme.palette.primary.main}`,
            fontWeight: 900,
            textAlign: 'center',
          }}
        >
          Quality Designs
        </Box>
        <Box
          sx={{
            display: small ? 'flex' : 'block',
            columnGap: small ? '2em' : 0,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box component={'p'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
              felis. Sociis natoque penatibus et magnis dis.
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box component={'p'}>
              Felis donec et odio pellentesque diam volutpat. Aliquam purus sit
              amet luctus venenatis. Turpis in eu mi bibendum neque egestas
              congue quisque egestas. Pellentesque sit amet porttitor eget dolor
              morbi non.
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
