import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { PrimaryButton } from 'styles';
import { Box, Typography } from '@mui/material';
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
        <Typography variant="h2">Change Username</Typography>
        <Box sx={{ marginTop: '45px', width: '715px' }}>
          <PrimaryInputField name="name" control={control} label="Username" />
        </Box>
        <Typography variant="h2" sx={{ marginTop: '50px' }}>
          Change password
        </Typography>
        <Box sx={{ marginTop: '45px', width: '712px' }}>
          <PrimaryPasswordField control={control} label="New Password" name="password" />
        </Box>

        <Box sx={{ marginTop: '45px', width: '712px' }}>
          <PrimaryPasswordField control={control} label="Confirm Password" name="confirmPassword" />
        </Box>
        <Typography variant="h2" sx={{ marginTop: '50px' }}>
          Change Avatar
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <PrimaryImagePicker images={images} setImages={setImages} buttonText="Browse" />
        </Box>

        <Box sx={{ width: '356px', marginTop: '55px' }}>
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
            Save Changes
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
