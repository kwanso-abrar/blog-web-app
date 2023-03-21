import { Button } from '@mui/material';
import { PaginationList } from 'styles';
import { PrimaryPaginationProps } from 'types';
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
                maxWidth: '41px',
                minWidth: '41px',
                maxHeight: '41px',
                minHeight: '41px',
                marginLeft: '16px',
                borderRadius: '8px',
                padding: '13px 16px',
                fontSize: '15px',
                lineHeight: '100%',
                color: '#111111'
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
              startIcon={type === 'previous' && <ArrowBackIcon />}
              endIcon={type === 'next' && <ArrowForwardIcon />}
              variant={type === 'previous' ? 'outlined' : 'contained'}
              sx={{
                borderRadius: '8px',
                maxWidth: '105px',
                minWidth: '105px',
                minHeight: '41px',
                maxHeight: '41px',
                width: '105px',
                height: '41px',
                fontSize: '15px',
                marginLeft: type === 'next' ? '16px' : 'initial',
                textTransform: 'capitalize'
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
