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

export const BLOG_TEXT = {
  color: '#666666',
  fontSize: '15px',
  marginTop: '40px',
  lineHeight: '150%'
};

export const PRIMARY_BLOG_CARD_TITLE = {
  maxWidth: '615px',
  overflow: 'hidden',
  marginTop: '12px',
  textTransform: 'capitalize'
};

export const PRIMARY_PAGINATION_PAGE_BUTTONS = {
  color: '#111111',
  padding: '13px 16px',
  fontSize: '15px',
  maxWidth: '41px',
  minWidth: '41px',
  maxHeight: '41px',
  minHeight: '41px',
  lineHeight: '100%',
  marginLeft: '16px',
  borderRadius: '8px'
};

export const PRIMARY_PAGINATION_NAV_BUTTONS = {
  width: '105px',
  height: '41px',
  fontSize: '15px',
  maxWidth: '105px',
  minWidth: '105px',
  maxHeight: '41px',
  minHeight: '41px',
  borderRadius: '8px',
  textTransform: 'capitalize'
};

export const READ_BLOG_TIME_TO_READ_TAG_CHIP = {
  color: '#111111',
  background: 'rgba(100, 53, 200, 0.12)',
  marginLeft: '20px'
};

export const COMMENT_CARD_USER_NAME = {
  color: '#111111',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '150%',
  textTransform: 'capitalize'
};

export const COMMENT_CARD_TIME = {
  color: '#666666',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '150%',
  marginLeft: '8px',
  textTransform: 'capitalize'
};

export const COMMENT_CARD_TEXT = {
  color: '#666666',
  fontSize: '15px',
  marginTop: '5px',
  fontWeight: '500',
  lineHeight: '150%',
  textTransform: 'none'
};

export const SHOW_REPLIES_BUTTON = {
  color: '#00A1E7',
  padding: '0',
  fontSize: '15px',
  marginTop: '4px',
  lineHeight: '150%',
  textTransform: 'none'
};
