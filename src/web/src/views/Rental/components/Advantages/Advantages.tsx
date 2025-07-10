import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

const mock = [
  {
    title: 'Local Insights',
    subtitle:
      'Get detailed knowledge about neighborhoods and communities, empowering your next move.',
  },
  {
    title: 'Home Valuations',
    subtitle:
      "Discover your home's current market value and receive expert recommendations.",
  },
  {
    title: 'Personalized Listings',
    subtitle:
      'Find homes tailored precisely to your lifestyle, preferences, and budget.',
  },
  {
    title: 'Dedicated Support',
    subtitle:
      'Enjoy professional guidance and assistance every step of the home buying or selling journey.',
  },
];

const Advantages = (): JSX.Element => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={3}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <ListItemText
              primary={item.title}
              secondary={item.subtitle}
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{ variant: 'subtitle1' }}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                },
                margin: 0,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box marginTop={1}>
              <Button
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                Learn more
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advantages;
