import { memo } from "react";
import Link from "next/link";
import { Grid, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import useStyles from "./SocialBanner.styles";

interface ISocialLink {
  href: string;
  type: string;
}

type TThemeColor = "red" | "orange" | "green" | "purple" | "black";

interface IProps {
  website: string;
  websiteUrl: string;
  socialLinks: ISocialLink[];
  themeColor: TThemeColor;
}

const SocialBanner = (props: IProps) => {
  const { socialLinks, website, websiteUrl, themeColor } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        md={4}
        display="flex"
        alignItems="center"
        className={classes.divider_container}
      >
        <Divider
          className={[classes.divider, classes[`divider_${themeColor}`]].join(
            " "
          )}
        />
      </Grid>
      <Grid container item md={8} justifyContent="flex-end" alignItems="center">
        {socialLinks.map((link, linkIndex) => (
          <Grid item key={`socialLink-${linkIndex}`}>
            {link.type === "facebook" && (
              <Link href={link.href}>
                <a className={classes.social_container}>
                  <FacebookIcon
                    fontSize="large"
                    className={classes[`icon_${themeColor}`]}
                  />
                </a>
              </Link>
            )}
            {link.type === "instagram" && (
              <Link href={link.href}>
                <a className={classes.social_container}>
                  <InstagramIcon
                    fontSize="large"
                    className={classes[`icon_${themeColor}`]}
                  />
                </a>
              </Link>
            )}
            {link.type === "linkedin" && (
              <Link href={link.href}>
                <a className={classes.social_container}>
                  <LinkedInIcon
                    fontSize="large"
                    className={classes[`icon_${themeColor}`]}
                  />
                </a>
              </Link>
            )}
          </Grid>
        ))}
        <Grid item className={classes.social_container}>
          <Link href={websiteUrl}>
            <a className={classes.website} target="_blank">
              {website}
            </a>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(SocialBanner);

export type { ISocialLink };
