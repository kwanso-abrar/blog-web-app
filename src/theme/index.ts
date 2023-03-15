import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    auth: true;
    filled: true;
  }
}

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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-20px',
          fontSize: '18px',
          lineHeight: '150%'
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          position: 'absolute',
          right: '0',
          top: '-20px'
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
        },
        {
          props: {
            variant: 'filled'
          },
          style: {
            background: '#111111',
            border: '1px solid #111111',
            borderRadius: '8px',
            width: '100%',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'none',
            padding: '8px 26px',
            ':hover': {
              color: '#FFFFFF',
              backgroundColor: '#111111'
            }
          }
        },
        {
          props: {
            variant: 'outlined'
          },
          style: {
            border: '1px solid #111111',
            borderRadius: '8px',
            background: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#111111',
            textAlign: 'center',
            textTransform: 'none',
            padding: '8px 26px',
            ':hover': {
              color: '#111111',
              backgroundColor: '#FFFFFF'
            }
          }
        }
      ]
    }
  }
});

export default theme;
