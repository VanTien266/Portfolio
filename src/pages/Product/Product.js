import { makeStyles } from '@mui/styles';
import React from 'react';
import Header from '../../components/Header';
import bgImage from '../../assets/img/background.jpg';
import BodyCard from '../../components/BodyCard';
import { Grid, IconButton } from '@mui/material';
import { West, East } from '@mui/icons-material';
import { ProductList } from './components';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../apis/product.api';

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }
});

function Product() {
  const styles = useStyles();
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchProductList();
    }
    return () => (mounted = false);
  }, []);

  const fetchProductList = async () => {
    try {
      const resp = await productApi.getAll();
      console.log(resp);
      setProductList(resp);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className={styles.background}>
      <Header />
      <Grid
        container
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        columnSpacing={2}>
        <Grid item xs={1} sx={{ textAlign: 'center', color: 'white' }}>
          <IconButton color="inherit" onClick={() => history.push('/about')}>
            <West fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <BodyCard>
            <ProductList productList={productList} />
          </BodyCard>
        </Grid>
        <Grid item xs={1} sx={{ textAlign: 'center', color: 'white' }}>
          <IconButton color="inherit" onClick={() => history.push('/contact')}>
            <East fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;
