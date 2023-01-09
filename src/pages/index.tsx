import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import { Layout } from "@components";
import {
  AboutAugen,
  AugenLabs,
  LabsNationalNetwork,
} from "@modules/home";
import useStyles from "./index.styles";
import mainHeroImage from "@images/Raiz_Primera.jpg";
import homeLab from "@images/Home_Lab.jpg";

// Aos : library to animate with scroll on viewpoint
import "aos/dist/aos.css"
import ScrollAnimations from "aos";
import { useEffect } from "react";

// toast
import { ToastContainer } from "react-toastify";

const Home: NextPage = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;

  useEffect(() => {
    ScrollAnimations.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className={classes.hero_container}>
        <Image
          src={mainHeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          alt={TRANSLATIONS[locale]["home.hero.image_alt"]}
        />
      </div>
      {/* <ToastContainer /> */}
      <AboutAugen />
      <div className={classes.hero_container_2}>
        <Image
          src={homeLab}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          alt={TRANSLATIONS[locale]["home.hero.image_alt"]}
        />
      </div>
      <AugenLabs />
      {/* <Container maxWidth="lg" className={classes.content}>
        <LabsNationalNetwork />
      </Container> */}
    </Layout >
  );
};

export default Home;
