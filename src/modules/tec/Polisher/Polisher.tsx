import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Polisher.styles";
import polisherImage from "@images/Tec_Pulidora.png";
import polisherCollageImage from "@images/Tec_4_Pulidoras.png";
import useGlobalStyles from "@styles/globals";

const Polisher = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Box marginBottom={4}>
            <Typography variant="h1" className={classes.title1}>
              {TRANSLATIONS[locale]["tec.section3.title"]}
            </Typography>
          </Box>
          <Grid container item>
            <Grid item xs={12} md={6}>
              <Image
                src={polisherImage}
                objectFit="contain"
                objectPosition="center"
                alt={TRANSLATIONS[locale]["tec.section3.image1_alt"]}
              />
            </Grid>
          </Grid>
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["tec.section3.paragraph1"]}
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.first_section_right_container}>
          <Image
            src={polisherCollageImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["tec.section3.image3_alt"]}
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

export default memo(Polisher);
