import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Generator.styles";
import machine1Image from "@images/Tec_Generador1.png";
import tecCollage1Image from "@images/Tec_3_Generador.png";
import useGlobalStyles from "@styles/globals";

const Generator = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Typography variant="h1" className={classes.title1}>
            {TRANSLATIONS[locale]["tec.section2.title"]}
          </Typography>
          <Image
            src={machine1Image}
            objectFit="contain"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section2.image1_alt"]}
          />
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["tec.section2.paragraph1"]}
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Image
            src={tecCollage1Image}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section2.image2_alt"]}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Box marginTop={2} marginBottom={8}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(Generator);
