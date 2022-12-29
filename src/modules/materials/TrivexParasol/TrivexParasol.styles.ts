import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  first_section_left_container: {
    paddingLeft: theme.spacing(10),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 3,
    },
  },
  first_section_right_container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 3,
    },
  },
  first_section_title_container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 3,
    },
  },
  light_font: {
    fontWeight: 100,
  },
  font_color: {
    color: "white",
  },
  image_container: {
    width: "62vh",
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 3,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 3,
    },
  },
  image_logo: {
    width: "50%",
    height: "50%",
  },
}));

export default useStyles;
