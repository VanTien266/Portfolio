import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { Grid, IconButton } from '@mui/material';
import { West, East } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { ProductList } from './components';
import BodyCard from '../../components/BodyCard';
import bgImage from '../../assets/img/background.jpg';
import Header from '../../components/Header';
import productApi from '../../apis/product.api';

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
});

function Product() {
  const styles = useStyles();
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchProductList = async () => {
      try {
        const resp = await productApi.getAll();
        setProductList(resp);
      } catch (err) {
        setError(error);
      }
    };
    if (mounted) {
      fetchProductList();
    }
    return () => {
      mounted = false;
    };
  }, [error]);

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
