import { CircularProgress } from '@mui/material';
import { ListBoxProps, NullableHTMLUListElement } from 'types';
import { ForwardedRef, forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react';

export const AutoCompleteListBox = forwardRef(function ListBoxBase(
  props: ListBoxProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  const { children, isLoading, position, ...rest } = props;
  const innerRef = useRef<HTMLUListElement>(null);

  useImperativeHandle<NullableHTMLUListElement, NullableHTMLUListElement>(
    ref,
    () => innerRef.current
  );

  useLayoutEffect(() => {
    if (innerRef.current && typeof position !== 'undefined' && position !== 0)
      innerRef.current.scrollTop = position - (innerRef.current.offsetHeight + 40);
  }, []);

  return (
    <>
      <ul {...rest} ref={innerRef} role="list-box">
        {children}
      </ul>
      {isLoading && <CircularProgress color="inherit" size={30} sx={{ margin: '0 180px' }} />}
    </>
  );
});
