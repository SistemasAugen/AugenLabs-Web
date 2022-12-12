import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Button, Grid, Typography, Box, Divider } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useRouter } from "next/router";

import ContactForm from '../ContactForm/ContactForm';

import TRANSLATIONS from "@constants/locales";
import logoImage from "@images/Logo_Menu_Blanco.png";
import useStyles from "./Footer.styles";

interface ILink {
  href: string;
  text: string;
}

const Footer = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useRouter().locale!;
  const augenLinks: ILink[] = [
    {
      text: TRANSLATIONS[locale]["header.link.optics_manufacturing"],
      href: process.env.NEXT_PUBLIC_OPTICAL_MANUFACTURING_PAGE as string,
    },
    {
      text: TRANSLATIONS[locale]["header.link.optics_lab"],
      href: process.env.NEXT_PUBLIC_OPTICAL_LABORATORIES_PAGE as string,
    },
    {
      text: TRANSLATIONS[locale]["header.link.machinery_equipment"],
      href: process.env.NEXT_PUBLIC_MACHINERY_EQUIPMENT_PAGE as string,
    },
    {
      text: TRANSLATIONS[locale]["header.link.innovation_development"],
      href: process.env.NEXT_PUBLIC_INNOVATION_AND_DEVELOPMENT_PAGE as string,
    },
  ];
  const socialLinks: ILink[] = [
    {
      text: "Facebook",
      href: process.env.NEXT_PUBLIC_FACEBOOK_PAGE as string,
    },
    {
      text: "Linkedin",
      href: process.env.NEXT_PUBLIC_LINKEDIN_PAGE as string,
    },
  ];

  return (
    <footer className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} className={classes.image_container}>
            <Image
              src={logoImage}
              alt="Logo de Augen Opticos"
              className="logo"
              width={156}
              height={34}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              className={[classes.font_color, classes.bold].join(" ")}
            >
              {TRANSLATIONS[locale]["general.our_company"]}
            </Typography>
            <ul className={classes.link_list}>
              {augenLinks.map((augenLink, augenLinkIndex) => (
                <li key={`augenLink-${augenLinkIndex}`}>
                  <Link href={augenLink.href}>
                    <a className={[classes.font_color, classes.link].join(" ")}>
                      {augenLink.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              className={[classes.font_color, classes.bold].join(" ")}
            >
              {TRANSLATIONS[locale]["general.follow_us"]}
            </Typography>
            <ul className={classes.link_list}>
              {socialLinks.map((socialLink, socialLinkIndex) => (
                <li key={`socialLink-${socialLinkIndex}`}>
                  <Link href={socialLink.href}>
                    <a className={[classes.font_color, classes.link].join(" ")}>
                      {socialLink.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              className={classes.font_color}
              display="flex"
              flexDirection="row"
            >
              <Button onClick={() => setIsOpen(true)}>
                <a className={[classes.font_color, classes.contact].join(" ")}>
                  <Typography>
                    {TRANSLATIONS[locale]["general.contact"]}
                  </Typography>
                </a>
              </Button>
              {isOpen && <ContactForm setIsOpen={setIsOpen} /> }
            </Box>
          </Grid>
        </Grid>

        <Box marginTop={4} marginBottom={1}>
          <Divider className={classes.divider} />
        </Box>
        <Box>
          <Typography
            className={[classes.font_color, classes.copyright].join(" ")}
          >
            © 2022 Augen Opticos
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default memo(Footer);
