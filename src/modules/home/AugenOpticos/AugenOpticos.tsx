import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Grid, Divider, Box, Button, Hidden } from "@mui/material";
import { useRouter } from "next/router";

import useGlobalStyles from "@styles/globals";
import TRANSLATIONS from "@constants/locales";
import useStyles from "./AugenOpticos.styles";
import opticosImage from "@images/Raiz_Opticos.png";
import opticosMoldesImage from "@images/Raiz_Opticos_Moldes.png";

const AugenOpticos = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container marginTop={8} marginBottom={4}>
        <Grid item xl={6} md={6}>
          <Typography
            variant="h1"
            component="h2"
            className={globalClasses.page_title}
            data-aos="fade-left"
          >
            {TRANSLATIONS[locale]["home.optics.title"]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={2} className={classes.section_index}>
          <Typography
            variant="h3"
            component="h4"
            className={globalClasses.home_index_label}
          >
            {TRANSLATIONS[locale]["home.optics.section-index1"]}
          </Typography>
          <Box marginTop={2} marginBottom={2}>
            <Divider className={classes.divider} />
          </Box>
          <Typography
            variant="h3"
            component="h4"
            className={[
              globalClasses.home_index_label,
              globalClasses.secondary_font,
            ].join(" ")}
          >
            {TRANSLATIONS[locale]["home.optics.section-index2"]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.manufacturing_container}>
          <Typography variant="h2" className={globalClasses.page_section_title}>
            {TRANSLATIONS[locale]["home.optics.section1-title"]}
          </Typography>
          <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["home.optics.section1-paragraph1"]}
          </Typography>
          <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["home.optics.section1-paragraph2"]}
          </Typography>
          <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["home.optics.section1-paragraph3"]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Image
            data-aos="fade-in"
            src={opticosImage}
            alt={TRANSLATIONS[locale]["home.optics.section1.image_alt"]}
          />
        </Grid>
      </Grid>
      <Hidden lgDown>
        <Grid container marginTop={6} marginBottom={8}>
          <Grid item xs={12} md={5}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      </Hidden>
      <Grid container marginBottom={4}>
        <Grid item marginTop={3} xs={12} md={2} paddingRight={1}>
          <Typography
            variant="h3"
            component="h4"
            className={[
              globalClasses.home_index_label,
              globalClasses.secondary_font,
            ].join(" ")}
          >
            {TRANSLATIONS[locale]["home.optics.section-index1"]}
          </Typography>
          <Box marginTop={2} marginBottom={2}>
            <Typography
              variant="h3"
              component="h4"
              className={globalClasses.home_index_label}
            >
              {TRANSLATIONS[locale]["home.optics.section-index2"]}
            </Typography>
          </Box>
          <Box marginTop={2} marginBottom={2}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className={classes.manufacturing_container}>
          <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["home.optics.section2-paragraph1"]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Image
            data-aos="fade-in"
            src={opticosMoldesImage}
            alt={TRANSLATIONS[locale]["home.optics.section2.image_alt"]}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Link href="/optics">
            <a className={classes.button_link}>
              <Button variant="contained" className={classes.button}>
                {TRANSLATIONS[locale]["general.learn_more"]}
              </Button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(AugenOpticos);
