import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupSchema } from 'formValidations';
import { Box, Stack } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddCommentProps } from 'types';
import { SecondaryButton } from 'styles';
import { useCreateCommentMutation } from 'generated';
import { PrimaryInputField, PrimaryLoader } from 'components';

const schema = yupSchema.createComment;

export const AddComment = ({ postId, parentId, onRefetch, isReply = false }: AddCommentProps) => {
  const [createComment, { loading }] = useCreateCommentMutation({
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...schema.getDefault()
    }
  });

  const onFormSubmit = async (values: any) => {
    await createComment({
      variables: {
        parentId: parentId && parentId,
        postId,
        text: values.text
      }
    });
    reset();
    console.log('refetching');
    onRefetch();
  };

  return (
    <Box>
      <PrimaryLoader isLoading={loading} />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack direction="row">
          <PrimaryInputField name="text" control={control} label="Add comment" />
          <SecondaryButton variant="contained" sx={{ marginLeft: '30px' }} type="submit">
            {isReply ? 'Reply' : 'Post'}
          </SecondaryButton>
        </Stack>
      </form>
    </Box>
  );
};
