export const VISIBILTY_ICON_SX = {
  width: '24px',
  height: '24px'
};

export const DONT_HAVE_ACCOUNT_SX = {
  color: '#333333',
  fontSize: '27px',
  lineHeight: '140%',
  textAlign: 'center'
};

export const paperPropsSx = {
  overflow: 'visible',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  mt: 1.5,
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1
  },
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0
  }
};

export const TITLE_WITH_BORDER_BOTTOM = {
  paddingBottom: '14px',
  borderBottom: '1px solid rgba(102, 102, 102, 0.25)'
};

export const PRIMARY_BLOG_CARD_IMAGE_CONTAINER = {
  width: '266px',
  height: '180px',
  borderRadius: '5px'
};

export const PRIMARY_BLOG_CARD_META_DATA_DIVIDER = {
  height: '12px',
  marginLeft: '10px',
  backgroundColor: '#999999'
};

export const PRIMARY_BLOG_CARD_TEXT = {
  color: '#555555',
  fontSize: '15px',
  maxWidth: '540px',
  lineHeight: '150%'
};

export const PRIMARY_BLOG_CARD_TITLE = {
  maxWidth: '615px',
  overflow: 'hidden',
  marginTop: '12px',
  textTransform: 'capitalize'
};
