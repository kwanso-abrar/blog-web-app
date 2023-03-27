import { useState } from 'react';
import { removeToken } from 'utils';
import { useNavigate } from 'react-router-dom';
import { paperPropsSx } from 'styles/constants';
import { useContextApi } from 'AppContext';
import { Logout, Settings } from '@mui/icons-material';
import { HEADER_NAV_LINKS, ROUTES_PATH } from '../../../../constants';
import { HeaderSearchBar, NavLinksList } from 'components';
import { Box, Stack, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { GreyBox, CustomAvatar, HeaderButton, HeaderWrapper } from 'styles';

export const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContextApi();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrapper>
      <Stack direction="row">
        <Stack direction="row">
          <GreyBox />
          <NavLinksList isLoggedIn={isLoggedIn} data={HEADER_NAV_LINKS} />
        </Stack>

        <Stack sx={{ marginLeft: 'auto', alignItems: 'center' }} direction="row">
          <Box sx={{ width: '300px', height: '34px' }}>
            <HeaderSearchBar />
          </Box>

          {isLoggedIn ? (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained" onClick={() => navigate(ROUTES_PATH.createPost)}>
                  Create Article
                </HeaderButton>
              </Box>

              <Box>
                <CustomAvatar onClick={(e) => handleClick(e)} />
                <Menu
                  id="account-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: paperPropsSx
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate(ROUTES_PATH.settings);
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      removeToken();
                      setIsLoggedIn(false);
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="outlined" onClick={() => navigate(ROUTES_PATH.signin)}>
                  Log in
                </HeaderButton>
              </Box>

              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained" onClick={() => navigate(ROUTES_PATH.signup)}>
                  Sign up
                </HeaderButton>
              </Box>
            </>
          )}
        </Stack>
      </Stack>
    </HeaderWrapper>
  );
};
