import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  Avatar,
  Button,
  TextField,
  Typography,
  inputBaseClasses,
  outlinedInputClasses,
  inputAdornmentClasses
} from '@mui/material';

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

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderBottom: '1.5px solid rgba(102, 102, 102, 0.25)',
  padding: '16px 40px',

  [theme.breakpoints.down('md')]: {
    padding: '10px 12px'
  }
}));

export const HeaderNavLink = styled(Link)(({ theme }) => ({
  fontSize: '16px',
  alignSelf: 'center',
  lineHeight: '24px',
  marginLeft: '40px',
  textDecoration: 'none',

  [theme.breakpoints.down('md')]: {
    color: '#111111',
    fontWeight: '600',
    marginLeft: '0px',
    marginBottom: '5px'
  }
}));

export const SearchBar = styled(TextField)(({ theme }) => ({
  width: '100%',

  [`& .${inputBaseClasses.root}`]: {
    padding: '11px 24px',

    [theme.breakpoints.down('md')]: {
      padding: '5px 12px'
    }
  },

  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: '1px solid rgba(102, 102, 102, 0.35)',
    padding: '11px 24px',
    borderRadius: '25px',
    backgroundColor: '#F7F7F7'
  },

  [`& .${inputAdornmentClasses.root}`]: {
    zIndex: '1'
  },

  [`& .${inputBaseClasses.input}`]: {
    zIndex: '1'
  }
}));

export const GreyBox = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  justifySelf: 'center',
  borderRadius: '50%',
  backgroundColor: '#C4C4C4',

  [theme.breakpoints.down('md')]: {
    width: '40px',
    height: '30px'
  }
}));

export const CustomAvatar = styled(Avatar)(() => ({
  width: '40px',
  height: '40px',
  marginLeft: '20px',
  justifySelf: 'center',
  ':hover': {
    cursor: 'pointer'
  }
}));

export const PrimaryButton = styled(Button)(() => ({
  padding: '17px 0px',
  fontSize: '21px',
  fontWeight: '600',
  lineHeight: '140%',
  borderRadius: '40px',
  textTransform: 'capitalize'
}));

export const HeaderButton = styled(Button)(() => ({
  padding: '9px 23px',
  fontSize: '16px',
  lineHeight: '24px',
  borderRadius: '8px',
  textTransform: 'none'
}));

export const BlogTagChip = styled(Typography)(() => ({
  color: '#111111',
  width: 'max-content',
  height: '20px',
  padding: '4px 8px',
  fontSize: '12px',
  minWidth: '50px',
  background: 'rgba(17, 17, 17, 0.05);',
  lineHeight: '100%',
  borderRadius: '3px',
  textTransform: 'capitalize'
}));

export const BlogCardMetaText = styled(Typography)(() => ({
  color: '#777777',
  fontSize: '12px',
  lineHeight: '100%',
  marginLeft: '8px',
  textTransform: 'capitalize'
}));

export const BlogCardMetaDataIconContainer = styled(Box)(() => ({
  width: '10px',
  height: '12px',
  marginBottom: '10px'
}));

export const PaginationList = styled('ul')({
  margin: 0,
  display: 'flex',
  padding: 0,
  listStyle: 'none'
});

export const CommentCardContainer = styled(Box)({
  marginTop: '30px'
});

export const ReplyCommentCardContainer = styled(Box)({
  // marginTop: '16px',
  // marginLeft: '16px',
  // paddingLeft: '24px',
  // borderLeft: '1px solid rgba(102, 102, 102, 0.3)'
});

export const SecondaryButton = styled(Button)(() => ({
  padding: '15px 32px',
  fontSize: '16px',
  maxWidth: '98px',
  fontWeight: '600',
  lineHeight: '24px',
  borderRadius: '8px',
  textTransform: 'capitalize'
}));

export const CANCEL_SELECTED_IMAGE_BUTTON_CONTAINER = styled(Box)({
  ':hover': { cursor: 'pointer' },
  width: '24px',
  height: '24px',
  marginLeft: '18px'
});

export const InputFieldWrapper = styled(Box)({
  width: '715px',
  marginTop: '60px'
});
