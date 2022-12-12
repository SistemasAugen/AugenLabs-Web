import type { NextPage } from "next";
import Image from "next/image";
import { Container, Box, Link, Button } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import { Layout, SocialBanner } from "@components";
import { ISocialLink } from "@components/SocialBanner/SocialBanner";
import { TenYears, Generator, Polisher, Laser, OurTec } from "@modules/tec";
import useStyles from "./index.styles";
import useStylesLabOne from '../../modules/home/AugenOpticos/AugenOpticos.styles';
import heroImage from "@images/Tec_1.png";

const Labs: NextPage = () => {
  const classes = useStyles();
  const classesLabOneButton = useStylesLabOne();

  const locale = useRouter().locale!;
  const socialLinks: ISocialLink[] = (() => {
    const links = [];
    if (process.env.NEXT_PUBLIC_AUGENTEC_FACEBOOK_PAGE) {
      links.push({
        type: "facebook",
        href: process.env.NEXT_PUBLIC_AUGENTEC_FACEBOOK_PAGE as string,
      });
    }
    if (process.env.NEXT_PUBLIC_AUGENTEC_INSTAGRAM_PAGE) {
      links.push({
        type: "instagram",
        href: process.env.NEXT_PUBLIC_AUGENTEC_INSTAGRAM_PAGE as string,
      });
    }
    if (process.env.NEXT_PUBLIC_AUGENTEC_LINKEDIN_PAGE) {
      links.push({
        type: "linkedin",
        href: process.env.NEXT_PUBLIC_AUGENTEC_LINKEDIN_PAGE as string,
      });
    }
    return links;
  })();

  return (
    <Layout headerTitle={TRANSLATIONS[locale]["tec.title"]}>
      <Box className={classes.hero_container}>
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={TRANSLATIONS[locale]["tec.hero_image_alt"]}
          className={classes.first_hero_image}
        />
      </Box>

      <Container maxWidth="lg">
        <TenYears />
        <Generator />
        <Polisher />
        <Laser />
        <OurTec />
        <Link href="tec/labone">
          <a className={classesLabOneButton.button_link}>
            <Button variant="contained" className={classesLabOneButton.button}>
              {TRANSLATIONS[locale]["tec.labone"]}
            </Button>
          </a>
        </Link>
        <SocialBanner
          socialLinks={socialLinks}
          themeColor="green"
          websiteUrl={
            process.env.NEXT_PUBLIC_MACHINERY_EQUIPMENT_PAGE as string
          }
          website=""
        />
      </Container>
    </Layout>
  );
};

export default Labs;
