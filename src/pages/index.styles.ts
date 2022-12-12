import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import "aos/dist/aos.css"
import Aos from "aos";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  hero_container: {
    position: "relative",
    width: "100%",
    height: "90vh",
    backgroundColor: "#1ce3e3",
    [theme.breakpoints.down("lg")]: {
      height: 400,
      objectFit: "top",
    },
  },
  hero_container_2: {
    position: "relative",
    width: "100%",
    height: "38vh",
    backgroundColor: "#1ce3e3",
    [theme.breakpoints.down("lg")]: {
      height: 400,
      objectFit: "top",
    },
  },
  // animation
  "@keyframes effect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-40%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)"
    }
  },
  light_font: {
    fontWeight: 100,
  },
  content: {
    marginBottom: theme.spacing(4),
  },
}));

export default useStyles;
