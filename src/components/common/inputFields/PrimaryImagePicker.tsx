import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IMAGE_PICKER_BUTTON, IMAGE_PICKET_LABEL } from 'styles/constants';

export const PrimaryImagePicker = () => {
  const [files, setFiles] = useState<File[]>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
    multiple: false
  });

  useEffect(() => {
    console.log('files', files);
  }, [files]);

  return (
    <Stack direction="row" alignItems="center">
      <Button
        {...getRootProps({
          draggable: true,
          variant: 'outlined',
          sx: IMAGE_PICKER_BUTTON
        })}
      >
        <input {...getInputProps()} />
        <p>Browse</p>
      </Button>

      {!files && (
        <Box sx={{ marginLeft: '13px' }}>
          <Typography sx={IMAGE_PICKET_LABEL}>Supports: JPG, JPEG2000, PNG</Typography>
        </Box>
      )}
      {files && <img src={URL.createObjectURL(files[0])} width={200} />}
    </Stack>
  );
};
