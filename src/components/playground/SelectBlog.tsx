import toast from 'react-hot-toast';
import { SelectBlogOption } from 'types';
import { useFindAllPostsLazyQuery } from 'generated';
import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

type ListBoxProps = React.HTMLAttributes<HTMLUListElement> & {
  isLoading: boolean;
  position?: number;
};

type NullableHTMLUListElement = HTMLUListElement | null;

const ListBox = forwardRef(function ListBoxBase(
  props: ListBoxProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  const { children, isLoading, position, ...rest } = props;

  const innerRef = useRef<HTMLUListElement>(null);

  useImperativeHandle<NullableHTMLUListElement, NullableHTMLUListElement>(
    ref,
    () => innerRef.current
  );

  useEffect(() => {
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

export const SelectBlog = () => {
  const [total, setTotal] = useState(0);
  const [options, setOptions] = useState<SelectBlogOption[]>([]);

  const [position, setPosition] = useState(0);

  const [findAllPosts, { loading }] = useFindAllPostsLazyQuery({
    onError: (error) => toast.error(error.message),
    onCompleted: (data) => {
      const newOptions =
        data?.findAllPosts.items.map((item) => {
          return { title: item.title, id: item.id };
        }) || [];

      setOptions((preOptions) => [...preOptions, ...newOptions]);
      setTotal(data.findAllPosts.total);
    },
    fetchPolicy: 'network-only'
  });

  useEffect(() => {
    findAllPosts({
      variables: {
        skip: options.length,
        take: 6
      }
    });
  }, []);

  const onListBoxScrollHandler = (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const listboxNode = event.currentTarget;
    const Scrollposition = listboxNode.scrollTop + listboxNode.clientHeight;
    if (listboxNode.scrollHeight - Scrollposition <= 1 && options.length !== total) {
      setPosition(Scrollposition);
      findAllPosts({
        variables: {
          skip: options.length,
          take: 3
        }
      });
    }
  };

  return (
    <Box>
      <Typography variant="h2">Select Blog</Typography>
      <Box sx={{ marginTop: '25px' }}>
        <Autocomplete
          disablePortal
          id="select-blog"
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          loading={loading}
          options={options}
          sx={{ width: 400 }}
          ListboxComponent={(props) => (
            <ListBox {...props} isLoading={loading} position={position} />
          )}
          ListboxProps={{
            onScroll: (event) => {
              onListBoxScrollHandler(event);
            },
            sx: {
              height: '150px'
            }
          }}
          renderInput={(params) => <TextField {...params} placeholder="Select" />}
        />
      </Box>
    </Box>
  );
};
