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
  light_font: {
    fontWeight: 100,
  },
  first_section_title_container: {
    marginTop: theme.spacing(4),
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
  verticalLine: {
    borderLeft: '2px solid black',
    height: '30px',
    padding: '5px'
  },
}));

export default useStyles;