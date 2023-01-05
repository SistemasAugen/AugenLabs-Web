import React, { memo } from 'react';
import Image from "next/image";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./OurMaterials.styles";
import useGlobalStyles from "@styles/globals";

import materials_home from "@images/Home_Materiales.jpg";

const Materiales = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container>
        <Grid item md={6} className={[classes.first_section_left_container, classes.center].join(" ")}>
          <Box className={classes.first_section_title_container}>
            <Typography
              variant="h1"
              component="h2"
              className={classes.light_font}
              data-aos="fade-left"
            >
              {TRANSLATIONS[locale]["home.materials.title"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={globalClasses.paragraph}>
              {TRANSLATIONS[locale]["home.materials.paragraph1"]}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Image
            objectFit="cover"
            objectPosition="center"
            data-aos="fade-in"
            src={materials_home}
            alt="augen's process glass finished"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Materiales;
