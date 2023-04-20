import toast from 'react-hot-toast';
import { SelectBlogOption } from 'types';
import { AutoCompleteListBox } from 'components';
import { AutoCompleteProvider } from 'contexts';
import { useFindAllPostsLazyQuery } from 'generated';
import { useCallback, useEffect, useState } from 'react';
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
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    findAllPosts({
      variables: {
        skip: options.length,
        take: 6
      }
    });
  }, []);

  const onListBoxScrollHandler = useCallback(
    (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
      const listboxNode = event.currentTarget;
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
    },
    [options]
  );

  return (
    <Box>
      <Typography variant="h2">Select Blog</Typography>
      <AutoCompleteProvider isLoading={loading} position={AutoCompleteListBoxScrolledPosition}>
        <Box sx={{ marginTop: '25px', width: '400px' }}>
          <Autocomplete
            disablePortal
            id="select-blog"
            loading={loading}
            options={options}
            onClose={() => {
              setAutoCompleteListBoxScrolledPosition(0);
            }}
            getOptionLabel={(option) => option.title}
            ListboxComponent={AutoCompleteListBox}
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
      </AutoCompleteProvider>
    </Box>
  );
};
