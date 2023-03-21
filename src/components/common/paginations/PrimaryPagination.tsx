import { Button } from '@mui/material';
import { PaginationList } from 'styles';
import { PrimaryPaginationProps } from 'types';
import { PRIMARY_PAGINATION_NAV_BUTTONS, PRIMARY_PAGINATION_PAGE_BUTTONS } from 'styles/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import usePagination from '@mui/material/usePagination/usePagination';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const PrimaryPagination = ({ count, onReftech }: PrimaryPaginationProps) => {
  const { items } = usePagination({
    count,
    onChange(event, page) {
      onReftech(page);
    }
  });
  return (
    <PaginationList>
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = '…';
        } else if (type === 'page') {
          children = (
            <Button
              {...item}
              type="button"
              variant="outlined"
              sx={{
                fontWeight: selected ? 'bold' : undefined,
                ...PRIMARY_PAGINATION_PAGE_BUTTONS
              }}
            >
              {page}
            </Button>
          );
        } else {
          children = (
            <Button
              {...item}
              type="button"
              endIcon={type === 'next' && <ArrowForwardIcon />}
              variant={type === 'previous' ? 'outlined' : 'contained'}
              startIcon={type === 'previous' && <ArrowBackIcon />}
              sx={{
                marginLeft: type === 'next' ? '16px' : 'initial',
                ...PRIMARY_PAGINATION_NAV_BUTTONS
              }}
            >
              {type === 'previous' ? 'Prev.' : 'Next'}
            </Button>
          );
        }

        return <li key={index}>{children}</li>;
      })}
    </PaginationList>
  );
};
