/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Teaser = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          <Box>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Your next home awaits. Are you ready to MoveAround?
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Discover a variety of{' '}
              <Typography color="primary" variant="inherit" component="span">
                listings
              </Typography>
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Whether you're buying, selling, or just exploring your options,
              MoveAround connects you with the perfect home effortlessly.
              <br />
              Carefully chosen to match your lifestyle.
              <br />
              We are here to help you find your dream home in Dallas-Fort Worth.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={490} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration5.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
