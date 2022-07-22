import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    primary: '#201D29',
  },
  breakpoints: {
    sm: '414px',
    md: '584px',
    lg: '1280px',
  },
  config,
});

export default theme;
