import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  divider: {
    borderColor: "#d30f3c",
    borderWidth: 1,
  },
  light_font: {
    fontWeight: 100,
  },
  title1: {
    fontSize: 56,
  },
  title2: {
    fontSize: 38,
    lineHeight: "40px",
  },
  title3: {
    fontSize: "24px",
    fontWeight: "100",
    marginTop: "10px",
    marginBottom: "16px",
  },
  paragraph: {
    paddingLeft: "7vh",
    paddingRight: "7vh",
    fontSize: "18px",
    fontWeight: "100",
    marginBottom: "20px",
  },
  first_section_left_container: {
    paddingRight: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  first_section_title_container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  first_section_subtitle_container: {
    marginTop: theme.spacing(18),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  second_section_left_container: {
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  second_section_right_container: {
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
  box: {
    borderRadius: "1px",
    boxShadow: "1px 0px 0px 0px rgba(0,0,0,0.2)",
  },
  underlineButtom: {
    display: "grid",
    textAlign: "center",
    fontSize: "18px",
    '&:before': {
      backgroundColor: "black"
    }

  },
  link: {
    display: "inline-block",
    textTransform: "uppercase",
    textAlign: "center",
    color: "black",
    fontSize: 15,
    padding: "0px 14px",
    cursor: "pointer",
    position: "relative",
    textDecoration: "none",
    // animation
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-3px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: 'black',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
    },
  },
  centered: {
    textAlign: "center"
  },
}));

export default useStyles;
