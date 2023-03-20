import { toast } from 'react-hot-toast';
import { Box, Typography } from '@mui/material';
import { useFindAllPostsQuery } from 'generated';
import { BlogCard, PrimaryLoader } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { BlogImage1, BlogImage2, UserDummyImage } from 'assets';
import { useEffect } from 'react';

export const MyArticles = () => {
  const {
    data: allPosts,
    loading,
    refetch
  } = useFindAllPostsQuery({
    variables: {
      skip: 0,
      take: 10000
    },
    onError: (error) => toast.error(error.message)
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Box>
      <PrimaryLoader isLoading={loading} />

      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Recent Posts
      </Typography>

      <Box marginTop="60px">
        {allPosts?.findAllPosts.total &&
          allPosts.findAllPosts.items.map((post, index) => (
            <BlogCard
              key={post.id}
              text={post.text}
              title={post.title}
              author={post.user.name}
              authorAvatar={UserDummyImage}
              tag={index % 2 === 0 ? 'Dummy' : 'Fashion'}
              styles={{ marginTop: index > 0 ? '64px' : '0px' }}
              thumbnail={index % 2 === 0 ? BlogImage1 : BlogImage2}
              date={index % 2 === 0 ? '02 December 2021' : '16 March 2023'}
              duration={index % 2 === 0 ? '3 min. to read' : '5 min. to read'}
            />
          ))}
      </Box>
    </Box>
  );
};
