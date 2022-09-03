import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ProductList(props) {
  const { productList } = props;
  return (
    <Grid
      container
      spacing={4}
      sx={{
        height: '100%',
        margin: '10px',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}>
      {productList.map(i => (
        <Grid item key={i.id} md={4} sm={6} sx={{ minHeight: '40%' }} xs={12}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};
export default ProductList;
