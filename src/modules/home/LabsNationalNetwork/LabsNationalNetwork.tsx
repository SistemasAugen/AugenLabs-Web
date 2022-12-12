import { memo } from "react";
import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";
import useStyles from "./LabsNationalNetwork.styles"

import TRANSLATIONS from "@constants/locales";
import useGlobalStyles from "@styles/globals";

const LabsNationalNetwork = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;
  const locationFirstSection = [
    "bolivar",
    "ensenada",
    "león",
    "morelia",
    "querétaro",
    "torreón",
    "chapultepec",
    "guadalajara",
    "mazatlán",
  ];
  const locationSecondSection = [
    "monterrey",
    "san luis potosí",
    "veracruz",
    "chihuahua",
    "hermosillo",
    "mexicali",
    "puebla",
    "tijuana",
    "saltillo",
  ];

  return (
    <>
      <Grid container marginTop={6} marginBottom={4}>
        <Grid item md={6} className={classes.first_section_left_container}>
          <Box className={classes.first_section_title_container}>
            <Typography
              variant="h1"
              className={classes.light_font}
            >
              {TRANSLATIONS[locale]["home.labs-national-network.title"]}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          className={classes.second_section_left_container}
        >
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["home.labs-national-network.subtitle"]}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <ul className={classes.list}>
          {locationFirstSection.map((location, locationIndex) => (
            <li
              key={`locationFirstSection-${locationIndex}`}
              className={classes.list_item}
            >
              {location}
            </li>
          ))}
        </ul>
        <ul className={classes.list}>
          {locationSecondSection.map((location, locationIndex) => (
            <li
              key={`locationSecondSection-${locationIndex}`}
              className={classes.list_item}
            >
              {location}
            </li>
          ))}
        </ul>
      </Grid>
      {/* <div className={classes.verticalLine} /> */}
    </>
  );
};

export default memo(LabsNationalNetwork);