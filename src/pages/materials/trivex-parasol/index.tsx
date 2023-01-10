import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';
import Trivex_Parasol from "@modules/materials/TrivexParasol/TrivexParasol";
import Material_C from "@modules/materials/MaterialCharacteristics/MaterialCharacteristics";
import caracteristicas_trivex_parasol from "@images/Caracteristicas_Trivex_Parasol.png";
import LearnMore from "@modules/materials/LearnMore/LearnMore";

const Trivex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.trivex_parasol_background}>
        <Trivex_Parasol />
      </div>
      <Container maxWidth="lg">
        <Transform />
        <Material_C
          src={caracteristicas_trivex_parasol}
          alt={'caracteristicas del material trivex'}
        />
        <LearnMore color={"#B6B21B"} />
      </Container>
    </Layout>
  )
}

export default Trivex_Parasol_Material;