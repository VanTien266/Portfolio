import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@mui/material';
import ava from '../../../assets/img/ava.jpg';

function Intro() {
  return (
    <Paper
      sx={{
        background: 'none',
        width: '100%',
        height: '100%',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        m: { xs: 2, sm: 4, md: 6, lg: 8 },
      }}>
      <Grid container direction="row-reverse">
        <Grid item xs={12} sm={4}>
          <Avatar
            alt="Tien"
            src={ava}
            sx={{ width: 'auto', height: '100%', aspectRatio: '1 / 1' }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          spacing={2}
          xs={12}
          sm={8}>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4">Hi, I&apos;m Tien,</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">I&apos;m a Web developer</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h5">
                This is my portfolio. All information about me in here.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Nice to meeet you!</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Intro;
