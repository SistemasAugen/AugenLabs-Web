import { memo } from "react";
import { Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Locations.styles";
import useGlobalStyles from "@styles/globals";

const Locations = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;
  const locationFirstSection = [
    "ciudad de mexico",
    "san luis potosí",
    "saltillo",
    "guadalajara",
    "chihuahua",
    "toluca",
    "león",
  ];
  const locationSecondSection = [
    "hermosillo",
    "querétaro",
    "ensenada",
    "mazatlán",
    "veracruz",
    "puebla",
    "monterrey",
    "mexicali",
    "torreón",
    "tijuana",
    "morelia",
  ];

  return (
    <>
      <Grid container marginTop={6} marginBottom={4}>
        <Grid
          item
          xs={12}
          md={4}
          className={classes.first_section_left_container}
        >
          <Typography variant="h1" className={classes.title1}>
            {TRANSLATIONS[locale]["labs.section4.title"]}
          </Typography>
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
            {TRANSLATIONS[locale]["labs.section4.paragraph1"]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
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
      </Grid>
    </>
  );
};

export default memo(Locations);
