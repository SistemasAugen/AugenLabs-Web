import type { NextPage } from "next";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import { Layout, SocialBanner } from "@components";
import { ISocialLink } from "@components/SocialBanner/SocialBanner";
import { TenYears, DesignsAndNeeds, Locations } from "@modules/labs";
import useStyles from "./index.styles";
import heroLabsImage from "@images/Labs_1.png";

const Labs: NextPage = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;
  const socialLinks: ISocialLink[] = (() => {
    const links = [];
    if (process.env.NEXT_PUBLIC_AUGENLABS_FACEBOOK_PAGE) {
      links.push({
        type: "facebook",
        href: process.env.NEXT_PUBLIC_AUGENLABS_FACEBOOK_PAGE as string,
      });
    }
    if (process.env.NEXT_PUBLIC_AUGENLABS_INSTAGRAM_PAGE) {
      links.push({
        type: "instagram",
        href: process.env.NEXT_PUBLIC_AUGENLABS_INSTAGRAM_PAGE as string,
      });
    }
    if (process.env.NEXT_PUBLIC_AUGENLABS_LINKEDIN_PAGE) {
      links.push({
        type: "linkedin",
        href: process.env.NEXT_PUBLIC_AUGENLABS_LINKEDIN_PAGE as string,
      });
    }
    return links;
  })();

  return (
    <Layout headerTitle={TRANSLATIONS[locale]["labs.title"]}>
      <Box className={classes.hero_container}>
        <Image
          src={heroLabsImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={TRANSLATIONS[locale]["labs.hero_image_alt"]}
          className={classes.first_hero_image}
        />
      </Box>

      <Container maxWidth="lg">
        <TenYears />
        <DesignsAndNeeds />
        <Locations />
        <SocialBanner
          socialLinks={socialLinks}
          themeColor="orange"
          websiteUrl={
            process.env.NEXT_PUBLIC_OPTICAL_LABORATORIES_PAGE as string
          }
          website=""
        />
      </Container>
    </Layout>
  );
};

export default Labs;
