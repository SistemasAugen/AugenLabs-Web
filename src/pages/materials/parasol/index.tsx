import type { NextPage } from "next";

import { Layout } from '@components/index';
import Parasol from '@modules/materials/Parasol/Parasol';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';
import caracteristicas_parasol from "@images/Caracteristicas_Parasol.png";
import Material_C from "@modules/materials/MaterialCharacteristics/MaterialCharacteristics";
import LearnMore from "@modules/materials/LearnMore/LearnMore";

const Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.parasol_background}>
        <Parasol />
      </div>
      <Container maxWidth="lg">
        <Transform />
        <Material_C
          src={caracteristicas_parasol}
          alt={'caracteristicas del material parasol'}
        />
        <LearnMore color={"#EC6927"} />
      </Container>
    </Layout>
  )
}

export default Parasol_Material