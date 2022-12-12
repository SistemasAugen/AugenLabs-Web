import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  main: {
    paddingTop: 86,
    transition: "padding .4s ease",
  },
  mainSmall: {
    paddingTop: 62,
  },
}));

export default useStyles;
