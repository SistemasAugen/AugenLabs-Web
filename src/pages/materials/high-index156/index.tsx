import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import Polarized from "@modules/materials/Polarized/Polarized";
import { HighIndex156 } from '@modules/materials';
import Material_C from '@modules/materials/MaterialCharacteristics/MaterialCharacteristics';
import caracteristicas_alto_indice from "@images/Caracteristicas_AltoIndice156.png";

const HighIndex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.high_index156_background}>
        <HighIndex156 />
      </div>
      <Container>
        <Transform />
      </Container>
      <Container maxWidth="lg">
        <Material_C
          src={caracteristicas_alto_indice}
          alt={'caracteristicas del material alto indice'}
        />
      </Container>
    </Layout>
  )
}

export default HighIndex_Parasol_Material;