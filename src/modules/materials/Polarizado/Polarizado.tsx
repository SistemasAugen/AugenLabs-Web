import React, { memo } from 'react';
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from 'next/router';
import Image from "next/image";

import TRANSLATIONS from "@constants/locales";
import useStyles from './Polarizado.styles';
import useGlobalStyles from "@styles/globals";
import polarized_glass from "@images/Polarizado_Vidrio.png";
import polarized_logo from "@images/Polarizado_Logo.png";

const Polarizado = () => {
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
                src={polarized_logo}
                alt="polarized logo home"
              />
            </div>
            <Image
              data-aos="fade-in"
              src={polarized_glass}
              alt="polarized background home"
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

Polarizado.propTypes = {}

export default Polarizado;