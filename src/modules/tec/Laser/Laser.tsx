import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Laser.styles";
import laserImage from "@images/Tec_Laser1.png";
import useGlobalStyles from "@styles/globals";

const Laser = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Box marginBottom={4}>
            <Typography variant="h1" className={classes.title1}>
              {TRANSLATIONS[locale]["tec.section4.title"]}
            </Typography>
          </Box>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["tec.section4.paragraph1"]}
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Image
            src={laserImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section4.image1_alt"]}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={4}>
          <Box marginTop={2} marginBottom={8}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(Laser);
