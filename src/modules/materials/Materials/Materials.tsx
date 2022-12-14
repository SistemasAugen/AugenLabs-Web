import React, { memo } from 'react';
import Image from "next/image";
import { Typography, Grid, Link } from "@mui/material";
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";
import useStyles from "./Materials.styles";
import parasol from "@images/M_Parasol.png";
import trivex from "@images/M_Trivex.png";
import trivex_bblock from "@images/M_BBlock.png";
import trivex_parasol from "@images/M_Trivex_Parasol.png";
import trivex_160 from "@images/M_Trivex_160.png";
import polarizado from "@images/M_Polarizado.png";
import alto_indice from "@images/M_Alto_Indice.png";
import cr39 from "@images/M_CR39.png";

import AddIcon from '@mui/icons-material/Add';

const Materials = () => {
  const classes = useStyles();
  const locale = useRouter().locale!;

  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={14} sm={4} marginTop={2} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={parasol}
              alt="imagen parasol materiales"
            />
          </Grid>
          <Typography className={classes.paragraph} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph1"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/parasol">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={2} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={trivex}
              alt="imagen trivex materiales"
            />
          </Grid>
          <Typography className={[classes.paragraph, classes.centered].join(" ")} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph2"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/trivex">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={2} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={trivex_bblock}
              alt="imagen bblock materiales"
            />
          </Grid>
          <Typography className={[classes.paragraph, classes.centered].join(" ")} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph3"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/bblock">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={8} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={trivex_parasol}
              alt="imagen trivex parasol materiales"
            />
          </Grid>
          <Typography className={classes.paragraph} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph4"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/trivex-parasol">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={8} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={trivex_160}
              alt="imagen trivex 160 materiales"
            />
          </Grid>
          <Typography className={[classes.paragraph, classes.centered].join(" ")} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph5"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/trivex160">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={8} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={polarizado}
              alt="imagen polarizado materiales"
            />
          </Grid>
          <Grid>
            <Typography className={[classes.paragraph, classes.centered].join(" ")} marginTop={12} data-os="fade-in" paragraph>
              {TRANSLATIONS[locale]["materials.section2.paragraph6"]}
            </Typography>
            <div className={classes.underlineButtom}>
              <Link href="/materials/polarized">
                <u className={[classes.link, classes.underlineButtom].join(" ")}>
                  {TRANSLATIONS[locale]["materials.buttom"]}
                </u>
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid xs={14} sm={4} marginTop={8} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={alto_indice}
              alt="imagen alto indice materiales"
            />
          </Grid>
          <Typography className={classes.paragraph} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph7"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/high-index156">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={8} marginBottom={4}>
          <Grid display="flex" justifyContent="flex-end">
            <Image
              data-aos="fade-in"
              src={cr39}
              alt="imagen cr39 materiales"
            />
          </Grid>
          <Typography className={[classes.paragraph, classes.centered].join(" ")} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph8"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link href="/materials/cr39">
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
        <Grid xs={14} sm={4} marginTop={16} marginBottom={4}>
          <div className={[classes.centered, classes.highGraduations].join(" ")}>
            <Grid display="flex" justifyContent="center">
              <AddIcon
                style={{ width: 60, height: 60 }}
              >
                +
              </AddIcon>
            </Grid>
            <h3>Altas graduciones</h3>
          </div>
          <Typography className={[classes.paragraph, classes.centered].join(" ")} marginTop={12} data-os="fade-in" paragraph>
            {TRANSLATIONS[locale]["materials.section2.paragraph9"]}
          </Typography>
          <div className={classes.underlineButtom}>
            <Link>
              <u className={[classes.link, classes.underlineButtom].join(" ")}>
                {TRANSLATIONS[locale]["materials.buttom"]}
              </u>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

Materials.propTypes = {};

export default Materials;
