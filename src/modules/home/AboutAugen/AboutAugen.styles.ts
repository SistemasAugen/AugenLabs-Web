import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  image_container: {
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
      paddingRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  light_font: {
    fontWeight: 100,
  },
  subtitle_font: {
    fontSize: 22,
  },
  first_section_title_container: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(17),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  first_section_left_container: {
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  first_section_right_container: {
    paddingLeft: theme.spacing(16),
    marginBottom: -7,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
}));

export default useStyles;
