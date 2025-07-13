import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import TopNav from 'components/TopNav';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): React.ReactElement => {
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
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="MoveAround.co"
        width={{ xs: 350, md: 500 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/logo-light.png' // Your 600x200 light mode logo
              : '/logo-dark.png' // Your 600x200 dark mode logo
          }
          alt="MoveAround.co Logo"
          sx={{
            height: '100px',
            width: '550px',
          }}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Listings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Communities'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>

        <Box marginLeft={4}>
          <NavItem
            title={'Buyers'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Sellers'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4} sx={{ whiteSpace: 'nowrap' }}>
          <NavItem
            title={'More Info'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={6}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="/signin-cover"
            size="large"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' }, paddingLeft: 4 }}
        alignItems={'right'}
      >
        <TopNav colorInvert={colorInvert} />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
