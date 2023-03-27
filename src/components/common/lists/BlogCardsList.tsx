import { Box } from '@mui/material';
import { ROUTES_PATH } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { BlogCardsListProps } from 'types';
import { BlogCard, PrimaryPagination } from 'components';
import { BlogImage1, BlogImage2, UserDummyImage } from 'assets';

export const BlogCardsList = ({
  data,
  total,
  paginate,
  onRefetch,
  perPage = 1
}: BlogCardsListProps) => {
  const navigate = useNavigate();
  return (
    <>
      {data.map((post, index) => (
        <Box
          key={post.id}
          onClick={() =>
            navigate(
              `${ROUTES_PATH.readBlog.path.replace(
                `:${ROUTES_PATH.readBlog.params.first}`,
                post.id.toString()
              )}`
            )
          }
        >
          <BlogCard
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
        </Box>
      ))}
      <Box sx={{ marginTop: '96px', marginLeft: '120px' }}>
        {paginate && onRefetch && total > perPage && (
          <PrimaryPagination count={Math.ceil(total / perPage)} onReftech={onRefetch} />
        )}
      </Box>
    </>
  );
};
