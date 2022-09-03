import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import React from 'react';
import fabricrollweb from '../../../assets/img/fabricrollweb.PNG';

function ProductCard() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        transition: 'linear 2s',
      }}>
      <Card
        sx={{
          cursor: 'pointer',
          height: '100%',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '8px 8px 23px -5px rgba(0,0,0,0.67)',
          },
        }}>
        <Box sx={{}}>
          <CardMedia component="img" image={fabricrollweb} />
          <CardContent>
            <Grid container direction="column">
              <Grid item container>
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    color="secondary.light"
                    fontWeight="bold">
                    Personal
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle2"
                    align="right"
                    color="secondary"
                    fontWeight="bold">
                    20-06-2000
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Fabric Roll order management
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default ProductCard;
