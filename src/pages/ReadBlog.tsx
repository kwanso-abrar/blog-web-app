import toast from 'react-hot-toast';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Comments, useFindPostByIdQuery } from 'generated';
import { BlogCommentSection, BlogContent, PrimaryLoader } from 'components';

export const ReadBlog = () => {
  const { id } = useParams();

  const {
    data: post,
    loading,
    refetch
  } = useFindPostByIdQuery({
    variables: {
      id: parseFloat(id || '0')
    },
    onError: (error) => toast.error(error.message)
  });

  const onRetchBlogData = () => {
    refetch({ id: parseFloat(id || '0') });
  };

  return (
    <Box sx={{ maxWidth: '856px' }}>
      <PrimaryLoader isLoading={loading} />
      <BlogContent
        text={post?.findPostById.post?.text || ''}
        title={post?.findPostById.post?.title || ''}
        authorName={post?.findPostById.post?.user.name || ''}
      />
      <Box sx={{ marginTop: '60px', minWidth: '100%' }}>
        <BlogCommentSection
          onRetech={onRetchBlogData}
          postId={post?.findPostById.post?.id || 0}
          comments={(post?.findPostById.post?.comments as Comments[]) || []}
        />
      </Box>
    </Box>
  );
};