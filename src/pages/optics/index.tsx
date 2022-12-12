import type { NextPage } from "next";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import { Layout, SocialBanner } from "@components";
import { ISocialLink } from "@components/SocialBanner/SocialBanner";
import { LentesOftalmicas, LentesParaNinos } from "@modules/optics";
import useStyles from "./index.styles";
import mainHeroImage from "@images/Opticos_1.png";
import opticosImage from "@images/Opticos_2.png";

const AugenOpticos: NextPage = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;
  const socialLinks: ISocialLink[] = (() => {
    const links = [];
    if (process.env.NEXT_PUBLIC_AUGENOPTICOS_FACEBOOK_PAGE) {
      links.push({
        type: "facebook",
        href: process.env.NEXT_PUBLIC_AUGENOPTICOS_FACEBOOK_PAGE as string,
      });
    }
    if (process.env.NEXT_PUBLIC_AUGENOPTICOS_INSTAGRAM_PAGE) {
      links.push({
        type: "instagram",
        href: process.env.NEXT_PUBLIC_AUGENOPTICOS_INSTAGRAM_PAGE as string,
      });
    }
    if (process.env.NEXT_PUBLIC_AUGENOPTICOS_LINKEDIN_PAGE) {
      links.push({
        type: "linkedin",
        href: process.env.NEXT_PUBLIC_AUGENOPTICOS_LINKEDIN_PAGE as string,
      });
    }
    return links;
  })();

  return (
    <Layout headerTitle={TRANSLATIONS[locale]["optics.title"]}>
      <Box className={classes.hero_container}>
        <Image
          src={mainHeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={TRANSLATIONS[locale]["optics.hero1_image_alt"]}
          className={classes.first_hero_image}
        />
      </Box>

      <Box className={classes.hero_2nd_container}>
        <Image
          src={opticosImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={TRANSLATIONS[locale]["optics.hero2_image_alt"]}
        />
      </Box>

      <Container maxWidth="lg">
        <LentesOftalmicas />
        <LentesParaNinos />
        <SocialBanner
          socialLinks={socialLinks}
          themeColor="red"
          websiteUrl={
            process.env.NEXT_PUBLIC_OPTICAL_MANUFACTURING_PAGE as string
          }
          website=""
        />
      </Container>
    </Layout>
  );
};

export default AugenOpticos;
