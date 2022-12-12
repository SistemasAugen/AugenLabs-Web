import { memo } from "react";
import Image from "next/image";
import { Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./DesignsAndNeeds.styles";
import labsLensImage from "@images/Labs_5.png";
import useGlobalStyles from "@styles/globals";

const DesignsAndNeeds = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const locale = useRouter().locale!;
  const designsMaterials = [
    {
      title: TRANSLATIONS[locale]["labs.section3.list1.title"],
      items: [
        TRANSLATIONS[locale]["labs.section3.list1.item1"],
        TRANSLATIONS[locale]["labs.section3.list1.item2"],
        TRANSLATIONS[locale]["labs.section3.list1.item3"],
        TRANSLATIONS[locale]["labs.section3.list1.item4"],
        TRANSLATIONS[locale]["labs.section3.list1.item5"],
      ],
    },
    {
      title: TRANSLATIONS[locale]["labs.section3.list2.title"],
      items: [
        TRANSLATIONS[locale]["labs.section3.list2.item1"],
        TRANSLATIONS[locale]["labs.section3.list2.item2"],
        TRANSLATIONS[locale]["labs.section3.list2.item3"],
        TRANSLATIONS[locale]["labs.section3.list2.item4"],
        TRANSLATIONS[locale]["labs.section3.list2.item5"],
        TRANSLATIONS[locale]["labs.section3.list2.item6"],
      ],
    },
    {
      title: TRANSLATIONS[locale]["labs.section3.list3.title"],
      items: [
        TRANSLATIONS[locale]["labs.section3.list3.item1"],
        TRANSLATIONS[locale]["labs.section3.list3.item2"],
        TRANSLATIONS[locale]["labs.section3.list3.item3"],
      ],
    },
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
            {TRANSLATIONS[locale]["labs.section3.title"]}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          className={classes.first_section_right_container}
        >
          <Typography paragraph className={globalClasses.paragraph}>
            {TRANSLATIONS[locale]["labs.section3.paragraph1"]}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          className={classes.second_section_left_container}
        >
          <Image
            src={labsLensImage}
            objectFit="cover"
            objectPosition="center"
            alt={TRANSLATIONS[locale]["labs.section3.image_alt"]}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          className={classes.second_section_right_container}
        >
          {designsMaterials.map((list, listIndex) => (
            <ul key={`designsMaterials-${listIndex}`} className={classes.list}>
              <li className={classes.list_title}>{list.title}</li>
              {list.items.map((item, itemIndex) => (
                <li
                  key={`designsMaterialItem-${itemIndex}`}
                  className={classes.list_item}
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default memo(DesignsAndNeeds);
