import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { SelectBlogOption } from 'types';
import { PrimaryAutoComplete } from 'components';
import { Box, Button, Typography } from '@mui/material';
import { useFindAllPostsLazyQuery } from 'generated';
import { useCallback, useEffect, useState } from 'react';

export const SelectBlog = () => {
  const [options, setOptions] = useState<SelectBlogOption[]>([]);
  const [fetchOptions, setFetchOptions] = useState(true);
  const [totalOptions, setTotalOptions] = useState(0);
  const { control, handleSubmit } = useForm();

  const [findAllPosts, { loading }] = useFindAllPostsLazyQuery({
    onError: (error) => {
      setFetchOptions(false);
      toast.error(error.message);
    },
    onCompleted: (data) => {
      setFetchOptions(false);
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
    if (fetchOptions)
      findAllPosts({
        variables: {
          skip: options.length,
          take: 6
        }
      });
  }, [fetchOptions]);

  const fetchMoreData = useCallback(() => {
    setFetchOptions(true);
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
            loading={loading}
            options={options}
            placeholder="Select Blog"
            totalOptions={totalOptions}
            fetchMoreData={fetchMoreData}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '25px' }}>
            Get Post Comments
          </Button>
        </form>
      </Box>
    </Box>
  );
};
