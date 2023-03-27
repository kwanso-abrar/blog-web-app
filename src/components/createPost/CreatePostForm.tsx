import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupSchema } from 'formValidations';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, MenuItem } from '@mui/material';
import { PrimaryButton } from 'styles';
import { useCreatePostMutation } from 'generated';
import { CREATE_POST_MIN_TO_READ_SELECT_OPTIONS, ROUTES_PATH } from '../../constants';
import { PrimaryInputField, PrimaryLoader, PrimarySelectField } from 'components';

const schema = yupSchema.createPost;

export const CreatePostForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...schema.getDefault()
    }
  });

  const [createPost, { loading }] = useCreatePostMutation({
    onCompleted: (data) => {
      if (data.createPosts.response?.status === 201) {
        toast.success('Post created successfully');
        navigate(ROUTES_PATH.myArticles.path);
      }
    },
    onError: (error) => {
      if (error.message.includes('Forbidden resource')) {
        toast.error('user is not logged in!');
      }
      toast.error(error.message);
    }
  });

  const onFormSubmit = async (values: any) => {
    createPost({
      variables: {
        text: values.text.replace(/(\r\n|\r|\n)/g, '\n'),
        title: values.title
      }
    });
  };

  return (
    <Box>
      <PrimaryLoader isLoading={loading} />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ width: '715px' }}>
          <PrimaryInputField name="title" control={control} label="Give it a title" />
        </Box>
        <Box sx={{ width: '715px', marginTop: '60px' }}>
          <PrimarySelectField name="minToRead" label="Min. to read" control={control}>
            {CREATE_POST_MIN_TO_READ_SELECT_OPTIONS.map((options, index) => (
              <MenuItem value={options.value} key={index + options.value}>
                {options.label}
              </MenuItem>
            ))}
          </PrimarySelectField>
        </Box>
        <Box sx={{ width: '715px', marginTop: '60px' }}>
          <PrimaryInputField
            name="text"
            control={control}
            label="Write something about it"
            props={{ multiline: true, rows: 6 }}
          />
        </Box>

        <Box sx={{ width: '356px', marginTop: '57px' }}>
          <PrimaryButton
            disabled={!(dirtyFields.text && dirtyFields.title)}
            variant="contained"
            fullWidth
            type="submit"
          >
            Publish article
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
