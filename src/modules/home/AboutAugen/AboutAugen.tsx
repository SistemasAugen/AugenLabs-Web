import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./AboutAugen.styles";
import process_glass from "@images/Lentes_Procesadas.jpg";
import useGlobalStyles from "@styles/globals";

const AboutAugen = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container marginBottom={8} marginTop={4}>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Box className={classes.first_section_title_container}>
            <Typography
              variant="h1"
              component="h2"
              className={classes.light_font}
              data-aos="fade-left"
            >
              {TRANSLATIONS[locale]["home.hero.text"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={globalClasses.paragraph}>
              {TRANSLATIONS[locale]["home.about-augen.paragraph1"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={globalClasses.paragraph}>
              {TRANSLATIONS[locale]["home.about-augen.paragraph2"]}
            </Typography>
            <Typography marginTop={4} data-aos="fade-in" paragraph className={globalClasses.paragraph}>
              {TRANSLATIONS[locale]["home.about-augen.paragraph3"]}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Image
            objectFit="cover"
            objectPosition="center"
            data-aos="fade-in"
            src={process_glass}
            alt="augen's process glass finished"
          />
        </Grid>
      </Grid>
    </>

  );
};

export default memo(AboutAugen);
