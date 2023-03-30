import { Box } from '@mui/material';
import { ROUTES_PATH } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { BlogCardsListProps } from 'types';
import { getFormatDateInDDMMYYYY } from 'utils';
import { BlogImage1, UserDummyImage } from 'assets';
import { BlogCard, PrimaryPagination } from 'components';

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
            tag={index % 2 === 0 ? 'Dummy' : 'Fashion'}
            date={getFormatDateInDDMMYYYY(post.createdAt)}
            text={post.text}
            title={post.title}
            author={post.user.name}
            styles={{ marginTop: index > 0 ? '64px' : '0px' }}
            duration={index % 2 === 0 ? '3 min. to read' : '5 min. to read'}
            thumbnail={post.image ? post.image : BlogImage1}
            authorAvatar={UserDummyImage}
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
