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
  control_with_software_container: {
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  automation_container: {
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  divider: {
    borderColor: "#7c3b7e",
    borderWidth: 1,
  },
  learn_more_button: {
    backgroundColor: "#7c3b7e",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#642f66",
    },
  },
  section_index: {
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      paddingRight: 0,
    },
  },
  button_link: {
    textDecoration: "none",
  },
}));

export default useStyles;
