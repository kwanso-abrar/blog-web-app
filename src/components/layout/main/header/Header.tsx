import { useState } from 'react';
import { removeToken } from 'utils';
import { useNavigate } from 'react-router-dom';
import { paperPropsSx } from 'styles/constants';
import { useContextApi } from 'AppContext';
import { HeaderSearchBar } from 'components';
import { Logout, Settings } from '@mui/icons-material';
import { Box, Stack, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { GreyBox, CustomAvatar, HeaderButton, HeaderNavLink, HeaderWrapper } from 'styles';

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

          <HeaderNavLink to="" style={{ marginLeft: '40px' }}>
            Home
          </HeaderNavLink>

          {isLoggedIn && (
            <HeaderNavLink to="/my-articles" style={{ marginLeft: '40px' }}>
              My Articles
            </HeaderNavLink>
          )}
        </Stack>

        <Stack sx={{ marginLeft: 'auto', alignItems: 'center' }} direction="row">
          <Box sx={{ width: '300px', height: '34px' }}>
            <HeaderSearchBar />
          </Box>

          {isLoggedIn ? (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained" onClick={() => navigate('/create')}>
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
                      navigate('/settings');
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
                <HeaderButton variant="outlined" onClick={() => navigate('/signin')}>
                  Log in
                </HeaderButton>
              </Box>

              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained" onClick={() => navigate('/signup')}>
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
