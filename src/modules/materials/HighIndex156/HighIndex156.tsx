import React, { memo } from 'react';
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from 'next/router';
import Image from "next/image";

import TRANSLATIONS from "@constants/locales";
import useStyles from './HighIndex156.styles';
import useGlobalStyles from "@styles/globals";
import highIndex156_glass from "@images/AltoIndice156_Vidrio.png";
import highIndex156_logo from "@images/AltoIndice156_Logo.png";

const AltoIndice156 = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container>
        <Grid item md={6} xs={12} sm={6} className={[classes.first_section_left_container].join(" ")}>
          <Box className={classes.image_container}>
            <div className={classes.image_logo}>
              <Image
                data-aos="fade-in"
                src={highIndex156_logo}
                alt="high index 156 logo home"
              />
            </div>
            <Image
              data-aos="fade-in"
              src={highIndex156_glass}
              alt="high index 156 background home"
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
              {TRANSLATIONS[locale]["materials.trivex.section1.title"]}
            </Typography>
            <Typography style={{ fontWeight: 'bold' }} marginTop={4} data-aos="fade-in" paragraph className={[globalClasses.paragraph, classes.font_color].join(" ")}>
              {TRANSLATIONS[locale]["materials.trivex.section1.paragraph1"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={[globalClasses.paragraph, classes.font_color].join(" ")}>
              {TRANSLATIONS[locale]["materials.trivex.section1.paragraph2"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={[globalClasses.paragraph, classes.font_color].join(" ")}>
              {TRANSLATIONS[locale]["materials.trivex.section1.paragraph3"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={[globalClasses.paragraph, classes.font_color].join(" ")}>
              {TRANSLATIONS[locale]["materials.trivex.section1.paragraph4"]}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

AltoIndice156.propTypes = {}

export default AltoIndice156;