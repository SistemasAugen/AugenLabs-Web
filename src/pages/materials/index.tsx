import type { NextPage } from "next";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import { Layout, SocialBanner } from "@components";
import { ISocialLink } from "@components/SocialBanner/SocialBanner";
import { Materiales, NuestrosMateriales } from "@modules/materials";
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
    <Layout>
      <Container maxWidth="lg">
        <NuestrosMateriales />
        <Materiales />
        {/* <SocialBanner
          socialLinks={socialLinks}
          themeColor="red"
          websiteUrl={
            process.env.NEXT_PUBLIC_OPTICAL_MANUFACTURING_PAGE as string
          }
          website=""
        /> */}
      </Container>
    </Layout>
  );
};

export default AugenOpticos;
