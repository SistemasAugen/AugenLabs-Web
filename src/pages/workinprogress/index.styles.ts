import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "column",
  },
  augen_opticos_label: {
    color: "#161616",
    fontSize: "30px",
    fontWeight: "100",
  },
  work_in_progress_label: {
    color: "#161616",
    fontSize: "50px",
    fontWeight: "bolder",
  },
}));

export default useStyles;
