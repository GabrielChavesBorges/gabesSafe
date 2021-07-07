import { createMuiTheme } from '@material-ui/core/styles';

const GabesTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#0275d8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#0275d8',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export default GabesTheme;
