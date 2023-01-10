import React from 'react';
import { Typography, Box, Container, Link } from "@mui/material";
import { useRouter } from 'next/router';

import TRANSLATIONS from "@constants/locales";
import useStyles from './LearnMore.styles';

const LearnMore = ({ color }: { color: any }) => {
  const classes = useStyles({ color });
  const locale = useRouter().locale!;

  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.center}>
          <Link href="/tec">
            <Typography
              variant="h3"
              component="h3"
              data-aos="fade-left"
              sx={{ textDecoration: 'underline', fontWeight: 'bold' }}
              color={color}
            >
              {TRANSLATIONS[locale]["materials.learn"]}
            </Typography>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default LearnMore;