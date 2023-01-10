import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import Polarized from "@modules/materials/Polarized/Polarized";
import Material_C from '@modules/materials/MaterialCharacteristics/MaterialCharacteristics';
import caracteristicas_polarizado from "@images/Caracteristicas_Polarizado.png";
import LearnMore from '@modules/materials/LearnMore/LearnMore';

const Trivex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.trivex_parasol_background}>
        <Polarized />
      </div>
      <Container maxWidth="lg">
        <Transform />
        <Material_C
          src={caracteristicas_polarizado}
          alt={'caracteristicas del material polarizado'}
        />
        <LearnMore color={"#474C39"} />
      </Container>
    </Layout>
  )
}

export default Trivex_Parasol_Material;