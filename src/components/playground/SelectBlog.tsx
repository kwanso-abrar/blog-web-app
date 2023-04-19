import toast from 'react-hot-toast';
import { SelectBlogOption } from 'types';
import { AutoCompleteListBox } from 'components';
import { useEffect, useState } from 'react';
import { useFindAllPostsLazyQuery } from 'generated';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

export const SelectBlog = () => {
  const [totalOptions, setTotalOptions] = useState(0);
  const [options, setOptions] = useState<SelectBlogOption[]>([]);
  const [AutoCompleteListBoxScrolledPosition, setAutoCompleteListBoxScrolledPosition] = useState(0);

  const [findAllPosts, { loading }] = useFindAllPostsLazyQuery({
    onError: (error) => toast.error(error.message),
    onCompleted: (data) => {
      const newOptions =
        data?.findAllPosts.items.map((item) => {
          return { title: item.title, id: item.id };
        }) || [];

      setOptions((preOptions) => [...preOptions, ...newOptions]);
      setTotalOptions(data.findAllPosts.total);
    },
    fetchPolicy: 'network-only'
  });

  useEffect(() => {
    findAllPosts({
      variables: {
        skip: options.length,
        take: 6
      }
    });
  }, []);

  const onListBoxScrollHandler = (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const listboxNode = event.currentTarget;
    console.log('scrolling');
    console.log('scroll', {
      scrollTop: listboxNode.scrollTop,
      clientHeight: listboxNode.clientHeight,
      scrollHeight: listboxNode.scrollHeight
    });
    const Scrollposition = listboxNode.scrollTop + listboxNode.clientHeight;
    if (listboxNode.scrollHeight - Scrollposition <= 1 && options.length !== totalOptions) {
      setAutoCompleteListBoxScrolledPosition(Scrollposition);
      findAllPosts({
        variables: {
          skip: options.length,
          take: 3
        }
      });
    }
  };

  return (
    <Box>
      <Typography variant="h2">Select Blog</Typography>
      <Box sx={{ marginTop: '25px' }}>
        <Autocomplete
          disablePortal
          id="select-blog"
          sx={{ width: 400 }}
          loading={loading}
          options={options}
          onClose={() => {
            setAutoCompleteListBoxScrolledPosition(0);
          }}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          ListboxComponent={(props) => (
            <AutoCompleteListBox
              {...props}
              isLoading={loading}
              position={AutoCompleteListBoxScrolledPosition}
            />
          )}
          ListboxProps={{
            onScroll: (event) => {
              onListBoxScrollHandler(event);
            },
            sx: {
              height: '150px'
            }
          }}
          renderInput={(params) => <TextField {...params} placeholder="Select" />}
        />
      </Box>
    </Box>
  );
};
