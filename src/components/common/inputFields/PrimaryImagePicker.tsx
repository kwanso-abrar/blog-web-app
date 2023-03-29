import { useDropzone } from 'react-dropzone';
import { SelectedImageCard } from '../cards';
import { PrimaryImagePickerProps } from 'types';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IMAGE_PICKER_BUTTON, IMAGE_PICKET_LABEL } from 'styles/constants';

export const PrimaryImagePicker = ({ images, setImages }: PrimaryImagePickerProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      setImages(acceptedFiles);
    },
    multiple: false
  });

  return (
    <Stack direction="row" alignItems="center">
      {!images && (
        <>
          <Button
            {...getRootProps({
              draggable: true,
              variant: 'outlined',
              sx: IMAGE_PICKER_BUTTON
            })}
          >
            <input {...getInputProps()} />
            Browse
          </Button>

          <Box sx={{ marginLeft: '13px' }}>
            <Typography sx={IMAGE_PICKET_LABEL}>Supports: JPG, JPEG2000, PNG</Typography>
          </Box>
        </>
      )}

      {images && (
        <SelectedImageCard
          fileName={images[0].name}
          onClickCloseButton={() => setImages(undefined)}
        />
      )}
    </Stack>
  );
};
