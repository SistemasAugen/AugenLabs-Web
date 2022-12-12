import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  light_font: {
    fontWeight: 100,
  },
  bold_font: {
    fontWeight: 900,
  },
  small_font: {
    fontSize: 10,
  },
  secondary_font: {
    color: "#afafaf",
  },
  subtitle: {
    fontSize: 26,
    fontWeight: 100,
    marginTop: 20,
  },
  manufacturing_container: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  divider: {
    borderColor: "#d30f3c",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#d30f3c",
    borderRadius: 0,
    textDecoration: "none!important" as "none",
    "&:hover": {
      backgroundColor: "#b40c32",
    },
  },
  section_index: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      paddingRight: 0,
    },
  },
  button_link: {
    textDecoration: "none!importxant" as "none"
  },
}));

export default useStyles;
