import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./OurTec.styles";
import blockSystemImage from "@images/Tec_Bloqueadora.png";
import lmsImage from "@images/Tec_LMS.png";
import transferChute from "@images/Tec_Canaleta.png";
import useGlobalStyles from "@styles/globals";

const OurTec = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <Grid container spacing={8} marginBottom={6}>
      <Grid item md={4}>
        <Box className={classes.title_container}>
          <Typography variant="h1" className={classes.title1}>
            {TRANSLATIONS[locale]["tec.section5-1.title"]}
          </Typography>
        </Box>
        <Box className={classes.column_image_container}>
          <Image
            src={blockSystemImage}
            objectFit="contain"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section5-1.image_alt"]}
          />
        </Box>
        <Typography paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["tec.section5-1.paragraph"]}
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Box className={classes.title_container}>
          <Typography variant="h1" className={classes.title1}>
            {TRANSLATIONS[locale]["tec.section5-2.title"]}
          </Typography>
        </Box>
        <Box className={classes.column_image_container}>
          <Image
            src={lmsImage}
            objectFit="contain"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section5-2.image_alt"]}
          />
        </Box>
        <Typography paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["tec.section5-2.paragraph"]}
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Box className={classes.title_container}>
          <Typography variant="h1" className={classes.title1}>
            {TRANSLATIONS[locale]["tec.section5-3.title"]}
          </Typography>
        </Box>
        <Box className={classes.column_image_container}>
          <Image
            src={transferChute}
            objectFit="contain"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section5-3.image_alt"]}
          />
        </Box>
        <Typography paragraph className={globalClasses.paragraph}>
          {TRANSLATIONS[locale]["tec.section5-3.paragraph"]}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default memo(OurTec);
