import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Hidden,
  Box,
  Button,
  Dialog,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

import ContactForm from '../ContactForm/ContactForm';

import TRANSLATIONS from "@constants/locales";
import logoImage from "@images/Logo_Menu_Raiz.svg";
import contactImage from "@images/Icono_Contacto_Negro.png";
import mexicanFlagImage from "@images/Mexico_Flag.png";
import ukFlagImage from "@images/UK_Flag.png";
import ptFlagImage from "@images/Brazil_Flag.png";
import useStyles from "./Header.styles";
import MenuButton from "./MenuButton";

interface IProps {
  small?: boolean;
  title?: string;
}
const Header = (props: IProps) => {
  const { small, title } = props;
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const { locale, route }: any = useRouter();
  const [openMenuDialog, setOpenMenuDialog] = useState(false);
  // menu dropdown
  const [openMenu, setOpenMenu] = useState(false);
  const open = Boolean(openMenu);
  const menu = [
    {
      name: TRANSLATIONS[locale]["header.link.materials"],
      menuItems: [
        {
          name: TRANSLATIONS[locale]["header.link.materials_list"],
          onClick: () => { },
          href: "/materials",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.parasol"],
          onClick: () => { },
          href: "/materials/parasol",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.trivex"],
          onClick: () => { },
          href: "/materials/trivex",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.trivex_bblock"],
          onClick: () => { },
          href: "/materials/bblock",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.trivex_parasol"],
          onClick: () => { },
          href: "/materials/trivex-parasol",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.trivex_160"],
          onClick: () => { },
          href: "/materials/trivex160",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.polarized"],
          onClick: () => { },
          href: "/materials/polarized",
        },
        {
          name: TRANSLATIONS[locale]["header.link.materials.high_index"],
          onClick: () => { },
          href: "/materials/high-index156",
        },
      ]
    }
  ];

  const menuDialogLinks = [
    {
      text: TRANSLATIONS[locale]["header.link.optics_lab"],
      href: "/labs",
    },
    {
      text: TRANSLATIONS[locale]["header.link.machinery_equipment"],
      href: "/tec",
    },
    {
      text: TRANSLATIONS[locale]["header.link.innovation_development"],
      href: "/id",
    },
    {
      text: TRANSLATIONS[locale]["header.link.line_production"],
      href: "/lineadeproduccion"
    },
    {
      text: TRANSLATIONS[locale]["header.link.augen_tec_video"],
      href: "/augentec/videolabone"
    },
  ];

  const handleOpenMenuDialog = () => {
    setOpenMenuDialog(true);
  };

  const handleCloseMenuDialog = () => {
    setOpenMenuDialog(false);
  };

  return (
    <Box component="header" className={classes.root}>
      <Box
        sx={{
          boxShadow: 1,
        }}
      >
        <Container
          maxWidth="xl"
          className={[
            classes.header_container,
            small && classes.header_container_small,
          ].join(" ")}
        >
          <Link href="/">
            <a className={classes.logo}>
              <Image
                src={logoImage}
                alt={TRANSLATIONS[locale]["header.logo_alt"]}
                className="logo"
                width={156}
                height={34}
              />
            </a>
          </Link>
          <Hidden mdUp>
            <Button
              variant="text"
              className={classes.menu_button}
              onClick={handleOpenMenuDialog}
            >
              <MenuIcon fontSize="large" />
            </Button>
            <Dialog
              fullScreen
              open={openMenuDialog}
              onClose={handleCloseMenuDialog}
            >
              <Box display="flex" justifyContent="flex-end" paddingTop={2}>
                <Button
                  variant="text"
                  className={classes.menu_button}
                  onClick={handleCloseMenuDialog}
                >
                  <CloseIcon fontSize="large" />
                </Button>
              </Box>
              <Box>
                <ul className={classes.menu_list}>
                  <Box component="li" marginBottom={4}>
                    <Typography
                      variant="h1"
                      className={classes.menu_main_label}
                    >
                      {TRANSLATIONS[locale]["header.menu-dialog.menu"]}
                    </Typography>
                  </Box>
                  {menuDialogLinks.map((menuLink, menuLinkIndex) => (
                    <li
                      key={`menuLink-${menuLinkIndex}`}
                      className={classes.menu_link_container}
                    >
                      <Link href={menuLink.href}>
                        <a className={classes.menu_link}>{menuLink.text}</a>
                      </Link>
                    </li>
                  ))}
                  <Box component="li" marginTop={2}>
                    <Link href="/">
                      <a className={classes.menu_contact_link}>
                        <Image
                          src={contactImage}
                          height={20}
                          width={30}
                          alt="email icon"
                        />
                        {TRANSLATIONS[locale]["general.contact"]}
                      </a>
                    </Link>
                  </Box>
                  <Box
                    className={classes.language_section}
                    component="li"
                    marginTop={2}
                  >
                    <Link href={route} locale="es">
                      <a
                        className={classes.language_link}
                        onClick={handleCloseMenuDialog}
                      >
                        <Image
                          src={mexicanFlagImage}
                          width={21}
                          height={12}
                          alt="mexico flag image"
                        />
                      </a>
                    </Link>
                  </Box>
                  <Box
                    className={classes.language_section}
                    component="li"
                    marginTop={1}
                  >
                    <Link href={route} locale="en">
                      <a
                        className={classes.language_link}
                        onClick={handleCloseMenuDialog}
                      >
                        <Image
                          src={ukFlagImage}
                          width={21}
                          height={12}
                          alt="uk flag image"
                        />
                      </a>
                    </Link>
                  </Box>
                  <Box
                    className={classes.language_section}
                    component="li"
                    marginTop={1}
                  >
                    <Link href={route} locale="pt">
                      <a
                        className={classes.language_link}
                        onClick={handleCloseMenuDialog}
                      >
                        <Image
                          src={ptFlagImage}
                          width={21}
                          height={12}
                          alt="brazil flag image"
                        />
                        <span>
                        </span>
                      </a>
                    </Link>
                  </Box>
                </ul>
              </Box>
            </Dialog>
          </Hidden>
          <Hidden mdDown>
            <div className={classes.links_section}>
              {menu.map((item, index) =>
                <MenuButton key={index} menu={item} />
              )}
              <Link href="/labs">
                <a className={[classes.link, classes.labs].join(" ")}>
                  {TRANSLATIONS[locale]["header.link.optics_lab"]}
                </a>
              </Link>
              <Link href="/tec">
                <a className={[classes.link, classes.tec].join(" ")}>
                  {TRANSLATIONS[locale]["header.link.machinery_equipment"]}
                </a>
              </Link>
              <Link href="/id">
                <a className={[classes.link, classes.id].join(" ")}>
                  {TRANSLATIONS[locale]["header.link.innovation_development"]}
                </a>
              </Link>
              <Button onClick={() => setIsOpen(true)}>
                <a className={[classes.link, classes.contact_link].join(" ")}>
                  {TRANSLATIONS[locale]["general.contact"]}
                </a>
              </Button>
              {isOpen && <ContactForm setIsOpen={setIsOpen} />}
              <div className={classes.language_container}>
                <div className={classes.language_section}>
                  <Link href={route} locale="es">
                    <a className={classes.language_link}>
                      <Image
                        src={mexicanFlagImage}
                        width={21}
                        height={12}
                        alt="mexico flag image"
                      />
                    </a>
                  </Link>
                </div>
                <div className={classes.language_section}>
                  <Link href={route} locale="en">
                    <a className={classes.language_link}>
                      <Image
                        src={ukFlagImage}
                        width={21}
                        height={12}
                        alt="uk flag image"
                      />
                    </a>
                  </Link>
                </div>
                <div className={classes.language_section}>
                  <Link href={route} locale="pt">
                    <a className={classes.language_link}>
                      <Image
                        src={ptFlagImage}
                        width={21}
                        height={12}
                        alt="brazil flag image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Hidden>
        </Container>
      </Box>
      {title && (
        <Box
          sx={{
            boxShadow: small ? 4 : 2,
          }}
        >
          <Container>
            <Typography
              className={[classes.title, small && classes.title_small].join(
                " "
              )}
            >
              {title}
            </Typography>
          </Container>
        </Box>
      )}
    </Box>
  );
};

Header.defaultProps = {
  small: false,
};

export default memo(Header);
