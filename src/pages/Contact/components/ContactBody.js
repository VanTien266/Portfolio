import {
  Grid,
  IconButton,
  TextField,
  Typography,
  Button,
  Avatar,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import React from 'react';
import { AccountCircle, Send, Email } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import facebook from '../../../assets/img/facebook.png';
import instagram from '../../../assets/img/instagram.png';
import linkedin from '../../../assets/img/linkedin.png';

function ContactBody() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item sm={12} md={6} container direction="column">
        <Grid item>
          <Typography variant="h4" textAlign="center">
            Contact me at
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton
              variant="contained"
              color="secondary"
              onClick={() =>
                window.open('https://www.facebook.com/tiencot.2006/', '_blank')
              }>
              <Avatar src={facebook} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              variant="contained"
              color="secondary"
              onClick={() =>
                window.open('https://www.instagram.com/tiencot206/', '_blank')
              }>
              <Avatar src={instagram} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              variant="contained"
              color="secondary"
              onClick={() =>
                window.open('https://www.linkedin.com/in/luuvantien/', '_blank')
              }>
              <Avatar src={linkedin} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6" textAlign="center">
            luuvantien2006@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={() => {
            return null;
          }}>
          <Form>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Grid item minWidth="70%">
                <InputLabel sx={{ color: 'white' }}>Name</InputLabel>
                <TextField
                  id="input-with-sx"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Your name"
                />
              </Grid>
              <Grid item minWidth="70%">
                <InputLabel sx={{ color: 'white' }}>Email</InputLabel>
                <TextField
                  id="input-with-sx"
                  placeholder="Your email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item minWidth="70%">
                <InputLabel sx={{ color: 'white' }}>Message</InputLabel>
                <TextField
                  id="input-with-sx"
                  placeholder="Message to me"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={10} md={10}>
                <Button variant="contained" size="md" endIcon={<Send />}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
}

export default ContactBody;
