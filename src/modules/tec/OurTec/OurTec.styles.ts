import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  divider: {
    borderColor: "#007960",
    borderWidth: 1,
  },
  title1: {
    fontSize: 32,
    fontWeight: 100,
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: "100",
    marginBottom: "20px",
  },
  title_container: {
    minHeight: "90px",
  },
  column_image_container: {
    maxHeight: 240,
    display: "flex",
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
