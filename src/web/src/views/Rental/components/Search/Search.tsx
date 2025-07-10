import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Search = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          What's Your Real Estate Goal?
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Discover the best homes tailored to your needs, from luxury listings
          to affordable living spaces.
          <br />
          With MoveAround, finding your dream home in Dallas-Fort Worth is
          simple, quick, and personalized.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Buying a Home
                </Typography>
                <Typography>
                  Over 20,000 active property seekers finding their perfect
                  home.
                </Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button variant="contained" size="large" color={'secondary'}>
                  Find Homes
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Selling a Home
                </Typography>
                <Typography>
                  Over 20,000 homeowners connecting with trusted real estate
                  experts.
                </Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button variant="contained" color="primary" size="large">
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
