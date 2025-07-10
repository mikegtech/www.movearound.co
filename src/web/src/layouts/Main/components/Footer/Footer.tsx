import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = (): React.ReactElement => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="MoveAround.co"
            width={100}
          >
            <Box
              component={'img'}
              src="/logo-light.png"
              sx={{
                height: '100px',
                width: '550px',
              }}
              alt="MoveAround.co Logo"
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="/sign-in"
                size="small"
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; M3Gatewood Consulting, Inc. 2025, All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
          sx={{ mt: 1 }}
        >
          <a
            href="/sitemap"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              marginRight: 16,
            }}
          >
            Sitemap
          </a>
          <a
            href="/company-terms"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
