import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontWeight: 100,
    fontSize: 14,
  },
  logoItemContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  logoContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightLabel: {
    fontSize: 8,
  },
}));

export default useStyles;
