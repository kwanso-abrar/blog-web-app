import { Box, MenuItem } from '@mui/material';
import { InputField, PrimaryButton } from 'styles';

export const CreatePostForm = () => {
  return (
    <Box>
      <form>
        <Box sx={{ width: '715px' }}>
          <InputField variant="outlined" fullWidth label="Give it a title" InputLabelProps={{ shrink: true }} />
        </Box>
        <Box sx={{ width: '715px', marginTop: '60px' }}>
          <InputField
            select
            placeholder="Select"
            variant="outlined"
            fullWidth
            label="Min. to read"
            sx={{
              '& .MuiSelect-select .notranslate::after': {
                content: `"Select"`,
                opacity: 0.42
              },
              '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
                paddingLeft: '24px'
              }
            }}
            InputLabelProps={{ shrink: true }}
          >
            <MenuItem value={1}>1 Min. To Read</MenuItem>
            <MenuItem value={2}>2 Mins. To Read</MenuItem>
            <MenuItem value={3}>3 Mins. To Read</MenuItem>
          </InputField>
        </Box>
        <Box sx={{ width: '715px', marginTop: '60px' }}>
          <InputField
            variant="outlined"
            multiline
            rows={6}
            maxRows={5}
            fullWidth
            label="Write something about it"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <Box sx={{ width: '356px', marginTop: '57px' }}>
          <PrimaryButton disabled variant="contained" fullWidth>
            Publish article
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
