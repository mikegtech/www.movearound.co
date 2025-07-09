import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import config from '../config/movearound.json'
import ThemeModeToggler from './ThemeModeToggler';

interface Props {
  colorInvert?: boolean;
}
const TopNav = ({ colorInvert = false }: Props): React.ReactElement => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/alerts"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {config.phone}
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            bgcolor={'primary.main'}
            marginLeft={1}
          >
            <Typography
              variant={'caption'}
              sx={{ color: 'common.white', lineHeight: 1 }}
            >
              Get Alerts!
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/blocks"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Ask us how!
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="https://thefront.maccarianagency.com/docs/introduction"
          target={'blank'}
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
        </Link>
      <Box>
        <ThemeModeToggler />
      </Box>
      </Box>
    </Box>
  );
};

export default TopNav;
