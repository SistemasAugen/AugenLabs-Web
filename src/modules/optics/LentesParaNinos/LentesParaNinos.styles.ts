import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  light_font: {
    fontWeight: 100,
  },
  title1: {
    fontSize: 56,
  },
  title2: {
    fontSize: 30,
    lineHeight: "40px",
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: "100",
    marginBottom: "20px",
  },
  first_section_left_container: {
    paddingRight: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  first_section_right_container: {
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
  first_section_title_container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  first_section_subtitle_container: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  second_section_left_container: {
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  second_section_right_container: {
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
}));

export default useStyles;
