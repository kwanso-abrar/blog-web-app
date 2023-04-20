import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { SelectBlogOption } from 'types';
import { PrimaryAutoComplete } from 'components';
import { Box, Button, Typography } from '@mui/material';
import { useFindAllPostsLazyQuery } from 'generated';
import { useCallback, useEffect, useState } from 'react';

export const SelectBlog = () => {
  const [options, setOptions] = useState<SelectBlogOption[]>([]);
  const { control, handleSubmit } = useForm();
  const [totalOptions, setTotalOptions] = useState(0);

  const [findAllPosts, { loading }] = useFindAllPostsLazyQuery({
    onError: (error) => toast.error(error.message),
    onCompleted: (data) => {
      const newOptions =
        data?.findAllPosts.items.map((item) => {
          return { title: item.title, id: item.id };
        }) || [];

      setOptions((preOptions) => [...preOptions, ...newOptions]);
      setTotalOptions(data.findAllPosts.total);
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

  const fetchMoreData = useCallback(() => {
    findAllPosts({
      variables: {
        skip: options.length,
        take: 3
      }
    });
  }, [options]);

  const onFormSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <Box>
      <Typography variant="h2">Select Blog</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <PrimaryAutoComplete
            name="post"
            control={control}
            options={options}
            placeholder="Select Blog"
            totalOptions={totalOptions}
            fetchMoreData={fetchMoreData}
            isFetchingMoreData={loading}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '25px' }}>
            Get Post Comments
          </Button>
        </form>
      </Box>
    </Box>
  );
};
