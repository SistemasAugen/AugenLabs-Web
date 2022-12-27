import type { NextPage } from "next";

import { Layout } from '@components/index';
import Parasol from '@modules/materials/Parasol/Parasol';
import Transforma from '@modules/materials/Parasol/Transforma/Transforma';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';

const Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.parasol_background}>
        <Parasol />
      </div>
      <Container>
        <Transforma />
      </Container>
    </Layout>
  )
}

export default Parasol_Material