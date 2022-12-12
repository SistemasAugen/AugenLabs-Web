import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Intelligence.styles";
import ourTeamImage from "@images/Raiz_ID_EquipoHumano.png";
import useGlobalStyles from "@styles/globals";

const Intelligence = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container marginTop={8} marginBottom={4} justifyContent="center">
        <Grid item md={5} className={classes.first_section_left_container}>
          <Typography variant="h2" className={globalClasses.page_section_title}>
            {TRANSLATIONS[locale]["innovation-development.section1.title"]}
          </Typography>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["innovation-development.section1.paragraph1"]}
          </Typography>
        </Grid>
        <Grid item md={7} className={classes.first_section_right_container}>
          <Image
            src={ourTeamImage}
            objectFit="cover"
            objectPosition="center"
            alt={
              TRANSLATIONS[locale]["innovation-development.section1.image_alt"]
            }
          />
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

export default memo(Intelligence);
