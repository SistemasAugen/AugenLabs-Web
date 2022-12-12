import { memo } from "react";
import Image from "next/image";
import { Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";

import useGlobalStyles from "@styles/globals";
import TRANSLATIONS from "@constants/locales";
import useStyles from "./Innovation.styles";
import collage1Image from "@images/Collage_Raiz_1.png";

const Innovation = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <Grid container>
      <Grid item md={6} paddingRight={6}>
        <Typography
          variant="h2"
          component="h2"
          className={globalClasses.page_section_title}
        >
          {TRANSLATIONS[locale]["home.innovation.title"]}
        </Typography>
        <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["home.innovation.paragraph1"]}
        </Typography>
        <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["home.innovation.paragraph2"]}
        </Typography>
        <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["home.innovation.paragraph3"]}
        </Typography>
        <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["home.innovation.paragraph4"]}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Image
          data-aos="fade-in"
          src={collage1Image}
          alt={TRANSLATIONS[locale]["home.innovation.image_alt"]}
        />
      </Grid>
    </Grid>
  );
};

export default memo(Innovation);
