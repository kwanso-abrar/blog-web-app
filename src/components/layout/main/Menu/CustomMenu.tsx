import { removeToken } from 'utils';
import { useNavigate } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { NavigationButtonProps } from 'types';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

type CustomMenuProps = {
  navigationButtonsData: NavigationButtonProps[];
};

export const CustomMenu = ({ navigationButtonsData }: CustomMenuProps) => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navigationButtonsData.map((nav, index) => (
          <ListItem key={nav.text} disablePadding>
            <ListItemButton
              onClick={() => {
                if (nav.path) navigate(nav.path);
                else {
                  removeToken();
                  setIsLoggedIn(false);
                  navigate('');
                }
              }}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={nav.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
