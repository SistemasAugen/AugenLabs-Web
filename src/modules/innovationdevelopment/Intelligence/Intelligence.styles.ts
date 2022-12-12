import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  divider: {
    borderColor: "#7c3b7e",
    borderWidth: 1,
  },
  first_section_left_container: {
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      paddingTop: 0,
    },
  },
  first_section_right_container: {
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
}));

export default useStyles;
