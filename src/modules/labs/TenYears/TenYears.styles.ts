import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  divider: {
    borderColor: "#ff5100",
    borderWidth: 1,
  },
  title1: {
    fontSize: 32,
    fontWeight: 100,
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: "100",
    marginBottom: "20px",
  },
  first_section_top_container: {
    marginBottom: theme.spacing(6),
  },
  first_section_left_container: {
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  first_section_right_container: {
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
  second_section_left_container: {
    paddingRight: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      marginBottom: theme.spacing(2),
      flexDirection: "column-reverse",
    },
  },
  second_section_left_container_title: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  second_section_right_container: {
    [theme.breakpoints.down("md")]: {},
  },
}));

export default useStyles;
