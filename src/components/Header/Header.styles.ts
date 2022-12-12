import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    zIndex: 1,
    background: "white",
  },
  logo: {
    cursor: "pointer",
  },
  header_container_small: {
    height: "62px !important",
  },
  header_container: {
    height: 86,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    transition: "height .4s ease",
  },
  links_section: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  link: {
    display: "inline-block",
    textTransform: "uppercase",
    textAlign: "center",
    color: "black",
    fontSize: 12,
    padding: "0px 14px",
    cursor: "pointer",
    position: "relative", 
    textDecoration: "none",
    // animation
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-3px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: 'red',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
    },
  },
  optics: {
    '&:before': {
      backgroundColor: "red"
    }
  },
  labs: {
    '&:before': {
      backgroundColor: "orange"
    }
  },
  tec: {
    '&:before': {
      backgroundColor: "green"
    }
  },
  id: {
    '&:before': {
      backgroundColor: "purple"
    }
  },
  language_link: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    alignItems: "center",
    margin: "5px",
  },
  contact_link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '&:before': {
      backgroundColor: "black"
    }
  },
  language_container: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 6px",
    height: "100%",
    justifyContent: "center",
  },
  language_section: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  language: {
    fontSize: "12px",
    paddingLeft: "4px",
  },
  menu_button: {
    color: "#161616",
  },
  menu_list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  menu_main_label: {
    fontWeight: "normal",
    fontSize: 48,
  },
  menu_link_container: {
    padding: "10px 0px",
  },
  menu_link: {
    textTransform: "uppercase",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
    fontSize: 20,
  },
  menu_contact_link: {
    textTransform: "uppercase",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
    padding: "0px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: 100,
    transition: "font-size .4s ease",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title_small: {
    fontSize: 28,
  },
}));

export default useStyles;
