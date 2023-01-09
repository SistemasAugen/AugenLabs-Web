import React, { memo } from 'react';
import { Typography, Grid, Box, AlertTitle } from "@mui/material";
import { useRouter } from 'next/router';
import Image from "next/image";

import TRANSLATIONS from "@constants/locales";
import useStyles from './MaterialCharacteristics.styles';

const Material_C = ({ src, alt }: { src: any, alt: any }) => {
  const classes = useStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container className={classes.content}>
        <Grid item md={6} sm={6} className={[classes.first_section_left_container].join(" ")}>
          <Box className={classes.first_section_title_container}>
            <Typography
              variant="h1"
              component="h1"
              className={classes.light_font}
              data-aos="fade-left"
            >
              {TRANSLATIONS[locale]["materials.characteristics"]}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} className={classes.first_section_right_container}>
          <Image
            data-aos="fade-in"
            src={src}
            alt={alt}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Material_C;