import React from 'react';
import { Layout } from '@components/index';
import { Container } from '@mui/material';

import Trivex from '@modules/materials/Trivex/Trivex';
import Rewriting from '@modules/materials/Trivex/Rewriting/Rewriting';

import useStyles from './index.styles';
import { NextPage } from 'next';

import caracteristicas_trivex from "@images/Caracteristicas_Trivex.png";
import Material_C from '@modules/materials/MaterialCharacteristics/MaterialCharacteristics';

const Trivex_Material: NextPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.trivex_background}>
        <Trivex />
      </div>
      <Container>
        <Rewriting />
      </Container>
      <Container maxWidth="lg">
        <Material_C
          src={caracteristicas_trivex}
          alt={'caracteristicas del material trivex'}
        />
      </Container>
    </Layout>
  );
};


export default Trivex_Material