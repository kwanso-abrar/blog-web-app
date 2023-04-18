import toast from 'react-hot-toast';
import { SelectBlogOption } from 'types';
import { useEffect, useState } from 'react';
import { useFindAllPostsLazyQuery } from 'generated';
import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';

export const SelectBlog = () => {
  const [total, setTotal] = useState(0);
  const [options, setOptions] = useState<SelectBlogOption[]>([]);

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
    const position = listboxNode.scrollTop + listboxNode.clientHeight;
    if (listboxNode.scrollHeight - position <= 1 && options.length !== total) {
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
          ListboxProps={{
            onScroll: (event) => {
              onListBoxScrollHandler(event);
            },
            sx: {
              height: '150px'
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};
