import { useDropzone } from 'react-dropzone';
import { PrimaryFilePickerProps } from 'types';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FILE_PICKER_BUTTON, FILE_PICKER_LABEL } from 'styles/constants';

export const PrimaryFilePicker = ({
  label,
  accept,
  setFiles,
  buttonText,
  multiple = false
}: PrimaryFilePickerProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    }
  });

  return (
    <Stack direction="row" alignItems="center">
      <Button
        {...getRootProps({
          draggable: true,
          variant: 'outlined',
          sx: FILE_PICKER_BUTTON
        })}
      >
        <input {...getInputProps()} />
        {buttonText}
      </Button>

      <Box sx={{ marginLeft: '13px' }}>
        <Typography sx={FILE_PICKER_LABEL}>{label}</Typography>
      </Box>
    </Stack>
  );
};
