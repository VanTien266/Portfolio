import { makeStyles } from '@mui/styles';
import React from 'react';
import Header from '../../components/Header';
import bgImage from '../../assets/img/background.jpg';
import BodyCard from '../../components/BodyCard';
import { Grid, IconButton } from '@mui/material';
import Intro from './components/Intro';
import { West, East } from '@mui/icons-material';

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
      <Grid
        container
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        columnSpacing={2}>
        <Grid item xs={1} sx={{ textAlign: 'center', color: 'white' }}>
          <IconButton color="inherit">
            <West fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={10} sx={{ minHeight: '75vh' }}>
          <BodyCard>
            <Intro />
          </BodyCard>
        </Grid>
        <Grid item xs={1} sx={{ textAlign: 'center', color: 'white' }}>
          <IconButton color="inherit">
            <East fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
