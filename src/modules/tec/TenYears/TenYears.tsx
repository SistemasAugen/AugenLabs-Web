import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./TenYears.styles";
import labImage from "@images/Tec_2.png";
import useGlobalStyles from "@styles/globals";

const TenYears = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container marginTop={8} marginBottom={4}>
        <Grid item xs={12} className={classes.first_section_top_container}>
          <Typography variant="h1" className={classes.title1}>
            {TRANSLATIONS[locale]["tec.section1.title"]}
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Image
            src={labImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section1.image_alt"]}
          />
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["tec.section1.paragraph1"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["tec.section1.paragraph2"]}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end">
        <Grid item xs={12} md={6}>
          <Box marginTop={2} marginBottom={8}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(TenYears);
