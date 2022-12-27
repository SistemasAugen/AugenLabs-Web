import React from 'react';
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from 'next/router';
import Image from "next/image";

import TRANSLATIONS from "@constants/locales";
import useStyles from './Bblock.styles';
import useGlobalStyles from "@styles/globals";
import bblock_glass from "@images/Bblock_Vidrio.png";
import bblock_logo from "@images/Trivex_Bblock_Logo.png";

const Bblock = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <Grid container>
      <Grid item md={6} xs={12} sm={6} className={[classes.first_section_left_container].join(" ")}>
        <Box className={classes.image_container}>
          <div className={classes.image_logo}>
            <Image
              data-aos="fade-in"
              src={bblock_logo}
              alt="bblock logo home"
            />
          </div>
          <Image
            data-aos="fade-in"
            src={bblock_glass}
            alt="bblock background home"
          />
        </Box>
      </Grid>
      <Grid item md={6} xs={12} sm={6} className={classes.first_section_right_container}>
        <Box className={[classes.first_section_title_container, classes.font_color].join(" ")}>
          <Typography
            variant="h1"
            component="h2"
            className={classes.light_font}
            data-aos="fade-left"
          >
            {TRANSLATIONS[locale]["materials.bblock.section1.title"]}
          </Typography>
          <Typography data-aos="fade-in" style={{ fontWeight: 'bold' }} marginTop={4} paragraph className={[globalClasses.paragraph, classes.font_color].join(" ")}>
            {TRANSLATIONS[locale]["materials.bblock.section1.paragraph1"]}
          </Typography>
          <Typography data-aos="fade-in" marginTop={4} paragraph className={[globalClasses.paragraph, classes.font_color].join(" ")}>
            {TRANSLATIONS[locale]["materials.bblock.section1.paragraph2"]}
          </Typography>
        </Box>
      </Grid>
    </Grid >
  );
};

export default Bblock