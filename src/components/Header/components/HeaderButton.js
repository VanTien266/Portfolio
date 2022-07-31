import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const userStyles = makeStyles({
  container: {}
});

function HeaderButton(props) {
  const { label } = props;
  const styles = userStyles();
  return (
    <Button color="primary" className={styles.container}>
      <Typography variant="h5">{label}</Typography>
    </Button>
  );
}

Button.propTypes = {
  label: PropTypes.string
};

export default HeaderButton;
