import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { PrimaryButton } from 'styles';
import { PrimaryImagePicker, PrimaryInputField, PrimaryPasswordField } from 'components';

export const SettingsForm = () => {
  const [images, setImages] = useState<File[]>();
  const {
    handleSubmit,
    control,
    formState: { dirtyFields }
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onFormSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ width: '715px' }}>
          <PrimaryInputField name="name" control={control} label="Username" />
        </Box>

        <Box sx={{ marginTop: '60px', width: '712px' }}>
          <PrimaryPasswordField control={control} label="New Password" name="password" />
        </Box>

        <Box sx={{ marginTop: '60px', width: '712px' }}>
          <PrimaryPasswordField control={control} label="Confirm Password" name="confirmPassword" />
        </Box>

        <Box sx={{ marginTop: '40px' }}>
          <PrimaryImagePicker images={images} setImages={setImages} buttonText="Avatar" />
        </Box>

        <Box sx={{ width: '356px', marginTop: '40px' }}>
          <PrimaryButton
            disabled={
              !(dirtyFields.password && dirtyFields.confirmPassword) &&
              !dirtyFields.name &&
              typeof images == 'undefined'
            }
            variant="contained"
            fullWidth
            type="submit"
          >
            Save
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
