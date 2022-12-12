import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  divider: {
    borderColor: "#007960",
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
  first_section_left_container: {
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  first_section_right_container: {
    // paddingLeft: theme.spacing(6),
    // [theme.breakpoints.down("md")]: {
    //   paddingLeft: 0,
    // },
  },
}));

export default useStyles;
