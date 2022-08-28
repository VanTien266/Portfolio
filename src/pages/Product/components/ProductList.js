import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <Grid
      container
      sx={{
        height: '100%',
        margin: '10px',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
          width: 0
        }
      }}
      spacing={4}>
      {Array.from(Array(12).keys()).map((i, index) => (
        <Grid item xs={12} sm={6} md={4} sx={{ minHeight: '40%' }} key={index}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
