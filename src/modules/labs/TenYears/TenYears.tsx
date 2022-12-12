import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box, Divider, Hidden } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./TenYears.styles";
import labsCollage1Image from "@images/Labs_2.png";
import labsCollage2Image from "@images/Labs_3.png";
import labsLensImage from "@images/Labs_4.png";
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
            {TRANSLATIONS[locale]["labs.section1.title"]}
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Image
            src={labsCollage1Image}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["labs.section1.image_alt"]}
          />
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["labs.section1.paragraph1"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["labs.section1.paragraph2"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["labs.section1.paragraph3"]}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box marginTop={2} marginBottom={2}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} className={classes.second_section_left_container}>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["labs.section2.paragraph1"]}
          </Typography>
          <Typography
            variant="h1"
            className={[
              classes.title1,
              classes.second_section_left_container_title,
            ].join(" ")}
          >
            {TRANSLATIONS[locale]["labs.section2.title"]}
          </Typography>
          <Hidden lgDown>
            <Image
              src={labsLensImage}
              objectFit="cover"
              objectPosition="center"
              alt={TRANSLATIONS[locale]["labs.section2.image1_alt"]}
            />
          </Hidden>
        </Grid>
        <Grid item md={6} className={classes.second_section_right_container}>
          <Image
            src={labsCollage2Image}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["labs.section2.image2_alt"]}
          />
          <Box marginTop={8}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(TenYears);
