import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  first_section_title_container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  container: {
    flexGrow: 1,
  },
  section: {
    padding: theme.spacing(2),
    paddingRight: theme.spacing(15),
  },
  light_font: {
    fontWeight: 100,
  },
}));

export default useStyles;
