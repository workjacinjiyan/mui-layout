import { Box, Container, useTheme } from '@mui/material';

const Intro = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        background: `${theme.palette.secondary.main}`,
        textAlign: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10em 5em',
        }}
      >
        <Box
          component="p"
          sx={{
            m: 0,
          }}
        >
          lorem ipsum sit
        </Box>
        <Box
          component="h1"
          sx={{
            color: `${theme.palette.primary.main}`,
            fontWeight: 900,
          }}
        >
          Responsive layouts don’t have to be a struggle
        </Box>
      </Container>
    </Box>
  );
};

export default Intro;
