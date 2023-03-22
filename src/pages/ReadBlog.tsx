import { Box } from '@mui/material';
import { BlogCommentSection, BlogContent } from 'components';

export const ReadBlog = () => {
  //   const { id } = useParams();

  return (
    <Box sx={{ maxWidth: '856px' }}>
      <BlogContent />
      <Box sx={{ marginTop: '60px' }}>
        <BlogCommentSection />
      </Box>
    </Box>
  );
};
