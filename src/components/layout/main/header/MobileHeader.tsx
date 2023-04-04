import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { removeToken } from 'utils';
import { useContextApi } from 'AppContext';
import { HeaderSearchBar } from './HeaderSearchBar';
import { Box, Drawer, IconButton, Stack } from '@mui/material';
import { GreyBox, HeaderNavLink, HeaderWrapper } from 'styles';

export const MobileHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContextApi();
  return (
    <HeaderWrapper>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <GreyBox />

        <Box sx={{ flexGrow: 1, marginLeft: '15px' }}>
          <HeaderSearchBar />
        </Box>

        <IconButton sx={{ marginLeft: '5px' }} onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Stack>

      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
      >
        <Stack
          sx={{ width: 200, alignItems: 'center', padding: '35px 0px' }}
          role="presentation"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <HeaderNavLink to="/">Home</HeaderNavLink>
          {isLoggedIn && (
            <>
              <HeaderNavLink to="/my-articles">My Articles</HeaderNavLink>
              <HeaderNavLink to="/create">Create Article</HeaderNavLink>
              <HeaderNavLink to="/settings">Account Settings</HeaderNavLink>
              <HeaderNavLink
                to="#"
                onClick={() => {
                  removeToken();
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </HeaderNavLink>
            </>
          )}

          {!isLoggedIn && (
            <>
              <HeaderNavLink to="/signin">Log in</HeaderNavLink>
              <HeaderNavLink to="/signup">Sign up</HeaderNavLink>
            </>
          )}
        </Stack>
      </Drawer>
    </HeaderWrapper>
  );
};
