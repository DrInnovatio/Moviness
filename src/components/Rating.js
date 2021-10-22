import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <Stack spacing={1} alignItems="center" paddingTop={1}>
      <Rating name="half-rating" defaultValue={ 1 } precision={ 0.5 } />
      <hr color="#c29417"/>
    </Stack>
  );
}