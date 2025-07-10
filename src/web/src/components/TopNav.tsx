import React from 'react';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import config from '../config/movearound.json';
import ThemeModeToggler from './ThemeModeToggler';

interface Props {
  colorInvert?: boolean;
}
const TopNav = ({ colorInvert = false }: Props): React.ReactElement => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

export default TopNav;
