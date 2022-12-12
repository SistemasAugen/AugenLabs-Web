import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  divider_container: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  divider: {
    borderWidth: 1,
    width: "100%",
  },
  divider_red: {
    borderColor: "#d30f3c",
  },
  divider_orange: {
    borderColor: "#ff5100",
  },
  divider_green: {
    borderColor: "#007960",
  },
  divider_purple: {
    borderColor: "#7c3b7e",
  },
  divider_black: {
    borderColor: "rgb(18, 18, 18)",
  },
  icon_red: {
    color: "#d30f3c",
  },
  icon_orange: {
    color: "#ff5100",
  },
  icon_green: {
    color: "#007960",
  },
  icon_purple: {
    color: "#7c3b7e",
  },
  icon_black: {
    color: "rgb(18, 18, 18)",
  },
  website: {
    fontSize: "28px",
    fontWeight: "100",
    textDecoration: "none",
    color: "black",
  },
  social_container: {
    paddingLeft: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

export default useStyles;
