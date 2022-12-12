import { grey } from "@mui/material/colors";
import { flexbox } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  primaryColor: {
    color: "black"
  },
  secondaryColor: {
    color: grey[700]
  },
  padding: {
    padding: 0
  },
  mainHeader: {
    padding: 20,
    alignItems: "center"
  },
  mainContent: {
    padding: 40
  },
  primaryContainer: {
    display: flexbox,
    textAlign: "center",
    justifyContent: "center"
  },
  secondaryContainer: {
    padding: "20px 25px",
    backgroundColor: grey[200]
  },
  button: {
    display: flexbox,
    justifyContent: "right"
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20
  },
  icon_right: {
    width: "100%",
    display: "grid",
    grodAutoFlow: "column",
    justifyContent: "end",
  },
  containerButton: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
}));

export default useStyles;
