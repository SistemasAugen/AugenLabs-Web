import Image from "next/image";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./LentesOftalmicas.styles";
import opticosCollageImage from "@images/Opticos_3_Collage.png";
import useGlobalStyles from "@styles/globals";

const LentesOftalmicas = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container marginTop={8} marginBottom={4}>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Box className={classes.first_section_title_container}>
            <Typography
              variant="h1"
              className={[classes.light_font, classes.title1].join(" ")}
            >
              {TRANSLATIONS[locale]["optics.section1.title"]}
            </Typography>
          </Box>
          <Box className={classes.first_section_subtitle_container}>
            <Typography
              variant="subtitle1"
              className={[classes.light_font, classes.title2].join(" ")}
            >
              {TRANSLATIONS[locale]["optics.section1.subtitle"]}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section1.paragraph1"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section1.paragraph2"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section1.paragraph3"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section1.paragraph4"]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginTop={2} marginBottom={2}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} className={classes.second_section_left_container}>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section2.paragraph1"]}
          </Typography>
          <Typography className={globalClasses.page_section_title}>
            {TRANSLATIONS[locale]["optics.section2.subtitle"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section2.paragraph2"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section2.paragraph3"]}
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.second_section_right_container}>
          <Image
            src={opticosCollageImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["optics.section2.image_alt"]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginTop={2} marginBottom={2}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LentesOftalmicas;
