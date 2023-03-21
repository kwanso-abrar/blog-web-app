import { Box } from '@mui/material';
import { BlogCardsListProps } from 'types';
import { BlogCard, PrimaryPagination } from 'components';
import { BlogImage1, BlogImage2, UserDummyImage } from 'assets';

export const BlogCardsList = ({
  data,
  total,
  paginate,
  onRefetch,
  perPage = 1
}: BlogCardsListProps) => (
  <>
    {data.map((post, index) => (
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
    <Box sx={{ marginTop: '96px', marginLeft: '120px' }}>
      {paginate && onRefetch && total > perPage && (
        <PrimaryPagination count={Math.ceil(total / perPage)} onReftech={onRefetch} />
      )}
    </Box>
  </>
);
