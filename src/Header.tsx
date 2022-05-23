import { Box, Container, useTheme, Link, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './img/logo.svg';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

const Header = () => {
  const theme = useTheme();
  const smallUp = useMediaQuery(theme.breakpoints.up('sm'));

  const headerRef = useRef<HTMLHeadElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const [isOpenMenu, setOpenMenu] = useCycle(false, true);

  const handleClick = () => {
    setOpenMenu();
  };

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
  }, [headerHeight]);

  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        background: `${theme.palette.primary.main}`,
        textAlign: 'center',
        color: '#fff',
      }}
      ref={headerRef}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '1em 2em',
        }}
      >
        <Box
          sx={{
            display: smallUp ? 'none' : 'block',
            background: `${theme.palette.secondary.main}`,
            borderRadius: '50%',
            padding: '0.25em',
          }}
          onClick={handleClick}
        >
          <MenuIcon
            sx={{
              display: smallUp ? 'none' : 'block',
            }}
          />
        </Box>
        <Link
          href="#"
          sx={{
            display: 'flex',
            alignItems: 'center',
            margin: smallUp ? 0 : 'auto',
          }}
        >
          <Box component="img" src={logo} alt="conquering responsive layouts" />
        </Link>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Box
            component={motion.div}
            animate={{
              opacity: smallUp ? 1 : isOpenMenu ? 1 : 0,
            }}
            sx={{
              position: smallUp ? 'static' : 'absolute',
              top: `${headerHeight}px`,
              right: 0,
              left: 0,
              backgroundColor: smallUp
                ? 'transparent'
                : `${theme.palette.primary.main}`,
              padding: smallUp ? '0' : '0 2em 1em',
              flex: 1,
              marginLeft: smallUp ? '1em' : 0,
              zIndex: smallUp ? 'initial' : isOpenMenu ? 'initial' : -1,
            }}
          >
            <Box
              component="nav"
              sx={{
                display: smallUp ? 'flex' : 'block',
                justifyContent: 'space-between',
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: smallUp ? 'flex' : 'block',
                  '& > li + li ': {
                    marginLeft: smallUp ? '1em' : 0,
                  },
                }}
              >
                <Box component="li">
                  <Link href="#">Home</Link>
                </Box>
                <Box component="li">
                  <Link href="#">About</Link>
                </Box>
                <Box component="li">
                  <Link href="#">Contact</Link>
                </Box>
              </Box>
              <Box
                component="ul"
                sx={{
                  display: smallUp ? 'flex' : 'block',
                  '& > li + li ': {
                    marginLeft: smallUp ? '1em' : 0,
                  },
                }}
              >
                <Box component="li">
                  <Link href="#">Sign In</Link>
                </Box>
                <Box component="li">
                  <Link href="#">Sign Up</Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Header;
