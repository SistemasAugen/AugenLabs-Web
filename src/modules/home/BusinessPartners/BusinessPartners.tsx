import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./BusinessPartners.styles";
import googleLogo from "@images/google-logo.png";
import shamirLogo from "@images/Grupo-140.png";
import oculusLogo from "@images/oculus.png";
import essilorLogo from "@images/essilor.png";
import enchromaLogo from "@images/EnChroma-Logo.png";
import zeissLogo from "@images/Zeiss_logo.png";
import unitedStatesArmyLogo from "@images/United_States_Army.png";
import facebookLogo from "@images/Facebook-logo.png";

const BusinessPartners = () => {
  const classes = useStyles();
  const logos = [
    {
      image: googleLogo,
      label: "U.S.A",
      alt: `Google's U.S.A logo`,
    },
    {
      image: shamirLogo,
      label: "Israel",
      alt: `Shamir's Israel logo`,
    },
    {
      image: oculusLogo,
      label: "U.S.A",
      alt: `Oculus's U.S.A logo`,
    },
    {
      image: essilorLogo,
      label: "México",
      alt: `Essilor's México logo`,
    },
    {
      image: enchromaLogo,
      label: "U.S.A",
      alt: `Enchroma's U.S.A logo`,
    },
    {
      image: zeissLogo,
      label: "Alemania",
      alt: `Zeiss's Alemania logo`,
    },
    {
      image: unitedStatesArmyLogo,
      label: "U.S.A",
      alt: `United States Army's U.S.A logo`,
    },
    {
      image: facebookLogo,
      label: "U.S.A",
      alt: `Facebook's U.S.A logo`,
    },
  ];
  const locale = useRouter().locale!;

  return (
    <Grid container>
      <Grid item xs={12} marginBottom={0}>
        <Typography variant="h1" component="h2" className={classes.title}>
          {TRANSLATIONS[locale]["home.business-partners.business_partners"]}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={4}
        marginBottom={2}
      >
        {logos.map((logo, logoIndex) => (
          <Grid
            item
            key={`businessPartner-${logoIndex}`}
            className={classes.logoItemContainer}
            xs={4}
            sm={3}
            md={1}
          >
            <Box className={classes.logoContainer}>
              <Image src={logo.image} alt={logo.alt} />
            </Box>
            <Typography>{logo.label}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography className={classes.copyrightLabel}>
          {TRANSLATIONS[locale]["home.business-partners.copyright"]}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default memo(BusinessPartners);
