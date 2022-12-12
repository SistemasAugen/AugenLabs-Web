import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./OpticsFuture.styles";
import idImage from "@images/Raiz_ID_Desarrollos.png";
import useGlobalStyles from "@styles/globals";

const OpticsFuture = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <Grid container marginTop={8} marginBottom={4} justifyContent="center">
      <Grid item md={5} className={classes.first_section_left_container}>
        <Typography variant="h2" className={globalClasses.page_section_title}>
          {TRANSLATIONS[locale]["innovation-development.section2.title"]}
        </Typography>
        <Typography paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["innovation-development.section2.paragraph1"]}
        </Typography>
        <Typography paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["innovation-development.section2.paragraph2"]}
        </Typography>
        <Typography paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["innovation-development.section2.paragraph3"]}
        </Typography>
      </Grid>
      <Grid item md={7} className={classes.first_section_right_container}>
        <Image
          src={idImage}
          objectFit="cover"
          objectPosition="center"
          alt={
            TRANSLATIONS[locale]["innovation-development.section2.image_alt"]
          }
        />
      </Grid>
    </Grid>
  );
};

export default memo(OpticsFuture);
