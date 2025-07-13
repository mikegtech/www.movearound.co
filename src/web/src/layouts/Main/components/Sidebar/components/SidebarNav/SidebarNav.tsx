import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): React.ReactElement => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="MoveAround.co"
          width={{ xs: 120, md: 140 }}
        >
          <Box
            component={'img'}
            src="/logo-light.png"
            height={1}
            width={1}
            alt="MoveAround.co Logo"
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Listings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Communities'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Buyers'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Sellers'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'More Info'} items={portfolioPages} />
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href="/signin-cover"
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
