import toast from 'react-hot-toast';
import { useState } from 'react';
import { useFindAllPostsQuery } from 'generated';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

export const SelectBlog = () => {
  const [open, setOpen] = useState(false);

  const {
    data: allPosts,
    loading
    // refetch
  } = useFindAllPostsQuery({
    variables: {
      skip: 0,
      //   take: BLOGS_PER_PAGE.
      take: 1000
    },
    onError: (error) => toast.error(error.message),
    onCompleted: () => {
      setOpen(true);
    },
    fetchPolicy: 'network-only'
  });

  //   const onRefetch = (page: number) => {
  //     refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  //   };

  return (
    <Box>
      <Typography variant="h2">Select Blog</Typography>
      <Box sx={{ marginTop: '25px' }}>
        <Autocomplete
          disablePortal
          id="select-blog"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          loading={loading}
          options={
            allPosts?.findAllPosts.items.map((item) => {
              return { title: item.title, id: item.id };
            }) || []
          }
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} placeholder="Select" />}
        />
      </Box>
    </Box>
  );
};
