import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import config from '/src/config/movearound.json';

const ContactCard = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          How can you contact us about this notice?
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          If you have any questions or concerns about the privacy policy please
          contact us.
        </Typography>
        <Typography variant={'subtitle2'}>
          {config.privacy_email}
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
