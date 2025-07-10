import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

const mock = [
  {
    title: 'Personalized Home Search',
    subtitle:
      'Find homes tailored precisely to your needs and preferences. Your ideal property is closer than you think.',
  },
  {
    title: 'Expert Guidance',
    subtitle:
      'Enjoy professional support and insightful market knowledge from start to finish. Our real estate experts ensure your experience is seamless.',
  },
  {
    title: 'Stress-Free Transactions',
    subtitle:
      'From exploring listings to closing deals, we simplify every step. Spend less time worrying, and more time enjoying your new home.',
  },
];

const Articles = (): JSX.Element => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={4}
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

export default Articles;
