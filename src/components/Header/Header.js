import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import HeaderButton from './components/HeaderButton';

const userStyles = makeStyles({
  activeButton: {
    textDecoration: 'underline',
  },
});
function Header() {
  const styles = userStyles();
  const [currentRoute, setCurrentRoute] = useState(useLocation().pathname);

  return (
    <AppBar
      sx={{
        background: 'rgba( 255, 255, 255, 0.1 )',
        backdropFilter: 'blur(4px)',
        borderBottom: '1px solid #9BA3EB',
        borderRadius: '0px 0px 20px 20px',
      }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h5" color="common.white">
              Savitar&apos;s Portfolio
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            xs={6}
            sm={8}
            md={9}
            spacing={2}>
            <Grid item>
              <HeaderButton
                label="About"
                routeName="about"
                activeStyle={
                  currentRoute === '/about' ? styles.activeButton : null
                }
              />
            </Grid>
            <Grid item>
              <HeaderButton
                label="Products"
                routeName="product"
                activeStyle={
                  currentRoute === '/product' ? styles.activeButton : null
                }
              />
            </Grid>
            <Grid item>
              <HeaderButton
                label="Contact"
                routeName="contact"
                activeStyle={
                  currentRoute === '/contact' ? styles.activeButton : null
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {};

export default Header;
