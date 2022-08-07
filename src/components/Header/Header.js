import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@mui/material';
import HeaderButton from './components/HeaderButton';

function Header(props) {
  return (
    <AppBar
      sx={{
        background: 'rgba( 255, 255, 255, 0.1 )',
        backdropFilter: 'blur(4px)',
        borderBottom: '1px solid #9BA3EB',
        borderRadius: '0px 0px 20px 20px'
      }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h5" color="common.white">
              Savitar Portfolio
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
              <HeaderButton label="About" />
            </Grid>
            <Grid item>
              <HeaderButton label="Products" />
            </Grid>
            <Grid item>
              <HeaderButton label="Contact" />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {};

export default Header;
