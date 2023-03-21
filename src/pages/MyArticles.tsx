import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { BLOGS_PER_PAGE } from '../constants';
import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { Posts, useFindAllPostsQuery } from 'generated';
import { BlogCardsList, PrimaryLoader } from 'components';

export const MyArticles = () => {
  const {
    data: allPosts,
    loading,
    refetch
  } = useFindAllPostsQuery({
    variables: {
      skip: 0,
      take: BLOGS_PER_PAGE
    },
    onError: (error) => toast.error(error.message)
  });

  const onRefetch = (page: number) => {
    refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Box>
      <PrimaryLoader isLoading={loading} />

      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Recent Posts
      </Typography>

      <Typography sx={{ marginTop: '20px' }}>
        Results: <b>{allPosts?.findAllPosts.total}</b>
      </Typography>

      <Box sx={{ marginTop: '48px' }}>
        <BlogCardsList
          paginate
          onRefetch={onRefetch}
          perPage={BLOGS_PER_PAGE}
          total={allPosts?.findAllPosts.total || 0}
          data={(allPosts?.findAllPosts.items as Posts[]) || []}
        />
      </Box>
    </Box>
  );
};
