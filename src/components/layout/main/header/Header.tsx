import { useNavigate } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { Box, Button, Stack } from '@mui/material';
import { HeaderNavLink, HeaderWrapper, SearchBar } from 'styles';

export const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContextApi();
  return (
    <HeaderWrapper>
      <Stack direction="row">
        <Stack direction="row">
          <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#C4C4C4', justifySelf: 'center' }} />
          <HeaderNavLink to="" style={{ marginLeft: '25px' }}>
            Home
          </HeaderNavLink>
          {isLoggedIn && (
            <HeaderNavLink to="#" style={{ marginLeft: '25px' }}>
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

              <Box
                sx={{
                  marginLeft: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#222222',
                  justifySelf: 'center'
                }}
              />
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
