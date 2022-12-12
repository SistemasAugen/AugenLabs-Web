import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "rgb(18, 18, 18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  image_container: {
    display: "flex",
    alignItems: "center",
  },
  link_list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  font_color: {
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    textTransform: "uppercase",
    fontSize: "12px",
    textDecoration: "none",
    paddingBottom: "1px",
  },
  divider: {
    borderColor: "white",
  },
  copyright: {
    fontSize: "14px",
  },
  contact: {
    display: "flex",
    textDecoration: "none",
  },
}));

export default useStyles;
