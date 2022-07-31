import React from 'react';
// import PropTypes from 'prop-types';
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  Grid
} from '@material-ui/core';
import HeaderButton from './components/HeaderButton';

const userStyles = makeStyles({
  container: {
    background:
      'linear-gradient(90.07deg, rgba(7, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
    backdropFilter: 'blur(4px)',
    borderBottom: '1px solid #9BA3EB',
    borderRadius: '0px 0px 20px 20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: '#fff'
  }
});

function Header(props) {
  const styles = userStyles();
  return (
    <AppBar className={styles.container}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h5" color="primary">
              Savitar Portfolio
            </Typography>
          </Grid>
          <Grid
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
