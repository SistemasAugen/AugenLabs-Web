import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  page_title: {
    fontSize: 48,
    fontWeight: 100,
  },
  page_section_title: {
    fontSize: 28,
    fontWeight: 100,
    lineHeight: "28px",
  },
  page_section_subtitle: {
    fontSize: 26,
    fontWeight: 100,
  },
  paragraph: {
    fontSize: 19,
  },
  home_index_label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  secondary_font: {
    color: "#8a8a8a",
  },
}));

export default useStyles;
