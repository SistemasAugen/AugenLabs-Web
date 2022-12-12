import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./LentesParaNinos.styles";
import opticosMachineImage from "@images/Opticos_4.png";
import kidImage from "@images/Opticos_5.png";
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
              {TRANSLATIONS[locale]["optics.section3.title"]}
            </Typography>
          </Box>
          <Box className={classes.first_section_subtitle_container}>
            <Typography
              variant="subtitle1"
              className={[classes.light_font, classes.title2].join(" ")}
            >
              {TRANSLATIONS[locale]["optics.section3.subtitle"]}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Image
            src={opticosMachineImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["optics.section3.image_alt"]}
          />
        </Grid>
      </Grid>

      <Grid container marginBottom={4}>
        <Grid item md={6} className={classes.second_section_left_container}>
          <Image
            src={kidImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["optics.section4.image_alt"]}
          />
        </Grid>
        <Grid item md={6} className={classes.second_section_right_container}>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section4.paragraph1"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["optics.section4.paragraph2"]}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LentesOftalmicas;
