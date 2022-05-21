import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import image02 from './img/image-02.jpg';

const Section4 = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  // const medium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component="section"
      sx={{
        background: `${theme.palette.primary.main}`,
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
          <Box sx={{ flex: 1, marginBottom: small ? 0 : '2em' }}>
            <Box component={'img'} src={image02} sx={{ objectFit: 'cover' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box component={'h2'}>Created with care</Box>
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

export default Section4;
