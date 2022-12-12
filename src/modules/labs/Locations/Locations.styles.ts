import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title1: {
    fontSize: 42,
    fontWeight: 100,
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: "100",
    marginBottom: "20px",
  },
  first_section_left_container: {},
  first_section_right_container: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
  second_section_left_container: {
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  second_section_right_container: {},
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  list_item: {
    fontSize: 24,
    textTransform: "capitalize",
    marginRight: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
