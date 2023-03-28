import { useLocation } from 'react-router-dom';
import { HeaderNavLink } from 'styles';
import { NavLinksListProps } from 'types';

export const NavLinksList = ({ data, isLoggedIn }: NavLinksListProps) => {
  const location = useLocation();
  return (
    <>
      {data.map((link) => (
        <>
          {link.isProtected ? (
            isLoggedIn && (
              <HeaderNavLink
                to={link.to}
                key={link.id}
                sx={{
                  color: location.pathname === link.to ? '#111111' : 'rgba(102, 102, 102, 0.8)'
                }}
              >
                {link.text}
              </HeaderNavLink>
            )
          ) : (
            <HeaderNavLink
              to={link.to}
              key={link.id}
              sx={{
                color: location.pathname === link.to ? '#111111' : 'rgba(102, 102, 102, 0.8)'
              }}
            >
              {link.text}
            </HeaderNavLink>
          )}
        </>
      ))}
    </>
  );
};
