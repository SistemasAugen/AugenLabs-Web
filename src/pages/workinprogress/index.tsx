import { Box } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./index.styles";

const WorkInProgress = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;

  return (
    <Box className={classes.root}>
      <span className={classes.augen_opticos_label}>
        {TRANSLATIONS[locale]["workinprogress.company_name"]}
      </span>
      <span className={classes.work_in_progress_label}>
        {TRANSLATIONS[locale]["workinprogress.work_in_progress"]}
      </span>
    </Box>
  );
};

export default WorkInProgress;
