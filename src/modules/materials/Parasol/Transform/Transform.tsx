import { Typography, Grid, Box, Container } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Transform.styles";

const Transforma = () => {
  const classes = useStyles({});
  const locale = useRouter().locale!;

  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.center}>
          <Typography
            variant="h1"
            component="h1"
            data-aos="fade-left"
          >
            {TRANSLATIONS[locale]["materials.parasol.section2.title"]}
          </Typography>
        </Box>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={4}>
            <Box className={[classes.first_section_title_container, classes.section].join(" ")}>
              <Typography
                variant="h3"
                component="h1"
                className={classes.light_font}
                data-aos="fade-left"
              >
                {TRANSLATIONS[locale]["materials.parasol.section2.subtitle1"]}
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography marginTop={4} data-aos="fade-in" paragraph>
                {TRANSLATIONS[locale]["materials.parasol.section2.paragraph1"]}
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
                {TRANSLATIONS[locale]["materials.parasol.section2.subtitle2"]}
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography marginTop={4} data-aos="fade-in" paragraph>
                {TRANSLATIONS[locale]["materials.parasol.section2.paragraph2"]}
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
                {TRANSLATIONS[locale]["materials.parasol.section2.subtitle3"]}
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography marginTop={4} data-aos="fade-in" paragraph>
                {TRANSLATIONS[locale]["materials.parasol.section2.paragraph3"]}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Transforma;
