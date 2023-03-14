import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    auth: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#333333'
    },
    secondary: {
      main: '#E5E5E5'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E5E5E5 !important',
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
          }
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'auth', disabled: false },
          style: {
            color: 'white !important',
            width: '100%',
            height: '64px',
            padding: '17px 16px',
            fontSize: '21px',
            maxWidth: '715px',
            textAlign: 'center',
            fontWeight: '600',
            lineHeight: '140%',
            borderRadius: '40px',
            textTransform: 'capitalize',
            backgroundColor: '#333333',
            ':hover': {
              color: 'white !important',
              backgroundColor: '#333333'
            }
          }
        },
        {
          props: { variant: 'auth', disabled: true },
          style: {
            color: 'white !important',
            width: '100%',
            height: '64px',
            opacity: '0.25',
            padding: '17px 16px',
            fontSize: '21px',
            maxWidth: '715px',
            textAlign: 'center',
            fontWeight: '600',
            lineHeight: '140%',
            borderRadius: '40px',
            textTransform: 'capitalize',
            backgroundColor: '#111111',
            ':hover': {
              color: 'white !important',
              backgroundColor: '#111111'
            }
          }
        }
      ]
    }
  }
});

export default theme;
