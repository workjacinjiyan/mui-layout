import { Box, Container, useTheme, Link, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './img/logo.svg';
import { useState, useEffect, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Header = () => {
  const theme = useTheme();
  const smallUp = useMediaQuery(theme.breakpoints.up('sm'));

  const headerRef = useRef<HTMLHeadElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const [isOpenMenu, setOpenMenu] = useCycle(false, true);

  const handleClick = () => {
    setOpenMenu();
  };

  const variants: Variants = {
    open: {
      opacity: 1,
      visibility: 'visible',
    },
    closed: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        opacity: {
          duration: 0.3,
        },
        visibility: {
          delay: 0.3,
        },
      },
    },
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
        <Box
          component={motion.div}
          animate={smallUp ? 'open' : isOpenMenu ? 'open' : 'closed'}
          variants={variants}
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
      </Container>
    </Box>
  );
};

export default Header;
