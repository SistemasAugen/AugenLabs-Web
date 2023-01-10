import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import { HighIndex156 } from '@modules/materials';
import Material_C from '@modules/materials/MaterialCharacteristics/MaterialCharacteristics';
import caracteristicas_alto_indice from "@images/Caracteristicas_AltoIndice156.png";
import LearnMore from '@modules/materials/LearnMore/LearnMore';

const HighIndex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.high_index156_background}>
        <HighIndex156 />
      </div>
      <Container maxWidth="lg">
        <Transform />
        <Material_C
          src={caracteristicas_alto_indice}
          alt={'caracteristicas del material alto indice'}
        />
        <LearnMore color={"#8E1F5C"} />
      </Container>
    </Layout>
  )
}

export default HighIndex_Parasol_Material;