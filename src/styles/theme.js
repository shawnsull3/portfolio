import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#424242',
        light: '#6d6d6d',
        dark: '#1b1b1b'
    },
    secondary: {
        main: '#03a9f4',
        light: '#67daff',
        dark: '#007ac1'
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;