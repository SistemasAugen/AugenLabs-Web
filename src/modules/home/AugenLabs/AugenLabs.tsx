import { memo } from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./AugenLabs.styles";

const AugenLabs = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={[classes.container, classes.first_component].join(" ")}>
          <Grid item xs={12} sm={4}>
            <Box className={[classes.first_section_title_container, classes.section].join(" ")}>
              <Typography
                variant="h3"
                component="h1"
                className={classes.light_font}
                data-aos="fade-left"
              >
                {TRANSLATIONS[locale]["home.about-augen.subtitle1"]}
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography marginTop={4} data-aos="fade-in" paragraph>
                {TRANSLATIONS[locale]["home.about-augen.paragraph4"]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className={[classes.first_section_title_container, classes.section].join(" ")}>
              <Typography
                variant="h3"
                component="h1"
                className={classes.light_font}
                data-aos="fade-left"
              >
                {TRANSLATIONS[locale]["home.about-augen.subtitle2"]}
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography marginTop={4} data-aos="fade-in" paragraph>
                {TRANSLATIONS[locale]["home.about-augen.paragraph5"]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className={[classes.first_section_title_container, classes.section].join(" ")}>
              <Typography
                variant="h3"
                component="h1"
                className={classes.light_font}
                data-aos="fade-left"
              >
                {TRANSLATIONS[locale]["home.about-augen.subtitle3"]}
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography marginTop={4} data-aos="fade-in" paragraph>
                {TRANSLATIONS[locale]["home.about-augen.paragraph6"]}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default memo(AugenLabs);
