import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { SelectBlogOption } from 'types';
import { useFindAllPostsLazyQuery } from 'generated';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

export const SelectBlog = () => {
  const [options, setOptions] = useState<SelectBlogOption[]>([]);

  const [findAllPosts, { loading }] = useFindAllPostsLazyQuery({
    onError: (error) => toast.error(error.message),
    onCompleted: (data) => {
      const newOptions =
        data?.findAllPosts.items.map((item) => {
          return { title: item.title, id: item.id };
        }) || [];

      setOptions((preOptions) => [...preOptions, ...newOptions]);
    },
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    findAllPosts({
      variables: {
        skip: options.length,
        take: 6
      }
    });
  }, []);

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
          renderOption={(props, option) => (
            <Box component="li" {...props} key={option.id}>
              <Typography sx={{ color: 'red' }}>{option.title}</Typography>
            </Box>
          )}
          renderInput={(params) => <TextField {...params} placeholder="Select" />}
        />
      </Box>
    </Box>
  );
};
