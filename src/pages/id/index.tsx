import type { NextPage } from "next";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import { Layout } from "@components";
import { Intelligence, OpticsFuture } from "@modules/innovationdevelopment";
import useStyles from "./index.styles";
import heroImage from "@images/ID_Grande_1.jpg";

const InnovationAndDevelopment: NextPage = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;

  return (
    <Layout headerTitle={TRANSLATIONS[locale]["innovation-development.title"]}>
      <Box className={classes.hero_container}>
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={TRANSLATIONS[locale]["innovation-development.hero_image_alt"]}
          className={classes.hero_image}
        />
      </Box>

      <Container maxWidth="lg">
        <Intelligence />
        <OpticsFuture />
      </Container>
    </Layout>
  );
};

export default InnovationAndDevelopment;
