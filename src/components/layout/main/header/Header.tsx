import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { removeToken } from 'utils';
import { useNavigate } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { Box, Stack, Menu, MenuItem, InputAdornment } from '@mui/material';
import { BlackBox, GreyBox, HeaderButton, HeaderNavLink, HeaderWrapper, SearchBar } from 'styles';

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
            <SearchBar
              placeholder="Search"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </Box>

          {isLoggedIn ? (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained">Create Article</HeaderButton>
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
