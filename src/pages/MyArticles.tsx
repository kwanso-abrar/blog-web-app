import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useFindAllPostsQuery } from 'generated';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { BlogImage1, BlogImage2, UserDummyImage } from 'assets';
import { BlogCard, PrimaryLoader, PrimaryPagination } from 'components';

export const MyArticles = () => {
  const {
    data: allPosts,
    loading,
    refetch
  } = useFindAllPostsQuery({
    variables: {
      skip: 0,
      take: 2
    },
    onError: (error) => toast.error(error.message)
  });

  const onRefetch = (page: number) => {
    refetch({ skip: 2 * (page - 1), take: 2 });
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

      <Typography sx={{ marginTop: '25px' }}>
        Results: {allPosts?.findAllPosts.total && allPosts?.findAllPosts.total}
      </Typography>

      <Box marginTop="60px">
        {allPosts?.findAllPosts.total && allPosts?.findAllPosts.total > 0 ? (
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
          ))
        ) : (
          <Typography>No blogs found!</Typography>
        )}
      </Box>
      <Box sx={{ marginTop: '96px', marginLeft: '120px' }}>
        {allPosts?.findAllPosts.total && allPosts?.findAllPosts.total > 2 && (
          <PrimaryPagination
            count={Math.ceil(allPosts?.findAllPosts.total / 2 || 0)}
            onReftech={onRefetch}
          />
        )}
      </Box>
    </Box>
  );
};
