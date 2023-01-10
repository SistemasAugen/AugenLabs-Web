import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

interface Props {
  color: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  center: {
    marginTop: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: (props: Props) => props.color,
  },
}));

export default useStyles;
