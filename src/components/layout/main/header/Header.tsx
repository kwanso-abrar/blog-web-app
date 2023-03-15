import { useState } from 'react';
import { removeToken } from 'utils';
import { useNavigate } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { Box, Button, Stack, Menu, MenuItem } from '@mui/material';
import { BlackBox, GreyBox, HeaderNavLink, HeaderWrapper, SearchBar } from 'styles';

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
          <Box sx={{ width: '255px', height: '34px' }}>
            <SearchBar />
          </Box>

          {isLoggedIn ? (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <Button variant="filled">Create Article</Button>
              </Box>

              <Box>
                <BlackBox onClick={(e) => handleClick(e)} />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      removeToken();
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <Button variant="outlined" onClick={() => navigate('/signin')}>
                  Log in
                </Button>
              </Box>

              <Box sx={{ marginLeft: '20px' }}>
                <Button variant="filled" onClick={() => navigate('/signup')}>
                  Sign up
                </Button>
              </Box>
            </>
          )}
        </Stack>
      </Stack>
    </HeaderWrapper>
  );
};
