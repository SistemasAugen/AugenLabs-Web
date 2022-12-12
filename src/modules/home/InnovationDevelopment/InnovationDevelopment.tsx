import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Grid, Divider, Box, Button, Hidden } from "@mui/material";
import { useRouter } from "next/router";

import useGlobalStyles from "@styles/globals";
import TRANSLATIONS from "@constants/locales";
import useStyles from "./InnovationDevelopment.styles";
import towerImage from "@images/ID_2.png";
import developmentImage from "@images/Raiz_ID_Desarrollos.png";
import tower2Image from "@images/ID_pieza.jpg";

const InnovationDevelopment = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container marginTop={8} marginBottom={4}>
        <Grid item xl={12} md={12}>
          <Typography
            variant="h1"
            component="h2"
            className={globalClasses.page_title}
            data-aos="fade-left"
          >
            {TRANSLATIONS[locale]["home.innovation-development.title"]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h2"
            component="h3"
            className={[
              globalClasses.page_section_subtitle,
              globalClasses.secondary_font,
            ].join(" ")}
          >
            {TRANSLATIONS[locale]["home.innovation-development.subtitle"]}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={4}>
          <Image
            data-aos="fade-in"
            src={towerImage}
            alt={
              TRANSLATIONS[locale][
                "home.innovation-development.section1.image_alt"
              ]
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.control_with_software_container}
        >
          <Typography variant="h2" className={globalClasses.page_section_title}>
            {TRANSLATIONS[locale]["home.innovation-development.section1.title"]}
          </Typography>
          <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
            {
              TRANSLATIONS[locale][
                "home.innovation-development.section1.paragraph1"
              ]
            }
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className={classes.section_index}>
          <Typography
            variant="h3"
            component="h4"
            className={globalClasses.home_index_label}
          >
            {TRANSLATIONS[locale]["home.innovation-development.section-index1"]}
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
            {TRANSLATIONS[locale]["home.innovation-development.section-index2"]}
          </Typography>
        </Grid>
      </Grid>

      <Hidden lgDown>
        <Grid container marginTop={6} marginBottom={8}>
          <Grid item md={5} />
          <Grid item xs={12} md={7}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      </Hidden>

      <Grid container>
        <Grid item xs={12} md={5}>
          <Image
            data-aos="fade-in"
            src={tower2Image}
            alt={
              TRANSLATIONS[locale][
                "home.innovation-development.section2.image_alt"
              ]
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={classes.control_with_software_container}
        >
          <Typography variant="h2" className={globalClasses.page_section_title}>
            {
              TRANSLATIONS[locale][
                "home.innovation-development.section2.title1"
              ]
            }
          </Typography>
          <Typography data-aos="fade-in" paragraph className={globalClasses.paragraph}>
            {
              TRANSLATIONS[locale][
                "home.innovation-development.section2.paragraph1"
              ]
            }
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} className={classes.section_index}>
          <Typography
            variant="h3"
            component="h4"
            className={[
              globalClasses.home_index_label,
              globalClasses.secondary_font,
            ].join(" ")}
          >
            {TRANSLATIONS[locale]["home.innovation-development.section-index1"]}
          </Typography>
          <Box marginTop={2} marginBottom={2}>
            <Typography
              variant="h3"
              component="h4"
              className={[globalClasses.home_index_label].join(" ")}
            >
              {
                TRANSLATIONS[locale][
                  "home.innovation-development.section-index2"
                ]
              }
            </Typography>
          </Box>
          <Box marginTop={2} marginBottom={2}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Link href="/id">
            <a className={classes.button_link}>
              <Button variant="contained" className={classes.learn_more_button}>
                {TRANSLATIONS[locale]["general.learn_more"]}
              </Button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(InnovationDevelopment);
