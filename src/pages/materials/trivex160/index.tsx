import type { NextPage } from "next";

import { Layout } from '@components/index';
import NewTecnology from '@modules/materials/Bblock/NewTecnology/NewTecnology';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';
import Trivex160 from "@modules/materials/Trivex160/Trivex160";
import Material_C from "@modules/materials/MaterialCharacteristics/MaterialCharacteristics";
import caracteristicas_trivex_160 from "@images/Caracteristicas_Trivex_160.png";

const Trivex160_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.trivex160_background}>
        <Trivex160 />
      </div>
      <Container>
        <NewTecnology />
      </Container>
      <Container maxWidth="lg">
        <Material_C
          src={caracteristicas_trivex_160}
          alt={'caracteristicas del material trivex 160'}
        />
      </Container>
    </Layout>
  )
}

export default Trivex160_Material;