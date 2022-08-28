import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';

function ProductList(props) {
  const { productList } = props;
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
      {productList.map((i, index) => (
        <Grid item xs={12} sm={6} md={4} sx={{ minHeight: '40%' }} key={index}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
