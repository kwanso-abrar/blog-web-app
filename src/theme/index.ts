import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111'
    },
    secondary: {
      main: '#E5E5E5'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    h1: {
      fontSize: '27px',
      fontWeight: '600',
      lineHeight: '140%',
      textTransform: 'capitalize'
    },
    h2: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '140%'
    }
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E5E5E5 ',
            borderRadius: '20px'
          },

          '& legend': {
            display: 'none'
          },

          '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            paddingLeft: '24px'
          },

          '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
            paddingLeft: '24px'
          },

          '& .css-7fbxqv-MuiInputBase-root-MuiFilledInput-root:after': {
            border: 'none'
          },

          '& .css-7fbxqv-MuiInputBase-root-MuiFilledInput-root:before': {
            border: 'none'
          },

          '& .css-7fbxqv-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
            border: 'none'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-20px',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#666666'
        }
      }
    }
  }
});

export default theme;
