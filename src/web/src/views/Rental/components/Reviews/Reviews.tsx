import React from 'react';
import Slider from 'react-slick';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  {
    feedback:
      "MoveAround made our home-buying experience seamless. Our agent truly understood our family's needs and found us the perfect home quickly. Highly recommended!",
    name: 'Clara Bertoletti',
    title: 'First-Time Homebuyer',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    feedback:
      "Selling our home was stress-free thanks to MoveAround. Their market knowledge and negotiation skills got us an excellent deal. We couldn't be happier!",
    name: 'Mark Peterson',
    title: 'Happy Seller',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    feedback:
      'We relocated from out-of-state, and MoveAround helped us find not just a house but a neighborhood we love. Fantastic service and genuinely caring people!',
    name: 'Chris Lee',
    title: 'Relocation Client',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
];

const Reviews = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: !isMd,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isMd,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position={'relative'} zIndex={2}>
        <Box marginBottom={4}>
          <Box display={'flex'} justifyContent={'center'}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box key={item} color={theme.palette.secondary.main}>
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </Box>
            ))}
          </Box>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Rated 5 out of 5 stars by our clients!
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            Homebuyers and sellers across Dallas-Fort Worth love MoveAround.
            <br />
            Here's what they're saying:
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& .slick-slide img': {
              objectFit: 'cover',
            },
            '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div':
              {
                height: { xs: 'auto', md: 1 },
              },
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              bottom: 0,
              top: '100%',
              left: '100%',
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              '&:before': {
                fontSize: 32,
                color: 'primary.main',
              },
            },
            '& .slick-prev': {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 0,
                    background: 'transparent',
                  }}
                >
                  <CardMedia
                    image={item.avatar}
                    sx={{
                      height: 300,
                      width: '100%',
                      maxWidth: 400,
                      borderRadius: 2,
                      margin: { xs: '0 auto', md: 'none' },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: { sx: 0, md: 2 },
                    }}
                  >
                    <Box>
                      <Typography
                        color="text.primary"
                        variant={'h6'}
                        sx={{
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        {item.feedback}
                      </Typography>
                      <ListItem
                        component="div"
                        disableGutters
                        sx={{ padding: 0, marginTop: 2 }}
                      >
                        <ListItemText
                          sx={{ margin: 0 }}
                          primary={item.name}
                          secondary={item.title}
                          primaryTypographyProps={{
                            variant: 'h6',
                            fontWeight: 'bold',
                            sx: { textAlign: { xs: 'center', md: 'left' } },
                          }}
                          secondaryTypographyProps={{
                            variant: 'subtitle1',
                            sx: { textAlign: { xs: 'center', md: 'left' } },
                          }}
                        />
                      </ListItem>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
