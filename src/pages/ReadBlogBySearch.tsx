import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { ROUTES_PATH } from '../constants';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { Posts, useGetPostsLazyQuery } from 'generated';
import { BlogCardsList, PrimaryLoader } from 'components';

export const ReadBlogBySearch = () => {
  const navigate = useNavigate();
  const { search } = useParams();

  const [getPosts, { data: allPosts, loading }] = useGetPostsLazyQuery({
    variables: { search: search || '' },
    onError: (error) => toast.error(error.message)
  });

  useEffect(() => {
    if (search) {
      getPosts({ variables: { search } });
    } else {
      navigate(ROUTES_PATH.home);
    }
  }, [search]);

  return (
    <Box>
      <PrimaryLoader isLoading={loading} />
      <Typography
        variant="h1"
        sx={{
          ...TITLE_WITH_BORDER_BOTTOM,
          color: 'rgba(102, 102, 102, 0.8)',
          fontSize: '17px',
          fontWeight: '400'
        }}
      >
        Search results for <span style={{ color: '#222222' }}>{search}</span>
      </Typography>

      <Typography sx={{ marginTop: '20px' }}>
        Total: <b>{allPosts?.getPosts.length || 0}</b>
      </Typography>

      <Box sx={{ marginTop: '48px' }}>
        <BlogCardsList
          data={(allPosts?.getPosts as Posts[]) || []}
          total={allPosts?.getPosts.length || 0}
          paginate={false}
        />
      </Box>
    </Box>
  );
};
