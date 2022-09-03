import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

const userStyles = makeStyles({
  container: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function HeaderButton(props) {
  const { label, routeName, activeStyle } = props;
  const styles = userStyles();
  const history = useHistory();

  return (
    <Button
      color="primary"
      className={clsx(styles.container, activeStyle)}
      onClick={() => history.push(routeName)}>
      <Typography variant="h5">{label}</Typography>
    </Button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  routeName: PropTypes.string,
};

export default HeaderButton;
