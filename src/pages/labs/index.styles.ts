import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  hero_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    height: 600,
    [theme.breakpoints.down("md")]: {
      height: 350,
      objectFit: "left",
    },
  },
  first_hero_image: {
    zIndex: -1,
  },
  hero_text_container: {
    padding: "18px 54px",
    backgroundColor: "#00000085",
    border: "#ff5100 solid 4px",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    backdropFilter: "blur(14px)",
    borderRadius: "2px",
    [theme.breakpoints.down("md")]: {
      padding: "18px",
    },
  },
  hero_text: {
    fontSize: "88px",
    fontWeight: "100",
    color: "#ffffff",
    [theme.breakpoints.down("md")]: {
      fontSize: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
}));

export default useStyles;
