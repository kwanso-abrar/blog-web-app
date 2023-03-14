import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography } from '@mui/material';

export const InputField = styled(TextField)(() => ({
  width: '100%'
}));

export const VisibilityIconText = styled(Typography)(() => ({
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '150%',
  marginBottom: '5px',
  marginLeft: '10px',
  color: '#666666'
}));

export const ForgetPasswordLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  display: 'block',
  textAlign: 'right',
  marginTop: '5px'
}));

export const AuthPageHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '27px',
  textAlign: 'center',
  fontWeight: 600,
  lineHeight: '140%',
  textTransform: 'capitalize'
}));

export const AuthPageSubHeading = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  fontSize: '15px',
  textAlign: 'center',
  fontWeight: 400,
  lineHeight: '150%',
  justifyContent: 'center',
  textDecoration: 'none'
}));

export const AuthPageFormContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: '25px',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const GoToSignUpPage = styled(Button)(() => ({
  width: '100%',
  height: '64px',
  fontSize: '21px',
  marginTop: '20px',
  fontWeight: '600',
  lineHeight: '140%',
  borderRadius: '40px'
}));
