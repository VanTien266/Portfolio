import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';

import bgImage from '../../assets/img/background.jpg';

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }
});

function About() {
  const styles = useStyles();
  return (
    <div className={styles.background}>
      <Header />
    </div>
  );
}

export default About;
